import { CalendarFold, CalendarHeart, CalendarOff } from "lucide-react";

export default function DashboardEvents() {
  const noEvents = true;
  return (
    <div className="flex flex-col h-56 gap-3 bg-white/80 p-3 rounded-xl">
      <div className="flex text-slate-400 gap-1 mb-3">
        <CalendarHeart size={18} />
        <h1 className="font-bold text-sm">Upcoming Events</h1>
      </div>
      {noEvents ? (
        <div className="h-full flex flex-col items-center-safe justify-center-safe">
          <CalendarOff size={40} className="text-slate-400" />
          <span className="text-slate-400 text-xs">
            There are no upcoming events
          </span>
        </div>
      ) : (
        <div className="h-full flex flex-col gap-3">
          <EventCard
            title="Mafunzo ya Vijana"
            category="TRAINING"
            date="20 May"
            year="2026"
          />
          <EventCard
            title="TAMPRO Walk"
            category="FUNDRAISING"
            date="212 Aug"
            year="2026"
          />
          <EventCard
            title="TAMPRO Iftar"
            category="NETWORKING"
            date="20 Jul"
            year="2026"
          />
        </div>
      )}
    </div>
  );
}

function EventCard({
  title,
  category,
  date,
  year,
}: {
  title: string;
  category: string;
  date: string;
  year: string;
}) {
  return (
    <div className="flex items-center-safe p-1 gap-2 cursor-pointer hover:bg-gray-400/10 rounded-lg">
      <div className="bg-gray-400/10 p-1 rounded-lg">
        <CalendarFold size={25} className="text-gray-400" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col">
          <span className="line-clamp-1 text-xs">{title}</span>
          <span className="line-clamp-1 text-xs font-bold">{category}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs">{date}</span>
        <span className="text-xs">{year}</span>
      </div>
    </div>
  );
}
