
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("kibana compose should have required files", () => {

            test("Test for kibana.config.json file", () => {
                expect(File.exists(resolve('src', 'kibana',  'kibana.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'kibana', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    