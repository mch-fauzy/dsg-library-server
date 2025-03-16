# DSG Library Server

A book management API server built with **Hono.js**, **Drizzle ORM**, and **Supabase PostgreSQL**.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Run the Server](#run-the-server)
  - [Run with Local Database (Optional)](#run-with-local-database-optional)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Query Parameters](#query-parameters)
  - [Example Request Body](#example-request-body)

---

## Technologies Used
- **Node.js** - Version `20.11.1`
- **Hono.js** - Version `4.7.4`
- **Drizzle ORM** - Version `0.40.0`
- **Supabase PostgreSQL** - [https://supabase.com/](https://supabase.com/)

---

## Getting Started

### Installation

First, install dependencies:

```bash
npm install
```

### Run the Server

```bash
npm run dev
```

The server will start at:

- **Local**: [http://localhost:3000](http://localhost:3000)
- **Online**: [https://dsg-library-server.vercel.app](https://dsg-library-server.vercel.app)

### Run with Local Database (Optional)

If you want to run the database locally, update your `.env` file with your database credentials:

```env
DATABASE_URL=your_database_connection_string
```

Then, install dependencies and initialize the database:

```bash
npm install
npm run generate
npm run migrate
npm run seed
```

Finally, start the server:

```bash
npm run dev
```

---

## Usage

### API Endpoints

| Method | Endpoint                   | Description                      |
|--------|----------------------------|----------------------------------|
| GET    | `/v1/books`                | Get a list of books             |
| POST   | `/v1/books`                | Create a new book               |
| PATCH  | `/v1/books/:id`            | Update a book by ID             |
| DELETE | `/v1/books/:id`            | Delete a book by ID             |

**Example Requests:**
```http
GET    http://localhost:3000/v1/books
GET    https://dsg-library-server.vercel.app/v1/books

POST   http://localhost:3000/v1/books
PATCH  http://localhost:3000/v1/books/4
DELETE http://localhost:3000/v1/books/4
```

---

### Query Parameters

For the `GET /v1/books` endpoint, you can use optional query parameters to filter and paginate results.

| Parameter  | Type   | Description                                  | Default |
|------------|--------|----------------------------------------------|---------|
| `page`     | number | Page number for pagination                  | `1`     |
| `page_size`| number | Number of items per page                    | `10`    |
| `sort`     | string | Field to sort by                            | `"name"`|
| `order`    | string | Sort order (`asc` or `desc`)                | `"asc"` |
| `query`    | string | Search books by name/title (case-insensitive) | `""`    |

**Example:**
```http
GET http://localhost:3000/v1/books?page=2&page_size=5&sort=year&order=desc&query=library
```
This request:
- Fetches **page 2** of results
- Returns **5 books per page**
- Sorts by **year** in **descending order**
- Searches for books with **"library"** in their name/title

---

### Example Request Body

For **POST** and **PATCH** requests:

```json
{
  "name": "The Midnight Library",
  "description": "A novel about a magical library that allows people to explore different versions of their lives.",
  "price": 200000,
  "isbn": "9780525559474",
  "category": "Fiction",
  "publisher": "Penguin Random House",
  "author": "Matt Haig",
  "year": 2020
}
```

---
