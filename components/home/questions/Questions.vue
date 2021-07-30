<template>
  <div>
    <SubHeadline headline="FAQ" />
    <div class="questions-box">
      <div class="question-box">
        <Question
          v-for="question in questions"
          :question="question"
          :key="question.id"
          :open="question.open"
          @toggleOpen="toggleOpen(question.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Question from "./Question.vue";
import SubHeadline from "../../layout/SubHeadline.vue";

export default {
  name: "Questions",
  components: {
    Question,
    SubHeadline
  },
  methods: {
    toggleOpen(id) {
      this.questions = this.questions.map(q => {
        if (id === q.id) {
          q.open = !q.open;
        } else {
          q.open = false;
        }
        return q;
      });
    }
  },

  data() {
    return {
      questions: [
        {
          id: 1,
          question: "Refunds on hotel bookings",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh felis, viverra et ornare euismod, aliquam ac ligula. Vestibulum sollicitudin lacinia purus eget porttitor. Aliquam est leo, venenatis sed tortor sed, pretium egestas sem. Donec at pulvinar tellus, ut fringilla arcu. Proin mollis id tellus ut pharetra.",
          open: false
        },
        {
          id: 2,
          question: "Change or cancel your hotel booking",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh felis, viverra et ornare euismod, aliquam ac ligula. Vestibulum sollicitudin lacinia purus eget porttitor. Aliquam est leo, venenatis sed tortor sed, pretium egestas sem. Donec at pulvinar tellus, ut fringilla arcu. Proin mollis id tellus ut pharetra.",
          open: false
        },
        {
          id: 3,
          question: "View and print your hotel booking",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh felis, viverra et ornare euismod, aliquam ac ligula. Vestibulum sollicitudin lacinia purus eget porttitor. Aliquam est leo, venenatis sed tortor sed, pretium egestas sem. Donec at pulvinar tellus, ut fringilla arcu. Proin mollis id tellus ut pharetra.",
          open: false
        },
        {
          id: 4,
          question: "Booking inscurance",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh felis, viverra et ornare euismod, aliquam ac ligula. Vestibulum sollicitudin lacinia purus eget porttitor. Aliquam est leo, venenatis sed tortor sed, pretium egestas sem. Donec at pulvinar tellus, ut fringilla arcu. Proin mollis id tellus ut pharetra.",
          open: false
        },
        {
          id: 5,
          question: "Getting started",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh felis, viverra et ornare euismod, aliquam ac ligula. Vestibulum sollicitudin lacinia purus eget porttitor. Aliquam est leo, venenatis sed tortor sed, pretium egestas sem. Donec at pulvinar tellus, ut fringilla arcu. Proin mollis id tellus ut pharetra.",
          open: false
        },
        {
          id: 7,
          question: "How Holidaze works",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh felis, viverra et ornare euismod, aliquam ac ligula. Vestibulum sollicitudin lacinia purus eget porttitor. Aliquam est leo, venenatis sed tortor sed, pretium egestas sem. Donec at pulvinar tellus, ut fringilla arcu. Proin mollis id tellus ut pharetra.",
          open: false
        },
        {
          id: 8,
          question: "Account security",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh felis, viverra et ornare euismod, aliquam ac ligula. Vestibulum sollicitudin lacinia purus eget porttitor. Aliquam est leo, venenatis sed tortor sed, pretium egestas sem. Donec at pulvinar tellus, ut fringilla arcu. Proin mollis id tellus ut pharetra.",
          open: false
        }
      ]
    };
  }
};
</script>
<style>
.sub-headline {
  text-align: center;
  font-size: 33px;
  padding: 2rem 0;
  font-family: var(--font-headline);
}
.question-box {
  display: flex;
  flex-direction: column;
}

.questions-box {
  padding: 2rem 0;
}
</style>
