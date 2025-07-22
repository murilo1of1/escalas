import { sequelize } from "../config/postgres";
import { DataTypes } from "sequelize";

const Instrumento = sequelize.define(
    "instrumentos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
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

export default Instrumento;