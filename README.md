# 📱 Nova Mobiles

**Nova Mobiles** is a modern, full-stack e-commerce platform dedicated to mobile devices. Built with a robust MERN-inspired architecture, it provides a seamless shopping experience for customers and a powerful management dashboard for administrators.

---

## 🚀 Features

### 🛒 Customer Storefront (Frontend)
- **Dynamic Product Catalog**: Browse the latest mobile devices grouped by brand (iPhone, Samsung, Vivo, Oppo, Infinix).
- **Intuitive Shopping Cart**: Build and manage your cart with real-time updates.
- **Secure Checkout Flow**: 
  - **Cash on Delivery** & **Self Pick** options.
  - **Bank Transfer** integration with secure proof-of-payment upload.
- **Order Tracking**: Persistent session management using encrypted order tokens.

### 🛠️ Admin Dashboard (Admin)
- **Inventory Management**: Effortlessly add, view, and delete products.
- **Order Processing**: Real-time access to customer orders and payment proofs.
- **Image Management**: Integrated Cloudinary support for automated product and proof-of-payment image handling.

### ⚙️ Scalable API (Backend)
- **RESTful Architecture**: Clean and efficient endpoints for all frontend and admin operations.
- **Secure Data Handling**: Implementation of Argon2 for hashing and JWT for secure order identification.
- **Cloud-Native Storage**: Seamless integration with Cloudinary for scalable asset management.

---

## 🏗️ Repository Layout

```text
Nova-Mobiles/
├── Admin/      # React + Vite Admin Dashboard
├── Backend/    # Express API & MongoDB Logic
├── Frontend/   # React + Vite Customer Storefront
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite 7, Axios, React Router 7, React Toastify |
| **Backend** | Node.js, Express 5, Multer, JSON Web Token |
| **Database** | MongoDB (Native Driver) |
| **Storage** | Cloudinary (Cloud Asset Management) |
| **Security** | Argon2, Zod, Encrypted Tokens |

---

## ⚙️ Environment Variables

To run the backend, create a `.env` file in the `Backend/` directory:

```env
PORT=4000
DB_URL=mongodb://127.0.0.1:27017
DB=nova_mobiles
P_C=products
O_C=orders
JWT_KEY=your_secure_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🛠️ Local Development

### 1. Install Dependencies
Run `npm install` in each of the three directories:
```bash
# In Admin, Backend, and Frontend
npm install
```

### 2. Start the Servers
Open three terminal windows and run:
```bash
# Backend (Port 4000)
cd Backend && npm run dev

# Frontend (Port 5173)
cd Frontend && npm run dev

# Admin (Port 5174)
cd Admin && npm run dev
```

---

## 📝 Project Roadmap & Improvements

Nova Mobiles is continuously evolving. Current focus areas include:

- [ ] **Authentication**: Implement secure Admin login and session management.
- [ ] **Configuration**: Migrate API base URLs to environment variables for easier deployment.
- [ ] **Data Integrity**: Enhance product indexing to use stable UUIDs instead of re-numbered IDs.
- [ ] **UX Enhancements**: Add advanced search, filtering, and user accounts.
- [ ] **Testing**: Implement comprehensive Jest/Supertest suites for API and components.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Alhumdulilah - Built with passion by the Nova Mobiles Team.*

