"use strict";

let start = async ctx => {
    ctx.body = {
        success: true,
        data: "test start"
    };
}

let stop = async ctx => {
    ctx.body = {
        success: true,
        data: "test stop"
    };
}

let pause = async ctx => {
    ctx.body = {
        success: true,
        data: "test pause"
    };
}

module.exports = (router) => {
    router.put("/control/start", start);
    router.put("/control/stop", stop);
    router.put("/control/pause", pause);
};