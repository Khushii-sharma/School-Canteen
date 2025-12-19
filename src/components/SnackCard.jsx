function SnackCard({ snack, onOrder }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {snack.name}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Price: ₹{snack.price}
          </p>
          <p className="text-sm text-slate-500">
            Orders: {snack.ordersCount}
          </p>
        </div>

        <button
          onClick={() => onOrder(snack)}
          className="text-sm font-medium px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-pink-100 transition-colors"
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default SnackCard;
