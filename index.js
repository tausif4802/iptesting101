import express from 'express';
import cors from 'cors';
import http from 'http';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.set('trust proxy', true);
app.get('/', (req, res) => {
  console.log(req);
  console.log(req.ip);
  res.send(req.ip);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`Server started on port: ${PORT}`));
