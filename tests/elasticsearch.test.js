
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("elasticsearch compose should have required files", () => {

            test("Test for elasticsearch.config.json file", () => {
                expect(File.exists(resolve('src', 'elasticsearch',  'elasticsearch.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'elasticsearch', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    