const ws = require('ws');

const socket = new ws.WebSocket('ws://localhost:3000');

class Embed {
    constructor({
        title,
        color,
        author,
        url,
        description,
        image,
        footer,
        timestamp,
        thumbnail,
        fiels
    }){
        this.title = title;
        this.color = color;
        this.author = {...author};
        this.url = url;
        this.description = description;
        this.image = image;
        this.footer = {...footer};
        this.timestamp = timestamp;
        this.thumbnail = thumbnail;
        this.fiels = {...fiels};
        if(!this.title) {
            this.title = "";
        }
        if(!this.color) {
            this.color = 0xfff;
        }
        if(!this.author.name) {
            this.author.name = "";
        }
        if(!this.author.image) {
            this.author.image = "";
        }
        if(!this.url) {
            this.url = "";
        }
        if(!this.description) {
            this.description = "";
        }
        if(!this.image) {
            this.image = "";
        }
        if(!this.footer){
            this.footer.text = "";
            this.footer.image = "";
        }
        if(!this.footer.text) {
            this.footer.text = "";
        }
        if(!this.footer.icon_url) {
            this.footer.icon_url = "";
        }
        if(this.timestamp) {
            this.timestamp = new Date();
        } else {
            this.timestamp = "";
        }
        if(!this.thumbnail) {
            this.thumbnail = "";
        }
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({
                token: this.esmile_client.token,
                user: this.esmile_client.user_id,
                bot: '902267843851210783',
                embed: this
            }));  
        });
        socket.addEventListener('message', ({ data })=>{
            const get = data;
            const info = JSON.parse(get);
            this.info = info.embed;
        });
        return this.info
    };
}

module.exports = Embed;