
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("mongo compose should have required files", () => {

            test("Test for mongo.config.json file", () => {
                expect(File.exists(resolve('src', 'mongo',  'mongo.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'mongo', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    