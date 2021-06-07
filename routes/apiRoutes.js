const fs = require("fs");

module.exports = function (app) {
  let notes = require("./db/db.json");

  app.get("api/notes", (req, res) => {
    return res.json(notes);
  });

  app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let base;
    notes.forEach((i) => {
      if (id === i.id) {
        base = i;
        return res.json(i);
      }
    });
    return res.json(false);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    if (notes.length === 0) {
      newNote.id = 1;
    } else {
      newNote.id = notes[notes.length - 1].id + 1;
    }
    notes.push(newNote);
    let stringifyNotes = JSON.stringify(notes);
    fs.writeFile("./db/db.json", stringifyNotes, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success");
    });
    res.json(true);
  });

  app.delete("/api/notes/:id", (req, res) => {
      const id = req.params.id;
      let base;
      notes.forEach((i, index) => {
          if(id === i.id) {
              notes.splice(index, 1);
              const copyNote = notes.slice();
              let stringifyNotes = JSON.stringify(copyNote);
              fs.writeFile("./db/db.json", stringifyNotes, function (err) {
                  if(err) {
                      return console.log(err);
                  }
                  console.log("Success");
              });
          };
      });
      res.json(true);
  });
};
