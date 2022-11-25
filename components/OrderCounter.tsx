import { useState } from "react";
import { OrderSchema } from "../pages";
import Button from "./Button";

export interface OrderCounterProps {
  nama: string;
  price: number;
  amounts?: number;
  updateOrder?: (order: OrderSchema) => void;
}

export default function OrderCounter({
  updateOrder,
  nama,
  price,
  amounts = 0,
}: OrderCounterProps) {
  const [amount, setAmount] = useState(amounts);

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!updateOrder) return;

    setAmount(amount + 1);

    updateOrder({
      name: nama,
      price: price,
      amount: amount + 1,
    });
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!updateOrder) return;

    setAmount(amount - 1);

    updateOrder({
      name: nama,
      price: price,
      amount: amount - 1,
    });
  };

  return (
    <div className="flex flex-row items-end justify-between">
      {amount == 0 || !updateOrder ? (
        <Button
          variant={updateOrder ? "outline" : "disabled"}
          size="sm"
          onClick={handleIncrement}
        >
          {updateOrder ? "Tambah" : amounts + "x"}
        </Button>
      ) : (
        <>
          <button className="btn-icon btn-outline" onClick={handleDecrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>

          <span className="text-base font-semibold">{amount}</span>

          <button className="btn-icon btn-outline" onClick={handleIncrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
