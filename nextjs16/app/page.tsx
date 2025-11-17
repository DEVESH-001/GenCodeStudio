import Link from "next/link";
import EventCard from "@/components/EventCard";
import { IEventData } from "@/database";
import { cacheLife } from "next/cache";
import { getAllEvents } from "@/lib/actions/events.actions";

async function Home() {
  "use cache";
  cacheLife("minutes");

  const events = await getAllEvents();

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <div className="text-center mt-7">
        <p className="mt-4 text-sm text-gray-600">
          <Link
            href="https://www.devesh.work/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Built by Devesh
          </Link>
        </p>
      </div>

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEventData) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
