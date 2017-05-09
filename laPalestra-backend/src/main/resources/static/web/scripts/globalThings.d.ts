
interface IPage {
    pageTitle: string;
    pageClasses: string[],
    mainElement: HTMLElement;
    focus: () => void;
    blur: () => void;
}


interface ILaPalestra {
    page: any;
    knownPage: {
        [key: string]: {
            prototype: IPage;
            new(): IPage;
        } | undefined
    }
}


declare var laPalestra: ILaPalestra;