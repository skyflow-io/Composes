
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("redis compose should have required files", () => {

            test("Test for redis.config.json file", () => {
                expect(File.exists(resolve('src', 'redis',  'redis.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'redis', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    