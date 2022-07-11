const repeatString = function(message,times) {

    let messageRepeat = '';

    if (times >= 0) {
        for (i = 0; i < times; i++) {
            messageRepeat = messageRepeat + message;
        }

        return messageRepeat;
    }
    else {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = repeatString;
