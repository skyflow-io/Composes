
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("composer compose should have required files", () => {

            test("Test for composer.config.json file", () => {
                expect(File.exists(resolve('src', 'composer',  'composer.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'composer', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    