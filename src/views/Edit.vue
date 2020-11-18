<template>
  <div class="edit">
    <EditHeader></EditHeader>
    <div class="edit-wrapper">
      <EditContent></EditContent>
      <EditProps></EditProps>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditHeader from "@/components/header/index.vue";
import EditContent from "@/components/content/index.vue";
import EditProps from "@/components/props/index.vue";
@Component({
  components: { EditHeader, EditContent, EditProps }
})
export default class Edit extends Vue {
  // mounted() {
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.edit {
  min-width: 1200px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .edit-wrapper {
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
  }
}
</style>
