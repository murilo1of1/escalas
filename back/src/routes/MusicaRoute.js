import MusicaController from "../controllers/MusicaController.js";  

export default (app) => {
    app.get("/musicas", MusicaController.get);
    app.get("/musicas/:id", MusicaController.get);
    app.post("/musicas", MusicaController.persist);
    app.patch("/musicas/:id", MusicaController.persist);
    app.delete("/musicas/:id", MusicaController.destroy);
}