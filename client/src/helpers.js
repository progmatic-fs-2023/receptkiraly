function convertIsoTimestampToDate(isoTimestamp) {
  const dateObject = new Date(isoTimestamp);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const formattedDate = dateObject.toLocaleDateString('en-US', options);
  return formattedDate;
}

export default convertIsoTimestampToDate;
