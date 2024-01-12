export function parseCustomDate(dateString: string): Date | null {
  const dateParts = dateString.match(/(\w+) (\d+)(?:st|nd|rd|th), (\d+)/);

  if (!dateParts) {
    // Handle invalid date string
    console.error("Invalid date string:", dateString);
    return null;
  }
  const month = dateParts[1];
  const day = parseInt(dateParts[2]);
  const year = parseInt(dateParts[3]);

  const dateObject = new Date(`${month} ${day}, ${year}`);

  if (isNaN(dateObject.getTime())) {
    // Handle invalid Date object
    console.error("Invalid Date object for date string:", dateString);
    return null;
  }

  return dateObject;
}
