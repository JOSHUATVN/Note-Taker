const fs = require('fs');
module.exports = function(app) {
  app.get('/api/notes', function(req, res) {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbFile = JSON.parse(data);
      res.send(dbFile);
    });
  });

  app.post('/api/notes', function(req, res) {
    const usersNote = req.body;

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbFile = JSON.parse(data);
      dbFile.push(usersNote);
      let num = 1;
      dbFile.forEach((note, index) => {
        note.id = num;
        num++;
        return dbFile;
      });
      console.log(dbFile);

      textData = JSON.stringify(dbFile);

      fs.writeFile('./db/db.json', textData, (err, data) => {
        if (err) throw err;
      });
    });
    res.send('');
  });

  app.delete('/api/notes/:id', function(req, res) {
    // Gets id num of note to delete
    const deleteUsersNote = req.params.id;
    console.log(deleteUsersNote);

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;

      // Comparing each note's id to delete note
      dbFile = JSON.parse(data);
      // for each function, comparing each note's id to the chosen_for_death variable
      for (let i = 0; i < dbFile.length; i++) {
        if (dbFile[i].id === Number(deleteUsersNote)) {
          dbFile.splice([i], 1);
        }
      }
      console.log(dbFile);
      stringData = JSON.stringify(dbFile);

      fs.writeFile('./db/db.json', textData, (err, data) => {
        if (err) throw err;
      });
    });
    res.status(204).send();
  });
};