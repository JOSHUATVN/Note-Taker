const noteData = require("../Develop/db/db.json");

module.exports = function(app) {
    app.get("/api/notes/", function(req, res) {
        res.json(noteData);
    });
    app.post("/api/notes/", function (req, res) {
        noteData.push(req, body);
        res.json(true);
    })
        app.delete("/api/notes/", function (req, res) {
        noteData.length = 0;
        res.json({ok: true});
    });
};