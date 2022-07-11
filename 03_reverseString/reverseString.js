const reverseString = function(message) {
    
    message = message.toString();
    
    let length = message.length;

    let finalMessage = '';

    for(i = 0; i < length; i++) {
        finalMessage += message.slice(message.length - 1);
        message = message.slice(0,-1);
       
    }

    return finalMessage;
};

// Do not edit below this line
module.exports = reverseString;
