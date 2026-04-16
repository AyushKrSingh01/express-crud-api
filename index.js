import express from 'express'
import fs from 'fs';
const app = express()
  app.use(express.json());

    function sum(n){
        let ans = 0
        for(let i =1;i<=n;i++){
            ans = ans+i;
        }   
        return ans;   
    }

app.get('/',function(req,res) {
   const n = Number(req.query.n);
   const ans = sum(n);
    res.send("Hii your sum is "+ ans);
})
app.post('/items', (req, res) => {
    let raw = fs.readFileSync('data.json','utf-8');
    let data = JSON.parse(raw);
   let name =  req.body.name;
   if (!name) {
   return res.status(400).json("Name is required");
}

   let id = data.length+1;
   let obj={
    name,
    id
   }
   data.push(obj);
   fs.writeFileSync('data.json',JSON.stringify(data,null,2));
  res.json(obj)
})

app.get('/items',(req,res)=>{
    let raw = fs.readFileSync('data.json','utf-8');
    let data = JSON.parse(raw);
    res.json(data);
})

app.get('/items/:id',(req,res)=>{
    let raw = fs.readFileSync('data.json','utf-8');
    let data = JSON.parse(raw);
   let id =  Number(req.params.id);
   let item = data.find(obj=> obj.id === id);
   if(!item){
    return res.status(404).json({error:"Item not found"});
   }
   res.json(item);

})

app.put('/items/:id',(req,res)=>{
    let raw = fs.readFileSync('data.json','utf-8');
    let data = JSON.parse(raw);  
    let id = Number(req.params.id);
    let item = data.find(obj=>obj.id===id);
    if(!item){
      return   res.status(404).json({error:"Item not found"});
    }
    if(!req.body.name){
        return res.status(400).json({error:'Name is required'})
    }
    item.name = req.body.name;
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.json(item);
})

app.delete('/items/:id',(req,res)=>{
    let raw = fs.readFileSync('data.json','utf-8');
    let data = JSON.parse(raw);
    let id = Number(req.params.id);
    let indx  = data.findIndex(obj => obj.id===id);
    if(indx === -1){
        return res.status(404).json({error:"Item not found"});
    }
    data.splice(indx,1);
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.json({message:"Item deleted"});

})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})