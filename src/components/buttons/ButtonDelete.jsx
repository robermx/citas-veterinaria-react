import React from 'react';

const ButtonDelete = ({ deletePatient, id }) => {
  const handleDelete = () => {
    const response = confirm('seguro que deseas eliminar este paciente');
    if (response) {
      deletePatient(id);
    }
  };

  return (
    <button
      className="py-2 px-5 bg-red-500 font-bold uppercase mt-5 rounded-md hover:bg-red-600 transition-colors"
      type="button"
      onClick={handleDelete}
    >
      Eliminar
    </button>
  );
};

export default ButtonDelete;
