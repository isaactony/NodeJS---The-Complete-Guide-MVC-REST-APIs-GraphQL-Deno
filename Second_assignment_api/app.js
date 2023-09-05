const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const AllRoutes = require("./routes/index");


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(AllRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
