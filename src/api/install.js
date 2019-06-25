"use strict";

const shelljs = require('shelljs');
// const gbk = require('gbk.js');
const Ajv = require("ajv");
let ajv = new Ajv();

const doctorShell = async cmd => {
    return new Promise((resolve, reject) => {
        shelljs.exec(cmd, { silent: true }, (code, stdout, stderr) => {
            if (code === 0) {
                return resolve(stdout.toString());
            }

            return reject(stderr.toString());
        });
    });
};

let getNodejsInfo = async ctx => {
    try {
        await doctorShell("node -v")
            .then(res => {
                ctx.body = {
                    success: true,
                    results: res
                };
            }).catch(err => {
                throw err;
            });
    } catch (err) {
        ctx.body = {
            success: false,
            message: `${err}`
        };
    }
};

let getGitInfo = async ctx => {
    try {
        await doctorShell("git --version")
            .then(res => {
                ctx.body = {
                    success: true,
                    results: res
                };
            }).catch(err => {
                throw err;
            });
    } catch (err) {
        ctx.body = {
            success: false,
            message: `${err}`
        };
    }
};

let getPm2Info = async ctx => {
    try {
        await doctorShell("pm2 -v")
            .then(res => {
                ctx.body = {
                    success: true,
                    results: res
                };
            }).catch(err => {
                throw err;
            });
    } catch (err) {
        ctx.body = {
            success: false,
            message: `${err}`
        };
    }
};

module.exports = (router) => {
    router.get("/install/getNodejsInfo", getNodejsInfo);
    router.get("/install/getGitInfo", getGitInfo);
    router.get("/install/getPm2Info", getPm2Info);
};