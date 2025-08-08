<script setup lang="ts">
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import Button from './ui/button/Button.vue';
</script>

<template>
    <PopoverRoot>
    <PopoverTrigger as-child>
      <Button variant="secondary">Open Popover</Button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent>
        Some more info...
        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style scoped>
</style>
