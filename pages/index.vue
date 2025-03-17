<template>
  <div>
    <!-- Add ref and your existing classes -->
    <div ref="binaryContainer" :class="['binary-background-container']">
      <BinaryBackground />
      <p :class="['contentHeader', { centered: isAtTop }]">
        <span class="head"> {{ typedHeadText }} </span> <br>
        <span class="subhead"> {{ typedSubHeadText }} </span> <br>
        <a class="button" @mouseenter="createSquares" href="#navbar">See More</a>
      </p>
    </div>
    
    <div>
      <NavBar />
      <BackGroundBlinking />
      <h2 id="about" class="about" style="text-align: center; position: relative;">About</h2>
      <div class="flex-container default">
        <div style="width: 50%;">I am a student at <a class="links" href="https://tecnico.ulisboa.pt/pt/"> Instituto Superior Técnico Lisboa</a>. 
          I consider myself a team player, a problem solver, and someone eager to learn and grow. While I love coding, 
          I also enjoy dedicating time to other interests, such as being a scout, playing the guitar, and discovering new experiences."
        <br> <br>Wanna know more? Here is my CV! <br>
        <a class="button" href="/Tiago Mateus CV 2025.pdf" download>Download CV</a>
        </div>
        <div class="image-container"> <img src="/Photo.png" class="about-image"></img></div>
      </div>

      <h2 class="skills" style="padding-left: 10cm ;">Skills</h2>
      <div class="default-line-container">
        <p class="default">You can see many skills that I am still improving and some projects with them</p>
        <div class="short-line"></div>
      </div>

      <div class="skills-container">
        <a href="https://github.com/TiagoMateus05/FP23-proj2" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/27/1/python-logo-png_seeklogo-273830.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/SO24-25" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/45/1/c-language-logo-png_seeklogo-458623.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/ASA1-24" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/27/1/c-logo-png_seeklogo-272951.png" class="images-skill"></a>
        <a href="#" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/27/1/java-logo-png_seeklogo-273556.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/KMeans" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/34/1/risc-v-logo-png_seeklogo-340273.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/IMS-dei" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/27/1/javascript-js-logo-png_seeklogo-273557.png" class="images-skill"></a>
      </div>
      <div class="skills-container">
        <a href="https://github.com/TiagoMateus05/IMS-dei" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/29/1/typescript-logo-png_seeklogo-298572.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/portfoliov2" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/20/1/html5-logo-png_seeklogo-206834.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/portfoliov2" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/27/1/css3-logo-png_seeklogo-273017.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/portfoliov2" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png" class="images-skill"></a>
        <a href="https://github.com/TiagoMateus05/IMS-dei" class="images-container" style="width: 10%;"><img src="https://images.seeklogo.com/logo-png/33/1/spring-logo-png_seeklogo-333113.png" class="images-skill"></a>
      </div>

      <h2 id="studies" class="skills" style="padding-left: 70% ;">Studies</h2>
      <div class="storyline-container">
        <div class="storyline">
          <div class="storyline-item">
            <h3>São João Estoril Highschool 2020-2023</h3>
            <p>São João Estoril is where I studied Science and Technologies, a 3 year
              preparation to join Instituto Superior Técnico later on.
            </p>
          </div>
          <div class="storyline-item">
            <h3>Instituto Superior Técnico 2023-Present</h3>
            <p>In 2023 I started my education in Computer Science and Engeineering, at Instituto Superior Técnico, 
              University of Lisbon, where I still am developing varius skills with school projects. While having a lot of
              self learn, the key programming languages I develped where Python, C, C++, Java and Assembly RISC-V.
            </p>
          </div>
          <div class="storyline-item">
            <h3>Web.Dev - Aerotec 2024-Present</h3>
            <p>I joined the Web.Dev project in search of learning and gaining experience with EJS, js and express, along studies
              HTML and CSS.
              Currently I play a valuable role in the Aerotec Site developement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-contacts" style="border-radius: 10px;">
      <p id="contacts"class="contacts">Contacts</p>
      <p class="default">mail: tiago.g.mateus@tecnico.ulisboa.pt</p>
      <div class="skills-container" style="padding-bottom: 60px;">
        <a href="https://www.linkedin.com/in/tiago-mateus-2915532b7/"><img src="/linkedin-icon.png" style="width: 65px;"></a>
        <a href="https://github.com/TiagoMateus05"><img src="/github.png" style="width: 60px;"></a>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BinaryBackground from "./BackGroudNumbers.vue";
import BackGroundBlinking from './BackGroundBlinking.vue';
import NavBar from "./navBar.vue";
import { useHead } from '#app'

useHead({
  title: 'Tiago Mateus',
  meta: [{ charset: 'UTF-8' }],
  link: [
    { rel: 'stylesheet', href: '/main.css', type: 'text/css' },
    { rel: 'icon', type: 'image/png', href: '/devicon.png' }
  ],
})

const typedHeadText = ref("")
const typedSubHeadText = ref("")
const introText = "Hello, my name is Tiago Mateus"
const subIntroText = "I'm a Computer Science and Engineer Student"
const isAtTop = ref(true)

// assign a ref to the binary background container
const binaryContainer = ref(null)
// reactive flag to track auto scrolling state
const autoScrolled = ref(false)

const loadingName = () => {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < introText.length) {
      typedHeadText.value += introText[index];
      index++;
    } else {
      clearInterval(intervalId);
      loadingSub();
    }
  }, 40);
}

const loadingSub = () => {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < subIntroText.length) {
      typedSubHeadText.value += subIntroText[index];
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 40);
}

const createSquares = (event) => {
  const button = event.target;
  const rect = button.getBoundingClientRect();
  const buttonX = rect.left + window.scrollX;
  const buttonY = rect.top + window.scrollY;
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.left = `${buttonX}px`;
      square.style.top = `${buttonY}px`;
      square.style.width = `${rect.width}px`;
      square.style.height = `${rect.height}px`;
      square.style.borderRadius = window.getComputedStyle(button).borderRadius;
      document.body.appendChild(square);
      setTimeout(() => {
        square.remove();
      }, 2000);
    }, i * 200);
  }
}

const handleScroll = () => {
  if (!binaryContainer.value) return;
  const containerHeight = binaryContainer.value.offsetHeight;
  const scrollPos = window.scrollY;
  
  // scrolling down past half: auto-scroll to About if not already done
  if (scrollPos >= containerHeight / 3 && !autoScrolled.value) {
    const aboutSection = document.getElementById('navbar');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      autoScrolled.value = true;
    }
  }
  // scrolling up back: auto-scroll to binary container if already scrolled down
  else if (scrollPos < containerHeight / 3 && autoScrolled.value) {
    binaryContainer.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
    autoScrolled.value = false;
  }
}

onMounted(() => {
  loadingName();
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>