/// <reference path="./globalThings.d.ts" />
import Page from "./page";
import GeleryPage from "./gelery";
import Logo from "./logo";
import ServicePage from "./servicePage";
import About from "./about";
import ContactsPage from "./contacts";


var laPalestra: ILaPalestra = {
    page: new Page(),
    knownPage: {}
};

laPalestra.knownPage[GeleryPage.name] = GeleryPage;
laPalestra.knownPage[Logo.name] = Logo;
laPalestra.knownPage[ServicePage.name] = ServicePage;
laPalestra.knownPage[About.name] = About;
laPalestra.knownPage[ContactsPage.name] = ContactsPage;
window["laPalestra"] = laPalestra;

(<Page>laPalestra.page).changePage(Logo.name);