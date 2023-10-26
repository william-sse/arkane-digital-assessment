const data = [
  {
    Title: "Beethoven's Greatest Works",
    Type: "Master’s Performance",
    Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],
    Image:
      "https://media.licdn.com/dms/image/D560BAQErBjyaOajwyA/company-logo_200_200/0/1694450933877?e=1706140800&v=beta&t=oc9ocXPUuYeBAju6A-letIDlmeEkmeOULBWfPbYqw1o",
    Description: "Come witness this amazing performance.",
  },
];

export function fetchEvents() {
  return new Promise((resolve) =>
    setTimeout(() => {
      const events = data.reduce((cur, event) => {
        const {
          Title: title,
          Type: type,
          Dates: dates,
          Image: image,
          Description: description,
        } = event;
        for (let date of dates) {
          cur.push({
            title,
            type,
            date,
            image,
            description,
          });
        }
        return cur;
      }, []);
      resolve(events);
    }, 1000)
  );
}
