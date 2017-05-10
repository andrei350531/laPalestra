import { CreateElement, AddClass } from "./vanilla";

const   defData: string[] = [
    "Разработала команда \"Котейки\"",
    "Грасюк Вячеслав",
    "Цикунов Николай",
    "Пескарев Анатолий",
    "Козяков Андрей"
];

export default class AboutPage implements IPage {
    private title: string = "О нас";
    private classes: string[] = ["typicalPage", "aboutPage"];
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
        AddClass(this.mainNode, ["flex", "flex-row", "infoAbout"]);
    }
    private clearPage() {
        this.mainNode.innerHTML = "";
    }
    private getTeamMember(name: string): string {
        return `<div class="flex flex-row noFlexGrow">${name}</div>`;
    }
    private getTeam(teamNames: string[]): string {
        return `<div class="flex flex-column team">
            ${teamNames.reduce((prev, next) => prev + this.getTeamMember(next), "")}
        </div>`;
    }
    private getLogo(): string {
        return `<div class="flex flex-column logo">
            <div class="flex flex-row noFlexGrow">La Palestra "Здоровяк"</div>
        </div>`;
    }
    private getPageContent(teamNames: string[]): string {
        return `
            ${this.getLogo()}
            ${this.getTeam(teamNames)}`;
    }
    public focus() {
        this.clearPage();
        this.mainNode.innerHTML = this.getPageContent(defData);
    }
    public blur() {
        // asdasd
    }
}