import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './routes/Login';
import CheckOut from './routes/CheckOut';
import CheckIn from './routes/CheckIn';
import CheckOutApi from './widgets/CheckOutApi';

// Considering redux a service which provides a centralized state which can be accessed
// through any component, we need to add it as a parent for all components. (Hence: <Provider/>)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Login /> */}
      <CheckOut />
      <CheckIn />
      {/* <CheckOutApi /> */} {/* Template Component */} 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();