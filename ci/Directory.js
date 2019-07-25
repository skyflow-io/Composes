const fs = require('fs'), path = require('path');
const Helper = require('./Helper.js');

/**
 * Manage directories.
 *
 * @class Directory
 * @module Default
 * @constructor
 * @author Skyflow
 * @requires Helper
 */
class Directory {

    /**
     * Checks if directory exists.
     *
     * @method exists
     * @param {String} directory Directory name.
     * @return {Boolean}
     */
    exists(directory){
        try{
            return fs.statSync(directory).isDirectory()
        }catch (e){
            return false
        }
    }

    /**
     * Synchronous reads a directory.
     *
     * @method read
     * @param {String} directory Directory name.
     * @param {object} options Read options.
     * @return {Array}
     */
    read(directory, options){

        if(!Helper.isObject(options)){options = {}}

        options = Object.assign({}, {directory: true, file: true, filter: /.*/}, options);

        if(!Helper.isBoolean(options.directory)){options.directory = true}

        if(!Helper.isBoolean(options.file)){options.file = true}

        if(!Helper.isRegExp(options.filter)){options.filter = /.*/}

        let result = [];
        const files = fs.readdirSync(directory);

        files.every((dir)=>{

            if(!options.filter.test(dir)){
                return true
            }
            let d = directory + path.sep + dir;
            if(this.exists(d) && options.directory){
                result.push(dir)
            }
            if(!this.exists(d) && options.file){
                result.push(dir)
            }

            return true

        });

        return result
    }

}

module.exports = new Directory();