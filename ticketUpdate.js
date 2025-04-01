  const ticketInput = document.getElementById('ticketInput');
  const ticketPrice = document.getElementById('ticketPrice');
  const pricePerTicket = 0;

  function updateTickets(change) {
    let current = parseInt(ticketInput.value);
    current += change;

    if (current < 1) current = 1; // minimum of 1 ticket
    if (current > 10) current = 4; // max limit

    ticketInput.value = current;
    ticketPrice.textContent = `$${(current * pricePerTicket).toFixed(2)}`;
  }

  updateTickets(0);
