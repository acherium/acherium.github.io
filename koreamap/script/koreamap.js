const windowList = {
    "COLORPICKER": {
        href: "./view/colorpicker.html",
        width: "400px",
        height: "400px"
    },
    "RESET": {
        href: "./view/reset.html",
        width: "200px"
    }
};
const showWindow = (name) => {
    const w = new Window(windowList[name]);
    return w.show();
};

const list = {};
const exportList = () => {
    return btoa(JSON.stringify(list));
};
const importList = (string) => {
    return JSON.parse(atob(string));
};
const copyExportCode = () => {
    window.navigator.clipboard.writeText(exportList());
    return 0;
};
const importCodeFromInput = () => {
    const string = document.querySelector("#import-string-area").value;
    try {
        const origin = atob(string);
        const newList = JSON.parse(origin);
        Object.keys(list).forEach((x) => {
            document.querySelector(`#${x}`).style["fill"] = null;
            removeList(x);
        });
        Object.keys(newList).forEach((x) => {
            document.querySelector(`#${x}`).style["fill"] = newList[x];
            addList(x, newList[x]);
        });
    } catch(error) {
        alert("가져오기에 실패했습니다!\n입력한 값이 올바르지 않습니다.");
    };
    return 0;
};
const refreshExportCodePreview = () => {
    const codePreview = document.querySelector("#export-string-preview");
    codePreview.innerText = exportList();
    return 0;
};
refreshExportCodePreview();
const addList = (name, color) => {
    list[name] = color;
    refreshExportCodePreview();
};
const removeList = (name) => {
    delete list[name];
    refreshExportCodePreview();
};

const HSLtoHEX = (col) => {
    const h = col.h;
    const s = col.s / 100;
    const l = col.l / 100;
    const k = (n) => {
        return (n + h / 30) % 12;
    };
    const a = s * Math.min(l, 1 - l);
    const f = (n) => {
        return l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    };

    const rgb = {
        r: Math.round(255 * f(0)),
        g: Math.round(255 * f(8)),
        b: Math.round(255 * f(4))
    };

    let r = rgb.r.toString(16).toUpperCase();
    let g = rgb.g.toString(16).toUpperCase();
    let b = rgb.b.toString(16).toUpperCase();
    r = r.length === 1 ? `0${r}` : r;
    g = g.length === 1 ? `0${g}` : g;
    b = b.length === 1 ? `0${b}` : b;

    return `${r}${g}${b}`;
};
const changeShapeColor = (click) => {
    if (!click.target.classList.contains("map-area")) return;
    click.target.style["fill"] = `#${HSLtoHEX(col)}`;
    return 0;
};

let mode = 0;
const modeList = {
    0: "이동",
    1: "단일 채움",
    2: "연속 채움",
    3: "지움"
};
const modeButtons = {
    0: document.querySelector("#button-fillmode-none"),
    1: document.querySelector("#button-fillmode-single"),
    2: document.querySelector("#button-fillmode-multiple"),
    3: document.querySelector("#button-fillmode-erase"),
};
const pos = {
    x: 400,
    y: 400
};
const koreamap = document.querySelector("#map-viewport");
const positionLayer = document.querySelector("#map-position");
positionLayer.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
const modeFunctions = {
    0: () => {
        koreamap.onmousedown = () => {
            koreamap.onmousemove = (mousemove) => {
                pos.x += mousemove.movementX;
                pos.y += mousemove.movementY;
                positionLayer.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
            };
        };
        koreamap.onmousemove = null;
        koreamap.onmouseup = () => {
            koreamap.onmousemove = null;
        };
        koreamap.ontouchstart = (touchesOrigin) => {
            const xo = touchesOrigin.changedTouches[0].pageX;
            const yo = touchesOrigin.changedTouches[0].pageY;
            let xl = xo;
            let yl = yo;
            koreamap.ontouchmove = (touches) => {
                const x = touches.changedTouches[0].pageX;
                const y = touches.changedTouches[0].pageY;
                const movementX = x - xl;
                const movementY = y - yl;
                xl = x;
                yl = y;
                pos.x += movementX;
                pos.y += movementY;
                positionLayer.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
            };
        };
        koreamap.ontouchmove = null;
        koreamap.ontouchend = () => {
            koreamap.ontouchmove = null;
        };
    },
    1: () => {
        koreamap.onmousedown = (mouse) => {
            if (!mouse.target.classList.contains("map-area")) return;
            mouse.target.style["fill"] = `#${RGBtoHEX(color)}`;
            addList(mouse.target.id, `#${RGBtoHEX(color)}`);
        };
        koreamap.onmousemove = null;
        koreamap.onmouseup = null;
        koreamap.ontouchstart = (touch) => {
            if (!touch.target.classList.contains("map-area")) return;
            touch.target.style["fill"] = `#${RGBtoHEX(color)}`;
            addList(touch.target.id, `#${RGBtoHEX(color)}`);
        };
        koreamap.ontouchmove = null;
        koreamap.ontouchend = null;
    },
    2: () => {
        koreamap.onmousedown = (mouse) => {
            koreamap.onmousemove = (mousemove) => {
                if (!mousemove.target.classList.contains("map-area")) return;
                mousemove.target.style["fill"] = `#${RGBtoHEX(color)}`;
                addList(mousemove.target.id, `#${RGBtoHEX(color)}`);
            };

            if (!mouse.target.classList.contains("map-area")) return;
            mouse.target.style["fill"] = `#${RGBtoHEX(color)}`;
            addList(mouse.target.id, `#${RGBtoHEX(color)}`);
        };
        koreamap.onmousemove = null;
        koreamap.onmouseup = () => {
            koreamap.onmousemove = null;
        };
        koreamap.ontouchstart = (touch) => {
            if (!touch.target.classList.contains("map-area")) return;
            touch.target.style["fill"] = `#${RGBtoHEX(color)}`;
            addList(touch.target.id, `#${RGBtoHEX(color)}`);
        };
        koreamap.ontouchmove = null;
        koreamap.ontouchend = () => {
            koreamap.ontouchmove = null;
        };
    },
    3: () => {
        koreamap.onmousedown = (mouse) => {
            koreamap.onmousemove = (mousemove) => {
                if (!mousemove.target.classList.contains("map-area")) return;
                mousemove.target.style["fill"] = null;
                removeList(mousemove.target.id);
            };

            if (!mouse.target.classList.contains("map-area")) return;
            mouse.target.style["fill"] = null;
            removeList(mouse.target.id);
        };
        koreamap.onmouseup = () => {
            koreamap.onmousemove = null;
        };
        koreamap.ontouchstart = (touch) => {
            if (!touch.target.classList.contains("map-area")) return;
            touch.target.style["fill"] = null;
            removeList(touch.target.id);
        };
        koreamap.ontouchmove = null;
        koreamap.ontouchend = () => {
            koreamap.ontouchmove = null;
        };
    }
};
const applyMode = (id) => {
    modeFunctions[id]();
    Object.values(modeButtons).forEach((button) => {
        button.classList.remove("toolbar-button-active");
    });
    modeButtons[id].classList.add("toolbar-button-active");
};
Object.keys(modeButtons).forEach((id) => {
    modeButtons[id].onclick = () => {
        applyMode(id);
    };
});
applyMode(0);

const mapReset = () => {
    Array.from(document.querySelectorAll(".map-area")).forEach((node) => {
        node.style["fill"] = null;
    });
};

const color = {
    r: 255,
    g: 100,
    b: 100
};
const RGBtoHEX = (rgb) => {
    let r = rgb.r.toString(16).toUpperCase();
    let g = rgb.g.toString(16).toUpperCase();
    let b = rgb.b.toString(16).toUpperCase();
    r = r.length === 1 ? `0${r}` : r;
    g = g.length === 1 ? `0${g}` : g;
    b = b.length === 1 ? `0${b}` : b;

    return `${r}${g}${b}`;
};
const applyColorPicker = () => {
    const colorPreview = document.querySelector("#color-preview");
    const colorPickerPreview = document.querySelector("#toolbar-color-picker-preview");
    const pHEX = colorPickerPreview.querySelector(".hex");
    const pRGB = colorPickerPreview.querySelector(".rgb");

    const HEX = RGBtoHEX(color);
    colorPreview.style["background-color"] = `#${HEX}`;
    colorPickerPreview.style["background-color"] = `#${HEX}`;
    pHEX.innerText = `#${HEX}`;
    pRGB.innerText = `${color.r}, ${color.g}, ${color.b}`;

    Array.from(document.querySelectorAll(".color-picker-cursor")).forEach((node) => {
        const i = color[node.getAttribute("target")];
        node.style["left"] = `${i}px`;
    });
};
Array.from(document.querySelectorAll(".color-picker-cursor")).forEach((node) => {
    node.onmousedown = (mouse) => {
        node.setPointerCapture(mouse.pointerId);

        node.onmousemove = (drag) => {
            let i = color[node.getAttribute("target")];
            i += drag.movementX;
            i = i < 0 ? 0 : ( i > 255 ? 255 : i );
            node.style["left"] = `${i}px`;
            color[node.getAttribute("target")] = i;
            applyColorPicker();
        };
        node.onmouseup = () => {
            node.onmousemove = null;
            node.releasePointerCapture(mouse.pointerId);
        };
    };

    node.ontouchstart = (touchesOrigin) => {
        const xo = touchesOrigin.changedTouches[0].pageX;
        let xl = xo;

        node.ontouchmove = (touches) => {
            const x = touches.changedTouches[0].pageX;
            const movementX = x - xl;
            xl = x;
            
            let i = color[node.getAttribute("target")];
            i += Math.round(movementX);
            i = i < 0 ? 0 : ( i > 255 ? 255 : i );
            node.style["left"] = `${i}px`;
            color[node.getAttribute("target")] = i;
            applyColorPicker();
        };

        node.ontouchend = () => {
            node.ontouchmove = null;
        };
    };
});
applyColorPicker();
const toggleColorPicker = () => {
    const targetWindow = document.querySelector("#toolbar-color-picker");
    targetWindow.style["display"] = targetWindow.style["display"] === "none" ? "flex" : "none";
    return 0;
};
const toggleExport = () => {
    const targetWindow = document.querySelector("#toolbar-export");
    targetWindow.style["display"] = targetWindow.style["display"] === "none" ? "flex" : "none";
    return 0;
};
const toggleImport = () => {
    const targetWindow = document.querySelector("#toolbar-import");
    targetWindow.style["display"] = targetWindow.style["display"] === "none" ? "flex" : "none";
    return 0;
};