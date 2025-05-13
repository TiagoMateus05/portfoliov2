import { ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ref, useSSRContext } from 'vue';
import BinaryBackground from './BackGroudNumbers.vue.mjs';
import BackGroundBlinking from './BackGroundBlinking.vue.mjs';
import NavBar from './navBar.vue.mjs';
import { u as useHead } from './v3.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './server.mjs';
import 'vue-router';

const _imports_0 = publicAssetsURL("/Photo.png");

const _imports_1 = publicAssetsURL("/email.png");

const _imports_2 = publicAssetsURL("/linkedin-icon.png");

const _imports_3 = publicAssetsURL("/github.png");

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Tiago Mateus",
      meta: [{ charset: "UTF-8" }],
      link: [
        { rel: "stylesheet", href: "/main.css", type: "text/css" },
        { rel: "icon", type: "image/png", href: "/devicon.png" }
      ]
    });
    const typedHeadText = ref("");
    const typedSubHeadText = ref("");
    const isAtTop = ref(true);
    const showPopup = ref(false);
    ref(null);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div><div class="${ssrRenderClass(["binary-background-container"])}">`);
      _push(ssrRenderComponent(BinaryBackground, null, null, _parent));
      _push(`<p class="${ssrRenderClass(["contentHeader", { centered: isAtTop.value }])}"><span class="head">${ssrInterpolate(typedHeadText.value)}</span> <br><span class="subhead">${ssrInterpolate(typedSubHeadText.value)}</span> <br><a class="button" href="#navbar">See More</a></p></div><div>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(ssrRenderComponent(BackGroundBlinking, null, null, _parent));
      _push(`<h2 id="about" class="about" style="${ssrRenderStyle({ "text-align": "center", "position": "relative" })}">About</h2><div class="flex-container default"><div style="${ssrRenderStyle({ "width": "50%" })}">I am a student at <a class="links" href="https://tecnico.ulisboa.pt/pt/"> Instituto Superior Técnico Lisboa</a>. I consider myself a team player, a problem solver, and someone eager to learn and grow. While I love coding, I also enjoy dedicating time to other interests, such as being a scout, playing the guitar, and discovering new experiences.&quot; <br> <br>Wanna know more? Here is my CV! <br><a class="button" href="/Tiago Mateus CV 2025.pdf" download>Download CV</a></div><div class="image-container"><img${ssrRenderAttr("src", _imports_0)} class="about-image"></div></div><h2 class="skills" style="${ssrRenderStyle({ "padding-left": "10cm" })}">Skills</h2><div class="default-line-container"><p class="default">You can see many skills that I am still improving and some projects with them</p><div class="short-line"></div></div><div class="skills-container"><a href="https://github.com/TiagoMateus05/FP23-proj2" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/27/1/python-logo-png_seeklogo-273830.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/SO24-25" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/45/1/c-language-logo-png_seeklogo-458623.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/ASA1-24" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/27/1/c-logo-png_seeklogo-272951.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/PO24-25" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/27/1/java-logo-png_seeklogo-273556.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/KMeans" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/34/1/risc-v-logo-png_seeklogo-340273.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/IMS-dei" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/27/1/javascript-js-logo-png_seeklogo-273557.png" class="images-skill"></a></div><div class="skills-container"><a href="https://github.com/TiagoMateus05/IMS-dei" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/29/1/typescript-logo-png_seeklogo-298572.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/portfoliov2" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/20/1/html5-logo-png_seeklogo-206834.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/portfoliov2" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/27/1/css3-logo-png_seeklogo-273017.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/portfoliov2" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png" class="images-skill"></a><a href="https://github.com/TiagoMateus05/IMS-dei" class="images-container" style="${ssrRenderStyle({ "width": "10%" })}"><img src="https://images.seeklogo.com/logo-png/33/1/spring-logo-png_seeklogo-333113.png" class="images-skill"></a></div><h2 id="studies" class="skills" style="${ssrRenderStyle({ "padding-left": "70%" })}">Studies</h2><div class="storyline-container"><div class="storyline"><div class="storyline-item"><h3>São João Estoril Highschool 2020-2023</h3><p>São João Estoril is where I studied Science and Technologies, a 3 year preparation to join Instituto Superior Técnico later on. </p></div><div class="storyline-item"><h3>Instituto Superior Técnico 2023-Present</h3><p>In 2023 I started my education in Computer Science and Engeineering, at Instituto Superior Técnico, University of Lisbon, where I still am developing varius skills with school projects. While having a lot of self learn, the key programming languages I develped where Python, C, C++, Java and Assembly RISC-V. </p></div><div class="storyline-item"><h3>Web.Dev - Aerotec 2024-Present</h3><p>I joined the Web.Dev project in search of learning and gaining experience with EJS, js and express, along studies HTML and CSS. Currently I play a valuable role in the Aerotec Site developement. </p></div></div></div></div></div><div class="bottom-contacts" style="${ssrRenderStyle({ "border-radius": "10px" })}"><p id="contacts" class="contacts">Contacts</p><div class="skills-container" style="${ssrRenderStyle({ "padding-bottom": "60px" })}"><a class="button"><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "60px" })}"></a>`);
      if (showPopup.value) {
        _push(`<div class="popup">Copied to clipboard</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="skills-container" style="${ssrRenderStyle({ "padding-bottom": "60px" })}"><a href="https://www.linkedin.com/in/tiago-mateus-2915532b7/"><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "width": "65px" })}"></a><a href="https://github.com/TiagoMateus05"><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "60px" })}"></a></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
