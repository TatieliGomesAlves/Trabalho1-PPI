import express from "express";
import autenticar from "./seguranca/autenticar";

const porta = 5502;
const localhost = "0.0.0.0";

const app = express();

app.use(express.static("./publico"));

app.use(autenticar, express.static("./privado"));

app.listen(porta, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${porta}`);
});
