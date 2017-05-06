
let createElement = <T extends HTMLElement>(nodeName: string) => document.createElement(nodeName) as T,
    addClass = (element: HTMLElement, classes: string[]) => {
        element.classList.add(...classes);
    },
    removeClass = (element: HTMLElement, classes: string[]) => {
        element.classList.remove(...classes);
    };

export {
    createElement as CreateElement,
    addClass as AddClass,
    removeClass as RemoveClass
};