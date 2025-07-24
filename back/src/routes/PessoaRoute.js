import PessoaController from "../controllers/PessoaController.js";

export default (app) => {
    app.get("/pessoas", PessoaController.get);
    app.get("/pessoas/:id", PessoaController.get);
    app.post("/pessoas", PessoaController.persist);
    app.patch("/pessoas/:id", PessoaController.persist);
    app.delete("/pessoas/:id", PessoaController.destroy);
}