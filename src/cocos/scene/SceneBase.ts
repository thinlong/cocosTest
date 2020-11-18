/**
 * 场景基类
 */
export default class SceneBase extends cc.Scene {
  /**
   * 地板层
   * 背景
   */
  private _floorLayer: any;

  /**
   * 内容层（中间层）
   */
  private _contentLayer: any;

  /**
   * 天花板层
   * pop
   */
  private _ceilingLayer: any;

  /**
   *
   */
  constructor() {
    super();
    this.width = 600;
    this.height = 600;
    this.initConfig();
    this.initLayer();
  }

  private initConfig(): void {
    this.autoReleaseAssets = true;
  }

  /**
   * 初始化层
   */
  private initLayer(): void {
    this._floorLayer = new cc.Node();
    this.addChild(this._floorLayer);

    this._contentLayer = new cc.Node();
    this.addChild(this._contentLayer);

    this._ceilingLayer = new cc.Node();
    this.addChild(this._ceilingLayer);
  }
}
