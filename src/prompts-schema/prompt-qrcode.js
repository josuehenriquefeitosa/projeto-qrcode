import chalk from "chalk";


const promptQRcode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar  o QR Code")
    },
    {
        name: "type",
        desciption: chalk.yellow("Escolha entre o tipo de QRcode (1-NORMAL ou (2-TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        require: true
    }

]


export default  promptQRcode;


