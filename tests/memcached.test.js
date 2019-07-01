
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("memcached compose should have required files", () => {

            test("Test for memcached.config.json file", () => {
                expect(File.exists(resolve('src', 'memcached',  'memcached.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'memcached', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    