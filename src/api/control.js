"use strict";
const pm2 = require('../lib/pm2');

let start = async ctx => {
    try {
        await pm2.deploy()
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
}

let stop = async ctx => {
    try {
        await pm2.undeploy()
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
}

let pause = async ctx => {
    ctx.body = {
        success: true,
        data: "test pause"
    };
}

let boot = async ctx => {
    try {
        await pm2.startup()
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
}

let unboot = async ctx => {
    try {
        await pm2.unstartup()
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
}

module.exports = (router) => {
    router.put("/control/start", start);
    router.put("/control/stop", stop);
    router.put("/control/pause", pause);
    router.put("/control/boot", boot);
    router.put("/control/unboot", unboot);
};