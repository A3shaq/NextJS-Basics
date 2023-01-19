import { useRouter } from "next/router";
function PorductDetails() {
    const {query} = useRouter()
  return <h1>Product Details About Page {query.productId}</h1>;
}

export default PorductDetails;
