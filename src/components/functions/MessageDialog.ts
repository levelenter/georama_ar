import { dayjs, DT_FORMAT } from "./momentExtends";
import { notify } from "@kyvg/vue3-notification";

export class MessageDialog {
  static alertModal(message: any): void {
    alert(message);
  }
  static prompt(message: any, _default = ""): string | null {
    return prompt(message, _default);
  }

  static info(message: any, isForever = false): void {
    const duration = isForever ? -1 : 3000;
    notify({
      duration: duration,
      type: "success",
      title: "お知らせ",
      text: message,
    });
  }

  static alert(message: any, isForever = false): void {
    const duration = isForever ? -1 : 3000;
    notify({
      duration: duration,
      type: "warn",
      title: "注意",
      text: message,
    });
  }

  static systemError(msg: string, value: any = ""): string {
    notify({
      duration: -1,
      type: "error",
      title: `システムエラー<span class="time">${dayjs().format(
        DT_FORMAT
      )}</span>`,
      text: `${msg} ${value}.画面をリロードしてやり直してみてください。操作ミスではなくシステムトラブルやバグの可能性があります。お手数ですが[ユーザー]->[お問い合わせ]からご連絡ください`,
    });
    return msg;
  }

  static async confirm(message: string): Promise<boolean> {
    return confirm(message);
  }

  static async error(message: any): Promise<void> {
    console.error(message);
    // alert(message);
    notify({
      duration: -1,
      type: "error",
      title: `エラー<span class="time">${dayjs().format(DT_FORMAT)}</span>`,
      text: message,
    });
  }
}
