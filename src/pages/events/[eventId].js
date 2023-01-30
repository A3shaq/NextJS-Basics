import { getEventById } from "@/mock/dummyData";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  // useEffect(() => {

  //     console.log({event})

  // },[]);
  const event = getEventById(eventId);

  console.log({ event });
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.url}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailsPage;
