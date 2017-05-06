interface IPage {
    pageTitle: string;
    pageClasses: string[],
    mainElement: HTMLElement;
    focus: () => void;
    blur: () => void;
}