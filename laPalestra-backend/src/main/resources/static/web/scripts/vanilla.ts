
let createElement = <T extends HTMLElement>(nodeName: string) => document.createElement(nodeName) as T,
    addClass = (element: HTMLElement, classes: string[]) => {
        element.classList.add(...classes);
    },
    removeClass = (element: HTMLElement, classes: string[]) => {
        element.classList.remove(...classes);
    },
    show = (element: HTMLElement) => {
        element.style.display = "";
    },
    hide = (element: HTMLElement) => {
        element.style.display = "none";
    };

export {
    createElement as CreateElement,
    removeClass as RemoveClass,
    addClass as AddClass,
    show as Show,
    hide as Hide
};