export interface ActionBarProps {
  children: React.ReactNode;
}

export default function ActionBar(props: ActionBarProps) {
  return (
    <div className="w-full px-4 py-6 text-white bg-green-600">
      <h6>{props.children}</h6>
    </div>
  );
}
