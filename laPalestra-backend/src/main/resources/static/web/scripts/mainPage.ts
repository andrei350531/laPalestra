import { CreateElement, AddClass, RemoveClass } from "./vanilla";
import Header, { IHeaderItem } from "./header";
import GeleryPage from "./gelery";
import Logo from "./logo";
import ServicePage from "./servicePage";
import About from "./about";
import ContactsPage from "./contacts";
import LoginPage from "./login";
import Registration from "./registration";

const   mainPageClass = "mainContainer",
        contentClass = "content",
        headerItems: IHeaderItem[] = [
            { pageName: "Главная", link: `#${Logo.name}`},
            { pageName: "Галерея", link: `#${GeleryPage.name}`},
            { pageName: "Услуги", link: `#${ServicePage.name}`},
            { pageName: "Контакты", link: `#${ContactsPage.name}`},
            { pageName: "О нас", link: `#${About.name}`}
        ],
        authItems: IHeaderItem[] = [
            { pageName: "Авторизация", link: `#${LoginPage.name}`},
            { pageName: "Регистрация", link: `#${Registration.name}`}
        ];

export default class MainPage {
    private mainPage: HTMLDivElement;
    private content: HTMLDivElement;
    public header: Header;
    private extraClasses: string[];
    constructor() {
        this.mainPage = CreateElement<HTMLDivElement>("div");
        AddClass(this.mainPage, [mainPageClass]);
        this.content = CreateElement<HTMLDivElement>("div");
        AddClass(this.content, [contentClass]);
        this.header = new Header();
        this.header.fillHeader(headerItems);
        this.header.fillAuth(authItems);
        // append elements
        this.mainPage.appendChild(this.header.element);
        this.mainPage.appendChild(this.content);
        this.extraClasses = [];
    }
    private clearPage(classes: string[]) {
        classes.length && RemoveClass(this.mainPage, classes);
        this.content.innerHTML = "";
    }
    public setPage(pageClasses: string[], pageNode: HTMLElement) {
        this.clearPage(this.extraClasses);
        this.extraClasses = pageClasses || [];
        AddClass(this.mainPage, this.extraClasses);
        this.content.appendChild(pageNode);
    }
    get element() {
        return this.mainPage;
    }
}