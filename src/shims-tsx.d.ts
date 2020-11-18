import Vue, { VNode } from "vue";
import CocosController from "@/cocos/CocosController";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare global {
  const cc: any;
}

declare module "cc";

declare module "vue/types/vue" {
  interface Vue {
    $cocos: CocosController;
  }
}
