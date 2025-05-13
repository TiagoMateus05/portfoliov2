import { ref, mergeProps, useSSRContext } from 'vue';
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

const _sfc_main = {
  __name: "BackGroundBlinking",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvasRef",
        ref: canvasRef
      }, _attrs))} data-v-0f10426d></canvas>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/BackGroundBlinking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackGroundBlinking = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f10426d"]]);

export { BackGroundBlinking as default };
//# sourceMappingURL=BackGroundBlinking.vue.mjs.map
