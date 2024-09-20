#!/usr/bin/env node

import boxen from 'boxen'
import { createSpinner } from 'nanospinner'
import colors from 'colors'
import util from 'util'
import link from 'terminal-link'

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function printSkill(languages , header) {
    const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta']);

 
    let output = `${header}`.green + ' - ';
    languages.forEach((language, index) => {
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        output += language[randomColor];
        if (index !== languages.length - 1) {
            output += ', ';
        }
    });

    console.log(output);
}

async function main(){
    console.log(`
( ͡° ͜ʖ ͡°) 
    
    

██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.magenta)
    
    
    console.log()
    const spinner = createSpinner('Loading Arnab\'s details').start()
    
    
    async function spinnerStart(){
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    await spinnerStart();
    
    spinner.success();
   
    console.log(`
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.yellow);

    console.log()
    console.log(`NAME    `.green + ' - ' + 'Arnab Das'.cyan);
    console.log(`STATUS  `.green + ' - ' + 'Student'.cyan);
    console.log(`GITHUB  `.green + ' - ' + `btw its awesome -> `.cyan + "  "  + ("https://github.com/arnab7456").cyan);
    console.log(`WEBSITE `.green + ' - ' + `Coolest thing ->`.cyan + "  " +  ("https://arnabdas.vercel.app").cyan);
    console.log(`LinkedIn`.green+ ' - ' + "LinkedIn ->".cyan + "  " + ("https://www.linkedin.com/in/arnab-das7456/").cyan);
    console.log(`TWITTER`.green + ' - ' + "TWITTER  ->".cyan + "  " + ("https://x.com/Arnab_devops").cyan)
    console.log(`LEETCODE`.green + ' - ' + "LEETCODE ->".cyan + " " + ("https://leetcode.com/u/arnab7456/").cyan);
    console.log(`
    
    
▀▀█▀▀ █▀▀ █▀▀ █──█ █▀▀▄ ─▀─ █▀▀ █▀▀█ █── 　 ░█▀▀▀█ █─█ ─▀─ █── █── █▀▀ 
─░█── █▀▀ █── █▀▀█ █──█ ▀█▀ █── █▄▄█ █── 　 ─▀▀▀▄▄ █▀▄ ▀█▀ █── █── ▀▀█ 
─░█── ▀▀▀ ▀▀▀ ▀──▀ ▀──▀ ▀▀▀ ▀▀▀ ▀──▀ ▀▀▀ 　 ░█▄▄▄█ ▀─▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀
    
    
    `.blue)

console.log()
printSkill(['Java', 'C', 'Python', 'TypeScript', 'JavaScript'] , 'LANGUAGES   ');
printSkill(['React', 'NextJs', 'SpringBoot'] , 'FRAMEWORKS  ');
printSkill(['Express', 'Nodejs', 'WebSocket' , 'Prisma' , 'Redis' ] , 'TECHNOLOGIES');
printSkill(['MongoDb', 'PostgresSQL', 'SQL' ] , 'DATABASES   ');
printSkill(['Docker', 'Kubernetes', 'Github Actions', 'AWS' , 'GCP' ] , 'DEVOPS      ');
printSkill(['GIT', 'Github' ] , 'Tools       ');

console.log(`

█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`.yellow)

console.log()
console.log('Arnab is up for hire, ready to help your company get to next heights and ofc Thanks for checking out my cli!'.magenta)
console.log()
}

main()