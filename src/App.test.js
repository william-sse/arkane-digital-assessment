import React from "react";
import { render, screen } from "@testing-library/react";
import { EventList } from "./components/EventList";
import { fetchEvents } from "./api/mock";

jest.mock("./api/mock");

describe("EventList", () => {
  test("renders loading message when data is being fetched", () => {
    render(<EventList />);
    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  test("renders event list when data is fetched", async () => {
    const mockData = [
      {
        id: 1,
        title: "Event 1",
        date: "2023-10-23T23:00:00Z",
        description: "Description 1",
        image:
          "https://media.licdn.com/dms/image/D560BAQErBjyaOajwyA/company-logo_200_200/0/1694450933877?e=1706140800&v=beta&t=oc9ocXPUuYeBAju6A-letIDlmeEkmeOULBWfPbYqw1o",
      },
      {
        id: 2,
        title: "Event 2",
        date: "2023-09-23T23:00:00Z",
        description: "Description 2",
        image:
          "https://media.licdn.com/dms/image/D560BAQErBjyaOajwyA/company-logo_200_200/0/1694450933877?e=1706140800&v=beta&t=oc9ocXPUuYeBAju6A-letIDlmeEkmeOULBWfPbYqw1o",
      },
    ];
    fetchEvents.mockResolvedValue(mockData);

    render(<EventList />);

    // Wait for the data to be fetched
    const eventItems = await screen.findAllByTestId("event-item");

    expect(eventItems).toHaveLength(2);
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();
  });
});
