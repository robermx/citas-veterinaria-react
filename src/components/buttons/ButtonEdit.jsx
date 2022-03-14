const ButtonEdit = ({ setPatient, patient }) => {
  const handleClick = () => {
    setPatient(patient);
  };

  return (
    <button
      className="py-2 px-5 bg-lime-600 font-bold uppercase text-slate-800 mt-5 rounded-md hover:bg-lime-500 transition-colors"
      type="button"
      onClick={handleClick}
    >
      Editar
    </button>
  );
};

export default ButtonEdit;
