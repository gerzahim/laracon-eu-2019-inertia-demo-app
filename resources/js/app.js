import './bootstrap';
import Vue from 'vue';
import { InertiaApp } from '@inertiajs/inertia-vue';

Vue.use(InertiaApp);

const app = document.getElementById('app');

new Vue({
    render(h) {
        return h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => {
                    return import(`./Pages/${name}`).then(
                        module => module.default
                    );
                }
            }
        });
    }
}).$mount(app);
