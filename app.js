import express from 'express'
import sls from 'serverless-http';
import bodyParser from "body-parser";

const app = express()

import userRouter from './modules/user/router'
app.use(bodyParser.json())
app.use('/user', userRouter);

app.get('/', async (req, res, next) => {
  res.status(200).send(`Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`);
});

const message = ({ time, ...rest }) => new Promise((resolve, reject) => 
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);

module.exports.server = sls(app)
