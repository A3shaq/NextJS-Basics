import EventList from "@/components/events/EventList";
import { getfeaturedEvents } from "@/mock/dummyData";
import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const featuredEvents = getfeaturedEvents();
  const { push } = useRouter();
  function handleClick() {
    console.log("Your order is confirm!");
    push("/product");
  }
  return (
    <>
      <h1>Home Page</h1>
      <EventList events={featuredEvents} />
      {/* <Link href={"/blog"}>Blog</Link>
      <p>
        <Link href={"/product"}>Products</Link>
      </p>
      <button onClick={handleClick}>Place Order</button> */}
    </>
  );
}

export default Home;
