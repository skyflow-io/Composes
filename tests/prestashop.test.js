
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("prestashop compose should have required files", () => {

            test("Test for prestashop.config.json file", () => {
                expect(File.exists(resolve('src', 'prestashop',  'prestashop.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'prestashop', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    