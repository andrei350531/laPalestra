/// <reference path="./globalThings.d.ts" />
import Page from "./page";

var laPalestra: ILaPalestra = {
    page: new Page(),
    knownPage: {}
};

window["laPalestra"] = laPalestra;