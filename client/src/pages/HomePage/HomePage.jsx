import Sidebar from "./Sidebar";
import Summary from "./Summary";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import tagState from "../../store/atoms/tags";
import categoriesState from "../../store/atoms/categories";
import axios from "axios";
import BASE_URL from "../../../config";

const HomePage = () => {
  const url = (path) => `${BASE_URL}${path}`;
  const setTags = useSetRecoilState(tagState);
  const setCategories = useSetRecoilState(categoriesState);

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

    const fetchTags = async () => {
      try {
        const response = await axios.get(url("/api/tags/"));
        console.log(response.data);
        setTags(response.data);
      } catch (error) {
        console.error("Error fetching tags");
      }
    };

    fetchCategories();
    fetchTags();
  }, []);
  return (
    <div className="w-full flex">
      <div className="w-1/5 h-screen bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex flex-col w-4/5 p-8">
        <Summary />
        <ItemList />
      </div>
    </div>
  );
};

export default HomePage;
