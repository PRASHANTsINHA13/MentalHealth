# Mental-health-Chatbot

## To run AI-model

1. Clone this repository

2. Create and activate virtual environment

```
python -m venv venv
```

on Linux system

```
source venv/bin/activate
```

on Windows system

```
.\venv\Scripts\activate.bat
```

if doesnt activate just try to activate using this command in powershell terminal

```
.\venv\Scripts\activate
```

3. Install requirements

```
pip install  -r requirements.txt
```

4. Run the app using

```
flask --app app --debug run
```

---

## Inorder to run frontend and backend

1. Install node modules using foloowing command

```
npm install
```

2. Apply migrations to db if not using

```
    npm run apply-migration
```

3. Set env variables if not in file .env.local all required env variables are mentioned in .env.example

4. For dev mode run the server using folllowing command

```
    npm run dev
```

5. For production build create a production build using

```
    npm run build
```

6. Once build is complete start the node js server using

```
    npm run start
```
