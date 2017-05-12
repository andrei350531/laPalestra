import { CreateElement, AddClass } from "./vanilla";
import Logo from "./logo";

export default class Logout implements IPage {
    private title: string = "";
    private classes: string[] = ["typicalPage"];
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
        AddClass(this.mainNode, ["flex", "flex-column"]);
    }
    public focus() {
        laPalestra.storage.resetActiveUser();
        laPalestra.page.changePage(Logo.name);
    }
    public blur() {
        // asdasd
    }
}