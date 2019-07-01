
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("zend compose should have required files", () => {

            test("Test for zend.config.json file", () => {
                expect(File.exists(resolve('src', 'zend',  'zend.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'zend', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    