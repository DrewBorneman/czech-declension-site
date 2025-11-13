<template>
  <MainTemplate>
    <div class="content flex flex-row">
      <div class="flex-grow"></div>
      <div class="flex-grow flex-shrink flex flex-col mt-2 items-center" :class="mobile ? 'basis-full' : 'basis-70'">
        <div class="w-full box-border float-right text-sm">
          <v-switch class="w-fit float-right small-switch" v-model="TranslationOn" hide-details>
            <template v-slot:label>
              <div class="text-s" >{{$t('siteInfo.enTranslations')}}</div>
            </template>
          </v-switch>
          </div>
        <div class="w-full box-border text-center p-4 my-2 mx-8 mb-4 rounded-md bg-theme-bluegray">
          <div class="font-bold ">{{ Question.sentenceWithoutWord }}</div>
          <div v-show="TranslationOn" class="font-italic text-sm">
            <br />
            {{ Question.sentenceTranslation }}
          </div>
        </div>
        <div v-show="currState == State.Review || !mobile" class="w-full box-border font-bold text-center text-lg mt-4 mx-8 rounded-md mb-4" :class="currState == State.Question ? 'invisible' : 'visible'">{{ feedback }}</div>
        <div class="flex flex-row flex-wrap w-full mb-8" :class = "mobile ? '' : 'px-2'">
          <div v-for="option in Question.allOptions" class="basis-half">
            <div class="box-border text-center my-2 rounded-md" :class="answerColorMap.get(option), mobile ? 'mx-3' : 'mx-6'">
                <button v-on:click="selectOption(option)" class="w-full p-2">{{ option }}</button>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-row">
            <div class="flex-grow"></div>
              <div class="flex-grow flex-shrink basis-1/3 box-border font-bold text-center my-2 mx-6 py-1 rounded-md bg-theme-lightgreen">
                  <button @click = "submit" class="w-full p-2">{{ currState == State.Question ? $t('siteInfo.check') : $t('siteInfo.next') }}</button>
              </div>
            <div class="flex-grow"></div>
        </div>
      </div>
      <div class="flex-grow"></div>
    </div>
  </MainTemplate>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, inject } from 'vue';
import { ref } from '@vue/reactivity';
import { GetQuestion, GetCount } from '../helpers/getRequests';
import { TQuestion } from '../types/components';
import MainTemplate from '../components/MainTemplate.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n();

const mobile = inject('mobile');

enum State {
  Question = 1,
  Review
}

const Question = ref<TQuestion>(<TQuestion>{});
const Count = ref<number>(0);
const TranslationOn = ref<boolean>(true);
const selectedOption = ref("");
const answerColorMap = reactive(new Map<string, string>());
const currState = ref<State>(State.Question);
const feedback = ref<string>("abc");

function selectOption(option: string): void {
  if(currState.value != State.Question)
    return;
  answerColorMap.set(selectedOption.value, 'bg-theme-lightblue');
  selectedOption.value = option;
  answerColorMap.set(selectedOption.value, 'bg-theme-lightyellow');
}

async function submit(): Promise<void> {
  if(currState.value == State.Question)
    await checkAnswer()
  else
    await newQuestion();

}

async function checkAnswer(): Promise<void> {
  window.scrollTo(0,0);
  if(selectedOption.value == Question.value.correctAnswer)
  {
      answerColorMap.set(selectedOption.value, 'bg-theme-darkergreen');
      feedback.value = t('siteInfo.correct');
  }
  else
    {
      answerColorMap.set(selectedOption.value, 'bg-theme-lightred');
      answerColorMap.set(Question.value.correctAnswer, 'bg-theme-darkergreen');
      feedback.value = t('siteInfo.incorrect');
    }
  currState.value = State.Review;
}

async function newQuestion(): Promise<void> {
  let nextQuestionNumber = getRandomInt(Count.value);
  Question.value = await GetQuestion(nextQuestionNumber);
  Question.value.allOptions.forEach((value) => {
    answerColorMap.set(value, 'bg-theme-lightblue')
  })
  currState.value = State.Question;
}

onBeforeMount(async () => {
  Count.value = await GetCount();
  if(Count.value == -1)
    console.error("Could not get count of questions");
  newQuestion();
})

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
</script>

<style lang="css" scoped>
  .portrait-mobile {
    width: 16rem;
    max-width: 80%;
    margin-bottom: 2rem;
  }
  
  .basis-half {
    flex-basis: 50%;
  }
  
  .basis-40 {
    flex-basis: 40%;
  }
  
  .basis-70 {
    flex-basis: 70%;
  }
  
  .basis-90 {
    flex-basis: 90%;
  }
  .small-switch {
    transform: scale(0.8);
    transform-origin: right;
}
</style>
