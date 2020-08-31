"use strict"

const params = {
    username : "web",
    password : "web",
};

const auth = "Bearer " + new Buffer(params.username + ":" + params.password).toString("base64");

export default { auth }