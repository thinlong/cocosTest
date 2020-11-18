<template>
  <div class="edit-content">
    <CocosView></CocosView>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CocosView from "./CocosView.vue";

@Component({
  components: { CocosView }
})
export default class EditContent extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.edit-content {
  flex: 1;
  height: 100%;
  background-color: yellow;
}
</style>
