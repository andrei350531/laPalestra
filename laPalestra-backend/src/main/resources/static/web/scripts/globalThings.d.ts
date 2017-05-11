
interface IPage {
    pageTitle: string;
    pageClasses: string[];
    name: string;
    mainElement: HTMLElement;
    focus: () => void;
    blur: () => void;
}


interface ILaPalestra {
    page: any;
    knownPage: {
        [key: string]: ({
            prototype: IPage;
            new(): IPage;
        }) | undefined
    }
}


declare var laPalestra: ILaPalestra;
declare var ymaps: any;