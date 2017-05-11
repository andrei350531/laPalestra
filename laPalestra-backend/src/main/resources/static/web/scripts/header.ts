import { CreateElement, AddClass } from "./vanilla";

const   headerClass = ["headerBar"],
        otherHeaderClasses = ["flex", "flex-row"],
        listClasses = ["list", "flex", "flex-row"],
        authClass = ["authNode"];

export interface IHeaderItem {
    pageName: string;
    link: string;
}

export default class Header {
    private headerNode: HTMLHeadElement;
    private headerList: HTMLUListElement;
    private authNode: HTMLUListElement;
    constructor() {
        this.headerNode = CreateElement<HTMLHeadElement>("header");
        AddClass(this.headerNode, headerClass.concat(otherHeaderClasses));
        this.headerList = CreateElement<HTMLUListElement>("ul");
        AddClass(this.headerList, listClasses);
        this.authNode = CreateElement<HTMLUListElement>("ul");
        AddClass(this.authNode, listClasses.concat(authClass));
        this.headerNode.appendChild(this.authNode);
        this.headerNode.appendChild(this.headerList);
    }
    private getListItem(name: string, link: string): string {
        return `<li class="listItem">
                    <a class="link" href="${link}">${name}</a>
                </li>`;
    }
    private clearList() {
        this.headerList.innerHTML = "";
    }
    public fillHeader(pages: IHeaderItem[]) {
        this.clearList();
        this.headerList.innerHTML = pages.reduce((prev, next) => prev + this.getListItem(next.pageName, next.link), "");
    }
    public fillAuth(authItems: IHeaderItem[]) {
        this.authNode.innerHTML = authItems.reduce((prev, next) => prev + this.getListItem(next.pageName, next.link), "");
    }
    get element() {
        return this.headerNode;
    }
}