
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("adminer compose should have required files", () => {

            test("Test for adminer.config.json file", () => {
                expect(File.exists(resolve('src', 'adminer',  'adminer.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'adminer', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    