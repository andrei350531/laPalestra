import { CreateElement, AddClass, Show, Hide } from "./vanilla";
import LoginPage from "./login";

export default class Registration implements IPage {
    private title: string = "Регистрация";
    private classes: string[] = ["typicalPage", "registrationPage"];
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
    private form: HTMLFormElement;
    private firstName: HTMLInputElement;
    private lastName: HTMLInputElement;
    private mail: HTMLInputElement;
    private pass: HTMLInputElement;
    private pass2: HTMLInputElement;
    private error: HTMLLabelElement;
    private button: HTMLButtonElement;
    constructor() {
        this.mainNode = CreateElement<HTMLDivElement>("div");
        AddClass(this.mainNode, ["flex", "flex-column", "registration"]);
        this.form = CreateElement<HTMLFormElement>("form");
        AddClass(this.form, ["flex", "flex-column", "noFlexGrow", "form"]);
        this.mainNode.appendChild(this.form);
        this.firstName = this.getSelection("Имя:", "firstName", "Введите имя");
        this.lastName = this.getSelection("Фамилия:", "lastName", "Введите фамилию");
        this.mail = this.getSelection("Е-mail:", "mail", "Введите e-mail");
        this.pass = this.getSelection("Пароль(длина 6+):", "pass", "Введите пароль");
        this.pass2 = this.getSelection("Подтвердите пароль:", "pass2", "Введите пароль");
        this.error = this.getLabel("Данные введены неверно");
        this.form.appendChild(this.error);
        this.button = this.getButton("save", "Зарегестрироваться");
        this.form.appendChild(this.button);
        Hide(this.error);
    }
    private getSelection(label: string, inputName: string, placeholder: string): HTMLInputElement {
        this.form.appendChild(this.getLabel(label));
        let elem = this.getInput(inputName, placeholder);
        this.form.appendChild(elem);
        return elem;
    }
    private mailRegx: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private getValue(): IRegistrationData {
        return {
            firstName: this.firstName.value.trim(),
            lastName: this.lastName.value.trim(),
            mail: this.mail.value.trim(),
            pass: this.pass.value.trim()
        };
    }
    private isValid(data: IRegistrationData): boolean {
        if (!data.firstName) {
            this.firstName.focus();
            return false;
        }
        if (!data.lastName) {
            this.lastName.focus();
            return false;
        }
        if (!data.mail || !this.mailRegx.test(data.mail) || !!laPalestra.storage.getUser(data.mail)) {
            this.mail.focus();
            return false;
        }
        if (!data.pass || !this.pass2.value.trim() || data.pass.length < 6 || data.pass !== this.pass2.value.trim()) {
            this.pass.focus();
            return false;
        }
        return true;
    }
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
        let data = this.getValue();
        if (!this.isValid(data)) {
            Show(this.error);
        } else {
            Hide(this.error);
            laPalestra.storage.addUser(data);
            laPalestra.page.changePage(LoginPage.name);
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
        this.form.reset();
        Hide(this.error);
    }
    public blur() {
        // asdasd
    }
}