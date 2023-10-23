# Frontend Part
# Connect React to Chat Engine!

This simple repo shows how to easily add chat functionality into a React project with [Chat Engine](https://chatengine.io).

To understand the code, please watch [this video]()!

## Setup Steps

Setup this chat client in 3 steps below.

### 1 - Setup a Chat Engine server

Go to [Chat Engine](https://chatengine.io) to setup your own chat server.

- Click "New Project" and follow the steps
- Your `Project ID` and `Private Key` will be required for step 2

### 2 - Connect `.env` to Chat Engine

This allows user to connect to different chat-servers in local vs staging vs production.

Replace the UUID below with user's own. In `.env` write:

```
REACT_APP_CHAT_ENGINE_PROJECT_ID=----------------------------
```

### 3 - Install & Start

Run the following two lines of code in `Frontend/`.

```
npm install
npm run start
```

Done! server is on `localhost:3000` and connected to Chat Engine!

All new "Sign Up" users are on Chat Engine, and their credentials are found upon "Login".

To understand the code, please watch [this video]()!
