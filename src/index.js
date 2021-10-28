'use strict';

const chalk = require('chalk')
const app = require('./app')

const port = process.env.PORT || "https://bars-330206.as.r.appspot.com/";
//const port = 3000;
const
    line = chalk.bold.black('-------------------------'),
    portLabel = 'PORT       :   ';

app.listen(port, (err, res) => {
    if (err) {
        return console.log(line + portLabel + (chalk.bold.red('\nUNDEFINED')) + '\n' + line);
    }
    console.log(line + '\n' + portLabel + (chalk.bold.yellow(port)) + '\n' + line);
})