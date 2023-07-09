import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(router);

app.component("DataTable", DataTable);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Row", Row);
app.mount("#app");
