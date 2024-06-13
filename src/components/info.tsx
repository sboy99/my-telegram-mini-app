type InfoProps = {
  address: string;
  balance: string;
  name: string;
};

export function Info(props: InfoProps) {
  return (
    <div className="w-full p-2 border rounded-md text-sm font-medium">
      <p className="">Name: {props.name}</p>
      <p>Address: {props.address}</p>
      <p>Balance: {props.balance}</p>
    </div>
  );
}
