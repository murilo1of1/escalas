import EscalaPessoaController from "../controllers/EscalaPessoaController.js";

export default (app) => {
    app.get("/escala-pessoas", EscalaPessoaController.get);
    app.get("/escala-pessoas/:id", EscalaPessoaController.get);
    app.post("/escala-pessoas", EscalaPessoaController.persist);
    app.patch("/escala-pessoas/:id", EscalaPessoaController.persist);
    app.delete("/escala-pessoas/:id", EscalaPessoaController.destroy);
}
