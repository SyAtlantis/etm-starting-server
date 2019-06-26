"use strict";

const shelljs = require('shelljs');
const env = require('../utils/env');

let getEntanmoInfo = async ctx => {
    ctx.body = {
        success: false,
        message: "TODO getEntanmoInfo"
    };
};

let getNodejsInfo = async ctx => {
    try {
        await env.doctorNode()
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
        await env.doctorPM2()
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

let installEntanmo = async ctx => {
    ctx.body = {
        success: false,
        message: "TODO installEntanmo"
    };
};

let installNodejs = async ctx => {
    try {
        await env.lnNode()
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

let installPm2 = async ctx => {
    try {
        await env.lnPM2()
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

let uninstallEntanmo = async ctx => {
    ctx.body = {
        success: false,
        message: "TODO uninstallEntanmo"
    };
};

let uninstallNodejs = async ctx => {
    try {
        await env.unlnNode()
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

let uninstallPm2 = async ctx => {
    try {
        await env.unlnPM2()
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
    router.get("/install/getEntanmoInfo", getEntanmoInfo);
    router.get("/install/getNodejsInfo", getNodejsInfo);
    router.get("/install/getPm2Info", getPm2Info);

    router.put("/install/installEntanmo", installEntanmo);
    router.put("/install/installNodejs", installNodejs);
    router.put("/install/installPm2", installPm2);

    router.put("/install/uninstallEntanmo", uninstallEntanmo);
    router.put("/install/uninstallNodejs", uninstallNodejs);
    router.put("/install/uninstallPm2", uninstallPm2);
};