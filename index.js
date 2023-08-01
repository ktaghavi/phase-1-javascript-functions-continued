function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function (activity="go to the office") {
    return `This Monday, I will ${activity}.` 
};

let wrapAdjective = function (sparkle='*') {
    return function (adjective="special") {
        return `You are ${sparkle}${adjective}${sparkle}!`
    }
};