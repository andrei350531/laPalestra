import { CreateElement, AddClass } from "./vanilla";

interface IGeleryElement {
    comment: string;
    imageLink: string;
}

const   defData: IGeleryElement[] = [
            {
                imageLink: "web/img/room1.jpg",
                comment: "В зале представлено более 200 единиц грузоблочных тренажеров и на свободных весах, уникальных кардиотренажеров"
            },
            {
                imageLink: "web/img/room2.jpg",
                comment: "Все оборудование торговых марок STAR TRAC и OCTANE FITNESS"
            },
            {
                imageLink: "web/img/room3.jpg",
                comment: "Гребные тренажеры, air-байки – используются кроссфитерами в комплексной тренировке"
            },
            {
                imageLink: "web/img/room4.jpg",
                comment: "Для индивидуальный и групповых занятий: бокс, TRX, аэробика, степ, стречинг, функциональный тренинг"
            },
            {
                imageLink: "web/img/room5.jpg",
                comment: "Занятия с персональным тренером - индивидуальный подход к работе над телом, достижению красивой и здоровой фигуры"
            }
        ];

export default class GeleryPage implements IPage {
    private title: string = "Галерея";
    private classes: ["geleryPage"];
    private mainNode: HTMLDivElement;
    constructor() {
        this.mainNode = CreateElement<HTMLDivElement>("div");
        AddClass(this.mainNode, ["flex", "flex-row", "gelery"]);
    }
    get pageClasses() {
        return this.classes;
    }
    get name() {
        return "gelery";
    }
    get pageTitle() {
        return this.title;
    }
    get mainElement() {
        return this.mainNode;
    }
    private clearMainElement() {
        this.mainNode.innerHTML = "";
    }
    private getPageContent(elements: IGeleryElement[]): string {
        let i: number = 0,
            len: number = elements.length,
            result: string = "",
            item: IGeleryElement,
            getImage = (link: string): string => `<div class="flex flex-column photo"><img src="${link}" class="room"></div>`,
            getComment = (comment: string): string => `<div class="flex flex-column comment">${comment}</div>`;
        for (; i < len; i++) {
            item = elements[i];
            result += `<div class="flex flex-row itemElement">
                ${(i + 1) % 2 === 0 ? getImage(item.imageLink) + getComment(item.comment) : getComment(item.comment) + getImage(item.imageLink)}
            </div>`;
        }
        return result;
    }
    public focus() {
        this.clearMainElement();
        this.mainElement.innerHTML = this.getPageContent(defData);
    }
    public blur;
}