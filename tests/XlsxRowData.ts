import xls from "xlsx-populate";
import fs from "fs";
import path from "path";
class XlsColDef {
  constructor(
    colName: string,
    defName: string,
    isUse: boolean,
    type: "text" | "media" | "category_icon" | "needsicon" | null = null,
    fileName: string | null = null,
    has_rolspan = false
  ) {
    this.colName = colName;
    this.defName = defName;
    this.isUse = isUse;
    this.fileName = fileName;
    this.type = type;
    this.has_rolspan = has_rolspan;
  }

  write(baseDir: string) {
    if (!this.isUse) return;

    /**
     * テキストはファイルに書き出す
     */
    if (this.type === "text") {
      const fileName = baseDir + "/" + this.fileName + ".txt";
      if (typeof this.originalValue === "string") {
        fs.writeFileSync(fileName, this.originalValue);
      }
    }

    /*
     * カテゴリアイコンはオリジナルをコピー
     */
    if (this.type === "category_icon") {
      const fileName = baseDir + "/" + this.fileName + ".png";
      let originfile;
      if (this.originalValue === "エネルギー") {
        originfile = "../public/category_icon/energy.png";
      } else if (this.originalValue === "水") {
        originfile = "../public/category_icon/water.png";
      } else if (this.originalValue === "環境保全") {
        originfile = "../public/category_icon/save_env.png";
      } else if (this.originalValue === "デジタル化") {
        originfile = "../public/category_icon/degital.png";
      } else if (this.originalValue.startsWith("災害")) {
        originfile = "../public/category_icon/disaster.png";
      } else {
        throw new Error("no category " + this.originalValue);
      }
      const iconPath = path.resolve(__dirname, originfile);
      const originIcon = fs.readFileSync(iconPath, {
        encoding: "binary",
      });
      fs.writeFileSync(fileName, originIcon, { encoding: "binary" });
    }

    if (this.type === "needsicon") {
      const fileName = baseDir + "/" + this.fileName + ".png";
      let originfile;

      // TODO: アイコンタイプにより場合分け
      if (this.originalValue !== "undefined") {
        originfile = "../public/needs_icon/icon_sample.png";
      } else if (this.originalValue === "undefined") {
        originfile = "../public/needs_icon/nodata.png";
      } else {
        originfile = "../public/needs_icon/nodata.png";
      }

      const iconPath = path.resolve(__dirname, originfile);
      const originIcon = fs.readFileSync(iconPath, {
        encoding: "binary",
      });
      fs.writeFileSync(fileName, originIcon, { encoding: "binary" });
    }
  }

  colName = "";
  defName = "";
  originalValue = "";
  isUse = false;
  type: "text" | "media" | "category_icon" | "needsicon" | null = null;
  fileName: string | null = null;
  has_rolspan = false;
}
export class XlsxRowData {
  constructor(sheet: xls.Sheet, row: xls.Row) {
    Object.keys(this).forEach((k) => {
      const col: XlsColDef = (this as any)[k];

      // console.log(col.colName);
      // console.log(
      //   row.rowNumber(),
      //   `${col.colName.toUpperCase()}${row.rowNumber()}`
      // );
      // console.log(
      //   sheet.cell(`${col.colName.toUpperCase()}${row.rowNumber()}`).value()
      // );
      // 大文字でアドレス化
      const colNameU = col.colName.toUpperCase();
      // 行結合されているなら1行下を取る
      const rowNum = col.has_rolspan ? row.rowNumber() + 1 : row.rowNumber();

      // セルのデータを取得
      col.originalValue = `${sheet.cell(`${colNameU}${rowNum}`).value()}`;
    });
  }

  /**
   * ファイルを書き出す
   * @param baseDir
   */
  async write(baseDir: string): Promise<void> {
    await this.c1ARNo.write(baseDir);
    await this.c2HearingName.write(baseDir);
    await this.c3Name.write(baseDir);
    await this.c4EnName.write(baseDir);
    await this.c5Map.write(baseDir);
    await this.c6Category.write(baseDir);
    await this.c7SubCategory.write(baseDir);
    await this.c8Title.write(baseDir);
    await this.c9No.write(baseDir);
    await this.c10Summary.write(baseDir);
    await this.c11No.write(baseDir);
    await this.c12Picture.write(baseDir);
    await this.c13DoYouKnow1.write(baseDir);
    await this.c13_2DoYouKnow2.write(baseDir);
    await this.c14No.write(baseDir);
    await this.c15DoYouKnow1.write(baseDir);
    await this.c15_2DoYouKnow2.write(baseDir);
    await this.c16No.write(baseDir);
    await this.c17DoYouKnow1.write(baseDir);
    await this.c17_2DoYouKnow2.write(baseDir);
    await this.c18No.write(baseDir);
    await this.c19Trend.write(baseDir);
    await this.c20No.write(baseDir);
    await this.c21TrendImage.write(baseDir);
    await this.c22Needs.write(baseDir);
    await this.c23No.write(baseDir);
    await this.c24NeedsIcon1.write(baseDir);
    await this.c25NeedsIcon1.write(baseDir);
    await this.c26NeedsIcon1.write(baseDir);
    await this.c27NeedsIcon1.write(baseDir);
    await this.c28NeedsIcon1.write(baseDir);
    await this.c29NeedsIcon1.write(baseDir);
    await this.c30NeedsIcon1.write(baseDir);
    await this.c31NeedsIcon1.write(baseDir);
    await this.c32NeedsIcon1.write(baseDir);
    await this.c33Point.write(baseDir);
    await this.c34No.write(baseDir);
    await this.c35Point.write(baseDir);
    await this.c36PointSummary.write(baseDir);
    await this.c37No.write(baseDir);
  }

  c1ARNo = new XlsColDef("a", "AR番号", true);
  c2HearingName = new XlsColDef("b", "ヒアリング時の名称", false);
  c3Name = new XlsColDef("c", "①名称", true, "text", "main1_2");
  c4EnName = new XlsColDef("d", "①英語表記", true, "text", "main1_3");
  c5Map = new XlsColDef("e", "MAP", true);
  c6Category = new XlsColDef(
    "f",
    "②カテゴリー",
    true,
    "category_icon",
    "main1_1"
  );
  c7SubCategory = new XlsColDef("g", "②サブカテゴリー", true);
  c8Title = new XlsColDef("h", "③見出し", true, "text", "main2_1");
  c9No = new XlsColDef("i", "34", false);
  c10Summary = new XlsColDef("j", "④概要", true, "text", "main2_2");
  c11No = new XlsColDef("k", "120", false);
  c12Picture = new XlsColDef("l", "ア/候補写真/概要", true, "media", "main2_3");
  c13DoYouKnow1 = new XlsColDef(
    "m",
    "⑤-1ご存じですか？",
    true,
    "text",
    "main3_1_1"
  );
  c13_2DoYouKnow2 = new XlsColDef(
    "m",
    "⑤-1ご存じですか？",
    true,
    "text",
    "main3_1_2",
    true
  );

  c14No = new XlsColDef("n", "10_35", false);
  c15DoYouKnow1 = new XlsColDef(
    "o",
    "⑤-2ご存じですか？",
    true,
    "text",
    "main3_2_1"
  );
  c15_2DoYouKnow2 = new XlsColDef(
    "o",
    "⑤-2ご存じですか？",
    true,
    "text",
    "main3_2_2",
    true
  );

  c16No = new XlsColDef("p", "10_35", false);
  c17DoYouKnow1 = new XlsColDef(
    "q",
    "⑤-3ご存じですか？",
    true,
    "text",
    "main3_3_1"
  );
  c17_2DoYouKnow2 = new XlsColDef(
    "q",
    "⑤-3ご存じですか？",
    true,
    "text",
    "main3_3_2",
    true
  );
  c18No = new XlsColDef("r", "10_35", false);
  c19Trend = new XlsColDef("s", "⑥市場の動向", true, "text", "trend1");
  c20No = new XlsColDef("t", "130", false);
  c21TrendImage = new XlsColDef(
    "u",
    "イ/候補写真/動向",
    true,
    "media",
    "trend2"
  );
  c22Needs = new XlsColDef("v", "⑦ニーズ", true, "text", "trend3");
  c23No = new XlsColDef("w", "130", false);
  c24NeedsIcon1 = new XlsColDef("x", "ウ/ニーズアイコン(合計数)", false);
  c25NeedsIcon1 = new XlsColDef(
    "y",
    "ウ/ニーズアイコン1",
    true,
    "needsicon",
    "trend4"
  );
  c26NeedsIcon1 = new XlsColDef(
    "z",
    "ウ/ニーズアイコン2",
    true,
    "needsicon",
    "trend5"
  );
  c27NeedsIcon1 = new XlsColDef(
    "aa",
    "ウ/ニーズアイコン3",
    true,
    "needsicon",
    "trend6"
  );
  c28NeedsIcon1 = new XlsColDef(
    "ab",
    "ウ/ニーズアイコン4",
    true,
    "needsicon",
    "trend7"
  );
  c29NeedsIcon1 = new XlsColDef(
    "ac",
    "ウ/ニーズアイコン5",
    true,
    "needsicon",
    "trend8"
  );
  c30NeedsIcon1 = new XlsColDef(
    "ad",
    "ウ/ニーズアイコン6",
    true,
    "needsicon",
    "trend9"
  );
  c31NeedsIcon1 = new XlsColDef(
    "ae",
    "ウ/ニーズアイコン7",
    true,
    "needsicon",
    "trend10"
  );
  c32NeedsIcon1 = new XlsColDef(
    "af",
    "ウ/ニーズアイコン8",
    true,
    "needsicon",
    "trend11"
  );
  c33Point = new XlsColDef("ag", "⑧ここに注目", true, "text", "point2");
  c34No = new XlsColDef("ah", "130", false);
  c35Point = new XlsColDef(
    "ai",
    " エ/候補写真/ポイント",
    true,
    "media",
    "point1"
  );
  c36PointSummary = new XlsColDef(
    "aj",
    "⑨まとめ/こんなに役に立つ",
    true,
    "text",
    "point3"
  );
  c37No = new XlsColDef("ak", "80", false);
}
