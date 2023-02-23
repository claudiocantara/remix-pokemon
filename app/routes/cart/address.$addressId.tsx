import { useParams } from "react-router";

export default function AddressId() {
  const data = useParams();
  return <div>I'm the address Id {data?.addressId}</div>;
}
