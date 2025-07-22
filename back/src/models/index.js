import Pessoa from './PessoaModel.js';
import Instrumento from './InstrumentoModel.js';

(async () => {
    try {
        await Pessoa.sync();
        await Instrumento.sync();

        console.log('Modelos sincronizados com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar modelos:', error);
    }
});