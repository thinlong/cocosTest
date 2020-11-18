<template>
  <div class="edit-props"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EditProps extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.edit-props {
  width: 360px;
  min-width: 360px;
  flex: 0 0 360px;
  background-color: ghostwhite;
  border-bottom: 1px solid gray;
}
</style>
