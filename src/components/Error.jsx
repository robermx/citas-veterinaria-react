const Error = ({ msg }) => {
  return (
    <div className="bg-red-700 p-2 text-center font-bold mb-3 rounded-md">
      <p>{msg}</p>
    </div>
  );
};

export default Error;
