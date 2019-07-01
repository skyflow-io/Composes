
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("graphql compose should have required files", () => {

            test("Test for graphql.config.json file", () => {
                expect(File.exists(resolve('src', 'graphql',  'graphql.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'graphql', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    