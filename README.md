# 🏥 Prescripto - Hospital Management System

Prescripto is a full-stack Hospital Management System built with the **MERN stack (MongoDB, Express, React, Node.js)**. It provides a seamless experience for both administrators and patients to manage doctors and appointments efficiently.

## 🔧 Features

### 👨‍⚕️ Admin Dashboard
- Add, update, or delete doctor profiles
- Track and manage all appointments
- Secure authentication and role-based access

### 🙋‍♂️ User Interface
- View all available doctors
- Filter doctors by specialty
- Book appointments with selected doctors
- User-friendly and responsive interface

## 🧱 Tech Stack

| Layer        | Technology             |
|--------------|-------------------------|
| Frontend     | React.js, Tailwind CSS  |
| Backend      | Node.js, Express.js     |
| Database     | MongoDB (Mongoose ODM)  |
| State Mgmt   | Zustand (or Redux, if used) |
| Authentication | JWT, Bcrypt             |

## 📸 Screenshots

> _Add a few screenshots or GIFs of your app here to showcase the UI_

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB

### Installation


# Clone the repository
```bash
git clone https://github.com/AzizHamdi99/Prescripto.git
cd Prescripto
```

# Install server dependencies
```bash
cd backend
npm install
```

# Install client dependencies
```bash
cd ../frontend
npm install
```

Run the App

# Start the backend server
```bash
cd backend
npm run dev
```

# Start the frontend
```bash
cd ../frontend
npm start
```

Make sure MongoDB is running locally or set up your MongoDB URI in a .env file.

Environment Variables
In the backend folder, create a .env file with:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

📁 Project Structure
<pre> ```plaintext Prescripto/ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ └── ... ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ └── ... └── README.md ``` </pre>
✅ Future Features (optional)
Email notifications for appointments

Doctor availability schedule

Admin analytics dashboard

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first.

📄 License
This project is open-source and available under the MIT License.

👤Author: Aziz Hamdi
LinkedIn: https://www.linkedin.com/in/aziz-hamdi-837175286/

