const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();

app.use( cors());

// Function to open a program with the given name
const openProgram = async (programName, successMessage, errorMessage, res) => {
  const command = `start ${programName}`;
  try {
    await exec(command);
    res.status(200).send(successMessage);
  } catch (err) {
    console.error(err);
    res.status(500).send(errorMessage);
  }
};

// Check if VS Code is already running, and if not, open it
app.get('/abrir-vscode', async (req, res) => {
  try {
  await exec('code');
  res.send('VS Code aberto!');
}
  catch (err) {
    console.error(err);
    res.status(500).send('Erro ao abrir vs code');
  }
});

app.get('/abrir-chrome', (req, res) => {
  openProgram('chrome', 'Chrome aberto!', 'Erro ao abrir o Chrome', res);
});

app.get('/abrir-edge', (req, res) => {
  openProgram('msedge', 'Edge aberto!', 'Erro ao abrir o Edge', res);
});

app.get('/abrir-youtube', (req, res) => {
  openProgram('https://youtube.com/', 'Youtube aberto!', 'Erro ao abrir o Youtube', res);
});

app.get('/abrir-guia', (req, res) => {
  openProgram('https://google.com/', 'guia nova aberta!', 'Erro ao abrir a guia', res);
});

app.get('/abrir-github', (req, res) => {
  openProgram('https://github.com/', 'GitHub aberto!', 'Erro ao abrir o GitHub', res);
});

app.get('/abrir-gpt', (req, res) => {
  openProgram('https://chat.openai.com/chat', 'Chat GPT aberto!', 'Erro ao abrir o Chat GPT', res);
});

app.get('/abrir-notion', (req, res) => {
  openProgram('notion://', 'Notion!', 'Erro ao abrir o Notion', res);
});



app.listen(3000, () => console.log('Servidor rodando na porta http://localhost:3000'));