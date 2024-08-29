import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import SubSideBar from '../../../navigation/SubSideBar'
import useSWR from 'swr'
import { setPatient, setPatientt } from '../../../store/patient'


const fetcher = (url) => fetch(url).then((res) => res.json());

const PatientDetail = () => {

  const dispatch = useDispatch();
  const {patientId} = useParams()
  const  { patients } = useSelector( state => state.patient)
  const { data: patient, error } = useSWR(`http://127.0.0.1:8000/api/patientcard/${patientId}/`, fetcher);

    console.log("---");
    console.log(patient);
    console.log("---");

    useEffect(() => {
      if (patient) {
          dispatch(setPatientt(patient)); 
      }
  }, [patient, dispatch]);
    


    if (error) return <div>Failed to load patient information</div>;
    if (!patient) return <div>Loading...</div>;
  return (
    <>
      <SubSideBar patient={patient}/>
      <Outlet />
    </>
  )
}

export default PatientDetail

