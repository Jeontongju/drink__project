'use strict';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports = (app) => {
    app.use(
        session({
        secret: "sdfgdlkfjngjk45er#@",
        resave: false,
        saveUninitialized: true,
        store : new FileStore(),
        })
    );

    return session;
}