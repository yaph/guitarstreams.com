"use strict";

function sum(list) {
    return list.reduce(function (accumulator, current) {
        return accumulator + current;
    });
}