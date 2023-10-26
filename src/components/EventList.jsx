import React, { useEffect, useState } from "react";
import { fetchEvents } from "../api/mock";
import { Event } from "./Event";
import { Loading } from "./Loading";
import "../styles/styles.css";
import { useEventListFetch } from "../hooks/useEventListFetch";

export const EventList = () => {
  const [events, loading] = useEventListFetch();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1 class="heading">Bob's Orchestra Hall</h1>
      <div className="event-listing">
        {events.map((event, k) => (
          <Event event={event} key={k} />
        ))}
      </div>
    </>
  );
};
