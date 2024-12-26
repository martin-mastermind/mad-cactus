<template>
  <div class="progress-bar" :style="rootStyles">
    <div class="progress-bar__filled"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  start: number;
  end: number;
  current: number;
}>();

const rootStyles = computed(() => ({
  "--filled-width": `${
    ((props.current - props.start) / (props.end - props.start)) * 100
  }%`,
}));
</script>

<style scoped lang="scss">
.progress-bar {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: var(--color-white25);
  border-radius: 100px;
  overflow: hidden;

  &__filled {
    position: absolute;
    width: var(--filled-width);
    height: 100%;
    background-color: var(--color-white);
    transition: 0.3s width ease-in-out;
  }
}
</style>
