const fs = require('fs'), os = require("os");

/**
 * Manage files.
 *
 * @class File
 * @module Default
 * @constructor
 * @author Skyflow
 */
class File {

    /**
     * Checks if a file exists.
     *
     * @method exists
     * @param {String|URL|int} file Filename or file descriptor
     * @return {Boolean}
     */
    exists(file){
        try{
            return fs.statSync(file).isFile()
        }catch (e){
            return false
        }
    }

}

module.exports = new File();