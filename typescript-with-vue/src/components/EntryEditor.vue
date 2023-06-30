<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import type Emoji from "@/types/Emoji";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import { ref, computed } from "vue";
//Approach using Ref type - without this approach you safe and extra import
// import type {Ref} from "vue";
// const emoji: Ref<Emoji | null> = ref(null);

//data
const emoji = ref<Emoji | null>(null);
const text = ref("");
const charCount = computed(() => text.value.length);
const maxChars = 280;

//methods
const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length <= maxChars) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.substring(0, maxChars);
  }
};

//events
//simple defineEmits call
// defineEmits(["@create"]);
//defineEmits with Type declaration
defineEmits<{
  (e: "@create", entry: { text: string; emoji: Emoji | null }): void;
}>();
</script>
<template>
  <form class="entry-form" @submit.prevent="$emit('@create', { text, emoji })">
    <textarea
      :value="text"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
