# Nova Mobiles

Nova Mobiles is a full-stack mobile store project split into three apps:

- `Frontend` is the customer storefront.
- `Admin` is the internal dashboard for products and orders.
- `Backend` is the Express API backed by MongoDB and Cloudinary uploads.

The frontend and admin apps use React + Vite. The backend uses Express 5, the MongoDB Node driver, Multer, JSON Web Token, and Cloudinary storage.

## Repository Layout

```text
Nova-Mobiles/
|-- Admin/      # Admin dashboard
|-- Backend/    # API, MongoDB access, upload handling
|-- Frontend/   # Customer storefront
`-- README.md
```

## What Each App Does

### Frontend

- Shows products grouped by brand.
- Lets shoppers build a cart in local React state.
- Creates an order shell in the backend before checkout.
- Loads cart contents again using an encrypted order token.
- Supports checkout with:
  - `Cash on Delivery`
  - `Self Pick`
  - `Bank Transfer` with proof image upload

Frontend routes:

- `/`
- `/cart`
- `/pay`

### Admin

- Add a product with image upload.
- View all products.
- Delete products.
- View submitted orders.
- Review bank transfer proof images.
- Delete processed orders.

Admin routes:
- `/`
- `/prdct/all`
- `/ordrs/All`

### Backend

The backend exposes endpoints for:

- creating products
- listing products
- deleting products
- creating cart/order records
- retrieving cart data by encrypted order id
- updating the cart before checkout
- canceling orders
- submitting address details
- uploading bank transfer proof images

API routes currently defined in [`Backend/Router/Router.js`](/c:/Users/PMLS/Desktop/Nova-Mobiles/Backend/Router/Router.js):

- `POST /Ad/prdct/Add`
- `GET /Ad/prdct/All`
- `GET /Ad/ordrs/all`
- `POST /del/prdct/Admn`
- `POST /Ad/del/ordr`
- `GET /get/all/itms`
- `POST /add/cartdata`
- `POST /get/cartData`
- `POST /proceed/Payment`
- `POST /cancel/ordr`
- `POST /Add/Address/Smpl`
- `POST /Add/Address/Bt`

## Tech Stack

- React 19
- React Router 7
- Vite 7
- Axios
- React Toastify
- Express 5
- MongoDB Node driver
- Multer
- JSON Web Token
- Cloudinary
- Argon2
- Zod

## Prerequisites

- Node.js 20+
- npm
- MongoDB instance
- Cloudinary account and credentials

## Environment Variables

Create a `.env` file in `Backend/`.

Example:

```env
PORT=4000
DB_URL=mongodb://127.0.0.1:27017
DB=nova_mobiles
P_C=products
O_C=orders
JWT_KEY=replace_with_a_secure_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Variables read by the backend:

- `PORT`
- `DB_URL`
- `DB`
- `P_C`
- `O_C`
- `JWT_KEY`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Cloudinary is configured in [`Backend/Config/cloudinary.js`](/c:/Users/PMLS/Desktop/Nova-Mobiles/Backend/Config/cloudinary.js) and is used for both product images and payment proof uploads.

## Local Development

Install dependencies in each app:

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

Start the backend:

```powershell
cd Backend
npm run dev
```

Start the storefront:

```powershell
cd Frontend
npm run dev
```

Start the admin dashboard:

```powershell
cd Admin
npm run dev
```

Current default local URLs:

- Frontend Vite dev server: usually `http://localhost:5173`
- Admin Vite dev server: usually `http://localhost:5174`
- Backend API: `http://localhost:4000`

## Implementation Notes

- Both React apps hard-code the API base URL to `http://localhost:4000` in:
  - [`Frontend/src/ApiCalls/ApiCalls.jsx`](/c:/Users/PMLS/Desktop/Nova-Mobiles/Frontend/src/ApiCalls/ApiCalls.jsx)
  - [`Admin/src/ApiCalls/ApiCalls.jsx`](/c:/Users/PMLS/Desktop/Nova-Mobiles/Admin/src/ApiCalls/ApiCalls.jsx)
- The backend still exposes legacy static routes for local files in [`Backend/index.js`](/c:/Users/PMLS/Desktop/Nova-Mobiles/Backend/index.js), but current uploads are stored in Cloudinary and the frontend/admin already use Cloudinary URLs when present.
- There is no root-level package script that starts all three apps together.
- There are no automated tests configured yet.

## Current Risks And Limitations

- Product ids are reassigned after deletion in [`Backend/Functions/Functions.js`](/c:/Users/PMLS/Desktop/Nova-Mobiles/Backend/Functions/Functions.js), while cart/order data is also keyed by those ids. Deleting a product can therefore remap existing carts or orders to the wrong products.
- Loading the admin orders endpoint deletes every order document without `userAdd` first in [`Backend/Controller/Controller.js`](/c:/Users/PMLS/Desktop/Nova-Mobiles/Backend/Controller/Controller.js). That means viewing orders can erase in-progress carts.
- Frontend and admin API URLs are hard-coded for localhost, so deployment to any non-local environment will require code changes.
- The admin dashboard has no authentication or authorization layer.

## Suggested Next Improvements

- Move API base URLs to Vite environment variables.
- Stop re-numbering product ids; use stable identifiers instead.
- Separate temporary carts from submitted orders.
- Add admin authentication and route protection.
- Add validation and error handling around uploads and checkout.
- Replace the Vite template READMEs inside `Frontend/` and `Admin/`.
- Add automated tests for backend routes and the checkout flow.
