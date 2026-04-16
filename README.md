# 🚀 Express CRUD API

A simple backend server built using Express.js that performs CRUD operations using a JSON file.

---

## 📌 Features

* REST API (GET, POST, PUT, DELETE)
* File-based storage (data.json)
* Input validation

---

## 🛠️ Tech Stack

* Node.js
* Express.js

---

## ⚙️ Installation

```bash
git clone https://github.com/YOUR_USERNAME/express-crud-api.git
cd express-crud-api
npm install
```

---

## ▶️ Run

```bash
npm start
```

Server runs on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### GET Sum

```
GET /?n=5
```

### Get All Items

```
GET /items
```

### Get Item

```
GET /items/:id
```

### Create Item

```
POST /items
```

Body:

```json
{
  "name": "Item name"
}
```

### Update Item

```
PUT /items/:id
```

### Delete Item

```
DELETE /items/:id
```

---

## 📁 Structure

```
index.js
data.json
package.json
```

---

## 👨‍💻 Author

Ayush
