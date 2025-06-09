🏥 Prescripto - Hospital Management System
Prescripto is a full-stack Hospital Management System built with React, Node.js, Express, and SQL (using Sequelize ORM). It provides a seamless experience for both administrators and patients to manage doctors and appointments efficiently.

🔧 Features
👨‍⚕️ Admin Dashboard
Add, update, or delete doctor profiles

Track and manage all appointments

Secure authentication and role-based access

🙋‍♂️ User Interface
View all available doctors

Filter doctors by specialty

Book appointments with selected doctors

User-friendly and responsive interface

🧱 Tech Stack
Layer	Technology
Frontend	React.js, Tailwind CSS
Backend	Node.js, Express.js
Database	SQL (PostgreSQL/MySQL/etc.) + Sequelize ORM
State Mgmt	Zustand (or Redux if used)
Authentication	JWT, Bcrypt

📸 Screenshots
Add a few screenshots or GIFs of your app here to showcase the UI

🚀 Getting Started
Prerequisites
Node.js (v18+ recommended)

A SQL database (e.g., PostgreSQL or MySQL)

Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/AzizHamdi99/Prescripto.git
cd Prescripto
bash
Copy
Edit
# Install server dependencies
cd backend
npm install
bash
Copy
Edit
# Install client dependencies
cd ../frontend
npm install
Run the App
bash
Copy
Edit
# Start the backend server
cd backend
npm run dev
bash
Copy
Edit
# Start the frontend
cd ../frontend
npm start
⚠️ Ensure your SQL database is running and properly connected using the environment configuration.

🔐 Environment Variables
In the backend folder, create a .env file with the following:

env
Copy
Edit
PORT=5000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_DIALECT=mysql # or 'postgres'
JWT_SECRET=your_jwt_secret
✅ Future Features (optional)
Email notifications for appointments

Doctor availability schedule

Admin analytics dashboard

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first.

📄 License
This project is open-source and available under the MIT License.

👤 Author
Aziz Hamdi
LinkedIn:https://www.linkedin.com/in/aziz-hamdi-837175286/