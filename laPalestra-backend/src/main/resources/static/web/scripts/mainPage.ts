import { CreateElement, AddClass, RemoveClass } from "./vanilla";
import Header, { IHeaderItem } from "./header";

const   mainPageClass = "mainContainer",
        contentClass = "content",
        headerItems: IHeaderItem[] = [
            { pageName: "Главная", link: "/"},
            { pageName: "Галерея", link: "/gelery.html"},
            { pageName: "Услуги", link: "/services.html"},
            { pageName: "Контакты", link: "/contacts.html"},
            { pageName: "О нас", link: "/about.html"}
        ];

export default class MainPage {
    private mainPage: HTMLDivElement;
    private content: HTMLDivElement;
    private header: Header;
    private extraClasses: string[];
    constructor() {
        this.mainPage = CreateElement<HTMLDivElement>("div");
        AddClass(this.mainPage, [mainPageClass]);
        this.content = CreateElement<HTMLDivElement>("div");
        AddClass(this.content, [contentClass]);
        this.header = new Header();
        this.header.fillHeader(headerItems);
        // append elements 
        this.mainPage.appendChild(this.header.element);
        this.mainPage.appendChild(this.content);
        this.extraClasses = [];
    }
    private clearPage(classes: string[]) {
        RemoveClass(this.mainPage, classes);
        this.content.innerHTML = "";
    }
    public setPage(pageClasses: string[], pageNode: HTMLElement) {
        this.clearPage(this.extraClasses);
        this.extraClasses = pageClasses;
        AddClass(this.mainPage, this.extraClasses);
        this.content.appendChild(pageNode);
    }
    get element() {
        return this.mainPage;
    }
}