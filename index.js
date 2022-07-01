const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

            url: `http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${round}`,
            headers: {
                Authorization: JSON.stringify(authorization),
                use_response_compression: true,
                "Accept-Encoding": "gzip",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64))",
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(chalk.yellowBright(chalk.bold(`                                   By : Vicenzo 
██╗  ██╗███████╗ ██████╗████████╗ ██████╗ ██████╗
██║  ██║██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
███████║█████╗  ██║        ██║   ██║   ██║██████╔╝
██╔══██║██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
██║  ██║███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
${chalk.bold(chalk.redBright('Made by : HectorV2'))}
${chalk.bold(chalk.redBright('Wa : 085706058445'))}
${chalk.bold(chalk.redBright('Discord : Vicenzo#3819'))}
`)));

  const auth = rs.question(chalk.blueBright(chalk.bold('Enter Auth Token : ')));
  console.log(chalk.blueBright(chalk.bold('STARTING....')));

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.redBright(chalk.bold(`Auth Sudah Expired !`)));

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const tokenPass = data.User.BattlePass.PassTokens;
      const exp = data.User.Experience;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

      console.log(chalk.blueBright(chalk.bold(`\r
  ♨ [${moment().format('HH:mm:ss')}] ♨
→ ${(`Username : ${username}`)}
→ ${(`Country : ${country}`)}
→ ${(`Pass Star : ${tokenPass}`)}
→ ${(`Exp Level : ${exp}`)}  
→ ${(`Tropy : ${trophy}`)}  
→ ${(`Crown : ${crown}`)}
→ ${(`Status : ✔ Success`)}`)));
      await sleep(5000);

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your account has been banned`));
      break;
    }
  }

})();
