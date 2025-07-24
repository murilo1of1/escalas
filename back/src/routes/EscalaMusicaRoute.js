import EscalaMusicaController from "../controllers/EscalaMusicaController.js";

export default (app) => {
    app.get("/escala-musicas", EscalaMusicaController.get);
    app.get("/escala-musicas/:id", EscalaMusicaController.get);
    app.post("/escala-musicas", EscalaMusicaController.persist);
    app.patch("/escala-musicas/:id", EscalaMusicaController.persist);
    app.delete("/escala-musicas/:id", EscalaMusicaController.destroy);
}
