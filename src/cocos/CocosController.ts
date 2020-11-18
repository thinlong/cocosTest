import EditorScene from "./scene/EditorScene";

/**
 * facade
 */
export default class CocosController {
  private static _instance: CocosController;
  public static o(): CocosController {
    if (this._instance == null) {
      this._instance = new CocosController();
    }
    return this._instance;
  }

  /**
   * 当前场景
   */
  private _currentScene!: any;

  public runEditorScene(): void {
    cc.game.run("gameCanvas", () => {
      const tempScene = new EditorScene();
      this._currentScene = tempScene;
      cc.director.runScene(tempScene);
    });
  }

  public get currentScene(): any {
    return this._currentScene;
  }
}
