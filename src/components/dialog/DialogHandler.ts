import { DialogHandlerCore } from "./DialogHandlerCore";

export class DialogHandler extends DialogHandlerCore {
  static singInDialogId = "loginDialog";
  static tableDialogId = "tableDialog";
  static qrDialogId = "qrDialog";
  static showTableDialog(): void {
    this.show(this.tableDialogId);
  }
  static showSingInDialog(): void {
    this.show(this.singInDialogId);
  }

  static qrData = "";
  static showQrDialog(): void {
    this.show(this.qrDialogId);
  }
}
