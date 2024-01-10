import express from "express";
import morgan from "morgan";
import "express-async-errors";
import mysql from "mysql2/promise";
import { GameGateway } from "./dataaccess/gameGateway";
import { TurnGateway } from "./dataaccess/turnGateway";
import { MoveGateway } from "./dataaccess/moveGateway";
import { SquareGateway } from "./dataaccess/squareGateway";
import { gameRouter } from "./presentation/gameRouter";
import { connectMySQL } from "./dataaccess/connection";
import { DARK, LIGHT } from "./application/constants";
import { turnRouter } from "./presentation/turnRouter";

const PORT = 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.static("static", { extensions: ["html"] }));
app.use(express.json());

app.use(gameRouter);
app.use(turnRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Reversi application started: http://localhost:${PORT}`);
});

function errorHandler(
  err: any,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  console.error("Unexpected error occured", err);
  res.status(500).send({
    message: "Unexpected error occured",
  });
}
