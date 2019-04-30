const {resolve} = require("path");

module.exports = class UpdateEvent {

    constructor(container) {
        const {Shell, File, config, cache} = container;
        let compose = 'assets';
        let cacheComposeDir = resolve(cache.compose, 'data', compose);
        try {
            let variables = config.value.docker.composes[compose].variables;
            config.value.assets.directory = variables['assets_directory'].value;
            File.createJson(config.filename, config.value);
            Shell.mkdir('-p', variables['assets_directory'].value);
            Shell.cp('-R', resolve(cacheComposeDir, 'entry.js'), resolve(variables['assets_directory'].value, 'entry.js'));
        } catch (e) {}

    }

};