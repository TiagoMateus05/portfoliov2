<template>
  <div>
    <BinaryBackground />
    <div>
        <p :class="['contentHeader', { centered: isAtTop }]">
            <div>
            <span class="head"> {{ typedHeadText }} </span> <br>
            <span class="subhead"> {{ typedSubHeadText }} </span>
            </div>
        </p>
    </div>
    <div>
        <h2 class="subhead" style="text-align: center; position: relative; color: #053A59">About</h2>
        <div class="flex-container default">
            <div style="width: 40%;">I am a student at <a class="links"; href="https://tecnico.ulisboa.pt/pt/"> Instituto Superior Técnico Lisboa</a> and I am
            a devoted Software Engineer and so much more. I value my personality as a team player
            , a problem solver and excitment for learning new things. In my free time I take a breath 
            from coding and I like to be a scout, playing guitar and much more </div>
            <div> <image src="../images/tsconfig.jpeg"></image></div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BinaryBackground from "./BackGroudNumbers.vue";
import { useHead } from '#app'

useHead({
  title: 'Tiago Mateus',
  meta: [
    { charset: 'UTF-8' }
  ],
  link: [
    { rel: 'stylesheet', href: '/main.css', type: 'text/css' }
  ]
})

const typedHeadText = ref("")
const typedSubHeadText = ref("")
const introText = "Hello, my name is Tiago Mateus"
const subIntroText = "I'm a Computer Science and Engineer Student"
const isAtTop = ref(true)

const loadingName = () => {
  let index = 0;
  const intervalId = setInterval(() => {
            if (index < introText.length) {
                typedHeadText.value = typedHeadText.value + introText[index];
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
                typedSubHeadText.value = typedSubHeadText.value + subIntroText[index];
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 40);
    }

    onMounted(() => {
        loadingName();
    })
</script>