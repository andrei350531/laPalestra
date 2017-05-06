
let createElement = <T extends HTMLElement>(nodeName: string) => document.createElement(nodeName) as T,
    addClass = (element: HTMLElement, classes: string[]) => {
        element.classList.add(...classes);
    };

export {
    createElement as CreateElement,
    addClass as AddClass
};