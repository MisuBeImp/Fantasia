/**
 * Created by Misu Be Imp on 8/20/2016.
 */

createRepo();

function createRepo(callback) {
    var chalk = require('chalk');
    var clear = require('clear');
    var figlet = require('figlet');
    var inquirer    = require('inquirer');
    var argv = require('minimist')(process.argv.slice(2));
    clear();
    console.log(chalk.blue.bold(figlet.textSync('Fantasia', { horizontalLayout: 'full' })));
    var questions = [
        {
            type: 'input',
            name: 'name',
            message: chalk.yellow.bold('Application Name : '),
            default: argv._[0],
            validate: function( value ) {
                if (value.length) {
                    return true;
                } else {
                    return chalk.red.bold('Please enter a name of the application');
                }
            }
        },
        {
            type: 'input',
            name: 'version',
            default: argv._[1] || null,
            message:chalk.yellow.bold('Version(1.0.0): ')
        },
        {
            type: 'input',
            name: 'description',
            default: argv._[1] || null,
            message:chalk.yellow.bold('Description: ')
        },
        {
            type: 'input',
            name: 'author',
            default: argv._[1] || null,
            message:chalk.yellow.bold('Author: ')
        },
        {
            type: 'input',
            name: 'license',
            default: argv._[1] || null,
            message:chalk.yellow.bold('License(ISG): ')
        },
        {
            type: 'input',
            name: 'gitHubRepo',
            default: argv._[1] || null,
            message:chalk.yellow.bold('GitHub Repository: ')
        },
        {
            type: 'list',
            name: 'routeConfigFile',
            message:chalk.yellow.bold('Select Dependencies(route):'),
            choices:[chalk.green('angular-route'),chalk.green('angular-ui-route')],
            default:'angular-ui-route'
        }
    ];

    inquirer.prompt(questions).then(function(answers) {
        var data = {
            name : answers.name,
            version: answers.version,
            description : answers.description,
            author: answers.author,
            license: answers.license,
            gitHubRepo:answers.gitHubRepo,
            routeConfigFile:answers.routeConfigFile
        };
    });
}