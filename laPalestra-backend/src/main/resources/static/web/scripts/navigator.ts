

export default class Navigator {
    private listeners: (() => void)[] = [];
    constructor() {
        window.addEventListener("hashchange", (value: HashChangeEvent) => {
            this.listeners.forEach(key => {
                key && key();
            });
        });
    }
    addListener(func: () => void): () => void {
        this.listeners.push(func);
        return () => {
            let index = this.listeners.indexOf(func);
            if (index !== -1) {
                this.listeners.splice(index, 1);
            }
        };
    }
}