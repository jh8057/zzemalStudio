<template>
  <div class="EditorPage">
    <h1>This is an Editor page</h1>
    <div id="editor"></div>
  </div>
</template>

<script lang="ts">
import Editor from "@toast-ui/editor";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  mounted() {
    const editor = new Editor({
      el: document.querySelector("#editor") as HTMLElement,
      height: "500px",
      initialEditType: "markdown",
      previewStyle: "vertical",
    });

    editor.getMarkdown();
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
