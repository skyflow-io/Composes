/**
 * Various useful functions.
 *
 * @class Helper
 * @static
 * @author Skyflow
 */
module.exports = class Helper {

    /**
     * Gets type of any object.
     *
     * @method getType
     * @param object Object we want to know the type.
     * @return {String} Returns the type of object.
     */
    static getType(object) {
        if (object === null) {
            return null
        }
        let t = (typeof object);
        if (t === 'object') {
            object = String(object.constructor);
            if (/^(?:function|object) ([a-z0-9-]+)\(?/i.test(object)) {
                t = RegExp.$1;
                if (/^html[a-z]*element$/i.test(t)) {
                    t = 'Element'
                }
            } else {
                t = undefined
            }
        }

        return t;
    }

    /**
     * Checks if an object is a object.
     *
     * @method isObject
     * @param object Object we want to know the type.
     * @return {Boolean} Returns true if the object is a object and false otherwise.
     */
    static isObject(object) {
        return this.getType(object) === 'Object';
    }

    /**
     * Checks if an object is a boolean.
     *
     * @method isBoolean
     * @param object Object we want to know the type.
     * @return {Boolean} Returns true if the object is a boolean and false otherwise.
     */
    static isBoolean(object) {
        return this.getType(object) === 'boolean';
    }

    /**
     * Checks if an object is regular expression.
     *
     * @method isRegExp
     * @param object Object we want to know the type.
     * @return {Boolean} Returns true if the object is regular expression and false otherwise.
     */
    static isRegExp(object) {
        return this.getType(object) === 'RegExp';
    }

};
