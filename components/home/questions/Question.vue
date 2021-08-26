<template>
  <div>
    <div class="question-box">
      <ul>
        <div class="question-container">
          <li>
            {{ question.question }}
          </li>
          <div class="question-icon" @click="$emit('toggleOpen')">
            <font-awesome-icon
              v-if="!open"
              icon="plus-circle"
              style="font-size: 22px"
            />
            <font-awesome-icon
              v-if="open"
              icon="minus-circle"
              style="font-size: 22px"
            />
          </div>
        </div>
        <p :class="open ? 'open' : 'answer'">
          {{ question.answer }}
        </p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Question",
  props: ["question", "open", "toggleOpen"]
};
</script>
<style lang="scss" scoped>
.answer {
  opacity: 0;
  height: 20px;
  overflow: hidden;
}

.open {
  opacity: 1;
  max-width: 400px;
  margin: 0 auto;
  height: fit-content;
  transition: all 0.5s linear;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.6);

  @media (max-width: 800px) {
    max-width: 280px;
  }
}
.question-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border-bottom: 2px solid var(--brand-grey);
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 10px;
  li {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    width: 300px;
  }
}

.question-icon {
  color: var(--brand-green);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px;
}

.question-icon:hover {
  color: var(--brand-orange);
}

ul {
  list-style: none;
}
</style>
