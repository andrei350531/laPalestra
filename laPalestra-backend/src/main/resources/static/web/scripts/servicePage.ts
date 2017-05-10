import { CreateElement, AddClass } from "./vanilla";

interface IServiceItem {
    name: string;
    comment: string;
    types: IType[];

}
interface IType {
    typeName: string;
    iconLink: string;
}

const   defData: IServiceItem[] = [
    {
        name: "Кросс-фитнес", comment: "Современный и успешный человек всегда будет следить за своим здоровьем, а различные виды фитнеса давно превратились из скучных тренировок  в увлекательные занятия. Это своебразный интервальный высокоинтенсивный тренинг. Он развивает главные физические качества человека",
        types: [
            {typeName: "Скорость", iconLink: "./web/img/speed.png"},
            {typeName: "Сила", iconLink: "./web/img/power.png"},
            {typeName: "Выносливость", iconLink: "./web/img/power2.png"}
        ]
    },
    {
        name: "Разносторонний тренинг", comment: "Для индивидуальный и групповых занятий: бокс, TRX, аэробика, степ, стречинг, функциональный тренинг. На фитнес-треке успешно проводятся тренировки с санями. Гребные тренажеры, air-байки – используются кроссфитерами в комплексной тренировке",
        types: [
            {typeName: "Сила", iconLink: "./web/img/power.png"},
            {typeName: "Выносливость", iconLink: "./web/img/power2.png"}
        ]
    },
    {
        name: "Тренажерный зал", comment: "В зале представлено более 200 единиц грузоблочных тренажеров и на свободных весах, уникальных кардиотренажеров. Инструкторы расскажут, как использовать имеющиеся тренажеры, посоветуют варианты для программы занятий на разные периоды!",
        types: [
            {typeName: "Скорость", iconLink: "./web/img/speed.png"},
            {typeName: "Выносливость", iconLink: "./web/img/power2.png"},
            {typeName: "Сила", iconLink: "./web/img/power.png"}
        ]
    },
    {
        name: "Личный тренер и диетолог", comment: "Занятия с персональным тренером - индивидуальный подход к работе над телом, достижению красивой и здоровой фигуры. Подбор занятий в силовой, кардио и функциональной зоне согласно ваших потребностей и особенностей анатомии тела",
        types: [
            {typeName: "Выносливость", iconLink: "./web/img/power2.png"},
            {typeName: "Сила", iconLink: "./web/img/power.png"}
        ]
    }
];

export default class ServicePage implements IPage {
    private title: string = "Услуги";
    private classes: string[] = ["typicalPage", "servicesPage"];
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
        AddClass(this.mainNode, ["flex", "flex-column", "services"]);
    }
    private clearPage() {
        this.mainNode.innerHTML = "";
    }
    private createType(type: IType): string {
        return `<div class="flex flex-row value">
            <img class="flex flex-column icon" src="${type.iconLink}"/>
            <div class="flex flex-column valueName">${type.typeName}</div>
        </div>`;
    }
    private createItem(item: IServiceItem): string {
        return `<div class="flex flex-column itemElement">
            <div class="flex flex-column">
                <div class="flex flex-column name">
                    ${item.name}
                </div>
                <div class="flex flex-column comment">
                    ${item.comment}
                </div>
                <div class="flex flex-row icons">
                    ${item.types.reduce((prev, next) => prev + this.createType(next), "")}
                </div>
            </div>
        </div>`;
    }
    private getPageItems(items: IServiceItem[]): string {
        return items.reduce((prev, next) => prev + this.createItem(next), "");
    }
    public focus() {
        this.clearPage();
        this.mainNode.innerHTML = this.getPageItems(defData);
    }
    public blur() {
        // asdasd
    }
}