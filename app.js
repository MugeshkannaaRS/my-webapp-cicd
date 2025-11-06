cat > app.js << 'EOF'
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from Mugeshkannaa’s AWS CI/CD Pipeline!</h1>");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
EOF
