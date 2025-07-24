import PessoaRoute from "./PessoaRoute.js";
import InstrumentoRoute from "./InstrumentoRoute.js";
import MusicaRoute from "./MusicaRoute.js";
import EscalaRoute from "./EscalaRoute.js";
import EscalaMusicaRoute from "./EscalaMusicaRoute.js";
import EscalaPessoaRoute from "./EscalaPessoaRoute.js";

function Routes(app) {
    PessoaRoute(app);
    InstrumentoRoute(app);
    MusicaRoute(app);
    EscalaRoute(app);
    EscalaMusicaRoute(app);
    EscalaPessoaRoute(app);
}

export default Routes;