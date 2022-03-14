import Patient from './Patient';

const ListPatients = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-bold text-3xl text-center mb-3">
            Lista de Pacientes
          </h2>
          <p className="text-xl text-center">
            Administra a:{' '}
            <span className="text-lime-500 font-bold">tus pacientes</span>
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-3xl text-center mb-3">
            No hay pacientes
          </h2>
          <p className="text-xl text-center">
            Agerga pacientes:{' '}
            <span className="text-lime-500 font-bold">Crea una lista</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListPatients;
