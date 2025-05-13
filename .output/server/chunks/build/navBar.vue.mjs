import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "navbar",
    class: "navbar"
  }, _attrs))} data-v-a108bcdb><div class="navbar-container" data-v-a108bcdb><ul class="navbar-menu" data-v-a108bcdb><li class="navbar-item" data-v-a108bcdb><a href="/" class="navbar-link" data-v-a108bcdb>Home</a></li><li class="navbar-item" data-v-a108bcdb><a href="#about" class="navbar-link" data-v-a108bcdb>About</a></li><li class="navbar-item" data-v-a108bcdb><a href="#studies" class="navbar-link" data-v-a108bcdb>Studies</a></li><li class="navbar-item" data-v-a108bcdb><a href="#contacts" class="navbar-link" data-v-a108bcdb>Contact</a></li></ul></div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/navBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a108bcdb"]]);

export { NavBar as default };
//# sourceMappingURL=navBar.vue.mjs.map
