<template>
  <div class="btn-container">
    <NuxtLink to="/buttons" class="btn">{{ text || "Click" }}</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["text"]);

const text = ref(props.text);
</script>

<style lang="scss" scoped>
.btn {
  color: $dark_text;
  display: inline-block;
  text-decoration: none;
  background-color: $primary;
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 0.2rem;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);

  &:hover {
    animation: growNShrink 2s linear;
    cursor: pointer;
  }
}

.btn-container {
  margin: 4rem;
}

@keyframes growNShrink {
  0% {
    transform: scale(0.8);
    background-color: $primary;
  }
  50% {
    transform: scale(1.4);
    background-color: $secondary;
  }
  100% {
    transform: scale(1);
    background-color: $primary;
  }
}
</style>
