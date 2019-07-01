
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("mocha compose should have required files", () => {

            test("Test for mocha.config.json file", () => {
                expect(File.exists(resolve('src', 'mocha',  'mocha.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'mocha', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    