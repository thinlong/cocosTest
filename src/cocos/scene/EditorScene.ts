import SceneBase from "./SceneBase";

export default class EditorScene extends SceneBase {
  text = "aa";
  /**
   *
   */
  constructor() {
    super();
    this.name = "EditorScene";
  }

  test(): void {
    console.log();
    const sprite = new cc.Sprite("HelloWorld.png");
    sprite.setPosition(0, 0);
    sprite.setScale(0.3);
    this.addChild(sprite);

    // const size = cc.director.getWinSize();
  }

  public addLabel(): void {
    const myLabel = new cc.LabelTTF("label text", "宋体", 32);
    myLabel.setPosition(300, 300);
    this.addChild(myLabel);
    console.log(myLabel);
  }

  onEnter(): void {
    console.log("EditorScene enter");
    // console.log("a", cc.Sprite.create);
    this.test();
  }

  /**
   * 转换为json数据
   */
  public toJson(): string {
    return "";
  }
}
