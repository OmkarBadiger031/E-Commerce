# React E-commerce Project

## Project Overview

This is a React-based e-commerce project that uses a JSON Server backend to manage user data.

## Technologies Used

* React
* JavaScript
* HTML
* CSS
* Axios
* JSON Server

## How to Run the Project

### Method 1: Using CMD

#### Section 1: Open the project folder

```
cd /d C:\Users\sutar\OneDrive\Desktop\React_js\e-commerce
```

#### Section 2: Start the backend server

```
npx json-server --watch db.json --port 3000
```

Keep this terminal open.

#### Section 3: Open a second CMD window

```
cd /d C:\Users\sutar\OneDrive\Desktop\React_js\e-commerce
```

#### Section 4: Start the frontend

```
npm run dev
```

Open the URL displayed in the terminal, usually http://localhost:5173/.

### Method 2: Using VS Code PowerShell

#### Section 1: Open the project folder

```
cd C:\Users\sutar\OneDrive\Desktop\React_js\e-commerce
```

#### Section 2: Start the backend server

```
npx.cmd json-server --watch db.json --port 3000
```

Keep this terminal open.

#### Section 3: Open a second terminal

```
cd C:\Users\sutar\OneDrive\Desktop\React_js\e-commerce
```

#### Section 4: Start the frontend

```
npm.cmd run dev
```

Open the URL displayed in the terminal, usually http://localhost:5173/.

## Important Notes

* Keep both terminals open while using the application.
* Backend URL: http://localhost:3000
* Frontend URL: http://localhost:5173/
* Install dependencies using npm install if needed.
* Do not upload passwords, API keys, or other secrets to GitHub.






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
