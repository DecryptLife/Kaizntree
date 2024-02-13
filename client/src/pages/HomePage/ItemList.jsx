import { useEffect, useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

import AddItemWindow from "./AddItemWindow";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../store/atoms/model";
import categoriesState from "../../store/atoms/categories";
import itemsState from "../../store/atoms/items";

const ItemList = () => {
  const [showList, setShowList] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const [items, setItems] = useRecoilState(itemsState);
  const categories = useRecoilValue(categoriesState);

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  console.log(items);

  function changeItemsView() {
    setShowList((prevState) => !prevState);
  }

  const toggleOptions = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  const handleSelectAllClick = (e) => {
    // handleCheckboxChange();
    if (e.target.checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleRowClick = (id) => {
    // handleCheckboxChange();
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const isItemSelected = (id) => {
    return selectedItems.includes(id);
  };

  const areAllSelected = () => {
    return items.length > 0 && selectedItems.length === items.length;
  };

  useEffect(() => {
    if (selectedItems.length > 0) {
      setItemSelected(true);
    } else {
      setItemSelected(false);
    }
  }, [selectedItems]);

  function ItemListContentDetails() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="item-list">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={areAllSelected()}
                  onChange={handleSelectAllClick}
                />
              </th>
              <th className="item-list-header">SKU</th>
              <th className="item-list-header">Name</th>
              <th className="item-list-header">Tags</th>
              <th className="item-list-header">Category</th>
              <th className="item-list-header">In Stock</th>
              <th className="item-list-header">Available Stocks</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="item-list">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={isItemSelected(item.id)}
                    onChange={() => handleRowClick(item.id)}
                  />
                </td>
                <td className="item-list">{item.sku}</td>
                <td className="item-list">{item.name}</td>
                <td className="item-list">{item.tags}</td>
                <td className="item-list">{item.category}</td>
                <td className="item-list">{item.in_stock}</td>
                <td className="item-list">{item.available_stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="h-2/3">
      <div className="flex justify-between h-12 bg-zinc-300 p-2 rounded-lg shadow">
        <div>
          <span>{categories.length} Subcategories</span>
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
          <div className="flex  p-4">
            {/* buttons */}
            <div className="flex items-center">
              <div>
                <button
                  className="text-white bg-green-600 p-3 px-8 rounded-lg shadow-md"
                  onClick={() => setIsModalOpen(true)}
                >
                  NEW ITEM
                </button>
              </div>
              <div>
                <button
                  className={`p-3 px-8 ml-8 shadow-md rounded-lg ${
                    itemSelected
                      ? "bg-zinc-200 hover:bg-zinc-300"
                      : "bg-zinc-100 cursor-not-allowed"
                  }`}
                  disabled={!itemSelected}
                  onClick={toggleOptions}
                >
                  OPTIONS
                </button>

                {isOptionsOpen && itemSelected && (
                  <div
                    className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      {/* Option items */}
                      <button
                        className="text-gray-700 block w-full text-left px-4 py-2 font-bold text-sm hover:bg-gray-100"
                        role="menuitem"
                      >
                        Update
                      </button>
                      <button
                        className="text-gray-700 block w-full text-left px-4 py-2 font-bold text-sm hover:bg-gray-100"
                        role="menuitem"
                      >
                        Delete
                      </button>
                      {/* ... more options here */}
                    </div>
                  </div>
                )}
              </div>
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
      {isModalOpen && <AddItemWindow />}
    </div>
  );
};

export default ItemList;
