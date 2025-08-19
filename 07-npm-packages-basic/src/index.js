import chalk from "chalk";
import logSymbols from "log-symbols" 

console.log(chalk.blue.bgGreen.italic("Hello World WoW"));
console.log(chalk.green.bgCyan.bold("Hello World WoW"));

console.log(logSymbols.success, chalk.green.italic.bold("servidor iniciado com sucesso"))
