import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HomePage, ExperimentPage, NotFoundPage } from './pages';
import PageLayout from './modules/PageLayout';

function pageLayoutWrapper(pageComponent) {
  return <PageLayout>{pageComponent}</PageLayout>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: pageLayoutWrapper(<HomePage />),
  },
  {
    path: 'experiment',
    element: pageLayoutWrapper(<ExperimentPage />),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
