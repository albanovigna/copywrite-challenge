const server = require("./src/app.js");

const PORT = process.env.PORT || "3001";

server.listen(PORT, () => {
  console.log("%s listening at 3001"); // eslint-disable-line no-console
});
