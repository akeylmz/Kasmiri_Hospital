
import './App.css'

import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/Home"
import RootLayout from "./Pages/RootLayout"
import LoginPage from './Pages/Login'
import CardPage from './Pages/Card'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      { path : "/", element: <HomePage />},
      { path : "/muayene-ve-anamnez", element: <CardPage />},
    ]
  },
  { path : "/login", element: <LoginPage />},
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App










  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/items/')
  //     .then(response => {
  //       setData(response.data);
  //       console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);


