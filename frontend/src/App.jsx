import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/home/HomePage'
import PatientLayout from './pages/patient/PatientLayout'
import Patients from './pages/patient/Patients'
import CompanyStructure from './UI/CompanyStructure '
import PatientDetail from './pages/patient/patientDetail/PatientDetail'
import PatientOverwiev from './pages/patient/patientDetail/PatientOverwiev'
import PatientFiles from './pages/patient/patientDetail/PatientFiles'
import PatientSenssion from './pages/patient/patientDetail/PatientSenssion'
import PatientOther from './pages/patient/patientDetail/PatientOther'
import PatientIDInformation from './pages/patient/patientDetail/PatientIDInformation'
import PatientBill from './pages/patient/patientDetail/PatientBill'
import MedicalForm from './MedicalForm'
import StockLayout from './pages/stock/StockLayout'
import StockOverwiev from './pages/stock/StockOverwiev'
import StockProducts from './pages/stock/StockProducts'
import HrLayout from './pages/hr/HrLayout'
import HrHierarchy from './pages/hr/HrHierarchy'
import HrRecruitment from './pages/hr/HrRecruitment'
import HrPersonnel from './pages/hr/HrPersonnel'
import HrWorkingHours from './pages/hr/HrWorkingHours'
import HrLeaveManagement from './pages/hr/HrLeaveManagement'
import FileUpload from './FileUpload'
import StockWarehouse from './pages/stock/StockWarehouse'
import StockOrder from './pages/stock/StockOrder'
import Calender from './pages/calendar/Calender'
import { Inbox, Settings } from 'lucide-react'
import Chat from './components/lead/Chat'
import InboxLayout from './components/lead/InboxLayout'
import StockStatistics from './pages/stock/StockStatistics'
import HrSummaryFile from './pages/hr/HrSummaryFile'
import HrManagement from './pages/hr/HrManagement'
import HrChecklist from './pages/hr/HrChecklist'
import HrQuests from './pages/hr/HrQuests'
import HrDetail from './pages/hr/HrDetail'
import Billing from './pages/billing/Billing'
import ENabiz from './pages/ENabiz'
import Reports from './pages/Reports'
import SettingsPage from './pages/SettingsPage'
import Deneme from './UI/Deneme'
import Anket from './pages/Anket'
import Bodro from './pages/Bodro'

function App() {  

  const router = createBrowserRouter([
    { path: "/",
      element: <RootLayout />,
      children: [
        {path: "/", element: <HomePage />},
        { path : "/calendar", element: <Calender />},
        { path : "/patients", 
          element : <PatientLayout /> ,
          children : [
            { path: "/patients", element: <Patients /> },
           
            { path : ":patientId", 
              element: <PatientDetail />,
              children: [
                { path: "overview", element: <PatientOverwiev /> },
                { path: "other", element: <PatientOther /> },
                { path: "IDinformation", element: <PatientIDInformation /> },
                { path: "sessionInformation", element: <PatientSenssion /> },
                { path: "files", element: <PatientFiles /> },
                { path: "bill", element: <PatientBill /> },
                { path: "poll", element: <Anket />},
                { index: true, element: <Navigate to="overview" replace /> }
              ]
            },
            
          ]
        },
        { 
          path: "/lead", 
          element: <InboxLayout />,
          children: [
            { path: "/lead", element: <Inbox /> },
            { path: ":chatId", element: <Chat /> },
            { index: true, element: <Chat to=":chatId" replace /> }
          ]
        },
        { path: "/stock",
          element: <StockLayout />,
          children: [
            { path: "overwiev", element: <StockOverwiev />},
            { path: "products", element: <StockProducts />},
            { path: "warehouse", element: <StockWarehouse />},
            { path: "orders", element: <StockOrder />},
            { path: "statistics", element: <StockStatistics />},
            { index: true, element: <Navigate to="overwiev" replace /> }
          ]
        },        
        { path: "/human-resources/personnel/:workerID", element: <HrSummaryFile />},
        { path: "KPI-checklist", element: <HrChecklist />},
        { path: "/human-resources",
          element: <HrLayout />,
          children: [            
            { path: "hierarchy", element: <HrHierarchy />},
            { path: "personnel", element: <HrPersonnel />},
            { path: "working-hours", element: <HrWorkingHours />},
            { path: "leave-management", element: <HrLeaveManagement />},
            { path: "recruitment", element: <HrRecruitment />},            
            { path: "KPI-management", element: <HrManagement />},
            
            { path: "KPI-quests", element: <HrQuests />},
            { path: "KPI-detail", element: <HrDetail />},
            { index: true, element: <Navigate to="hierarchy" replace /> }
          ]
        },
        { path: "billing", element: <Billing />},
        { path: "e-nabiz", element: <ENabiz />},
        { path: "reporting", element: <Reports />},
        { path: "settings", element: <SettingsPage />},
        { path: "bodro", element: <Bodro />},   
        { path: "deneme", element: <Deneme />},     
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
