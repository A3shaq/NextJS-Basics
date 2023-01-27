import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import classes from "./event-item.module.css"

function EventItem(props) {
  const { id, url, title, location, date } = props.item;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.item}>
      <img alt="No Image Founded" src={url} width="200" height={"100"}  />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={`/events/${id}`}>Explore Event</Link> */}
          <Button link={`/events/${id}`}>Explore Events</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
