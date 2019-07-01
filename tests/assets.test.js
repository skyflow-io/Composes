
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("assets compose should have required files", () => {

            test("Test for assets.config.json file", () => {
                expect(File.exists(resolve('src', 'assets',  'assets.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'assets', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    