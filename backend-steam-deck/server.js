const { exec } = require('child_process');

// Nome do processo que queremos verificar
const processo = 'WhatsApp.exe';

// Verifica se o processo está em execução
exec(`tasklist /FI "IMAGENAME eq ${processo}" /NH`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao verificar o processo: ${error}`);
    return;
  }

  if (stdout.trim() !== '') {
    // O processo está em execução, então vamos fechá-lo
    exec(`taskkill /f /im ${processo}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao fechar o aplicativo: ${error}`);
        return;
      }
      console.log(`Aplicativo fechado com sucesso. Saída: ${stdout}`);
    });
  } else {
    // O processo não está em execução, então vamos abri-lo
    exec(processo, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao abrir o aplicativo: ${error}`);
        return;
      }
      console.log(`Aplicativo aberto com sucesso. Saída: ${stdout}`);
    });
  }
});