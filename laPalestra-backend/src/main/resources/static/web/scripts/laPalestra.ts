/// <reference path="./globalThings.d.ts" />
import Page from "./page";
import GeleryPage from "./gelery";

var laPalestra: ILaPalestra = {
    page: new Page(),
    knownPage: {}
};

laPalestra.knownPage[GeleryPage.name] = GeleryPage;
  
window["laPalestra"] = laPalestra;