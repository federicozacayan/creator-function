class CssLoader {
    constructor() {
        this.head = document.getElementsByTagName('HEAD')[0];
    }

    load(url){
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        this.head.appendChild(link);
    }
    set(css){
        var s = document.createElement("style");
        s.innerHTML = css;
        this.head.appendChild(s)
    }
}
const cssLoader = new CssLoader()
export default cssLoader