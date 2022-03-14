import { useState, useEffect } from 'react';

import Header from './components/header';
import ListPatients from './components/ListPatients';
import MainForm from './components/MainForm';

const CitasApp = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLoalStorage = () => {
      const patientsLocalStorage =
        JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLocalStorage);
    };
    getLoalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const actualPatients = patients.filter((patient) => patient.id !== id);
    setPatients(actualPatients);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mx-5 md:mx-0  mt-14 sm:flex gap-6">
        <MainForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatients
          deletePatient={deletePatient}
          patients={patients}
          setPatient={setPatient}
        />
      </div>
    </div>
  );
};

export default CitasApp;
