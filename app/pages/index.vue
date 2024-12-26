<template>
  <div>
    <h1>Добро пожаловать в Nuxt 3!</h1>
    <Counter color="red" :number="999" />
    <CustomButton variant="red" text="Кнопка" />
    <Divider />
    <FriendsIcon :count="5" :onClick="handleClick">
      <Svgo24Friends />
    </FriendsIcon>
    <ProgressBar :start="0" :end="100" :current="50" />
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  alert("Кнопка была нажата!");
};
</script>
