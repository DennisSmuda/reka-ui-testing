<script setup lang="ts">
import PopoverTest from './components/PopoverTest.vue';
import Dialogtest from './components/RekaDialog.vue';
import ShadDialog from './components/ShadDialog.vue';
import Button from './components/ui/button/Button.vue';
</script>

<template>
  <main class="p-4">
    <h1 class="text-2xl font-bold text-center my-2">Hello</h1>
    <div class="grid grid-cols-1 gap-4 p-4 border max-w-md mx-auto">
      <Button>Regular Button</Button>
      <PopoverTest />
      <Dialogtest />
      <ShadDialog />
    </div>
  </main>
</template>

<style scoped>
</style>
