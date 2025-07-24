import { sequelize } from "../config/postgres.js";
import { DataTypes } from "sequelize";

const Escala = sequelize.define(
    "escalas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipoEvento: {
            field: 'tipo_evento',
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Culto',
        },
        horarioInicio: {
            field: 'horario_inicio',
            type: DataTypes.STRING,
            allowNull: true,
        },
        local: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        observacoes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dataEvento: {
            field: 'data_evento',
            type: DataTypes.DATE,           
    }},
    {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default Escala;