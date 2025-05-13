import { d as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue/server-renderer';

const mobileRedirect = defineNuxtRouteMiddleware((to, from) => {
});

export { mobileRedirect as default };
//# sourceMappingURL=mobileRedirect.mjs.map
