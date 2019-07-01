
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("yuidocjs compose should have required files", () => {

            test("Test for yuidocjs.config.json file", () => {
                expect(File.exists(resolve('src', 'yuidocjs',  'yuidocjs.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'yuidocjs', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    