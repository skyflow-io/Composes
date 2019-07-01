const resolve = require('path').resolve;
const File = require('../ci/File.js');
const Directory = require('../ci/Directory.js');

let composes = Directory.read('src', {directory: true, file: false, filter: /.*/});

composes.map((compose) => {

    describe(compose + " compose should have required files", () => {

        test("Test for "+compose+".config.json file", () => {
            expect(File.exists(resolve('src', compose,  compose + '.config.json'))).toBeTruthy()
        });
        test("Test for docker-compose.dist file", () => {
            expect(File.exists(resolve('src', compose, 'docker-compose.dist'))).toBeTruthy();
        })

    });

});