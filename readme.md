STUDINITY – Your Ultimate Study Planner
STUDINITY is a modern web-based study planner designed to help students organize their studies, track progress, and achieve their academic goals. Built with HTML, CSS, JavaScript, Firebase, and Stripe integration, it combines smart planning with analytics to make learning efficient and motivating.
Features
Core Features
•	🧠 Smart Timetable – Automatically allocate time for subjects and get reminders.
•	📚 Resource Management – Store and organize notes, links, and study materials by subject.
•	📊 Progress Tracking – Visualize your learning progress through charts and reports.
•	📈 Analytics Dashboard – Understand your study patterns and improve performance.
•	💳 Pricing Plans – Flexible pricing with free, pro, and premium options.
•	🔒 User Authentication – Secure login/signup using Firebase Authentication.
Project Structure
studinity/
│
├── index.html        # Main structure and content
├── style.css         # Styling and responsive design
├── script.js         # Functionality and Firebase logic
├── README.md         # Project documentation
└── assets/           # (Optional) Images, icons, or other static files
Technologies Used
Category	Tools & Frameworks
Frontend	HTML5, CSS3, JavaScript (ES6)
Fonts & Icons	Google Fonts (Inter, Poppins), Feather Icons
Authentication	Firebase Authentication
Payments	Stripe.js Integration
Hosting (optional)	Firebase Hosting / GitHub Pages
Setup Instructions
Follow these simple steps to run the project locally.
1. Clone the Repository
git clone https://github.com/Nivethith-AK/studinity.git
cd studinity
2. Open in VS Code or any Editor
3. Add Your Firebase Config
In script.js, replace this placeholder:

const firebaseConfig = {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'YOUR_FIREBASE_AUTH_DOMAIN',
    projectId: 'YOUR_FIREBASE_PROJECT_ID',
};
4. Launch the Website
You can open index.html directly in your browser, or use a local server:

# If you have VS Code Live Server installed:
Right-click index.html → 'Open with Live Server'
Pricing Simulation
•	Basic: Free
•	Pro: LKR 1,500/month
•	Premium: LKR 3,000/month
Integration with Stripe.js is ready for real payment setup.
Authentication Features
•	Sign Up – Create an account using email & password.
•	Log In – Secure Firebase login session.
•	Log Out – One-click logout with instant UI update.
•	Auth State Listener – Automatically updates navigation based on user login state.
Responsive Design
• Fully responsive layout using CSS Grid & Flexbox.
• Optimized for both desktop and mobile users.
• Minimal, modern aesthetic using soft colors and smooth spacing.
License
This project is licensed under the MIT License. You’re free to use, modify, and distribute it with proper credit.
Future Improvements
•	📱 Mobile app version (React Native)
•	🎯 AI-powered study recommendations
•	🕓 Pomodoro timer integration
•	📊 Custom analytics dashboard using Chart.js
•	💬 Collaboration and shared study plans
#
