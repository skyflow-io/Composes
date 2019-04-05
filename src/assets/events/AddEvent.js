const {resolve} = require("path");

module.exports = class AddEvent {

    constructor(container, UpdateCommand) {
        const {Shell, Request, config} = container;
        let currentDockerDir = resolve(process.cwd(), config.value.docker.directory);
        let compose = 'assets';
        try {
            Shell.rm('-rf', resolve(currentDockerDir, compose, 'events'));
            Shell.rm('-rf', resolve(currentDockerDir, compose, 'entry.js'));
        }catch (e) {}
        Request.command = 'update';
        Request.commands = ['update', 'assets'];
        Request.consoleArguments = ['assets'];
        new UpdateCommand(container);
    }

};