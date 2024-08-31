import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from '../router/router';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <div>
            <RouterProvider router={router} />
          </div>
          <h1></h1>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  // </React.StrictMode>
);
