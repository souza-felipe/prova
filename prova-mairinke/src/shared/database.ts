import { Sequelize } from "sequelize";

// Inicialização para SQLite
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false
});

export default sequelize;
