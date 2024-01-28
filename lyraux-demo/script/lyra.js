// const set = (target) => {
//     if (!target || target.constructor !== String) throw Error(1);
//     if (!document.querySelector(target)) throw Error(2);

//     const area = document.querySelector(target);

//     return 0;
// };

// set("#main");

const view = (target, name) => {
    if (!target || target.constructor !== String) throw Error(1);
    if (!document.querySelector(target)) throw Error(2);
    if (!viewList[name]) throw Error(3);

    const area = document.querySelector(target);
    const filter = [ "#text", "#comment", "SCRIPT" ];
    clearNode(target);

    let flag = 0;
    
    fetch(viewList[name]).then((res) => {
        res.text().then((html) => {
            let dom = new DOMParser().parseFromString(html, "text/html");
            dom = dom.body;

            if (dom.querySelector("#leftside-list-view")) flag = 1;

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
    palette.href = palette.href.split(/\//g).pop() === "palette-day.css" ? "./stylesheets/palette-night.css" : "./stylesheets/palette-day.css";
    return 0;
};