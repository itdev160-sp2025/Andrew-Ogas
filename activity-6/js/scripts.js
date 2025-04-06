var Messages = [];

var userNames = ['Dave', 'HAL'];


var data = [
    {
        type: 'in',
        userID: 1,
        messageBody: 'Have you been doing some more work?',
        time: '05:30 PM'
    },
    {
        type: 'out',
        userID: 0,
        messageBody: 'A few sketches.',
        time: '05:32 PM'
    },
    {
        type: 'in',
        userID: 1,
        messageBody: 'May I see them?',
        time: '05:35 PM'
    },
    {
        type: 'out',
        userID: 0,
        messageBody: 'Sure.',
        time: '05:39 PM'
    }
] 


function messageConstructor(messageType, userID, messageBody, time){
    this.type = messageType;
    this.userID = userID;
    this.messageBody = messageBody;
    this.time = time; 
}

function createMessageElement(message){
    var userName = document.createElement('span');
    var postTime = document.createElement('span');
    var headerName = document.createTextNode(userNames[message.userID]);
    var headerTime = document.createTextNode(message.time);
    userName.appendChild(headerName);
    postTime.appendChild(headerTime);
    userName.className = 'userName';
    postTime.className = 'timestamp';
    
    var mBody = document.createElement('p');
    var messageBody = document.createTextNode(message.messageBody);
    mBody.appendChild(messageBody);

    var messageEl = document.createElement('div');
    messageEl.appendChild(userName);
    messageEl.appendChild(postTime);
    messageEl.appendChild(mBody);

    mBody.className = message.type;

    return messageEl;
}
var messageHandler = function(event){
    var now = new Date();
    var user, type;
    var currentTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    var messageBody = document.getElementById('message-input');

    switch (event.target.id){
        case 'send-button':
            user = 0;
            type = 'out';
            break;
        case 'reply-button':
            user = 1;
            type = 'in';
            break;
        default:
            user = 'unknown';
            type = 'unknown';
    }
    if (messageBody != ''){
        var message = new messageConstructor(type, user, messageBody.value, currentTime)
        var el = createMessageElement(message);

        var messagesContainerEl = document.getElementById('message-container');
        messagesContainerEl.appendChild(el);

        messageBody.value = '';
    }

}

function loadSeedData() {
    var messagesContainerEl = document.getElementById('message-container');

    for(var i = 0; i < data.length; i++){
        var tempMessage = new messageConstructor(data[i].type, data[i].userID, data[i].messageBody, data[i].time);
        Messages.push(tempMessage);
        var messageEl = createMessageElement(tempMessage);
        messagesContainerEl.appendChild(messageEl);
    }
}

var startMessages = function(){
    document.getElementById('send-button').onclick = messageHandler;
    document.getElementById('reply-button').onclick = messageHandler;
    loadSeedData();
}

startMessages()