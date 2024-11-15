export  function dateFormatter(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return formattedDate
}