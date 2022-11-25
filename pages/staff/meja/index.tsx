import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { OrderSchema } from "../..";
import ActionBar from "../../../components/ActionBar";
import StaffMenuCard from "../../../components/StaffMenuCard";

export type MejaSchema = {
  number: number;
  hasCustomer: boolean;
  orders: OrderSchema[];
};

export default function LihatMejaPage() {
  const [tables, setTables] = useState<MejaSchema[]>([
    {
      number: 1,
      hasCustomer: false,
      orders: [],
    },
    {
      number: 2,
      hasCustomer: true,
      orders: [
        {
          name: "Nasi Goreng",
          price: 10000,
          amount: 1,
        },
        {
          name: "Es Teh",
          price: 3000,
          amount: 1,
        },
      ],
    },
    {
      number: 3,
      hasCustomer: false,
      orders: [],
    },
    {
      number: 4,
      hasCustomer: false,
      orders: [],
    },
    {
      number: 5,
      hasCustomer: false,
      orders: [],
    },
    {
      number: 6,
      hasCustomer: true,
      orders: [],
    },
    {
      number: 7,
      hasCustomer: true,
      orders: [],
    },
    {
      number: 8,
      hasCustomer: false,
      orders: [],
    },
  ]);

  return (
    <div>
      <Head>
        <title>Recandy | Lihat Meja</title>
      </Head>

      <ActionBar>Lihat Meja</ActionBar>

      <div id="search" className="w-full px-6 py-4">
        <input
          type="text"
          placeholder="Cari meja..."
          className="w-full px-4 py-2 text-green-800 border rounded-md outline-none border-emerald-600"
        />
      </div>

      <main className="relative grid grid-cols-2 px-6 mt-8 overflow-y-auto place-items-center gap-y-6 max-h-102">
        {tables.map((table) => (
          <StaffMenuCard
            key={table.number}
            title={table.hasCustomer ? "Tidak Kosong" : "Kosong"}
            href={`/staff/meja/${table.number}`}
            variant={table.hasCustomer ? "solid" : "outline"}
          >
            {table.number}
          </StaffMenuCard>
        ))}
      </main>

      <nav className="fixed bottom-0 grid w-full grid-cols-1 px-4 py-4 text-white bg-green-700">
        <Link href={"/staff"}>
          <div id="beverage" className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <p className="text-xs">Menu Staff</p>
          </div>
        </Link>
      </nav>
    </div>
  );
}
