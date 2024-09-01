export const formatMySQLTimestampToDate = (mysqlTimestamp) => {
  const date = new Date(mysqlTimestamp);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
}