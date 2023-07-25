/* eslint-disable func-names */
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';

import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import pve from './routes/pve';
import inventario from './routes/inventario';
import equiped from './routes/equiped';
import shogun from './routes/shogun';
import market from './routes/market';

const whiteList = [
  "https://samuraiwars.online",
  "https://samuraiwars.online/*",
  "https://api.samuraiwars.online",
  "http://localhost:4001",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(delay(100));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/shogun/', shogun);
    this.app.use('/users/', user);
    this.app.use('/token/', token);
    this.app.use('/pve/', pve);
    this.app.use('/inventario/', inventario);
    this.app.use('/equiped/', equiped);
    this.app.use('/market/', market);
  }
}

export default new App().app;
