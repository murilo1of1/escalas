import Pessoa from '../models/PessoaModel.js';
import { Op } from 'sequelize';

const get = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id) {
            const response = await Pessoa.findAll({
                order: [['id', 'desc']],
            });

            return res.status(200).send({
                message: 'Dados encontrados',
                data: response,
            });
        }

        const response = await Pessoa.findOne({
            where: {
                id: id
            }
        });

        if (!response) {
            return res.status(404).send('nao achou')
        }

        return res.status(200).send({
            message: 'Dados encontrados',
            data: response,
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

const create = async (corpo) => {
    try {
        const {
            nome,
            apelido,
            telefone,
            vocalista
        } = corpo

        const response = await Pessoa.create({
            nome,
            apelido,
            telefone,
            vocalista
        });

        return response;

    } catch (error) {
        throw new Error(error.message);
    }
}

const update = async (corpo, id) => {
    try {
        const response = await Pessoa.findOne({
            where: {
                id
            }
        });

        if (!response) {
            throw new Error('não achou');
        }
        Object.keys(corpo).forEach((item) => response[item] = corpo[item]);
        await response.save();
        return response;

    } catch (error) {
        throw new Error(error.message);
    }
};

const persist = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id) {
            const response = await create(req.body);
            return res.status(201).send({
                message: 'criado com sucesso!',
                data: response
            });
        }

        const response = await update(req.body, id);
        return res.status(201).send({
            message: 'atualizado com sucesso!',
            data: response
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

const destroy = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
        if (!id) {
            return res.status(400).send('informa ai paezao')
        }

        const response = await Pessoa.findOne({
            where: {
                id
            }
        });

        if (!response) {
            return res.status(404).send('nao achou');
        }

        await response.destroy();

        return res.status(200).send({
            message: 'registro excluido',
            data: response
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const pessoa = await Pessoa.findOne({ where: { email } });

        if (pessoa) {
            const resetToken = crypto.randomBytes(20).toString('hex');
            const resetPasswordExpires = Date.now() + 30 * 60 * 1000;

            await Pessoa.update(
                { resetPasswordToken: resetToken, resetPasswordExpires: resetPasswordExpires },
                { where: { email } }
            );

            console.log(email)

            const mailOptions = {
                to: email,
                subject: 'Recuperação de Senha',
                html: `<p>Você solicitou a recuperação de sua senha. Seu código temporário é: <strong>${resetToken}</strong>. Ele expirará em 30 minutos.</p>`,
            };

            await sendMail(mailOptions.to, mailOptions.name, mailOptions.html, mailOptions.subject);

            return res.status(200).send({ message: 'Um e-mail com as instruções de recuperação foi enviado (se o e-mail existir em nosso sistema).' });
        } else {
            return res.status(200).send({ message: 'Um e-mail com as instruções de recuperação foi enviado (se o e-mail existir em nosso sistema).' });
        }
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;

        const pessoa = await Pessoa.findOne({
            where: {
                resetPasswordToken: token,
                resetPasswordExpires: { [Op.gt]: Date.now() },
            },
        });

        if (!pessoa) {
            return res.status(400).send({ message: 'Código de recuperação inválido ou expirado.' });
        }

        const passwordHash = await bcrypt.hash(newPassword, 10);
        await Pessoa.update(
            { passwordHash: passwordHash, resetPasswordToken: null, resetPasswordExpires: null },
            { where: { id: pessoa.id } }
        );

        return res.status(200).send({ message: 'Senha redefinida com sucesso!' });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const pessoa = await Pessoa.findOne({
            where: {
                email
            }
        });

        if (!pessoa) {
            return res.status(400).send({
                message: "usuario ou senha incorretos"
            });
        }

        const comparacaoSenha = await bcrypt.compare(password, pessoa.passwordHash);

        if (comparacaoSenha) {
            const token = jwt.sign({
                idPessoa: pessoa.id,
                nome: pessoa.nome,
                email: pessoa.email
            }, process.env.TOKEN_KEY, { expiresIn: '8h' });
            return res.status(200).send({
                message: 'Sucesso',
                response: token
            })
        } else {
            return res.status(400).send({
                message: "usuario ou senha incorretos"
            });
        }

    } catch (error) {
        throw new Error(error.message);
    }
};

const getDataByToken = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(400).send({
                message: 'token inválido'
            });
        }

        const pessoa = jwt.verify(token, process.env.TOKEN_KEY);

        const usuario = await Pessoa.findOne({
            where: { id: pessoa.idUsuario }
        });

        if (!usuario) {
            return res.status(404).send({ message: 'Usuário não encontrado' });
        }

        return res.status(200).send({
            response: usuario.toJSON()
        })

    } catch (error) {
        throw new Error(error.message);
    }
};

export default { get, persist, destroy};   