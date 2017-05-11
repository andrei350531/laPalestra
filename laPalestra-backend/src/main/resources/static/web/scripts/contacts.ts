import { CreateElement, AddClass } from "./vanilla";

export default class ContactsPage implements IPage {
    private title: string = "Контакты";
    private classes: string[] = ["typicalPage", "contactsPage"];
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
        AddClass(this.mainNode, ["flex", "flex-column", "contacts", "noFlexGrow"]);
        if (!window["ymaps"]) {
            this.getMapScript();
        }
    }
    private getContacts(): string {
        return `<div class="flex flex-column itemElement">
            <div class="flex flex-row noFlexGrow">
                <div class="flex flex-column leftSide">
                    Контакты:
                </div>
                <div class="flex flex-column rightSide">
                    <div class="flex flex-column number">
                        +375-29-123-43-12
                    </div>
                    <div class="flex flex-column number">
                        +375-29-312-43-12
                    </div>
                </div>
            </div>
        </div>`;
    }
    private getAddress(): string {
        return `<div class="flex flex-column itemElement">
            <div class="flex flex-row noFlexGrow">
                <div class="flex flex-column leftSide">
                    Адрес:
                </div>
                <div class="flex flex-column rightSide">
                    <div class="flex flex-column">
                        г.Минск, улица Берсона, дом 16
                    </div>
                </div>
            </div>
        </div>`;
    }
    private getMap(): string {
        return `<div class="flex flex-column itemElement noPadding">
            <div class="flex flex-row map" id="map"></div>
        </div>`;
    }
    private getPageContent(): string {
        return `${this.getContacts()}
            ${this.getAddress()}
            ${this.getMap()}`;
    }
    private mapObj: any | undefined;
    private getMapScript() {
        let script = CreateElement<HTMLScriptElement>("script"),
            head = document.head;
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        script.onerror = (e) => {
            this.mapObj = true;
            let map = CreateElement<HTMLImageElement>("img"),
                mapNode = <HTMLElement>this.mainElement.querySelector("#map");
            map.src = "./web/img/map.png";
            map.style.width = "550px";
            mapNode.appendChild(map);
            head.removeChild(script);
        };
        script.onload = (e) => {
            head.removeChild(script);
            if (!this.mapObj && window["ymaps"] && this.isPageFocused) {
                ymaps.ready(() => {
                    if (this.isPageFocused) {
                        this.mapObj = this.getMapObj();
                        this.addIconToMap();
                    }
                });
            }
        };
        head.appendChild(script);
    }
    private getMapObj() {
        if (this.mapObj) {
            return this.mapObj;
        } else if (window["ymaps"]) {
            return new ymaps.Map("map", {
                center: [53.898103260671526, 27.545077489999986],
                zoom: 16
            }, {
                searchControlProvider: "yandex#search"
            });
        }
        return undefined;
    }
    private addIconToMap() {
        this.mapObj && this.mapObj.geoObjects
            .add(new ymaps.Placemark([53.898103260671526, 27.545077489999986], {
                balloonContent: "La Palestra \"Здоровяк\""
            }, {
                preset: "islands#redSportIcon"
            }));
    }
    private isPageFocused: boolean = false;
    public focus() {
        this.isPageFocused = true;
        if (!this.mainElement.innerHTML) {
            this.mainNode.innerHTML = this.getPageContent();
        }
        if (!this.mapObj && window["ymaps"]) {
           ymaps.ready(() => {
                if (this.isPageFocused) {
                    this.mapObj = this.getMapObj();
                    this.addIconToMap();
                }
            });
        }
    }
    public blur() {
        this.isPageFocused = false;
    }
}