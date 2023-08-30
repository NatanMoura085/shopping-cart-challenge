const Modal = ({ name, image, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-40">
      <table className="w-full">
        <tbody>
          <tr>
            <td colSpan="2" className="text-center mb-2">
              <img src={image} alt={name} className="w-20 h-0 mx-auto rounded-full" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center text-gray-800 font-semibold">
              {name}
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center text-gray-600">
              ${price}
            </td>
          </tr>
          <tr>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Modal;
