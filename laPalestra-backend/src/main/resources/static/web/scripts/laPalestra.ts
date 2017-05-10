/// <reference path="./globalThings.d.ts" />
import Page from "./page";
import GeleryPage from "./gelery";
import Logo from "./logo";

var laPalestra: ILaPalestra = {
    page: new Page(),
    knownPage: {}
};

laPalestra.knownPage[GeleryPage.name] = GeleryPage;
laPalestra.knownPage[Logo.name] = Logo;
window["laPalestra"] = laPalestra;

(<Page>laPalestra.page).changePage(Logo.name);