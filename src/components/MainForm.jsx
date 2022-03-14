import { useEffect, useState } from 'react';
import Error from './Error';

const MainForm = ({ patients, setPatients, patient, setPatient }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setNombre(patient.nombre);
      setPropietario(patient.propietario);
      setEmail(patient.email);
      setDate(patient.date);
      setMessage(patient.message);
    }
  }, [patient]);

  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2);
    const dateId = Date.now().toString(36);
    return random + dateId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if ([nombre, propietario, email, date, message].includes('')) {
      return setError(true);
    }
    setError(false);

    // Pacients array
    const patientsObject = {
      nombre,
      propietario,
      email,
      date,
      message,
    };
    if (patient.id) {
      //editando
      patientsObject.id = patient.id;
      const actualPatients = patients.map((actualPatient) =>
        actualPatient.id === patient.id ? patientsObject : actualPatient
      );
      setPatients(actualPatients);
      setPatient({});
    } else {
      //nuevo registro
      patientsObject.id = idGenerator();
      setPatients([...patients, patientsObject]);
    }

    // form reload
    setNombre('');
    setPropietario('');
    setEmail('');
    setDate('');
    setMessage('');
  };

  return (
    <div className="md:w-1/2">
      <h2 className="font-bold text-3xl text-center mb-3">
        Seguimiento a pacientes
      </h2>
      <p className="text-xl text-center">
        Añade Pacientes{' '}
        <span className="text-lime-500 font-bold">Adminístralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 shadow-sm shadow-slate-900 rounded-lg py-8 px-5 mt-7"
      >
        {error && <Error msg={'Todos los campos son obligatorios'} />}
        <div>
          <h2 className="mb-4 block text-center text-xl text-lime-500 uppercase font-bold">
            Datos de la Mascota {nombre}
          </h2>
          <input
            className="block w-full py-2 px-5 text-lime-500 rounded-md bg-slate-700 placeholder-lime-600 mb-6"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="block w-full py-2 px-5 text-lime-500 rounded-md bg-slate-700 placeholder-lime-600 mb-7"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
          <input
            className="block w-full py-2 px-5 text-lime-500 rounded-md bg-slate-700 placeholder-lime-600 mb-7"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="block w-full py-2 px-5 text-lime-500 rounded-md bg-slate-700 placeholder-lime-600 mb-7"
            type="date"
            placeholder="Fecha de alta"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <textarea
            placeholder="Describe los síntomas"
            className="block w-full py-2 px-5 text-lime-500 bg-slate-700 rounded-md placeholder-lime-600 mb-7"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <input
          className="bg-lime-600 uppercase py-1 px-3 text-slate-800 font-bold rounded-md hover:bg-lime-500 cursor-pointer transition-colors"
          value={patient.id ? 'Editar Paciente' : 'Agregar paciente'}
          type="submit"
        />
      </form>
    </div>
  );
};

export default MainForm;
