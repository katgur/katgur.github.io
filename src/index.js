import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { App as TodoApp } from './todo_app/app/App'
import { App as AdminApp } from './admin_app/app/App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const root = createRoot(document.getElementById('root'));

const content = (
  <>
    <a href="/todo">Todo App</a>
    <a href="/admin">Admin App</a>
  </>
)

root.render(
  <Router>
    <AdminApp />
  </Router>
);
