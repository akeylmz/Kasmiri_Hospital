import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from './SideBar'

const PatientDetail = () => {
  const {patientId} = useParams()
  const  { patients } = useSelector( state => state.patient)
  console.log(patientId);
  console.log(patients);
  var ptn;
  patients.map((item, key) => {
    if(item.id === patientId){
      ptn = item
    }
  })
  
console.log(ptn);
  return (
    <>
      <SideBar />
      <Outlet/>
    </>
  )
}

export default PatientDetail

