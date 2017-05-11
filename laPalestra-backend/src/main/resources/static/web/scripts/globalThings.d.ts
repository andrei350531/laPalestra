
interface IPage {
    pageTitle: string;
    pageClasses: string[];
    name: string;
    mainElement: HTMLElement;
    focus: (args?: any) => void;
    blur: () => void;
}


interface ILaPalestra {
    page: any;
    knownPage: {
        [key: string]: ({
            prototype: IPage;
            new(): IPage;
        }) | undefined
    },
    getPageName: () => string;
}


declare var laPalestra: ILaPalestra;
declare var ymaps: any;