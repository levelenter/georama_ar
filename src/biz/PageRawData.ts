import axios from "axios";

type mediaExt = "png" | "jpg" | "mp4" | "";
export class PageRawData {
  constructor(name: string) {
    this.pageName = name;
  }

  pageName = "";
  m1_1 = ""; //icon
  m1_2 = ""; // title
  m1_3 = ""; // title_en
  m2_1 = ""; // description_header
  m2_2 = ""; // description
  m2_3 = ""; // media path
  m2_3_type: mediaExt | "" = "";
  m3_1_1 = ""; //Q1 title;
  m3_1_2 = ""; //Q1 contents;
  m3_2_1 = ""; //Q2 title;
  m3_2_2 = ""; //Q2 contents;
  m3_3_1 = ""; //Q3 title;
  m3_3_2 = ""; //Q3 contents;

  t1 = ""; // trend description
  t2 = ""; // trend media path
  t2_type: mediaExt | "" = "";
  t3 = ""; // needs description
  t4 = ""; // needs media path
  t4_type: mediaExt | "" = "";
  t5 = ""; // icon1
  t6 = ""; // icon2
  t7 = ""; // icon3
  t8 = ""; // icon4
  t9 = ""; // icon5
  t10 = ""; // icon6
  t11 = ""; // icon7

  p1 = ""; // media
  p1_type: mediaExt | "" = "";
  p2 = "";
  p3 = "";

  async isAlivePath(path: string): Promise<boolean> {
    let isAlive = false;
    try {
      const response = await axios.get(path, { timeout: 100 });
      if (response.data && response.status === 200) isAlive = true;
    } catch (error) {
      console.log(
        `${path}は見つかりませんでした。他のメディア(png/mp4/jpgのいずれか)が使われているようです `
      );
    }
    return isAlive;
  }

  async getAliveImageContentsPath(pathWithoutExt: string): Promise<mediaExt> {
    const mp4 = `${pathWithoutExt}.mp4`;
    const mp4IsAlive = await this.isAlivePath(mp4);
    // console.log("mp4IsAlive", mp4, mp4IsAlive);
    if (mp4IsAlive) {
      return "mp4";
    } else {
      const png = `${pathWithoutExt}.png`;
      const pngIsAlive = await this.isAlivePath(png);
      // console.log("pngIsAlive", png, pngIsAlive);
      if (pngIsAlive) {
        return "png";
      } else {
        const jpg = `${pathWithoutExt}.jpg`;
        const jpgIsAlive = await this.isAlivePath(jpg);
        // console.log("jpgIsAlive", jpg, jpgIsAlive);
        if (jpgIsAlive) {
          return "jpg";
        } else {
          return "";
          // throw new Error(
          //   `${pathWithoutExt}についてmp4/png/jpgのいずれのデータもありませんでした`
          // );
        }
      }
    }
  }

  async getText(path: string): Promise<string> {
    const response = await axios.get(path);
    return response.data as string;
  }

  async init() {
    const contextPath = `/data/${this.pageName}`;
    this.m1_1 = `${contextPath}/main1_1.png`;
    this.m1_2 = await this.getText(`${contextPath}/main1_2.txt`);
    this.m1_3 = await this.getText(`${contextPath}/main1_3.txt`);
    this.m2_1 = await this.getText(`${contextPath}/main2_1.txt`);
    this.m2_2 = await this.getText(`${contextPath}/main2_2.txt`);
    //-- メディアの取得 --
    const m2_3Path = `${contextPath}/main2_3`;
    this.m2_3_type = await this.getAliveImageContentsPath(m2_3Path);
    this.m2_3 = `${m2_3Path}.${this.m2_3_type}`;
    // console.log(this.m2_3);
    //--

    this.m3_1_1 = await this.getText(`${contextPath}/main3_1_1.txt`);
    this.m3_1_2 = await this.getText(`${contextPath}/main3_1_2.txt`);
    this.m3_2_1 = await this.getText(`${contextPath}/main3_2_1.txt`);
    this.m3_2_2 = await this.getText(`${contextPath}/main3_2_2.txt`);
    this.m3_3_1 = await this.getText(`${contextPath}/main3_3_1.txt`);
    this.m3_3_2 = await this.getText(`${contextPath}/main3_3_2.txt`);

    this.t1 = await this.getText(`${contextPath}/trend1.txt`);

    //-- 市場の動向メディア --
    const t2Path = `${contextPath}/trend2`;
    this.t2_type = await this.getAliveImageContentsPath(t2Path);
    this.t2 = `${t2Path}.${this.t2_type}`;
    this.t3 = await this.getText(`${contextPath}/trend3.txt`);
    //--

    //-- 市場のニーズメディア--
    const t4Path = `${contextPath}/trend4`;
    this.t4_type = await this.getAliveImageContentsPath(t4Path);
    this.t4 = `${t4Path}.${this.t4_type}`;
    //--

    this.t5 = `${contextPath}/trend5.png`;
    this.t6 = `${contextPath}/trend6.png`;
    this.t7 = `${contextPath}/trend7.png`;
    this.t8 = `${contextPath}/trend8.png`;
    this.t9 = `${contextPath}/trend9.png`;
    this.t10 = `${contextPath}/trend10.png`;
    this.t11 = `${contextPath}/trend11.png`;

    //-- 市場のニーズメディア--
    const p1Path = `${contextPath}/point1`;
    this.p1_type = await this.getAliveImageContentsPath(p1Path);
    this.p1 = `${p1Path}.${this.p1_type}`;
    //--

    this.p2 = await this.getText(`${contextPath}/point2.txt`);
    this.p3 = await this.getText(`${contextPath}/point3.txt`);
  }
}
