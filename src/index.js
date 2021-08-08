module.exports = function reverse(n) {
    let finish = "" + n;
    finish = finish.split("").reverse().slice(0, 3).join("");
    return Number(finish);
};
