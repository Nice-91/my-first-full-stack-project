🗂️ Task Manager App – Full Stack (Django + JavaScript)
This is my first full-stack project! A simple Task Manager app built using Django REST Framework (backend) and Vanilla JavaScript (frontend). Users can register, log in using JWT, and manage their daily tasks.

It wasn’t easy — learning how to structure APIs, secure them with JWT, and connect it all on the frontend took real effort — but it was a great learning experience.

🚀 Features
🔐 JWT Authentication (Login/Register)

📝 Create, edit, delete tasks

✅ Mark tasks as complete/incomplete

📡 REST API powered by Django REST Framework

⚡ JavaScript frontend with dynamic DOM updates

💬 Error handling and user feedback via alerts

🛠 Tech Stack
Layer	Tech
Backend	Django, Django REST Framework
Auth	JWT (Simple JWT)
Frontend	HTML, CSS, JavaScript (Vanilla)
Database	SQLite (default Django DB)


🔧 Setup Instructions
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/Nice-91/my-first-full-stack-project.git
cd my-first-full-stack-project
2. Backend Setup (Django)
bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

 Run migrations
python manage.py migrate

 Create a superuser (optional)
python manage.py createsuperuser

 Start the development server
python manage.py runserver
Backend will be available at: http://127.0.0.1:8000/

3. Frontend
Open index.html in your browser. Make sure your Django server is running at localhost:8000.

📂 Project Structure
perl
Copy
Edit
my-first-full-stack-project/
│
├── tasks/                  # Django app
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│
├── frontend/               # Frontend files
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│
├── project/                # Django project
│   ├── settings.py
│   ├── urls.py
│
├── db.sqlite3
└── requirements.txt
✅ API Endpoints
Method	Endpoint	Description
POST	/api/register/	Register a new user
POST	/api/token/	Login and get JWT token
GET	/api/tasks/	List user tasks
POST	/api/tasks/	Create new task
PUT	/api/tasks/<id>/	Update a task
DELETE	/api/tasks/<id>/	Delete a task
PATCH	/api/tasks/<id>/	Toggle completion status

💡 Improvements Welcome
This is my first full-stack project, and I know there’s a lot of room for improvement. If you have ideas on:

Improving UI/UX

Using React or Vue for frontend

Adding search, filters, or due dates

Structuring code better

…I’d love to hear your suggestions! Feel free to fork the repo or open issues.

🙌 Acknowledgements
Big thanks to the open source community and all the Django/DRF tutorials out there that helped me understand this stack. This project is part of my learning journey.

 Connect
💼 LinkedIn:www.linkedin.com/in/nice-iradukunda-192036353
📧 Email:iradukundanice91@gmail.com

🧠 Open to feedback, collaboration, and internship opportunities!

