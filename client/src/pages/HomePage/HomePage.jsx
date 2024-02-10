import Sidebar from "./Sidebar";
import Summary from "./Summary";
import ItemList from "./ItemList";

const HomePage = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/5">
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
