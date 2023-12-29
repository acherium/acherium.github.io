// 버튼 클래스
class LyraButtonEnhanced {
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
class LyraModalEnhanced {
    constructor(param = {}) {
        if (param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));
        if (Object.values(param).filter(x => x.constructor !== String).length) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.id = param["id"] || null;
        this.class = param["class"] | null;
        this.mid = getUniqueCode(lyra.ondisplay.modal);
        this.sort = this.mid + lyra.path["PATH-LYRA-MODAL-OFFSET"];
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
            raw: null
        };
        this.buttons = {
            values: [],
            area: create("div", ".lyra-modal-button-area")
        };

        this.raw = {};
        this.raw.modal = create("div", ".lyra-modal");
        this.raw.background = create("div", ".lyra-background");
        this.raw.window = create("div", ".lyra-modal-window");
        this.raw.area = create("div", ".lyra-modal-area");

        this.raw.area.append(this.buttons.area);
        this.raw.window.append(this.raw.area);
        this.raw.modal.append(this.raw.background);
        this.raw.modal.append(this.raw.window);

        this.raw.modal.style["z-index"] = this.sort;

        return this;
    };

    unsetID() {
        this.id = null;

        return this;
    }
};