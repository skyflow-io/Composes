
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("python compose should have required files", () => {

            test("Test for python.config.json file", () => {
                expect(File.exists(resolve('src', 'python',  'python.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'python', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    