const lyra = {
    name: "Project Canaria",
    author: "Acherium",
    version: "0.0.240201.1",
    date: "2024-02-01",
    watermark: true,
    listener: new EventTarget(),
    link: {
        "index": "./view/index.html",
        "main": "./view/main.html",
        "demo": "./view/demo.html",
        "demo-main": "./view/demo/main.html",
        "demo-buttons": "./view/demo/buttons.html",
        "demo-loading": "./view/demo/loading.html",
        "demo-theme": "./view/demo/theme.html",
        "demo-modal": "./view/demo/modal.html",
        "demo-palette": "./view/demo/palette.html"
    },
    start: {
        area: "#main",
        target: "demo"
    },
    ondisplay: {
        modal: {}
    }
};
Object.freeze(lyra);
Object.freeze(lyra.link);
Object.freeze(lyra.start);
Object.freeze(lyra.ondisplay);
view(lyra.start.area, lyra.start.target);

if (lyra.watermark) {
    const wm = document.createElement("p");
    wm.id = "watermark";
    wm.innerText = `${lyra.name}\n${lyra.version}`;

    document.querySelector("body").append(wm);
};

function viewError(target, origin) {
    if (!target) throw Error("대상이 지정되지 않았습니다.");
    if (target.constructor !== String) throw Error("대상은 지정할 요소의 ID나 클래스 명칭으로 제공되어야 합니다.");
    if (!document.querySelector(target)) throw Error("대상이 존재하지 않습니다.");

    const area = document.querySelector(target);
    clearNode(target);

    const main = document.createElement("div");
    const title = document.createElement("span");
    const subtitle = document.createElement("span");
    const content = document.createElement("span");
    main.id = "error";
    title.innerText = origin.status;
    subtitle.innerText = origin.statusText;
    content.innerText = "오류가 발생했습니다";

    main.append(title);
    main.append(subtitle);
    main.append(content);
    area.append(main);

    return 0;
}

function view(target, name) {
    if (!target) throw Error("대상이 지정되지 않았습니다.");
    if (target.constructor !== String) throw Error("대상은 지정할 요소의 ID나 클래스 명칭으로 제공되어야 합니다.");
    if (!document.querySelector(target)) throw Error("대상이 존재하지 않습니다.");

    const area = document.querySelector(target);
    const filter = ["#text", "#comment", "SCRIPT"];
    clearNode(target);

    let flag = 0;

    fetch(lyra.link[name]).then((res) => {
        if (!res.ok) {
            viewError(target, res);

            return 1;
        };

        res.text().then((html) => {
            let dom = new DOMParser().parseFromString(html, "text/html");
            dom = dom.body;

            if (dom.querySelector("#leftside-list-view")) flag = 1;

            if (dom.querySelector("#color-picker")) {
                const picker = dom.querySelector("#color-picker");
                const viewer = picker.querySelector("#color-picker-viewer");
                const col = {
                    h: 0,
                    s: 100,
                    l: 50
                };

                const h = picker.querySelector("#color-picker-hue");
                const s = picker.querySelector("#color-picker-saturation");
                const l = picker.querySelector("#color-picker-lightness");
                const vh = picker.querySelector("#color-picker-viewer-hue");
                const vs = picker.querySelector("#color-picker-viewer-saturation");
                const vl = picker.querySelector("#color-picker-viewer-lightness");

                const applyPicker = () => {
                    vh.innerText = col.h;
                    vs.innerText = col.s;
                    vl.innerText = col.l;

                    picker.setAttribute("h", col.h);
                    picker.setAttribute("s", col.s);
                    picker.setAttribute("l", col.l);

                    s.style["background-image"] = `linear-gradient(90deg, hsl(${col.h}, 0%, 50%), hsl(${col.h}, 100%, 50%))`;
                    l.style["background-image"] = `linear-gradient(90deg, hsl(${col.h}, ${col.s}%, 0%), hsl(${col.h}, ${col.s}%, 50%), hsl(${col.h}, ${col.s}%, 100%))`;
                    viewer.style["background-color"] = `hsl(${col.h}, ${col.s}%, ${col.l}%)`;
                    return 0;
                };

                h.onpointerdown = (click) => {
                    const pos = click.target.getBoundingClientRect();
                    col.h = Math.round(click.layerX / pos.width * 360);
                    applyPicker();
                    document.onpointermove = (drag) => {
                        col.h = drag.clientX < pos.x ? 0 : (drag.clientX > pos.x + pos.width ? 360 : Math.round((drag.clientX - pos.x) / pos.width * 360));
                        applyPicker();
                    };
                    document.onpointerup = () => {
                        document.onpointermove = null;
                    };
                };

                s.onpointerdown = (click) => {
                    const pos = click.target.getBoundingClientRect();
                    col.s = Math.round(click.layerX / pos.width * 100);
                    applyPicker();
                    document.onpointermove = (drag) => {
                        col.s = drag.clientX < pos.x ? 0 : (drag.clientX > pos.x + pos.width ? 100 : Math.round((drag.clientX - pos.x) / pos.width * 100));
                        applyPicker();
                    };
                    document.onpointerup = () => {
                        document.onpointermove = null;
                    };
                };

                l.onpointerdown = (click) => {
                    const pos = click.target.getBoundingClientRect();
                    col.l = Math.round(click.layerX / pos.width * 100);
                    applyPicker();
                    document.onpointermove = (drag) => {
                        col.l = drag.clientX < pos.x ? 0 : (drag.clientX > pos.x + pos.width ? 100 : Math.round((drag.clientX - pos.x) / pos.width * 100));
                        applyPicker();
                    };
                    document.onpointerup = () => {
                        document.onpointermove = null;
                    };
                };

                applyPicker();
            };

            Array.from(dom.childNodes).filter((node) => !filter.includes(node.nodeName)).forEach((node) => {
                area.append(node);
            });

            if (flag === 1) {
                const listmain = document.querySelector("#leftside-list");
                if (!listmain) throw Error(4);

                const list = document.querySelector("#leftside-list-main");
                if (!list) throw Error(5);

                const collapse = document.querySelector("#leftside-list-collapse");
                if (!collapse) throw Error(6);

                collapse.addEventListener("click", () => {
                    listmain.id = listmain.id === "leftside-list" ? "leftside-list-collapse-on" : "leftside-list";
                });

                Array.from(list.childNodes).filter((node) => node.nodeName !== "#text").forEach((node) => {
                    node.addEventListener("click", () => {
                        document.querySelector(".view-list-active").classList.remove("view-list-active");
                        view("#list-view-viewport", node.attributes["value"].value);
                        node.classList.add("view-list-active");

                        if (window.innerWidth <= 700) listmain.id = "leftside-list";
                    });
                });

                collapse.onclick = () => {
                };

                const first = Array.from(list.childNodes).filter((node) => node.nodeName !== "#text")[0];
                if (first) {
                    view("#list-view-viewport", first.attributes["value"].value);
                    first.classList.add("view-list-active");
                };
            };
        });
    });

    return 0;
}

function clearNode(target) {
    Array.from(document.querySelector(target).childNodes).forEach((node) => {
        node.remove();
    });

    return 0;
}

function cycleTheme() {
    const palette = document.querySelector("#palette");
    palette.href = palette.href.split(/\//g).pop() === "palette-light.css" ? "./stylesheets/palette-dark.css" : "./stylesheets/palette-light.css";
    return 0;
}

function setTheme(num) {
    const themes = ["combined", "light", "dark"];
    const palette = document.querySelector("#palette");
    palette.href = `./stylesheets/palette-${themes[num]}.css`;
    return 0;
}

function getUniqueCode(list) {
    return Object.keys(list).length ? parseInt(Object.keys(list)[Object.keys(list).length - 1]) + 1 : 0;
};

function create(type, value = "") {
    if (!type) throw Error(1);
    if (type.constructor !== String) throw Error(2);
    if (value.constructor !== String) throw Error(3);

    const result = document.createElement(type);
    value.split(/ +/g).forEach(x => {
        if (x.startsWith("#")) {
            result.id = x.substring(1);
        } else if (x.startsWith(".")) {
            result.classList.add(x.substring(1));
        };
    });

    return result;
};

class Modal {
    constructor(param = {}) {
        if (param && param.constructor !== Object) throw Error(1);

        this.uid = getUniqueCode(lyra.ondisplay.modal);
        this.id = `${param["id"]}` || null;
        this.class = `${param["class"]}` || null;
        this.href = `${param["href"]}` || null;
        this.node = {
            "main": create("div", ".modal"),
            "area-backdrop": create("div", ".absolute .w100 .h100 .grain"),
            "window": create("div", ".window"),
            "window-backdrop": create("div", ".absolute .w100 .h100 .grain"),
            "window-main": create("div", ".window-main"),
            "window-title": create("div", ".window-title"),
            "window-buttons": create("div", ".window-buttons"),
            "window-button-close": create("div", ".icon .icon-close"),
            "window-button-maximize": create("div", ".icon .icon-maximize"),
            "window-title-main": create("span"),
            "window-content": create("div", ".window-content"),
            "window-content-main": null
        };

        this.node["window-buttons"].append(this.node["window-button-close"]);
        this.node["window-buttons"].append(this.node["window-button-maximize"]);
        this.node["window-title"].append(this.node["window-buttons"]);
        this.node["window-title"].append(this.node["window-title-main"]);
        this.node["window-main"].append(this.node["window-title"]);
        this.node["window-main"].append(this.node["window-content"]);
        this.node["window"].append(this.node["window-backdrop"]);
        this.node["window"].append(this.node["window-main"]);
        this.node["main"].append(this.node["area-backdrop"]);
        this.node["main"].append(this.node["window"]);

        this.node["window-button-close"].onclick = () => {
            this.close();
        };
        this.node["window-button-maximize"].onclick = () => {
            this.maximize();
        };

        this.node["window-title-main"].innerText = "Modal Window Test";

        lyra.ondisplay.modal[this.uid] = this;
        return this;
    };

    async set() {
        this.node["window-content-main"] = await fetch(this.href).then(async (res) => {
            return await res.text().then((html) => {
                let dom = new DOMParser().parseFromString(html, "text/html");
                dom = dom.body.querySelector("div");
                return dom;
            });
        });
        this.node["window-content"].append(this.node["window-content-main"]);

        return this;
    };

    show() {
        document.querySelector("body").append(this.node["main"]);

        return this;
    };

    close() {
        this.node["main"].remove();
        delete lyra.ondisplay.modal[this.uid];

        return this;
    };

    maximize() {
        this.node["window"].classList.add("window-maximize");

        return this;
    };
};

function closeModal(uid) {
    lyra.ondisplay.modal[uid].close();

    return 0;
};