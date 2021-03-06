import {DirectiveOption} from 'vue-class-component';

var slot: DirectiveOption = {
 
    bind: function () {
        var host = this.vm;
        var root = host.$root;
        var raw = host.$options._content;

        // TODO: Insert your custom logic to decide what element goes here

        for (var i = 0; i < raw.children.length; i++) {
            var node = raw.children[i].cloneNode(true);
            this.el.appendChild(node);
            root.$compile(node, host, this._scope);
        }
    }
};

export default slot;