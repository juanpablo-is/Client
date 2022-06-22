const ws = require('ws');

const socket = new ws.WebSocket('ws://localhost:3000');

class Button {
    constructor({
        emoji,
        label,
        url,
        customid,
        style,
        disable
    }){
        this.emoji = {...emoji};
        this.label = label;
        this.url = url;
        this.customid = customid;
        this.style = style;
        this.disable = disable;
        if(!this.label) this.label = '';
        if(!this.customid) this.customid = '';
        if(!this.style) this.style = '';
        if(!this.disable) this.disable = false;
        if(!this.emoji) this.emoji = '';
        if(!this.url) this.url = '';
        socket.addEventListener('open', () => { });
        socket.send(JSON.stringify({
            token: 'EsmileOnTop',
            user: '741448125318824017',
            bot: '902267843851210783',
            button_build: this
        }));
        socket.onmessage = async function(event) {
            const ind = event.data.toString();
            const data = JSON.parse(ind);
            data(data);
        }
        socket.addEventListener('message', ({data}) => {
            const ind = data.toString();
            const js = JSON.parse(ind);
            return js.button;
        });
    };
}

module.exports = Button;