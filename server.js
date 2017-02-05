const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8888;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`==> Express server is up on port ${PORT}`);
});
