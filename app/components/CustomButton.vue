<template>
  <button :class="['custom-button', variant]" :disabled="disabled">
    <span class="button-text">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant: "white" | "red" | "black";
  text: string;
  disabled?: boolean;
}>();
</script>

<style scoped lang="scss">
.custom-button {
  display: flex;
  width: 310px;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  font-family: var(--font-main);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.white {
    background-color: var(--color-white);
    color: var(--color-black);

    &:active {
      background-color: #f5f5f5;
    }
  }

  &.red {
    background-color: var(--color-red);
    color: var(--color-black);

    &:active {
      background-color: var(--color-red50);
    }
  }

  &.black {
    background-color: var(--color-black);
    color: var(--color-white);

    &:active {
      background-color: #333333;
    }
  }

  .button-text {
    display: block;
  }
}
</style>
