const Summary = () => {
  return (
    <div className="h-1/3">
      <div className="flex h-3/5">
        <div className="h-4/5 w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">Item Dashboard</h1>
          <span className="text-lg">All items</span>
        </div>
        <div className="flex flex-col w-1/2 justify-center">
          <div>
            <span>Total Categories</span>
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <span>Total Items</span>
          </div>
        </div>
      </div>
      <div>
        <button className="text-white bg-green-600 shadow-lg p-3 rounded-lg">
          NEW ITEM CATEGORY
        </button>
      </div>
    </div>
  );
};

export default Summary;
