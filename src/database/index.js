import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pve from '../models/Pve';
import User from '../models/User';
import Inventario from '../models/Inventario';
import Shogun from '../models/Shogun';
import Market from '../models/Market';
import Message from '../models/Message';

const models = [User, Pve, Inventario, Shogun, Market, Message];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
