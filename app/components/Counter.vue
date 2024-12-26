<template>
  <div class="counter-circle" :style="{ backgroundColor: parsedColor }">
    {{ number }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: "red" | "black";
  number: number;
}>();

const parsedColor = computed(() => `var(--color-${props.color})`);
</script>

<style scoped>
.counter-circle {
  display: inline-flex;
  height: 16px;
  padding: 0px 4px 0px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--color-white);
}
</style>
