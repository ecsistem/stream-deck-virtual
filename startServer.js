/* The code provided is a JavaScript script that starts a server and runs a
frontend and backend application. Here is a breakdown of what the code does: */

const fs = require("fs");
const { exec } = require("child_process");
const getLocalIP = require("./getIPAddress");

const writeFrontendEnv = (ip) => {
  try {
    const frontendEnvContent = `VITE_BACKEND_URL=http://${ip}:3000`;

    fs.writeFileSync("./front-stream-deck/.env", frontendEnvContent, {
      encoding: "utf8",
    });

    console.log("\x1b[32mArquivo .env escrito com sucesso.\x1b[0m");
  } catch (error) {
    console.error("\x1b[31mErro ao escrever o arquivo .env:", error, "\x1b[0m");
  }
};

const startBackend = () => {
  const backendProcess = exec(
    "npm start",
    { cwd: "./backend-steam-deck" },
    (error, stdout, stderr) => {
      if (error) {
        console.error("\x1b[31mErro ao iniciar o backend:", error, "\x1b[0m");
      } else {
        console.log("\x1b[32m", stdout, "\x1b[0m");
      }
    }
  );

  backendProcess.on("error", (error) => {
    console.error("\x1b[31mErro ao iniciar o backend:", error, "\x1b[0m");
  });
};

const startFrontend = () => {
  const frontendProcess = exec(
    "npm start",
    { cwd: "./front-stream-deck" },
    (error, stdout, stderr) => {
      if (error) {
        console.error("\x1b[31mErro ao iniciar o frontend:", error, "\x1b[0m");
      } else {
        console.log("\x1b[32m", stdout, "\x1b[0m");
      }
    }
  );

  frontendProcess.on("error", (error) => {
    console.error("\x1b[31mErro ao iniciar o frontend:", error, "\x1b[0m");
  });
};

const startServer = () => {
  const localIPs = getLocalIP(); // Obtenha todos os endereços IP locais

  if (localIPs.length === 0) {
    console.error("\x1b[31mNão foi possível obter o endereço IP local.\x1b[0m");
    return;
  }

  const localIP = localIPs[0]; // Use o primeiro endereço IP local

  console.log(`\x1b[36mServidor rodando em: http://${localIP}:3000\x1b[0m`);
  console.log(`\x1b[36mFront rodando em: http://${localIP}:5173\x1b[0m`);
  writeFrontendEnv(localIP);
  startBackend(); // Inicie o backend
  startFrontend(); // Inicie o backend e o frontend
};

startServer();