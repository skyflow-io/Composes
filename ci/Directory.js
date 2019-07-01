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
     * Synchronous creates new directory.
     *
     * @method create
     * @param {String} directory Directory name.
     * @return {Directory} Returns the current Directory object.
     */
    create(directory){

        const dirs = directory.split(/[\\\/]/);
        directory = '';
        dirs.every((dir)=>{
            directory += dir + path.sep;
            if(!this.exists(directory)){
                fs.mkdirSync(directory);
            }
            return true
        });

        return this
    }

    /**
     * Synchronous removes new directory.
     *
     *  @method delete
     * @param {String} directory Directory name.
     * @return {Directory} Returns the current Directory object.
     */
    delete(directory){

        if(!this.exists(directory)){
            return this
        }

        const files = fs.readdirSync(directory);

        files.every((dir)=>{
            dir = directory + path.sep + dir;

            if(this.exists(dir)){
                this.delete(dir)
            }else {
                fs.unlinkSync(dir)
            }

            return true

        });

        fs.rmdirSync(directory)

    }

    /**
     * Synchronous removes new directory. Alias of delete method.
     *
     * @method remove
     * @param {String} directory Directory name.
     * @return {Directory} Returns the current Directory object.
     */
    remove(directory){
        return this.delete(directory)
    }

    /**
     * Synchronous copies a directory.
     *
     * @method copy
     * @param {String} source
     * @param {String} destination
     * @return {Directory} Returns the current Directory object.
     */
    copy(source, destination){

        this.create(destination);
        const files = fs.readdirSync(source);
        files.every((dir)=>{
            let dest = destination + path.sep + dir;
            dir = source + path.sep + dir;
            if(this.exists(dir)){
                this.copy(dir, dest)
            }else {
                fs.createReadStream(dir).pipe(fs.createWriteStream(dest))
            }

            return true
        });

        return this
    }

    /**
     * Synchronous renames a directory.
     *
     * @method rename
     * @param {String} oldDirectory
     * @param {String} newDirectory
     * @return {Directory} Returns the current Directory object.
     */
    rename(oldDirectory, newDirectory){
        fs.renameSync(oldDirectory, newDirectory);
        return this
    }

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