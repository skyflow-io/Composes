
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("php compose should have required files", () => {

            test("Test for php.config.json file", () => {
                expect(File.exists(resolve('src', 'php',  'php.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'php', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    