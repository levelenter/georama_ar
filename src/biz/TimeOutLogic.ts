import { ref } from "@vue/runtime-core";

export class TimeOutLogic {
  static TIMEOUT = 1000 * 60 * 3;

  /**
   * コンストラクタを隠蔽
   */
  private constructor() {
    //
  }

  /**
   * シングルトンを作成
   */
  private static singleton: TimeOutLogic;
  static get instance(): TimeOutLogic {
    if (!TimeOutLogic.singleton) {
      TimeOutLogic.singleton = new TimeOutLogic();
    }
    return TimeOutLogic.singleton;
  }

  timeOutAction: () => void = () => {
    //
  };

  /**
   * 現在の秒数を設定
   */
  currentTime = ref(0);
  timerId: any = 0;
  timerStart(): TimeOutLogic {
    this.timerId = setInterval(() => {
      // console.log("timer : ", this.currentTime.value);
      this.currentTime.value = this.currentTime.value + 1000;
      if (this.currentTime.value > TimeOutLogic.TIMEOUT) {
        // カウントを超えたら
        this.timeOutAction();

        // タイマーを0クリア
        this.clearTimer();
      }
    }, 1000);
    return this;
  }

  /**
   * タイムアウトのタイマーをクリア
   */
  clearTimer(): void {
    clearInterval(this.timerId);
    this.currentTime.value = 0;
  }

  /**
   * タイムアウトをリセット
   */
  resetTimeout(): void {
    this.clearTimer();
    this.timerStart();
  }
}
