const dbfile = require("./dbFile");
const {loginSuccessful} = require("./login");
const { LOGIN_EVENT, myEventEmitter} = require('./eventFile');

myEventEmitter.on(LOGIN_EVENT,(userName) => {
    console.log("Send email to user: ",userName);
});
loginSuccessful('Suyash');