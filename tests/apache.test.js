
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("apache compose should have required files", () => {

            test("Test for apache.config.json file", () => {
                expect(File.exists(resolve('src', 'apache',  'apache.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'apache', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    