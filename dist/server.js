"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _socketio = require('socket.io');
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const whiteList = [
  "https://samuraiwars.online",
  "https://api.samuraiwars.online",
  "http://localhost:4001",

];

const serv = new (0, _socketio.Server)('', {
  cors: {
    origin: (origin, callback) => {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST"],
  },
});

const port = process.env.APP_PORT;
const server = _app2.default.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
});

const io = serv.listen(server);

io.on('connection', (socket) => {
  socket.on("send_message", (data) => {
    socket.to(data.porta).emit("receive_message", data);
  });

  socket.on("msg_go", (porta) => {
    socket.join(porta);
  });
});
