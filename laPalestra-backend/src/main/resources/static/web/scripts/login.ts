import { CreateElement, AddClass } from "./vanilla";

export default class LoginPage implements IPage {
    private title: string = "Авторизация";
    private classes: string[] = ["typicalPage", "loginPage"];
    private mainNode: HTMLDivElement;
    get pageClasses() {
        return this.classes;
    }
    get name() {
        return "service";
    }
    get pageTitle() {
        return this.title;
    }
    get mainElement() {
        return this.mainNode;
    }
    constructor() {
        this.mainNode = CreateElement<HTMLDivElement>("div");
        AddClass(this.mainNode, ["flex", "flex-column", "login"]);
    }
    private getPageContent(): string {
        return `<form class="flex flex-column noFlexGrow form">
            <label class="label">Логин:</label>
            <input class="input" type="text" name="login" placeholder="Введите логин"/>
            <label class="label">Пароль:</label>
            <input class="input" type="password" name="password" placeholder="Введите пароль"/>
            <button class="button" onclick="return false">Войти</button>
        </form>`;
    }
    public focus() {
        if (!this.mainElement.innerHTML) {
            this.mainNode.innerHTML = this.getPageContent();
        }
        let element = this.mainElement.querySelector("input");
        element && element.focus();
    }
    public blur() {
        // asda
    }
}