# react-django-rust-sql

A futureproof stack for enabling performance, security, and type safety.

## Frontend (React)

npx create-react-app frontend --template typescript

cd frontend

npm install

npm start

## Backend (Python)

cd backend

python3 -m venv .venv

source .venv/bin/activate

python3 -m pip install Django

python3 -m pip install --upgrade pip

pip freeze > requirements.txt

pip install -r requirements.txt

python3 -m pip check

python3 manage.py runserver

## Structure

// React -%- ////
// Packages -%- ////
// Types -%- ////
// Components -%- ////
// Middleware & Integrations -%- ////
// Application -%- ////
