const sfcContent = [
  {
    "fileName": "EraseRight.vue",
    "content": "<template>\n  <div role=\"button\" class=\"btn\">{{ text || \"Click\" }}</div>\n</template>\n\n<script setup>\nconst props = defineProps([\"text\"]);\n\nconst text = ref(props.text);\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n  color: $dark_text;\n  text-decoration: none;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 1rem;\n  width: fit-content;\n  height: auto;\n  text-align: center;\n  border-radius: 1rem;\n  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  position: relative;\n  overflow: hidden;\n  transition: box-shadow 0.5s ease;\n  z-index: 1;\n\n  &:hover {\n    cursor: pointer;\n    -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0);\n    -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0);\n    box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0);\n  }\n\n  // Pseudo-element\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: -1;\n    background-color: $primary;\n    border-radius: 0.2rem;\n  }\n\n  &:hover::after {\n    animation: eraseRight 1s forwards;\n  }\n}\n\n.dark-mode {\n  .btn {\n    &:hover {\n      animation: fadeColor 0.5s linear;\n      color: $light_text;\n    }\n  }\n}\n\n@keyframes fadeColor {\n  from {\n    color: $dark_text;\n  }\n  to {\n    color: $light_text;\n  }\n}\n\n@keyframes eraseRight {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n</style>\n"
  },
  {
    "fileName": "Fill.vue",
    "content": "<template>\n  <div role=\"button\" class=\"btn\">{{ text || \"Click\" }}</div>\n</template>\n\n<script setup>\nconst props = defineProps([\"text\"]);\n\nconst text = ref(props.text);\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n  color: $dark_text;\n  text-decoration: none;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 1rem;\n  width: fit-content;\n  text-align: center;\n  border-radius: 1rem;\n  border: $primary 5px solid;\n  box-shadow: inset 0 0 0 3px #ffffff;\n  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  position: relative;\n\n  &::after {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n\n  &:hover {\n    background-color: $primary;\n    cursor: pointer;\n  }\n}\n\n.dark-mode {\n  .btn {\n    color: $light_text;\n\n    &:hover {\n      color: $dark_text;\n      background-color: $primary;\n      cursor: pointer;\n    }\n  }\n}\n</style>\n"
  },
  {
    "fileName": "Glow.vue",
    "content": "<template>\n  <div role=\"button\" class=\"btn\">{{ text || \"Click\" }}</div>\n</template>\n\n<script setup>\nconst props = defineProps([\"text\"]);\n\nconst text = ref(props.text);\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n  color: $dark_text;\n  text-decoration: none;\n  background-color: $primary;\n  padding: 1rem;\n  width: fit-content;\n  text-align: center;\n  border-radius: 1rem;\n\n  &:hover {\n    animation: glow 2s infinite;\n    cursor: pointer;\n  }\n}\n\n@keyframes glow {\n  0% {\n    box-shadow: 0 0 10px 5px $primary;\n  }\n  50% {\n    box-shadow: 0 0 20px 10px $secondary;\n  }\n  100% {\n    box-shadow: 0 0 10px 5px $primary;\n  }\n}\n</style>\n"
  },
  {
    "fileName": "Gradient.vue",
    "content": "<template>\n  <div role=\"button\" class=\"btn\">{{ text || \"Click\" }}</div>\n</template>\n\n<script setup>\nconst props = defineProps([\"text\"]);\n\nconst text = ref(props.text);\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n  color: $dark_text;\n  text-decoration: none;\n  background-color: $primary;\n  background: linear-gradient(45deg, $primary, $secondary);\n  background-size: 200% 200%;\n\n  padding: 1rem;\n  width: fit-content;\n  text-align: center;\n  border-radius: 1rem;\n\n  &:hover {\n    animation: spinGradient 2s infinite;\n    cursor: pointer;\n  }\n}\n\n@keyframes spinGradient {\n  0% {\n    background-position: 0% 50%, 100% 50%;\n  }\n  50% {\n    background-position: 100% 50%, 0% 50%;\n  }\n  100% {\n    background-position: 0% 50%, 100% 50%;\n  }\n}\n</style>\n"
  },
  {
    "fileName": "Parallelogram.vue",
    "content": "<template>\n  <div role=\"button\" class=\"btn\">{{ text || \"Click\" }}</div>\n</template>\n\n<script setup>\nconst props = defineProps([\"text\"]);\n\nconst text = ref(props.text);\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n  color: $dark_text;\n  text-decoration: none;\n  background-color: $primary;\n  padding: 1rem 5rem;\n  width: fit-content;\n  text-align: center;\n  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  clip-path: polygon(25% 0%, 100% 0%, 73% 100%, 0% 100%);\n\n  &:hover {\n    cursor: pointer;\n    animation: pulse 1.3s linear;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1) scaleX(1);\n  }\n  50% {\n    transform: scale(1.05) scaleX(1.2);\n  }\n  100% {\n    transform: scale(1) scaleX(1);\n  }\n}\n</style>\n"
  },
  {
    "fileName": "Pulse.vue",
    "content": "<template>\n  <div role=\"button\" class=\"btn\">{{ text || \"Click\" }}</div>\n</template>\n\n<script setup>\nconst props = defineProps([\"text\"]);\n\nconst text = ref(props.text);\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n  color: $dark_text;\n  text-decoration: none;\n  background-color: $primary;\n  padding: 1rem;\n  width: fit-content;\n  text-align: center;\n  border-radius: 1rem;\n  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n\n  &:hover {\n    animation: growNShrink 1s linear;\n    cursor: pointer;\n  }\n}\n\n@keyframes growNShrink {\n  0% {\n    transform: scale(0.9);\n    background-color: $primary;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: $secondary;\n  }\n  100% {\n    transform: scale(1);\n    background-color: $primary;\n  }\n}\n</style>\n"
  },
  {
    "fileName": "Shake.vue",
    "content": "<template>\n  <div role=\"button\" class=\"btn\">{{ text || \"Click\" }}</div>\n</template>\n\n<script setup>\nconst props = defineProps([\"text\"]);\n\nconst text = ref(props.text);\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n  color: $dark_text;\n  text-decoration: none;\n  background-color: $primary;\n  padding: 1rem;\n  width: fit-content;\n  text-align: center;\n  border-radius: 1rem;\n  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n\n  &:hover {\n    animation: shake 0.5s linear;\n    cursor: pointer;\n  }\n}\n\n@keyframes shake {\n  0% {\n    transform: rotate(30deg) scale(1);\n    background-color: $primary;\n  }\n  25% {\n    transform: rotate(-30deg) scale(1.1);\n    background-color: $secondary;\n  }\n  50% {\n    transform: rotate(30deg) scale(0.9);\n  }\n  75% {\n    transform: rotate(-30deg) scale(1.1);\n  }\n  100% {\n    transform: rotate(0deg) scale(1);\n    background-color: $primary;\n  }\n}\n</style>\n"
  },
  {
    "fileName": "Spinning.vue",
    "content": "<template>\n  <div class=\"btn-container\">\n    <div\n      :class=\"['btn', { 'spin-btn': isSpinning }, { 'pulse-btn': !isSpinning }]\"\n      role=\"button\"\n      @click=\"handleClick\"\n    >\n      {{ text || \"Click\" }}\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport sfcContent from \"./public/sfc-content.js\";\n\nimport { navigateTo } from \"#app\";\n\nconst props = defineProps({\n  text: String,\n  clickHandler: {\n    type: Function,\n    required: true,\n  },\n});\n\nconst isSpinning = ref(false);\n\nasync function handleClick() {\n  if (isSpinning.value) return;\n\n  isSpinning.value = true;\n  await nextTick();\n\n  setTimeout(() => {\n    //navigateTo(\"/\"); or other action\n    this.clickHandler;\n    isSpinning.value = false;\n  }, 1200);\n}\n</script>\n\n<style lang=\"scss\" scoped>\n.btn {\n  display: inline-block;\n\n  color: $dark_text;\n  text-decoration: none;\n  background-color: $primary;\n  padding: 1rem 5rem;\n  width: fit-content;\n  text-align: center;\n  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);\n  clip-path: polygon(25% 0%, 100% 0%, 73% 100%, 0% 100%);\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.btn-container {\n  margin: 4rem;\n}\n\n.spin-btn {\n  animation: rotation 1s cubic-bezier(0.66, 0.385, 0.82, 0.085);\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(1080deg);\n  }\n}\n</style>\n"
  }
];
export default sfcContent;