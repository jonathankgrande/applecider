  function storeEventAndRedirect(title, date, time) {
    localStorage.setItem('eventTitle', title);
    localStorage.setItem('eventDate', date);
    localStorage.setItem('eventTime', time);
    window.location.href = 'confirmation.html';
  }
