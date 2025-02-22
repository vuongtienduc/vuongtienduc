# Express.js + TypeScript + MongoDB CRUD API

## 📌 Project Description

This is a simple **CRUD API** built with **Express.js, TypeScript, and MongoDB**. It provides endpoints to **Create, Read, Update, and Delete** resources.

---

## 🚀 Features

- **CRUD Operations** (Create, Read, Update, Delete)
- **MongoDB Integration** (via Mongoose)
- **TypeScript Support**
- **Environment Variables Support (.env)**
- **CORS Enabled**

---

## 📂 Folder Structure

```
/my-api
│── /src
│   ├── /config
│   │   ├── db.ts
│   ├── /models
│   │   ├── resource.model.ts
│   ├── /routes
│   │   ├── resource.routes.ts
│   ├── /controllers
│   │   ├── resource.controller.ts
│   ├── index.ts
│── .env
│── package.json
│── tsconfig.json
│── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

### 2️⃣ Install TypeScript & Dependencies

1. Run the following command to initialize a TypeScript project
```sh
npm init -y
```

2. Install TypeScript and ts-node
```sh
npm install --save-dev typescript ts-node @types/node
```

3. Install Express and its TypeScript definitions
```sh
npm install express mongoose dotenv cors
npm install --save-dev @types/express @types/mongoose @types/cors
```

4. Initialize a TypeScript configuration file
```sh
npx tsc --init
```

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory and add your **MongoDB connection string**:

```env
PORT=5000
MONGO_URI=mongodb+srv://vuongtienduc:vuongtienduc@cluster0.ty2ib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### 4️⃣ Run the Server

```sh
npm run dev  # For development (nodemon)
```

```sh
npm start    # For production
```

---

## 🔥 API Endpoints

### ✅ Create a Resource (POST)

- **URL:** `POST /api/resources`
- **Body:**

```json
{
  "name": "Sample Resource",
  "description": "This is a test resource"
}
```

### ✅ Get All Resources (GET)

- **URL:** `GET /api/resources`

### ✅ Get a Resource by ID (GET)

- **URL:** `GET /api/resources/:id`

### ✅ Update a Resource (PUT)

- **URL:** `PUT /api/resources/:id`
- **Body:**

```json
{
  "name": "Updated Resource",
  "description": "Updated description"
}
```

### ✅ Delete a Resource (DELETE)

- **URL:** `DELETE /api/resources/:id`

---

