# Nova Mobiles

Nova Mobiles is a full-stack phone store project with three separate apps:

- `Frontend` for the customer-facing shopping experience
- `Admin` for product and order management
- `Backend` for the API, file uploads, and MongoDB persistence

The project is built with React + Vite on the frontend/admin side and Express + MongoDB on the backend.

## Project Structure

```text
Nova-Mobiles/
|-- Admin/      # Admin dashboard
|-- Backend/    # Express API + MongoDB + uploaded files
|-- Frontend/   # Customer storefront
`-- README.md
```

## What The Codebase Does

### Customer app (`Frontend`)

- Displays products grouped by company/brand
- Lets users add items to a local cart
- Creates an order record before checkout
- Loads cart data from the backend using an encrypted order id
- Lets users continue to the delivery/payment form
- Supports:
  - Cash on Delivery
  - Self Pick
  - Bank Transfer with payment proof image upload

Routes in the customer app:

- `/` home page
- `/cart` cart review page
- `/pay` delivery and payment form

### Admin app (`Admin`)

- Add new products with image upload
- View all products
- Delete products
- View all submitted orders
- Review bank transfer proof images
- Delete completed/cancelled orders

Routes in the admin app:

- `/` add item page
- `/prdct/all` all products page
- `/ordrs/All` all orders page

### Backend (`Backend`)

The API provides:

- product creation with `multer` image upload
- product listing
- product deletion
- order creation
- cart retrieval by encrypted order id
- checkout/cart update
- order cancellation
- address submission
- bank transfer proof upload
- static serving for uploaded product images and payment proof images

Static files served by the backend:

- `/pr0ducts` -> files in `Backend/Products`
- `/$rpt` -> files in `Backend/Scripts`

## Main Tech Stack

- React 19
- Vite
- React Router
- Axios
- React Toastify
- Express 5
- MongoDB Node driver
- Multer
- JSON Web Token
- Argon2
- Zod

## Environment Variables

Create a `.env` file inside `Backend/`.

Example:

```env
PORT=4000
DB_URL=mongodb://127.0.0.1:27017
DB=nova_mobiles
P_C=products
O_C=orders
JWT_KEY=replace_with_a_secure_secret
```

The backend reads these variables directly in the code:

- `PORT`
- `DB_URL`
- `DB`
- `P_C`
- `O_C`
- `JWT_KEY`

## Getting Started

### 1. Install dependencies

Run these commands from each app folder:

```powershell
cd Backend
npm install
```

```powershell
cd Frontend
npm install
```

```powershell
cd Admin
npm install
```

### 2. Start the backend

```powershell
cd Backend
npm run dev
```

The backend is expected to run on `http://localhost:4000`.

### 3. Start the customer frontend

```powershell
cd Frontend
npm run dev
```

### 4. Start the admin app

```powershell
cd Admin
npm run dev
```

## API Overview

### Admin endpoints

- `POST /Ad/prdct/Add`
- `GET /Ad/prdct/All`
- `GET /Ad/ordrs/all`
- `POST /del/prdct/Admn`
- `POST /Ad/del/ordr`

### Customer endpoints

- `GET /get/all/itms`
- `POST /add/cartdata`
- `POST /get/cartData`
- `POST /proceed/Payment`
- `POST /cancel/ordr`
- `POST /Add/Address/Smpl`
- `POST /Add/Address/Bt`

## Notes About The Current Implementation

- The frontend and admin apps are currently hard-coded to use `http://localhost:4000` as the API base URL.
- Product images are stored in `Backend/Products`.
- Bank transfer proof images are stored in `Backend/Scripts`.
- The root README was previously only a title, and the app-specific READMEs in `Frontend/` and `Admin/` are still the default Vite template files.
- There are no automated tests configured right now.

## Recommended Next Improvements

- Move API base URLs into environment variables for `Frontend` and `Admin`
- Add validation and better error handling around uploads and form submission
- Add authentication/authorization for the admin panel
- Add proper stock validation on checkout
- Add tests for backend routes and critical frontend flows
- Replace the default Vite READMEs inside `Frontend/` and `Admin/`
