import Image from "next/image";
import Link from "next/link";

function EventItem(props) {
  const { id, url, title, location } = props;
  return (
    <li>
      <Image alt="No Image Founded" src={url} />

      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time>DATE</time>
          </div>
          <div>
            <address>ADDRESS</address>
          </div>
        </div>
        <div>
          <Link href={"/"}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
