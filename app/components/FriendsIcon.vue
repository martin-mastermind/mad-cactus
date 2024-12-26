<template>
  <button class="button-icon top">
    <div class="icon">
      <slot></slot>
    </div>
    <Counter v-if="count" color="red" :number="count" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  count?: number;
}>();
</script>

<style scoped lang="scss">
.button-icon {
  display: inline-flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 200px;
  background: #fff;
  position: relative;
  cursor: default;
}

.button-icon.clickable {
  cursor: pointer;
}

.icon {
  display: flex;
  align-items: center;
}

.counter {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4136;
  color: #fff;
  border-radius: 50%;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
}

.button-icon.top {
  margin-bottom: 16px;
}

.button-icon.bottom {
  margin-top: 16px;
}
</style>
