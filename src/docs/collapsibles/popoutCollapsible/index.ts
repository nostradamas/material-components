import Component from 'vue-class-component';

import mdCollapsible from '../../../components/collapsible';
import mdCollapsibleItem from '../../../components/collapsible-item';
import mdIcon from '../../../components/icon';

@Component({
    components: {
        mdIcon,
        mdCollapsible,
        mdCollapsibleItem,
    },
    template: require('./popoutCollapsible.html')
})
export default class PopoutCollapsible {
}

