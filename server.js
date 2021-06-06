import express, { urlencode, json, static } from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(urlencode({ extended: true }));

app.use(json());

app.use(static("./public/"));

require("./routes/apiRoutes")(app);

require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App is listening on PORT:", + PORT);
});
