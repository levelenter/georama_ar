/* eslint-disable @typescript-eslint/no-var-requires */
import xls from "xlsx-populate";
import { XlsxRowData } from "./XlsxRowData";
import fs from "fs";
import path from "path";

/**
 * 定数
 */
const originXlsxPathName = "./convert/origin/data.xlsx";
const sheetName = "モニター文記入一覧1203"; // "モニター文記入一覧1210";
const wirteDirPath = "../public/data/";

const dataStartRowNumber = 2;
/**
 * シートを探し出す
 * @param book ブック
 * @param sheetName シート名
 * @returns
 */
function findSheet(
  book: xls.Workbook,
  sheetName: string
): xls.Sheet | undefined {
  return book.sheets().find((s) => s.name() === sheetName);
}

function dirCreate(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * スタート
 */
const start = async (): Promise<void> => {
  const book = await xls.fromFileAsync(originXlsxPathName);

  const sheet = findSheet(book, sheetName);
  if (!sheet) {
    console.error(`${sheetName}シートが見つかりませんでした。`);
    return;
  }

  // 最終セルを取得
  const endCell = sheet.usedRange()?.endCell();
  if (!endCell) {
    console.error(`最終セルが見つかりませんでした。`);
    return;
  }

  const endRowNumber = endCell.rowNumber();
  const xslxRows: XlsxRowData[] = [];
  console.log("xslxデータロードスタート");
  for (let row = dataStartRowNumber; row <= endRowNumber; row++) {
    const rowData = sheet.row(row);
    if (!rowData.cell(1).value()) continue;

    // データロード
    console.log("xslxデータロード", rowData.cell(1).value());
    // console.log("rownum", rowData.rowNumber());
    // console.log("M", sheet.cell(`M${rowData.rowNumber() + 1}`).value());

    // console.log("10D", typeof sheet.cell("D36").value() === "object");

    xslxRows.push(new XlsxRowData(sheet, rowData));
  }

  // console.log(xslxRows);

  // ディレクトリを確認
  const writeDir = path.resolve(__dirname, wirteDirPath);
  dirCreate(writeDir);

  // 行ループ
  xslxRows.forEach(async (r) => {
    const pageNo = r.c1ARNo.originalValue;
    const pageName = `page${pageNo}`;
    const pageDir = `${writeDir}/${pageName}`;
    dirCreate(pageDir);
    await r.write(pageDir);
  });
};

start().then();
