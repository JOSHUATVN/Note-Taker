import noteData, { push, length } from "../Develop/db/db.json";

export default function(app) {
    app.get("/api/notes/", function(_req, res) {
        res.json(noteData);
    });
    app.post("/api/notes/", function (req, res) {
        push(req, body);
        res.json(true);
    })
        app.delete("/api/notes/", function (_req, res) {
        length = 0;
        res.json({ok: true});
    });
};