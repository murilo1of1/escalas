import { sequelize } from "../config/postgres.js";
import { DataTypes } from "sequelize";

const Musica = sequelize.define(
    "musicas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artista: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        observacoes: {
            type: DataTypes.TEXT,  
            allowNull: true,
        },
        tom: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default Musica;