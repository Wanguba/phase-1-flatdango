// Function to fetch and display movie details
function fetchMovieDetails() {
    // Make a GET request to the endpoint '/films/1'
    fetch('https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg/films/1')
      .then(response => response.json())
      .then(data => {
        // Update movie details on the page
        document.getElementById('movie-poster').src = data.poster;
        document.getElementById('movie-title').textContent = data.title;
        document.getElementById('movie-runtime').textContent = data.runtime;
        document.getElementById('movie-showtime').textContent = data.showtime;
        document.getElementById('movie-description').textContent = data.description;
        
        // Calculate available tickets by subtracting 'tickets_sold' from 'capacity'
        const availableTickets = data.capacity - data.tickets_sold;
        document.getElementById('available-tickets').textContent = availableTickets;
  
        // Handle "Buy Ticket" button click
        document.getElementById('buy-ticket').addEventListener('click', () => {
          if (availableTickets > 0) {
            // Decrease available tickets and update the display
            availableTickets--;
            document.getElementById('available-tickets').textContent = availableTickets;
          } else {
            // Tickets are sold out
            alert('Tickets are sold out for this show.');
          }
        });
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }
  
  // Call the function to fetch and display movie details when the page loads
  fetchMovieDetails();
  
