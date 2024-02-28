const col = {
    h: 0,
    s: 100,
    l: 50
};
const colorPreview = document.querySelector("#color-preview");
colorPreview.style["background-color"] = `hsl(${col.h},${col.s}%,${col.l}%)`;


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
const positionLayer = document.querySelector("#map-position");
positionLayer.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
const modeFunctions = {
    0: () => {
        document.onmousedown = () => {
            document.onmousemove = (mousemove) => {
                pos.x += mousemove.movementX;
                pos.y += mousemove.movementY;
                positionLayer.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
            };
        };
        document.onmousemove = null;
        document.onmouseup = () => {
            document.onmousemove = null;
        };
    },
    1: () => {
        document.onmousedown = (mouse) => {
            if (!mouse.target.classList.contains("map-area")) return;
            mouse.target.style["fill"] = `#${HSLtoHEX(col)}`;
        };
        document.onmousemove = null;
        document.onmouseup = null;
    },
    2: () => {
        document.onmousedown = (mouse) => {
            document.onmousemove = (mousemove) => {
                if (!mousemove.target.classList.contains("map-area")) return;
                mousemove.target.style["fill"] = `#${HSLtoHEX(col)}`;
            };

            if (!mouse.target.classList.contains("map-area")) return;
            mouse.target.style["fill"] = `#${HSLtoHEX(col)}`;
        };
        document.onmousemove = null;
        document.onmouseup = () => {
            document.onmousemove = null;
        };
    },
    3: () => {
        document.onmousedown = (mouse) => {
            document.onmousemove = (mousemove) => {
                if (!mousemove.target.classList.contains("map-area")) return;
                mousemove.target.style["fill"] = null;
            };

            if (!mouse.target.classList.contains("map-area")) return;
            mouse.target.style["fill"] = null;
        };
        document.onmouseup = () => {
            document.onmousemove = null;
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