import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalState } from "../../store/atoms/model";
import axios from "axios";
import BASE_URL from "../../../config";

const AddItemWindow = () => {
  const url = (path) => `${BASE_URL}${path}`;
  const setModalState = useSetRecoilState(modalState);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    sku: "",
    email: "",
    category: "",
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(url("/api/category/"));
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, []);

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
            value={formData.sku}
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

          <select
            multiple
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="Tags"
            className="block w-full p-2 border rounded mb-3"
          />

          <select
            type="select"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="block w-full p-2 border rounded mb-3"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>

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
