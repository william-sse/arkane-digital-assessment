import { useEffect, useState } from "react";
import { fetchEvents } from "../api/mock";

export const useEventListFetch = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const eventList = await fetchEvents();
      setEvents(eventList);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return [events, loading, error, fetch];
};
