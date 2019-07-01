
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("caddy compose should have required files", () => {

            test("Test for caddy.config.json file", () => {
                expect(File.exists(resolve('src', 'caddy',  'caddy.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'caddy', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    