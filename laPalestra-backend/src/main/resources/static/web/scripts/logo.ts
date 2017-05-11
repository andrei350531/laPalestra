import { CreateElement, AddClass } from "./vanilla";
import { IHeaderItem } from "./header";
import GeleryPage from "./gelery";
import ServicePage from "./servicePage";
import About from "./about";
import ContactsPage from "./contacts";

const   headerItems: IHeaderItem[] = [
            { pageName: "Галерея", link: `#${GeleryPage.name}`},
            { pageName: "Услуги", link: `#${ServicePage.name}`},
            { pageName: "Контакты", link: `#${ContactsPage.name}`},
            { pageName: "О нас", link: `#${About.name}`}
        ];

export default class Logo implements IPage {
    private title: string = "Главная";
    private classes: string[] = [];
    private mainNode: HTMLDivElement;
    constructor() {
        this.mainNode = CreateElement<HTMLDivElement>("header");
        AddClass(this.mainNode, ["header"]);
    }
    private getNavigation(headerData: IHeaderItem[]): string {
        return `<nav class="navigation flex flex-column">
            <ul class="list flex flex-row">
            ${headerData.reduce((prev, next) => prev + this.getListItem(next.pageName, next.link), "")}
            </ul>
        </nav>`;
    }
    private getLogo(): string {
        return `<div class="logo">
                    <span>La Palestra</span><span>"Здоровяк"</span>
                </div>`;
    }
    private getContacts(): string {
        return `<div class="contacts">
                    <div class="flex flex-row">
                        <div class="flex flex-column contactElement">
                            Контакты:
                        </div>
                        <div class="flex flex-column ">
                            <div class="flex flex-column contactElement">
                                +375-29-123-43-12
                            </div>
                            <div class="flex flex-column contactElement">
                                +375-29-312-43-12
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    private getHeaderContainer(): string {
        return `<div class="header_container flex flex-row">
                    ${this.getLogo()}
                    ${this.getContacts()}
                </div>`;
    }
    private getFullPage(data: IHeaderItem[]): string {
        return `${this.getNavigation(data)}
                ${this.getHeaderContainer()}`;
    }
    private getListItem(name: string, link: string): string {
        return `<li class="listItem">
                    <a class="link" href="${link}">${name}</a>
                </li>`;
    }
    private clearPage() {
        this.mainNode.innerHTML = "";
    }
    get pageClasses() {
        return this.classes;
    }
    get name() {
        return "main";
    }
    get pageTitle() {
        return this.title;
    }
    get mainElement() {
        return this.mainNode;
    }
    public focus() {
        this.clearPage();
        this.mainNode.innerHTML = this.getFullPage(headerItems);
    }
    public blur() {
        // asdasd
    }
}