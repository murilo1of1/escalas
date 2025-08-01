import { sequelize } from "../config/postgres.js";
import { DataTypes } from "sequelize";

const Pessoa = sequelize.define(
    "pessoas",
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
        apelido: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vocalista: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    },
    {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default Pessoa;