import Component from 'vue-class-component';

import components from '../../../components';
import directives from '../../../directives';

@Component({
    components,
    directives,
    template: require('./defaultCollapsible.html')
})
export default class DefaultCollapsible {
    data() {
        return {
            opened: 'one',
            popout: false
        }
    }
}

