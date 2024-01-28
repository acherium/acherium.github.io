// const set = (target) => {
//     if (!target || target.constructor !== String) throw Error(1);
//     if (!document.querySelector(target)) throw Error(2);

//     const area = document.querySelector(target);

//     return 0;
// };

// set("#main");

const errorPages = {
    "default": "./view/error/default.html",
    404: "./view/error/404.html"
};

const set = (target, dir) => {
    if (!target || target.constructor !== String) throw Error(1);
    if (!document.querySelector(target)) throw Error(2);

    const area = document.querySelector(target);
    const filter = [ "#text", "#comment", "SCRIPT" ];
    clearNode(target);
    
    fetch(dir).then((res) => {
        if (!res.ok) {
            console.log(res);
            set(target, errorPages["default"]);

            return 1;
        };

        res.text().then((html) => {
            let dom = new DOMParser().parseFromString(html, "text/html");
            dom = dom.body;

            Array.from(dom.childNodes).filter((node) => !filter.includes(node.nodeName)).forEach((node) => {
                area.append(node);
            });
        });
    });

    return 0;
};

const viewError = (target, origin) => {
    if (!target || target.constructor !== String) throw Error(1);
    if (!document.querySelector(target)) throw Error(2);

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
};

const view = (target, name) => {
    if (!target || target.constructor !== String) throw Error(1);
    if (!document.querySelector(target)) throw Error(2);
    if (!viewList[name]) throw Error(3);

    const area = document.querySelector(target);
    const filter = [ "#text", "#comment", "SCRIPT" ];
    clearNode(target);

    let flag = 0;
    
    fetch(viewList[name]).then((res) => {
        if (!res.ok) {
            // set(target, ( errorPages[res.status] || errorPages["default"] ));
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
                    col.h = click.layerX;
                    applyPicker();
                    document.onpointermove = (drag) => {
                        col.h = drag.clientX < pos.x ? 0 : ( drag.clientX > pos.x + pos.width ? 360 : drag.clientX - pos.x );
                        applyPicker();
                    };
                    document.onpointerup = () => {
                        document.onpointermove = null;
                    };
                };

                s.onpointerdown = (click) => {
                    const pos = click.target.getBoundingClientRect();
                    col.s = Math.round(click.layerX / 360 * 100);
                    applyPicker();
                    document.onpointermove = (drag) => {
                        col.s = drag.clientX < pos.x ? 0 : ( drag.clientX > pos.x + pos.width ? 100 : Math.round(( drag.clientX - pos.x ) / 360 * 100) );
                        applyPicker();
                    };
                    document.onpointerup = () => {
                        document.onpointermove = null;
                    };
                };

                l.onpointerdown = (click) => {
                    const pos = click.target.getBoundingClientRect();
                    col.l = Math.round(click.layerX / 360 * 100);
                    applyPicker();
                    document.onpointermove = (drag) => {
                        col.l = drag.clientX < pos.x ? 0 : ( drag.clientX > pos.x + pos.width ? 100 : Math.round(( drag.clientX - pos.x ) / 360 * 100) );
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
};

const clearNode = (target) => {
    Array.from(document.querySelector(target).childNodes).forEach((node) => {
        node.remove();
    });

    return 0;
};

const cycleTheme = () => {
    const palette = document.querySelector("#palette");
    palette.href = palette.href.split(/\//g).pop() === "palette-light.css" ? "./stylesheets/palette-dark.css" : "./stylesheets/palette-light.css";
    return 0;
};

const setTheme = (num) => {
    const themes = [ "combined", "light", "dark" ];
    const palette = document.querySelector("#palette");
    palette.href = `./stylesheets/palette-${themes[num]}.css`;
    return 0;
};

// const setThemeAlt = (num) => {
//     console.log(document.documentElement.attributes["theme"]);
//     return 0;
// };