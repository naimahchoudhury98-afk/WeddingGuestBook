# WeddingGuestBook

What requirements did you achieve?

I achieved a working full stack guestbook with a Vite client and an Express server. I created GET and POST routes to retrieve and store messages in a Supabase PostgreSQL database. I also ensured the form submits data correctly and the layout works on different screen sizes using responsive design and a media query. I seeded the database with realistic dummy data for testing.

Were there any requirements or goals you were unable to achieve?

I achieved the core requirements. I did not implement the “like” functionality (stretch goal).

If so, what was difficult about these tasks?

The most challenging part was debugging client–server communication, especially when POST requests failed due to sending the request body in the wrong format. I fixed this by ensuring JSON was sent correctly with the appropriate Content-Type header and by testing routes using Postman.

Optional reflections

What went well: Setting up the server routes and connecting to Supabase, then displaying the data in the DOM.

What could be improved: Adding more stretch features like likes and more advanced form validation.

Bugs encountered and how I solved them: req.body being undefined during POST, which was resolved by sending raw JSON and using express.json()