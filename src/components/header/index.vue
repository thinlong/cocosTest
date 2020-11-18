<template>
  <div class="edit-header"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EditHeader extends Vue {
  @Prop() private msg!: string;

  mounted() {
    this.$cocos.runEditorScene();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.edit-header {
  width: 100%;
  height: 80px;
  background-color: ghostwhite;
  border-bottom: 1px solid gray;
}
</style>
