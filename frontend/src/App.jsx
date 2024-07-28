
import './App.css'

import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/Home"
import RootLayout from "./Pages/RootLayout"
import LoginPage from './Pages/Login'
import CardPage from './Pages/Card'
import Calender from './Calender'
import LeadPage from './Pages/Lead'
import Inbox from './components/lead/Inbox'
import InboxLayout from './Pages/InboxLayout'
import Chat from './components/lead/Chat'
import PatientLayout from './Pages/PatientLayout'
import Patient from './components/patient/Patient'
import PatientDetail from './components/patient/PatientDetail'
import PatientOverwiev from './components/patient/PatientOverwiev'
import PatientOther from './components/patient/PatientOther'
import PatientIDInformation from './components/patient/PatientIDInformation'
import PatientSenssion from './components/patient/PatientSenssion'
import PatientFiles from './components/patient/PatientFiles'
import PatientBill from './components/patient/PatientBill'
import ChatUserDetail from './components/lead/ChatUserDetail'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      { path : "/", element: <HomePage />},
      
      { 
        path: "/lead", 
        element: <InboxLayout />,
        children: [
          { path: "/lead", element: <Inbox /> },
          { path: ":chatId", element: <Chat /> },
        ]
      },
      { path : "/hasta", 
        element : <PatientLayout /> ,
        children : [
          { path : "/hasta", element : <Patient />},
          { 
            path : ":patientId",
            element : <PatientDetail />,
            children : [
              { path: "overwiev", element: <PatientOverwiev /> },
              { path: "other", element: <PatientOther /> },
              { path: "IDinformation", element: <PatientIDInformation /> },
              { path: "sessionInformation", element: <PatientSenssion /> },
              { path: "files", element: <PatientFiles /> },
              { path: "bill", element: <PatientBill /> },
              { index: true, element: <Navigate to="overwiev" replace /> }
            ]
          }
        ]
      },
      { path : "/takvim", element: <Calender />},
      { path : "/stok", element: <CardPage />},
      { path : "/e-nabiz", element: <CardPage />},
      { path : "/fatura", element: <CardPage />},
      { path : "/raporlama", element: <CardPage />},
      { path : "/insan-kaynaklari", element: <CardPage />},
      { path : "/ayarlar", element: <CardPage />},
      { path : "/hasta-detay/", element: <CardPage />},
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


