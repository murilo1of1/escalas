import { sequelize } from "../config/postgres.js";
import { DataTypes } from "sequelize";
import Escala from "./EscalaModel.js";
import Musica from "./MusicaModel.js";

const EscalaMusica = sequelize.define(
    "escala_musicas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    },
    {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

EscalaMusica.belongsTo(Escala, {
    as: 'escala',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name: 'idEscala',
        field: 'escala_id',
        allowNull: false,
    }
});

EscalaMusica.belongsTo(Musica, {
    as: 'musica',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name: 'idMusica',
        field: 'id_musica',
        allowNull: false,
    }
});

export default EscalaMusica;