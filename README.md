# bitsbythebyte

A collection of tools and services for the cyberspace all-in-one application.

## Frontend (React)

npx create-react-app frontend --template typescript

cd frontend

npm install

npm start

## Backend (Python)

python -m django --version

django-admin startproject backend

cd backend

python -m pip install --upgrade pip

pip freeze > requirements.txt

pip install -r requirements.txt

python -m pip check

python manage.py runserver

## Structure

// React -%- ////
// Packages -%- ////
// Types -%- ////
// System Components -%- ////
// Components -%- ////
// Middleware & Integrations -%- ////
// Application -%- ////

## Examples Supabase Responses

```json
// Signup
{
  "data": {
    "user": {
      "id": "x",
      "aud": "authenticated",
      "role": "authenticated",
      "email": "email@email.com",
      "phone": "",
      "confirmation_sent_at": "2025-01-26T07:36:00.063267465Z",
      "app_metadata": {
        "provider": "email",
        "providers": ["email"]
      },
      "user_metadata": {
        "email": "email@email.com",
        "email_verified": false,
        "phone_verified": false,
        "sub": "x"
      },
      "identities": [
        {
          "identity_id": "fadef18a-c04a-4928-a7da-c1e68d213776",
          "id": "x",
          "user_id": "x",
          "identity_data": {
            "email": "email@email.com",
            "email_verified": false,
            "phone_verified": false,
            "sub": "x"
          },
          "provider": "email",
          "last_sign_in_at": "2025-01-26T07:36:00.044803085Z",
          "created_at": "2025-01-26T07:36:00.044875Z",
          "updated_at": "2025-01-26T07:36:00.044875Z",
          "email": "email@email.com"
        }
      ],
      "created_at": "2025-01-26T07:36:00.037434Z",
      "updated_at": "2025-01-26T07:36:00.345025Z",
      "is_anonymous": false
    },
    "session": null
  },
  "error": null
}
```

```json
// Logon
{
  "data": {
    "user": {
      "id": "x",
      "aud": "authenticated",
      "role": "authenticated",
      "email": "email@email.com",
      "email_confirmed_at": "2025-01-26T07:37:45.98087Z",
      "phone": "",
      "confirmation_sent_at": "2025-01-26T07:36:00.063267Z",
      "confirmed_at": "2025-01-26T07:37:45.98087Z",
      "last_sign_in_at": "2025-01-26T07:38:12.26958563Z",
      "app_metadata": {
        "provider": "email",
        "providers": ["email"]
      },
      "user_metadata": {
        "email": "email@email.com",
        "email_verified": true,
        "phone_verified": false,
        "sub": "x"
      },
      "identities": [
        {
          "identity_id": "fadef18a-c04a-4928-a7da-c1e68d213776",
          "id": "x",
          "user_id": "x",
          "identity_data": {
            "email": "email@email.com",
            "email_verified": true,
            "phone_verified": false,
            "sub": "x"
          },
          "provider": "email",
          "last_sign_in_at": "2025-01-26T07:36:00.044803Z",
          "created_at": "2025-01-26T07:36:00.044875Z",
          "updated_at": "2025-01-26T07:36:00.044875Z",
          "email": "email@email.com"
        }
      ],
      "created_at": "2025-01-26T07:36:00.037434Z",
      "updated_at": "2025-01-26T07:38:12.271384Z",
      "is_anonymous": false
    },
    "session": {
      "access_token": "x",
      "token_type": "bearer",
      "expires_in": 3600,
      "expires_at": 1737880692,
      "refresh_token": "x",
      "user": {
        "id": "x",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "email@email.com",
        "email_confirmed_at": "2025-01-26T07:37:45.98087Z",
        "phone": "",
        "confirmation_sent_at": "2025-01-26T07:36:00.063267Z",
        "confirmed_at": "2025-01-26T07:37:45.98087Z",
        "last_sign_in_at": "2025-01-26T07:38:12.26958563Z",
        "app_metadata": {
          "provider": "email",
          "providers": ["email"]
        },
        "user_metadata": {
          "email": "email@email.com",
          "email_verified": true,
          "phone_verified": false,
          "sub": "x"
        },
        "identities": [
          {
            "identity_id": "fadef18a-c04a-4928-a7da-c1e68d213776",
            "id": "x",
            "user_id": "x",
            "identity_data": {
              "email": "email@email.com",
              "email_verified": true,
              "phone_verified": false,
              "sub": "x"
            },
            "provider": "email",
            "last_sign_in_at": "2025-01-26T07:36:00.044803Z",
            "created_at": "2025-01-26T07:36:00.044875Z",
            "updated_at": "2025-01-26T07:36:00.044875Z",
            "email": "email@email.com"
          }
        ],
        "created_at": "2025-01-26T07:36:00.037434Z",
        "updated_at": "2025-01-26T07:38:12.271384Z",
        "is_anonymous": false
      }
    }
  },
  "error": null
}
```
