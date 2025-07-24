import Pessoa from './PessoaModel.js';
import Instrumento from './InstrumentoModel.js';
import Escala from './EscalaModel.js';
import Musica from './MusicaModel.js';
import EscalaMusica from './EscalaMusicaModel.js';
import EscalaPessoa from './EscalaPessoaModel.js';

(async () => {
    try {
        await Pessoa.sync({alter: true});
        await Instrumento.sync({alter: true});
        await Escala.sync({alter: true});
        await Musica.sync({alter: true});
    
        await EscalaPessoa.sync({alter: true});
        await EscalaMusica.sync({alter: true});

        console.log('Modelos sincronizados com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar modelos:', error);
    }
})();