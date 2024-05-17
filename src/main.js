import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueTheMask from 'vue-the-mask';

createApp(App)
.use(VueTheMask)
.use(ToastPlugin)
.mount('#app')


