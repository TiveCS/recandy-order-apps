import Image from "next/image";
import { OrderSchema } from "../pages";
import OrderCounter from "./OrderCounter";

export interface MenuItemProps {
  nama: string;
  description?: string;
  price: number;
  picture?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  amounts?: number;

  updateOrder?: (order: OrderSchema) => void;
}

const formatRupiah = (price: number) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
};

export default function MenuItem(props: MenuItemProps) {
  return (
    <div className="grid grid-cols-4">
      <div className="relative w-20 h-20">
        {props.picture && (
          <Image
            src={props.picture}
            alt={props.nama}
            fill
            className="rounded-lg shadow"
            sizes="100%"
          />
        )}
      </div>

      <div className="col-span-2 ml-4">
        <div>
          <h6 className="text-base font-semibold">{props.nama}</h6>
          <p className="text-xs font-normal text-gray-700">
            {props.description}
          </p>
        </div>

        <p className="mt-3 text-sm font-medium">{formatRupiah(props.price)}</p>
      </div>

      <OrderCounter
        nama={props.nama}
        price={props.price}
        updateOrder={props.updateOrder}
        amounts={props.amounts}
      />
    </div>
  );
}
