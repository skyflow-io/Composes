const {resolve} = require("path");

module.exports = class AddEvent {

    constructor(container, UpdateCommand) {
        const {Shell, config} = container;
        let currentDockerDir = resolve(process.cwd(), config.value.docker.directory);
        let compose = 'assets';
        try {
            Shell.rm('-rf', resolve(currentDockerDir, compose, 'events'));
            Shell.rm('-rf', resolve(currentDockerDir, compose, 'entry.js'));
        }catch (e) {}
        container.Request.command = 'update';
        container.Request.consoleArguments = ['assets'];
        container.Request.addOption('y', true);
        container.Request.commands = [container.Request.command, ...container.Request.consoleArguments ];
        new UpdateCommand(container);
    }

};