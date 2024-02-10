import { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

const ItemList = () => {
  const [showList, setShowList] = useState(true);

  function changeItemsView() {
    setShowList((prevState) => !prevState);
  }

  function ItemListContentDetails() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="item--list">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="item-list">SKU</th>
              <th className="item-list">Name</th>
              <th className="item-list">Tags</th>
              <th className="item-list">Category</th>
              <th className="item-list">In Stock</th>
              <th className="item-list">Available Stocks</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }

  return (
    <div className="h-2/3">
      <div className="flex justify-between h-12 bg-zinc-300 p-2 rounded-lg shadow">
        <div>
          <span>4 Subcategories</span>
        </div>
        <div>
          {showList ? (
            <ChevronUpIcon className="h-5 w-5" onClick={changeItemsView} />
          ) : (
            <ChevronDownIcon className="h-5 w-5" onClick={changeItemsView} />
          )}
        </div>
      </div>
      {showList && (
        <div className="flex flex-col px-4 shadow-lg">
          {/* List Items Header */}
          <div className="flex  items-center justify-between  p-4">
            {/* buttons */}
            <div>
              <button className="text-white bg-green-600 p-3 px-8 rounded-lg shadow-md">
                NEW ITEM
              </button>
              <button className="bg-zinc-200 p-3 px-8 ml-8 shadow-md rounded-lg">
                OPTIONS
              </button>
            </div>
            {/* additional features */}
            <div className="flex">
              <div className="flex space-x-4">
                <input className="px-4 py-2" type="text" placeholder="Search" />
                <button className="px-4 text-gray-700">
                  <MagnifyingGlassIcon className="w-12 h-12" />
                </button>
              </div>
              <div className="flex space-x-2">
                <ChartBarIcon className="w-12 h-12" />
                <FunnelIcon className="w-12 h-12" />
              </div>
            </div>
          </div>
          {/* List Items */}
          <ItemListContentDetails />
        </div>
      )}
    </div>
  );
};

export default ItemList;
