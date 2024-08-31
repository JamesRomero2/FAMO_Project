export const formatDateToday = () => {
    // Create a new Date object for the current date
    const today = new Date();
  
    // Array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Get the day of the month (1-31)
    const day = today.getDate();
  
    // Get the month (0-11), add 1 to get the correct month index
    const month = today.getMonth();
  
    // Get the full year (e.g., 2024)
    const year = today.getFullYear();
  
    // Format the date as "DD Month Name, Year"
    const formattedDate = `${day} ${monthNames[month]}, ${year}`;
  
    return formattedDate;
  }