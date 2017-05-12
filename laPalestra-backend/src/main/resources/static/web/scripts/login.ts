import { CreateElement, AddClass, Show, Hide } from "./vanilla";

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
        this.form = CreateElement<HTMLFormElement>("form");
        AddClass(this.form, ["flex", "flex-column", "noFlexGrow", "form"]);
        this.mainNode.appendChild(this.form);
        this.form.appendChild(this.getLabel("Логин:"));
        this.login = this.getInput("login", "Введите логин");
        this.form.appendChild(this.login);
        this.form.appendChild(this.getLabel("Пароль:"));
        this.pass = this.getInput("pass", "Введите пароль", "password");
        this.form.appendChild(this.pass);
        this.error = this.getLabel("Неверный логин или пароль");
        Hide(this.error);
        this.form.appendChild(this.error);
        this.button = this.getButton("button", "Войти");
        this.form.appendChild(this.button);
    }
    private error: HTMLLabelElement;
    private button: HTMLButtonElement;
    private login: HTMLInputElement;
    private pass: HTMLInputElement;
    private form: HTMLFormElement;
    private getInput(name: string, placeholder: string, type: string = "text"): HTMLInputElement {
        let element = CreateElement<HTMLInputElement>("input");
        element.name = name;
        element.type = type;
        element.placeholder = placeholder;
        AddClass(element, ["input"]);
        return element;
    }
    private getLabel(name: string): HTMLLabelElement {
        let element = CreateElement<HTMLLabelElement>("label");
        element.textContent = name;
        AddClass(element, ["label"]);
        return element;
    }
    private clickLogin() {
        if (!this.login.value.trim() || !this.pass.value.trim()) {
            Show(this.error);
            this.pass.value = "";
        }
    }
    private getButton(name: string, value: string): HTMLButtonElement {
        let element = CreateElement<HTMLButtonElement>("button");
        element.textContent = value;
        AddClass(element, ["button"]);
        element.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            this.clickLogin();
            return false;
        });
        return element;
    }
    public focus() {
        this.login.value = "";
        this.pass.value = "";
        this.login.focus();
    }
    public blur() {
        // asda
    }
}