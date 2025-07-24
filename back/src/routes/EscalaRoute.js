import EscalaController from "../controllers/EscalaController.js";

export default (app) => {
    app.get("/escalas", EscalaController.get);
    app.get("/escalas/:id", EscalaController.get);
    app.post("/escalas", EscalaController.persist);
    app.patch("/escalas/:id", EscalaController.persist);
    app.delete("/escalas/:id", EscalaController.destroy);
}
