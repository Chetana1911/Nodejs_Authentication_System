# Nodejs_Authentication_System
A Authentication System build using Nodejs.

# Complete authentication app that lets user sign up, sign in, reset password, sign in using social accounts, also maintains log in session upto preset time. 
# Hosted on render.com : https://nodejs-authentication-system-io5v.onrender.com

# Tech used:
1. NodeJS
2. Express
3. EJS
4. Bootstrap
5. Passport-local
6. Passport-Google-Oauth
7. Mongoose

# System requirement
# Node.js (version 12 or higher)
   1.Download from https://nodejs.org/en/download
 # MongoDB Atlas (Cloud Based Mongodb database)
1. Visit on https://www.mongodb.com/
2. Sign up on MongoDB Atlas
3. Then in Data Services Choose Connect option
4. Then click on Drivers
5. Then page is open at below link Add your connection string into your application code
6. Username and Password add in link


# Create Credential for over app
1. Visit on : https://console.cloud.google.com/
2. Create new Project
3. Open the Project
4. Go to OAuth consent screen
5. Make User Type : External and Click on Create
6. Then Edit App Registration :
   1. Write App name(Project name) and User support Email (your Email)
   2. Then in Developer contact information Write Your Email
   3. Click on Save and Continue (Till the Summery then Back to dashaboard)
7. The go to Creadential
    1. Click on Create Credential
    2. Choose on OAuth client Id
    3. Application type is Web Application
    4. The give the name of project
    5. Add URL in Authorised JavaScript origins(e.g http://localhost:8000)
    6. Add URL in Authorised redirect URIs (e.g http://localhost:8000/auth/google/callback)
    7. Then OAuth client created (you can use Client ID and Client Secret)
    8. The client ID and secret can always be accessed from Credentials in APIs & Services

# Starting the App
1. Open a terminal or command prompt and navigate to the project's main directory
2. Run the command npm install to install the project dependencies.
3. Run the command npm start to start the project.
4. The app will now be running on port 8000.
5. Open the web browser and visit on http://localhost:8000 to access the web application.


# Render your Project
1. visit website : https://render.com/
2. Then sign up with Google Account
3. After sign in open web browser
4. Click on Web Services
5. Connect with Github
6. Then select repository and save
7. Add All Keys and Value from .env file to Enviroment (present on left hand side ) for security of your app
8. The link come below the your profile visit them
9. This was your poject render link

