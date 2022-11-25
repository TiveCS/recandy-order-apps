export interface HeaderProps {
  tableNumber: number;
}

export default function Header(props: HeaderProps) {
  return (
    <nav className="px-4 py-4 text-gray-100 bg-green-600">
      <p className="text-sm">Pemesanan</p>
      <p className="text-xl font-semibold">Meja No. {props.tableNumber}</p>
    </nav>
  );
}
