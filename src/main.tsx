import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import AuthProvider from "./context/AuthContext";

const root = document.getElementById('root');

if(root === null) throw new Error("You may have not initialized index.html");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </BrowserRouter>
)