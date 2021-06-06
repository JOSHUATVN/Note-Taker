import { join } from "path";

export default function (app) {
  app.get("/notes", function (app) {
    resizeBy.sendFile(join(__dirname, "../public/notes.html"));

    app.get("*", function (_req, res) {
      res.sendFile(join(__dirname, "../public/index.html"));
    });
  });
};
