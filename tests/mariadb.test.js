
        const resolve = require('path').resolve;
        const File = require('../ci/File.js');
        
        describe("mariadb compose should have required files", () => {

            test("Test for mariadb.config.json file", () => {
                expect(File.exists(resolve('src', 'mariadb',  'mariadb.config.json'))).toBeTruthy()
            });
            test("Test for docker-compose.dist file", () => {
                expect(File.exists(resolve('src', 'mariadb', 'docker-compose.dist'))).toBeTruthy();
            })

        });
    