
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("laravel compose should have required files", () => {

            test("Test for laravel.config.json file", () => {
                expect(File.exists(resolve('src', 'laravel',  'laravel.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'laravel', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    