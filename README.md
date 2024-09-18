
# E-Commerce Frontend App

This is a simple frontend application for a minimalistic e-commerce store built with React and TypeScript. The app fetches product data from Airtable and provides users with the ability to browse and place orders.

## Features

- Browse and view a list of products
- Add products to the cart and manage quantities
- Complete a checkout form with user details
- Order summary at the end of the process (no backend processing)

## Limitations

- Frontend-only application: The app does not have a backend for processing or storing order details. Orders can be placed, but there is no server-side logic or database integration to persist the order data.
- No real payments: This app is for demonstration purposes only and does not include real payment processing.

## How to run the project

- Clone the repository
- Install dependencies using npm install
- Add the required Airtable API key in the .env file as VITE_AIRTABLE_API_KEY
- Run the project locally with npm run dev


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
