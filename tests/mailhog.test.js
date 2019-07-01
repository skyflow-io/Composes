
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("mailhog compose should have required files", () => {

            test("Test for mailhog.config.json file", () => {
                expect(File.exists(resolve('src', 'mailhog',  'mailhog.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'mailhog', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    