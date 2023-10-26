export const Event = ({ event }) => {
  return (
    <div className="event-card" data-testid="event-item">
      {/* Display event details */}
      <h2>{event.title}</h2>
      <p className="event-type">{event.type}</p>
      <p className="event-description">{event.description}</p>

      {/* Display formatted dates */}
      <p className="event-date" key={event.date}>
        {new Date(event.date).toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
        })}
      </p>

      {/* Display event image */}
      <img className="event-image" src={event.image} alt="Event" />
    </div>
  );
};
