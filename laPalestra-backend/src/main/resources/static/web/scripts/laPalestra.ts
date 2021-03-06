/// <reference path="./globalThings.d.ts" />
import Page from "./page";
import GeleryPage from "./gelery";
import Logo from "./logo";
import ServicePage from "./servicePage";
import About from "./about";
import ContactsPage from "./contacts";
import LoginPage from "./login";
import Registration from "./registration";
import Logout from "./logout";
import Storage from "./storage";


var laPalestra: ILaPalestra = {
    page: new Page(),
    storage: new Storage(),
    knownPage: {},
    getPageName: () => {
        let name = location.hash.replace("#", "").trim();
        if (!name) {
            location.hash = "";
            name = Logo.name;
        }
        return name;
    }
};

laPalestra.knownPage[GeleryPage.name] = GeleryPage;
laPalestra.knownPage[Logo.name] = Logo;
laPalestra.knownPage[ServicePage.name] = ServicePage;
laPalestra.knownPage[About.name] = About;
laPalestra.knownPage[ContactsPage.name] = ContactsPage;
laPalestra.knownPage[LoginPage.name] = LoginPage;
laPalestra.knownPage[Registration.name] = Registration;
laPalestra.knownPage[Logout.name] = Logout;
 
window["laPalestra"] = laPalestra;

(<Page>laPalestra.page).changePage(laPalestra.getPageName());