import MainPage from "./mainPage";
import { CreateElement } from "./vanilla";
import Navigator from "./navigator";
import Header from "./header";
import Logout from "./logout";

let body = document.body,
    header = document.head,
    title = header.querySelector("title") as HTMLElement;

interface IPagesHash {
    [key: string]: IPage | undefined;
}
export interface IPageArgs {
    header: Header;
    activeUser: IRegistrationData | undefined;
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
        if (pageName === Logout.name && this.activePage) {
            laPalestra.storage.resetActiveUser();
            newPage = this.activePage;
        }
        if (newPage) {
            if (newPage !== this.activePage) {
                location.hash = `#${pageName}`;
            }
            this.mainPage.setPage(newPage.pageClasses, newPage.mainElement);
            this.activePage = newPage;
            newPage.focus({
                header: this.mainPage.header,
                activeUser: laPalestra.storage.getActiveUser()
            });
            title.innerText = `La Palestra | ${newPage.pageTitle}`;
        } else {
            throw new Error(`Page "${pageName}" does not exist :(`);
        }
    }
}