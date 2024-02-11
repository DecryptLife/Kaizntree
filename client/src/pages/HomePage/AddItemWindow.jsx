import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalState } from "../../store/atoms/model";
const AddItemWindow = () => {
  const setModalState = useSetRecoilState(modalState);
  const [formData, setFormData] = useState({
    sku: "",
    email: "",
    // ... add more fields as necessary
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission of the data to your database
    console.log(formData);
    setModalState(false); // Close the modal after submit
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg text-center font-bold mb-4">
          ENTER ITEM DETAILS
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="sku"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="SKU"
            className="block w-full p-2 border rounded mb-3"
          />
          <input
            type="text"
            name="name"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Name"
            className="block w-full p-2 border rounded mb-3"
          />

          <input
            type="text"
            name="tags"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Tags"
            className="block w-full p-2 border rounded mb-3"
          />

          <input
            type="text"
            name="category"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Category"
            className="block w-full p-2 border rounded mb-3"
          />

          <input
            type="text"
            name="category"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="In Stock"
            className="block w-full p-2 border rounded mb-3"
          />

          {/* Add more input fields as needed */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
            >
              ADD ITEM
            </button>
            <button
              type="button"
              onClick={() => setModalState(false)}
              className="px-4 py-2 ml-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemWindow;
