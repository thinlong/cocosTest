<template>
  <div class="cocos-view">
    <canvas id="gameCanvas" width="800" height="600"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CocosView extends Vue {
  @Prop() private msg!: string;

  private docWidth = 1280;
  private docHeight = 720;

  // canvas的缩放值
  private canvasScale = 1;

  checkCanvasScale(): void {
    const width: number = (this.$el as any).offsetWidth;
    const height: number = (this.$el as any).offsetHeight;
    this.canvasScale = width / this.docWidth;

    console.log(width, height);
    // 获取自身的宽度
    // 减去
  }
  ff(): void {
    console.log("aa");
    this.$cocos.currentScene.addLabel();
  }
  mounted() {
    // this.checkCanvasScale();
    this.$cocos.runEditorScene();
    document.addEventListener("click", this.ff.bind(this));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cocos-view {
  margin-left: 40px;
  margin-right: 40px;
  background-color: turquoise;
}
</style>
