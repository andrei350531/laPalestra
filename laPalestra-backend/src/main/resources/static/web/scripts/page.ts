import MainPage from "./mainPage";
import { CreateElement } from "./vanilla";

let body = document.body,
    header = document.head;



interface IPagesHash {
    [key: string]: IPage | undefined;
}
export default class Page {
    private mainPage: MainPage;
    private background: HTMLDivElement;
    private activePage: IPage | undefined;
    private pages: IPagesHash;
    constructor() {
        this.pages = {};
        this.mainPage = new MainPage();
        body.appendChild(this.mainPage.element);
        this.background = CreateElement<HTMLDivElement>("div");
        this.background.id = "bg";
        body.appendChild(this.background);
    }
    public changePage(pageName: string) {
        let requieredPage = this.pages[pageName],
            knownPage = laPalestra.knownPage[pageName];
        this.activePage && this.activePage.blur();
        if (!requieredPage && knownPage && typeof knownPage === "function") {
            this.pages[pageName] = new knownPage();
        }
        let newPage = this.pages[pageName];
        if (newPage) {
            this.mainPage.setPage(newPage.pageClasses, newPage.mainElement);
            this.activePage = newPage;
            newPage.focus();
            header.title = `La Palestra | ${newPage.pageTitle}`;
        } else {
            throw new Error(`Page "${pageName}" does not exist :(`);
        }
    }
}