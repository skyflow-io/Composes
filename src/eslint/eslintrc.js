module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-undef": ["warn"],
        "max-len": ["error", { "code": 120 }],
        "prefer-destructuring": ["error", {"object": true, "array": true}]
    },
};