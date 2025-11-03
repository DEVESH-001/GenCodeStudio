export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string; // ISO date string (YYYY-MM-DD)
  time: string; // Human-readable local time label
};

// Real popular developer events and hackathons.
// Image paths map to files in /public/images.
export const events: EventItem[] = [
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "2025-12-01",
    time: "09:00 AM PT",
  },
  {
    title: "Google I/O 2026",
    image: "/images/event2.png",
    slug: "google-io-2026",
    location: "Mountain View, CA, USA",
    date: "2026-05-12",
    time: "10:00 AM PT",
  },
  {
    title: "Microsoft Build 2026",
    image: "/images/event3.png",
    slug: "microsoft-build-2026",
    location: "Seattle, WA, USA",
    date: "2026-05-20",
    time: "09:00 AM PT",
  },
  {
    title: "KubeCon + CloudNativeCon North America 2025",
    image: "/images/event4.png",
    slug: "kubecon-na-2025",
    location: "Austin, TX, USA",
    date: "2025-11-18",
    time: "09:00 AM CT",
  },
  {
    title: "React Conf 2026",
    image: "/images/event5.png",
    slug: "react-conf-2026",
    location: "Las Vegas, NV, USA",
    date: "2026-03-10",
    time: "10:00 AM PT",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event6.png",
    slug: "pycon-us-2026",
    location: "Portland, OR, USA",
    date: "2026-04-22",
    time: "09:30 AM PT",
  },
  {
    title: "ETHGlobal Hackathon Series 2026",
    image: "/images/event-full.png",
    slug: "ethglobal-2026",
    location: "Global / Online",
    date: "2026-02-07",
    time: "12:00 PM UTC",
  },
];
