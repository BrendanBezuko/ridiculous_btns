<template>
  <div class="page">
    <p>Just click to copy the SFC and use in your own code</p>
    <div class="section">
      <h2>Hover Animations</h2>
      <p>Note: these work best on laptops and desktops.</p>
      <div class="section-display">
        <div class="button_container">
          <p>Pulse</p>
          <BtnPulse @click="clicked('Pulse.vue')" />
        </div>
        <div class="button_container">
          <p>Shake</p>
          <BtnShake @click="clicked('Shake.vue')" />
        </div>
        <div class="button_container">
          <p>Erase Right</p>
          <BtnEraseRight @click="clicked('EraseRight.vue')" />
        </div>
        <div class="button_container">
          <p>Fill</p>
          <BtnFill @click="clicked('Fill.vue')" />
        </div>
      </div>
    </div>
    <div class="section">
      <h2>Shapes</h2>
      <div class="section-display">
        <div class="button_container">
          <p>Parallelogram</p>
          <BtnParallelogram @click="clicked('Parallelogram.vue')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sfcContent from "./public/sfc-content.js";

function getSFCContent(fileName) {
  const sfc = sfcContent.find((item) => item.fileName === fileName);
  if (!sfc) {
    console.error(`File ${fileName} not found.`);
    return null;
  }

  return sfc.content;
}

function clicked(fileName) {
  let sfc = getSFCContent(fileName);

  if (sfc) {
    navigator.clipboard
      .writeText(sfc)
      .then(() => alert("SFC content copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err));
  } else {
    alert("No content to copy!");
  }
}
</script>

<style lang="scss">
.section-display {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
