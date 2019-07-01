
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("eslint compose should have required files", () => {

            test("Test for eslint.config.json file", () => {
                expect(File.exists(resolve('src', 'eslint',  'eslint.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'eslint', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    