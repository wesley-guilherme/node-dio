import chalk from "chalk";
import handle from "./handle";

async function creatPassword() {
    console.log(chalk.green("password"));
    const password = await handle();
    console.log(password);
}

export default creatPassword;