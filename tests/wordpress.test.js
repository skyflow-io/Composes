
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("wordpress compose should have required files", () => {

            test("Test for wordpress.config.json file", () => {
                expect(File.exists(resolve('src', 'wordpress',  'wordpress.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'wordpress', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    