
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("node compose should have required files", () => {

            test("Test for node.config.json file", () => {
                expect(File.exists(resolve('src', 'node',  'node.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'node', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    