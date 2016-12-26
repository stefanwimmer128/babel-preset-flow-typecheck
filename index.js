/**
 * Created on 26.12.16 at 14:23
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */
 
module.exports = {
    plugins: [
        require("babel-plugin-syntax-flow"),
        require("babel-plugin-transform-flow-strip-types"),
        require("babel-plugin-typecheck").default,
    ],
};
