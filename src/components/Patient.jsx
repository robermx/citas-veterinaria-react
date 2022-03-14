import ButtonDelete from './buttons/ButtonDelete';
import ButtonEdit from './buttons/ButtonEdit';

const Pacient = ({ patient, setPatient, deletePatient }) => {
  const { nombre, propietario, email, date, message, id } = patient;

  return (
    <div className="bg-slate-800 shadow-sm shadow-slate-900 rounded-lg py-8 px-5 mt-7 mb-10 ">
      <p className="font-bold mb-3 uppercase">
        Nombre:{' '}
        <span className="text-lime-500 font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Propietario:{' '}
        <span className="text-lime-500 font-normal normal-case">
          {propietario}
        </span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Correo:{' '}
        <span className="text-lime-500 font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Fecha de alta:{' '}
        <span className="text-lime-500 font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 uppercase">
        Comentarios:{' '}
        <span className="text-lime-500 font-normal normal-case">{message}</span>
      </p>
      <div className="flex justify-around">
        <ButtonEdit setPatient={setPatient} patient={patient} />
        <ButtonDelete deletePatient={deletePatient} id={id} />
      </div>
    </div>
  );
};

export default Pacient;
