
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("phpunit compose should have required files", () => {

            test("Test for phpunit.config.json file", () => {
                expect(File.exists(resolve('src', 'phpunit',  'phpunit.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'phpunit', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    