export const dateETA = (date1: Date) => {

    const date2 = new Date();
  
  
    let diffInMilliseconds = date2.getTime() - date1.getTime();
    const coming = diffInMilliseconds < 0;
  
    if (coming) {
      diffInMilliseconds *= -1;
    }
  
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const millisecondsInAnHour = 1000 * 60 * 60;
    const millisecondsInAMinute = 1000 * 60;
    const millisecondsInASecond = 1000;
  
  
    const hours = Math.floor((diffInMilliseconds % millisecondsInADay) / millisecondsInAnHour);
    const minutes = Math.floor((diffInMilliseconds % millisecondsInAnHour) / millisecondsInAMinute);
    const seconds = Math.floor((diffInMilliseconds % millisecondsInAMinute) / millisecondsInASecond);
  
    let response = "(";
  
    if (coming) {
      response += "In ";
      response += hours ? `${hours} hours` : minutes ? `${minutes} minutes` : `${seconds} seconds`;
    }
    else {
      response += hours ? `${hours} hours ` : minutes ? `${minutes} minutes ` : `${seconds} seconds `;
      response += "ago";
    }
    response += ")";
    return response;
  }
  
export  const getDateTime = (date: Date) => {
    const isMorning = date.getHours() < 12;
    const hours = date.getHours() !== 0 ? date.getHours().toString().padStart(2, '0') : '12';
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes} ${isMorning ? 'AM' : 'PM'}`;
  
  }