export default class NodeBase extends cc.Node {
  // 唯一ID
  private _uid: string;

  // private _canTransform

  /**
   *
   */
  constructor() {
    super();
    this._uid = "1";
  }

  public get uid(): string {
    return this._uid;
  }
}
