class Client {
    constructor(token, user_id, client_discord){
        this.token = token;
        this.user_id = user_id;
        this.client = client_discord.user.id;
        return this;
    }
}

module.exports = Client;