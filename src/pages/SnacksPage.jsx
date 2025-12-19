import { useContext, useState } from "react";
import { CanteenContext } from "../context/CanteenContext";
import SnackCard from "../components/SnackCard";
import OrderForm from "../components/OrderForm";

function SnacksPage() {
  const { snackList } = useContext(CanteenContext);
  const [selectedSnack, setSelectedSnack] = useState(null);

  const handleOrderClick = (snack) => {
    setSelectedSnack(snack);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Available Snacks
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {snackList.map((snack) => (
            <SnackCard
              key={snack.id}
              snack={snack}
              onOrder={handleOrderClick}
            />
          ))}
        </div>

        {/* Order form */}
        {selectedSnack && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="w-full max-w-md">
            <OrderForm
                snack={selectedSnack}
                onClose={() => setSelectedSnack(null)}
            />
            </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default SnacksPage;
