import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
});

export default db;