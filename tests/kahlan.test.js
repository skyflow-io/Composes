
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("kahlan compose should have required files", () => {

            test("Test for kahlan.config.json file", () => {
                expect(File.exists(resolve('src', 'kahlan',  'kahlan.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'kahlan', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    