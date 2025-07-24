import InstrumentoController from "../controllers/InstrumentoController.js";

export default (app) => {
    app.get("/instrumentos", InstrumentoController.get);
    app.get("/instrumentos/:id", InstrumentoController.get);
    app.post("/instrumentos", InstrumentoController.persist);
    app.patch("/instrumentos/:id", InstrumentoController.persist);
    app.delete("/instrumentos/:id", InstrumentoController.destroy);
}