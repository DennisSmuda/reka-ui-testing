<script setup lang="ts">
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Button from './ui/button/Button.vue';
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>Open ShadDialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>ShadDialog</DialogTitle>
        <DialogDescription>
          This is a shadcn Dialog.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose as-child>
          <Button>Save changes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>