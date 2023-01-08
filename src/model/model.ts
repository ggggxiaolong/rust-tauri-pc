export class Size {
  width: number;
  height: number;
  pixelRatio: number;
  aspect: number;
  offsiteWidth: number = 0;
  offsiteHeight: number = 0;
  private onChange: () => void;
  private static _instance: Size;

  private constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(2, window.devicePixelRatio);
    this.aspect = this.width / this.height;
    this.onChange = function () {};
    Size._instance = this;
    window.addEventListener("resize", function () {
      Size._instance.changeSize();
      Size._instance.onChange();
    });
  }

  public static getInstance(): Size {
    return Size._instance || (this._instance = new this());
  }

  public setOffsite(width: number, height: number){
    this.offsiteWidth = width;
    this.offsiteHeight = height;
    this.changeSize();
    this.onChange();
  }

  private changeSize() {
    this.width = window.innerWidth - this.offsiteWidth;
    this.height = window.innerHeight - this.offsiteHeight;
    this.pixelRatio = Math.min(2, window.devicePixelRatio);
    this.aspect = this.width / this.height;
  }
  public onResize(onChange: () => void) {
    this.onChange = onChange;
  }
}