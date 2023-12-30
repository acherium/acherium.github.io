// 버튼 클래스
class LyraButton {
    constructor(param = {}) {
        // if (!param) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));
        if (Object.values(param).filter(x => x.constructor !== String).length) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
        const directions = [ "horizontal", "vertical" ];
        
        if (param["direction"] && !directions.includes(param["direction"])) throw Error(getString("ERROR-COMMON-INVALID-TYPE"));
        this.id = param["id"] || null;
        this.class = param["class"] || null;
        this.direction = param["direction"] || "horizontal";
        this.color = param["color"] || "default";
        this.icon = {
            value: param["icon"] || null,
            raw: null
        };
        this.name = {
            value: param["name"] || null,
            raw: null
        };
        this.description = param["description"] || null;
        this.alt = param["alt"] || null;
        this.onclick = param["onclick"] || null;
        this.disabled = param["disabled"] || null;
        
        const cover = create("div", `.lyra-button-cover`);
        this.raw = create("div",
            `${this.id ? `${this.id} ` : ""}.lyra-button .lyra-button-${this.direction} .lyra-button-color-${this.color}${this.class ? this.class.join(" ") : ""}`,
            {
                description: this.description,
                alt: this.alt,
                onclick: this.onclick,
                disabled: this.disabled
            });
        this.raw.append(cover);

        if (this.icon.value) {
            this.icon.raw = create("div", `.lyra-icon .lyra-button-icon .lyra-icon-${this.icon.value}`);
            this.raw.append(this.icon.raw);
        };
        if (this.name.value) {
            this.name.raw = create("div", `.lyra-button-name`, { string: this.name.value });
            this.raw.append(this.name.raw);
        };

        setString(this.name.raw);
        return this;
    };

    init() {
        this.unsetID();
        this.unsetClass();
        this.unsetDirection();
        this.unsetColor();
        this.unsetIcon();
        this.unsetName();
        this.unsetDescription();
        this.unsetAlt();
        this.unsetOnclick();

        return this;
    };

    unsetID() {
        this.id = null;
        this.raw.id = null;

        return this;
    };

    setID(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.id = x;
        this.raw.id = x;

        return this;
    };

    unsetClass() {
        this.class = null;
        Array.from(this.raw.classList).forEach(x => {
            this.raw.classList.remove(x);
        });

        this.raw.classList.add("lyra-button");
        this.raw.classList.add(`lyra-button-${this.direction}`);
        this.raw.classList.add(`lyra-button-color-${this.color}`);

        return this;
    };

    setClass(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.class = `${this.class ? `${this.class} ` : ""}${x}`;
        this.raw.classList.add(x);

        return this;
    };

    unsetDirection() {
        this.raw.classList.remove(`lyra-button-${this.direction}`);
        this.direction = "horizontal";
        this.raw.classList.add(`lyra-button-${this.direction}`);

        return this;
    };

    setDirection(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
        if (!lyra.path["PATH-LYRA-BUTTON-DIRECTIONS"].includes(x)) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.raw.classList.remove(`lyra-button-${this.direction}`);
        this.direction = x;
        this.raw.classList.add(`lyra-button-${this.direction}`);

        return this;
    };

    unsetColor() {
        this.raw.classList.remove(`lyra-button-color-${this.color}`);
        this.color = "default";
        this.raw.classList.add(`lyra-button-color-${this.color}`);

        return this;
    };

    setColor(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMTER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
        if (!lyra.path["PATH-LYRA-BUTTON-COLORS"].includes(x)) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.raw.classList.remove(`lyra-button-color-${this.color}`);
        this.color = x;
        this.raw.classList.add(`lyra-button-color-${this.color}`);

        return this;
    };

    unsetIcon() {
        this.icon.value = null;
        if (this.icon.raw) {
            this.icon.raw.remove();
            this.icon.raw = null;
        };

        return this;
    };

    setIcon(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.icon.raw) {
            this.icon.raw = create("div", ".lyra-icon .lyra-button-icon");
            this.raw.append(this.icon.raw);
        } else {
            this.icon.raw.classList.remove(`lyra-icon-${this.icon.value}`);
        };

        this.icon.value = x;
        this.icon.raw.classList.add(`lyra-icon-${this.icon.value}`);

        return this;
    };

    unsetName() {
        this.name.value = null;
        if (this.name.raw) {
            this.name.raw.remove();
            this.name.raw = null;
        };

        return this;
    };

    setName(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.name.raw) {
            this.name.raw = create("div", ".lyra-button-name");
            this.raw.append(this.name.raw);
        } else {
            this.name.raw.innerText = "";
            this.name.raw.removeAttribute("lyra-string");
        };

        this.name.value = x;
        this.name.raw.setAttribute("lyra-string", this.name.value);
        setString(this.name.raw);

        return this;
    };

    unsetDescription() {
        this.description = null;
        this.raw.removeAttribute("lyra-description");

        return this;
    };

    setDescription(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.description = x;
        this.raw.setAttribute("lyra-description", x);

        return this;
    };

    unsetAlt() {
        this.alt = null;
        this.raw.removeAttribute("alt");

        return this;
    };

    setAlt(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.alt = x;
        this.raw.setAttribute("alt", x);

        return this;
    };

    unsetOnclick() {
        this.onclick = null;
        this.raw.removeAttribute("onclick");

        return this;
    };

    setOnclick(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.onclick = x;
        this.raw.setAttribute("onclick", x);

        return this;
    };

    unsetDisable() {
        this.disabled = null;
        this.raw.removeAttribute("disabled");

        return this;
    };

    setDisable() {
        this.disabled = "true";
        this.raw.setAttribute("disabled", "true");

        return this;
    };
};

// 기본 모달 클래스
class LyraModal {
    constructor(param = {}) {
        if (param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));
        // if (Object.values(param).filter(x => x.constructor !== String).length) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.id = param["id"] || null;
        this.class = param["class"] | null;
        this.mid = getUniqueCode(lyra.ondisplay.modal);
        this.state = true;
        this.sort = this.mid + lyra.path["PATH-LYRA-MODAL-OFFSET"];
        this.pos = {
            x: 0,
            y: 0,
            touch: {
                x: 0,
                y: 0
            }
        };
        this.target = {
            value: param["target"] || "body",
            raw: document.querySelector(param["target"] || "body")
        };
        this.title = {
            value: param["title"] || null,
            raw: null
        };
        this.content = {
            value: param["content"] || null,
            raw: null
        };
        this.icon = {
            value: param["icon"] || null,
            raw: null
        };
        this.thumbnail = {
            value: param["thumbnail"] || null,
            img: null,
            raw: null
        };
        if (param["buttons"] && param["buttons"].constructor !== Array) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
        this.buttons = {
            values: param["buttons"] || [],
            area: create("div", ".lyra-modal-button-area")
        };

        this.raw = {};
        this.raw.modal = create("div", ".lyra-modal");
        this.raw.background = create("div", ".lyra-modal-background", { onclick: `lyra.ondisplay.modal[${this.mid}].close();` });
        this.raw.effect = create("div", ".lyra-modal-background-effect");
        this.raw.window = create("div", ".lyra-modal-window");
        this.raw.grain = create("div", ".lyra-modal-background-effect");
        this.raw.area = create("div", ".lyra-modal-area");
        this.raw.wrap = create("div", ".lyra-modal-wrap");
        this.raw.handle = {
            area: create("div", ".lyra-modal-handle-area"),
            icon: create("div", ".lyra-modal-handle")
        };

        this.raw.handle.icon.onmousedown = () => {
            this.changeState();

            this.target.raw.onmousemove = (m) => {
                this.pos.x += m.movementX;
                this.pos.y += m.movementY;
                this.raw.window.style["left"] = `${this.pos.x}px`;
                this.raw.window.style["top"] = `${this.pos.y}px`;
            };
            this.target.raw.onmouseup = () => {
                this.changeState();

                this.raw.window.classList.add("lyra-ani-modal-position-reset");
                setTimeout(() => {
                    this.raw.window.classList.remove("lyra-ani-modal-position-reset");
                }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);
                
                this.pos.x = 0;
                this.pos.y = 0;
                this.raw.window.style["left"] = `${this.pos.x}px`;
                this.raw.window.style["top"] = `${this.pos.y}px`;

                this.target.raw.onmousemove = null;
                this.target.raw.onmouseup = null;
            };
        };

        this.raw.handle.icon.ontouchstart = (t1) => {
            this.changeState();
            this.pos.touch.x = t1.touches[0].clientX;
            this.pos.touch.y = t1.touches[0].clientY;

            this.target.raw.ontouchmove = (t2) => {
                this.pos.x = t2.touches[0].clientX - this.pos.touch.x;
                this.pos.y = t2.touches[0].clientY - this.pos.touch.y;
                this.raw.window.style["left"] = `${this.pos.x}px`;
                this.raw.window.style["top"] = `${this.pos.y}px`;
            };

            const endTransition = () => {
                this.changeState();

                this.raw.window.classList.add("lyra-ani-modal-position-reset");
                setTimeout(() => {
                    this.raw.window.classList.remove("lyra-ani-modal-position-reset");
                }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);
                
                this.pos.x = 0;
                this.pos.y = 0;
                this.raw.window.style["left"] = `${this.pos.x}px`;
                this.raw.window.style["top"] = `${this.pos.y}px`;
                
                this.target.raw.ontouchmove = null;
            };

            this.target.raw.ontouchend = endTransition;

            this.target.raw.ontouchcancel = endTransition;
        };

        this.raw.handle.area.append(this.raw.handle.icon);
        this.raw.wrap.append(this.buttons.area);
        this.raw.area.append(this.raw.handle.area);
        this.raw.area.append(this.raw.wrap);
        this.raw.window.append(this.raw.grain);
        this.raw.window.append(this.raw.area);
        this.raw.background.append(this.raw.effect);
        this.raw.modal.append(this.raw.background);
        this.raw.modal.append(this.raw.window);

        if (this.title.value) {
            this.title.raw = create("div", ".lyra-title", { string: this.title.value });
            this.raw.wrap.append(this.title.raw);
        };
        if (this.content.value) {
            this.content.raw = create("div", ".lyra-content", { string: this.content.value });
            this.raw.wrap.append(this.content.raw);
        };
        if (this.thumbnail.value) {
            this.thumbnail.img = create("img");
            this.thumbnail.img.src = this.thumbnail.value;
            this.thumbnail.raw = create("div", ".lyra-modal-thumbnail");
            this.thumbnail.raw.append(this.thumbnail.img);
            this.raw.wrap.append(this.thumbnail.raw);
        };
        if (this.buttons.values.length) {
            this.buttons.values.forEach(b => {
                const button = new LyraButton(b);
                if (!b["onclick"]) button.raw.setAttribute("onclick", `lyra.ondisplay.modal[${this.mid}].close();`);
                this.buttons.area.append(button.raw);
            });
        };

        this.raw.modal.style["z-index"] = this.sort;
        setStringChildrens(this.raw.modal);

        return this;
    };

    unsetID() {
        this.id = null;
        this.raw.modal.id = null;

        return this;
    };

    setID(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.id = x;
        this.raw.modal.id = x;

        return this;
    };

    unsetClass() {
        this.class = null;
        Array.from(this.raw.modal.classList).forEach(x => {
            this.raw.modal.classList.remove(x);
        });

        this.raw.modal.classList.add("lyra-modal");

        return this;
    };

    setClass(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.class = `${this.class ? `${this.class} ` : ""}${x}`;
        this.raw.modal.classList.add(x);

        return this;
    };

    changeState() {
        this.target.raw.style["cursor"] = this.state ? "move" : null;
        this.raw.handle.icon.style["cursor"] = this.state ? "move" : "pointer";
        this.raw.background.style["opacity"] = this.state ? "0" : "1";
        this.raw.area.style["opacity"] = this.state ? "0" : "1";

        this.state = this.state ? false : true;

        return this;
    };

    show() {
        this.raw.modal.classList.add("lyra-ani-window-hidden");
        this.raw.window.classList.add("lyra-ani-window-jumpup");
        this.raw.window.classList.add("lyra-ani-modal-transition-in");

        this.target.raw.append(this.raw.modal);
        lyra.ondisplay.modal[this.mid] = this; 

        setTimeout(() => {
            this.raw.modal.classList.remove("lyra-ani-window-hidden");
            this.raw.window.classList.remove("lyra-ani-window-jumpup");

            setTimeout(() => {
                this.raw.window.classList.remove("lyra-ani-modal-transition-in");
            }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);
        }, lyra.path["PATH-LYRA-TIMEOUT-BUFFER"]);

        return this;
    };

    close() {
        this.raw.modal.classList.add("lyra-ani-window-hidden");
        this.raw.window.classList.add("lyra-ani-modal-transition-in");
        this.raw.window.classList.add("lyra-ani-window-jumpup");

        setTimeout(() => {
            this.target.raw.removeChild(this.raw.modal);
        }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);

        return this;
    };

    destroy() {
        this.raw.modal.remove();
        delete lyra.ondisplay.modal[this.mid];

        return;
    };
};