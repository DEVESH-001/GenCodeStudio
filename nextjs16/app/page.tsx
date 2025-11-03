import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

function Home() {
  return (
    <section>
      <h1>
        The Hub for Every Developer <br /> Connect, Learn, and Share
      </h1>
      <p>Hackathons, Meetups, and Workshops await you!</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event.title}>
              <EventCard
                title={event.title}
                image={event.image}
                slug={event.slug}
                location={event.location}
                date={event.date}
                time={event.time}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
