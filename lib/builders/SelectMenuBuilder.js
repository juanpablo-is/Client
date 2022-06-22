class SelectMenu {
    constructor({
        customid,
        placeholder,
        disabled,
        minvalues,
        maxvalues,
        options
    }){
        this.customid = customid;
        this.placeholder = placeholder;
        this.disabled = disabled;
        this.minvalues = minvalues;
        this.maxvalues = maxvalues;
        this.options = options;
        if(!this.customid) this.customid = undefined;
        if(!this.placeholder) this.placeholder = undefined;
        if(!this.disabled) this.disabled = undefined;
        if(!this.minvalues) this.minvalues = undefined;
        if(!this.maxvalues) this.maxvalues = undefined;
        if(!this.options) this.options = undefined;
    };
}

module.exports = SelectMenu;