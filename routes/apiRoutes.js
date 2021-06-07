let { notes } = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const { uuid } = require("uuid");


function addNotes(body, listOfNotes) {
  const addNote = body;
  listOfNotes.push(addNote);

  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: listOfNotes }, null, 2)
  );
  return addNote;
}

function notesId(id, listOfNotes) {
  for (let i = 0; i < listOfNotes.length; i++) {
    if (listOfNotes[i].id === id) {
      return i;
    }
  }
}

function deleteNote(id, listOfNotes) {
  const index = notesId(id, listOfNotes);
  listOfNotes.splice(index, 1);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  return id;
}

router.get("/notes", (req, res) => {
  res.json(notes);
});
router.post("/notes", (req, res) => {
  let addNote = newNote(req.body, notes);
  console.log(addNote);
  res.json(addNote);
});
router.delete("/notes/id:", (req, res) => {
  const id = req.params.id;
  res.json(deleteNote(id, notes));
});

module.exports = router;
