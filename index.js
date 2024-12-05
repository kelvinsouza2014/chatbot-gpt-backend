// IMPORTAÇÕES
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// IMPORTAÇÕES

// CONFIGURAÇÃO DE IDENTIFICAÇÃO DE USO DA API
const configuration = new Configuration({
  organization: "[DOCUMENTAÇÃO DA FIAP]",
  apiKey: "[DOCUMENTAÇÃO DA FIAP]",
});

const openai = new OpenAIApi(configuration);
// CONFIGURAÇÃO DE IDENTIFICAÇÃO DE USO DA API

// CONFIGURAÇÃO DE AMBIENTE NODE E DOMÍNIO DO DEPLOY
const app = express();
const port = chatbotbackend.vercel.app;
// PORTA SERVIDOR LOCAL
// const port = 3000;
// PORTA SERVIDOR LOCAL
// CONFIGURAÇÃO DE AMBIENTE NODE E DOMÍNIO DO DEPLOY

// MANIPULAÇÃO DE REQUISIÇÕES HTTPS E COMUNICAÇÃO ENTRE FRONTEND E BACKEND
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { messages } = req.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      // Criando uma lista que vai criar o contexto das mensagens para o chatGPT
      {
        role: "system",
        content:
          "Você é um agente sustentável, que orienta consumidores a fazerem um consumo eficiente e sustentável da energia",
      },
      ...messages,
    ],
  });
  res.json({
    chat_completion: completion.data.choices[0].message,
  });
});
// MANIPULAÇÃO DE REQUISIÇÕES HTTPS E COMUNICAÇÃO ENTRE FRONTEND E BACKEND

// VISUALIZAÇÃO DO DOMÍNIO DO SERVIDOR DA API
app.listen(port, () => {
  console.log(`Consumindo https://${port}`);
});
// SERVIDOR LOCAL
// app.listen(port, () => {
//   console.log(`Consumindo http://localhost:${port}`);
// });
// SERVIDOR LOCAL
// VISUALIZAÇÃO DO DOMÍNIO DO SERVIDOR DA API
