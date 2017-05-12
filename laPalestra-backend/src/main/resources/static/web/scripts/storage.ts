
interface IKeyUser {
    [key: string]: IRegistrationData;
}

export default class Storage {
    private users: IKeyUser;
    private activeUser: IRegistrationData | undefined;
    private userKey = "users";
    private aciveUserKey = "activeUser";
    constructor() {
        let users = localStorage.getItem(this.userKey),
            activeUser = localStorage.getItem(this.aciveUserKey);
        if (users) {
            this.users = JSON.parse(users);
        } else {
            this.users = {};
        }
        if (activeUser && this.users[activeUser]) {
            this.activeUser = this.users[activeUser];
        } else {
            this.activeUser = undefined;
        }
    }
    public getUser(mail: string): IRegistrationData | undefined {
        return this.users && this.users[mail];
    }
    public addUser(user: IRegistrationData) {
        if (this.users) {
            this.users[user.mail] = user;
            localStorage.setItem(this.userKey, JSON.stringify(this.users));
        }
    }
    public setActiveUser(userMail: string) {
        if (this.users && this.users[userMail]) {
            this.activeUser = this.users[userMail];
            localStorage.setItem(this.aciveUserKey, userMail);
        }
    }
    public resetActiveUser() {
        this.activeUser = undefined;
        localStorage.setItem(this.aciveUserKey, "");
    }
    public getActiveUser() {
        return this.activeUser;
    }
}