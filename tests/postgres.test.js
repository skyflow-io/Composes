
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("postgres compose should have required files", () => {

            test("Test for postgres.config.json file", () => {
                expect(File.exists(resolve('src', 'postgres',  'postgres.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'postgres', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    