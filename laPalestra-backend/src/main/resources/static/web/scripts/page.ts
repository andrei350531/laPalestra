import MainPage from "./mainPage";
import { CreateElement } from "./vanilla";
import Navigator from "./navigator";

let body = document.body,
    header = document.head,
    title = header.querySelector("title") as HTMLElement;

interface IPagesHash {
    [key: string]: IPage | undefined;
}
export default class Page {
    private mainPage: MainPage;
    private background: HTMLDivElement;
    private activePage: IPage | undefined;
    private pages: IPagesHash;
    private navigator: Navigator;
    constructor() {
        this.pages = {};
        this.mainPage = new MainPage();
        this.navigator = new Navigator();
        this.navigator.addListener(() => {
            let pageName: string = laPalestra.getPageName();
            this.changePage(pageName);
        });
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
            title.innerText = `La Palestra | ${newPage.pageTitle}`;
        } else {
            throw new Error(`Page "${pageName}" does not exist :(`);
        }
    }
}