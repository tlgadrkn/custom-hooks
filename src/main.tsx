import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About } from './About';
import App from './App';

const root = createRoot(document.getElementById('root')!);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/about', element: <About /> },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
