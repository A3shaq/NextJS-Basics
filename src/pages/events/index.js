import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/mock/dummyData";

function AllEvents() {
  const allEvents = getAllEvents();
  console.log({ allEvents });
  return (
    <>
      <EventList events={allEvents} />
    </>
  );
}

export default AllEvents;
