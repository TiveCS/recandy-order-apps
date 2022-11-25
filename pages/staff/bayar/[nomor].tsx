import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { calculateTotal, OrderSchema } from "../..";
import ActionBar from "../../../components/ActionBar";
import Button from "../../../components/Button";

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

export default function BayarPage() {
  const router = useRouter();
  const { nomor } = router.query;

  return (
    <div>
      <Head>
        <title>Recandy | Bayar Meja Nomor {nomor}</title>
      </Head>

      <ActionBar>Pembayaran Meja {nomor}</ActionBar>

      <main className="px-4 py-4">
        <h1 className="mb-8">Data Pembayaran</h1>

        <section>
          {orders.map((order) => {
            return (
              <div
                key={order.name}
                className="grid grid-cols-4 space-y-3 text-sm place-items-baseline"
              >
                <h4 className="col-span-2 font-medium">{order.name}</h4>
                <p>({order.amount}x)</p>
                <p className="text-sm font-medium text-green-800">
                  Rp. {order.price}
                </p>
              </div>
            );
          })}
        </section>
      </main>

      <nav className="fixed bottom-0 flex flex-col w-full px-4 pt-8 pb-12 space-y-4 border bg-slate-50">
        <div className="flex flex-row justify-between mb-4">
          <h4 className="text-base">Subtotal:</h4>
          <p className="text-lg text-green-800">Rp. {calculateTotal(orders)}</p>
        </div>

        <Link href={``}>
          <Button variant="primary">Setujui Pembayaran</Button>
        </Link>

        <Link href={`/staff/meja/${nomor}`}>
          <Button variant="outline">Kembali</Button>
        </Link>
      </nav>
    </div>
  );
}
