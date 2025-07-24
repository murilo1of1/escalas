import { sequelize } from "../config/postgres.js";
import { DataTypes } from "sequelize";
import Escala from "./EscalaModel.js";
import Pessoa from "./PessoaModel.js";
import Instrumento from "./InstrumentoModel.js";

const EscalaPessoa = sequelize.define(
    "escala_pessoas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        observacoes: {
            type: DataTypes.TEXT,           
    }},
    {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

EscalaPessoa.belongsTo(Escala, {
    as: 'escala',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name: 'idEscala',
        allowNull: false,
        field: 'id_escala'
    }
});

EscalaPessoa.belongsTo(Pessoa, {
    as: 'pessoa',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name: 'idPessoa',
        allowNull: false,
        field: 'id_pessoa'
    }
});

EscalaPessoa.belongsTo(Instrumento, {
    as: 'instrumento',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name: 'idInstrumento',
        allowNull: false,
        field: 'id_instrumento'
    }
});

export default EscalaPessoa;