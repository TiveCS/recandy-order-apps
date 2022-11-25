import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { DaftarMenu, OrderSchema } from "../..";
import ActionBar from "../../../components/ActionBar";
import MenuItem from "../../../components/MenuItem";

const orders: OrderSchema[] = [
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
];

export default function MejaPage() {
  const router = useRouter();
  const { nomor } = router.query;

  return (
    <div>
      <Head>
        <title>Recandy | Meja Nomor {nomor}</title>
      </Head>

      <ActionBar>Meja Nomor {nomor}</ActionBar>

      <main className="flex flex-col px-4 mt-4 space-y-6">
        <h4 className="text-xl font-medium">Daftar Pesanan</h4>

        <div className="flex flex-col space-y-4">
          {orders.map((order) => {
            const menu = DaftarMenu.find((m) => m.nama == order.name);

            return (
              <MenuItem
                key={order.name}
                nama={order.name}
                description={menu?.description}
                price={order.price}
                picture={menu?.picture}
                amounts={order.amount}
              />
            );
          })}
        </div>
      </main>

      <nav className="fixed bottom-0 grid w-full grid-cols-2 text-white bg-slate-100">
        <Link href={"/staff/meja"}>
          <div
            id="beverage"
            className="flex flex-col items-center p-4 text-green-800"
          >
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
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <p className="text-xs">Daftar Meja</p>
          </div>
        </Link>

        <Link href={`/staff/bayar/${nomor}`}>
          <div
            id="food"
            className="flex flex-col items-center w-full h-full p-4 bg-green-600"
          >
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
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>

            <p className="text-xs">Bayar Meja</p>
          </div>
        </Link>
      </nav>
    </div>
  );
}
