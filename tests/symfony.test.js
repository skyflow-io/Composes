
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("symfony compose should have required files", () => {

            test("Test for symfony.config.json file", () => {
                expect(File.exists(resolve('src', 'symfony',  'symfony.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'symfony', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    