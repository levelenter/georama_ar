import { MessageDialog } from "@/components/functions/MessageDialog";
import { range } from "@/components/functions/utils";
import { PageRawData } from "./PageRawData";
class DataContext {
  pages: PageRawData[] = [];
  pageNumbers: number[] = range(0, 18);
  constructor() {
    // hide constructor
  }
  private static _instance: DataContext | null = null;
  static DATA_CACHE_KEY = "data_context_in_session";
  static get instance() {
    const sessionString = sessionStorage.getItem(this.DATA_CACHE_KEY);
    if (sessionString) {
      const sessionContext: DataContext = JSON.parse(sessionString);
      this._instance = new DataContext();
      this._instance.pages = sessionContext.pages;
    } else {
      this._instance = new DataContext();
    }
    return this._instance;
    // this._instance = new DataContext();
    // return this._instance;
  }

  async saveInSession(): Promise<void> {
    sessionStorage.setItem(DataContext.DATA_CACHE_KEY, JSON.stringify(this));
  }

  async loadData(): Promise<DataContext> {
    const instance = DataContext.instance;
    if (!instance) {
      for (let i = 1; i <= 19; i++) {
        console.log("page ", i);
        const page = new PageRawData(`page${i}`);
        try {
          await page.init();
        } catch (e) {
          console.error(e);
          continue;
        }
        console.log("inited page", i, page);
        this.pages.push(page);
      }
      return this;
    } else {
      return instance;
    }
  }

  async getPage(id: string): Promise<PageRawData> {
    const index = id.replace("m", "");
    const pageName = `page${index}`;
    console.log("get page ", id, pageName, this.pages);
    let foundPage = this.pages.find((page) => page.pageName === pageName);
    if (!foundPage) {
      const page = new PageRawData(`page${index}`);
      try {
        foundPage = await page.init();
      } catch (error) {
        throw new Error(
          MessageDialog.systemError(
            `ページのデータが見つかりません id:${id},page:${pageName}`
          )
        );
      }
    }
    return foundPage;
  }
}

export const dataContext = new DataContext();
