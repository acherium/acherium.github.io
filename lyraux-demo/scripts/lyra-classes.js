// 버튼 클래스
class LyraButton {
    constructor(param = {}) {
        // if (!param) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));
        // console.log(param);
        // if (Object.values(param).filter(x => x.constructor !== String).length) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
        const directions = [ "horizontal", "vertical" ];
        
        if (param["direction"] && !directions.includes(param["direction"])) throw Error(getString("ERROR-COMMON-INVALID-TYPE"));
        this.id = param["id"] || null;
        this.class = param["class"] || null;

        this.option = {
            direction: ( param["direction"] && lyra.path["PATH-LYRA-BUTTON-DIRECTIONS"].includes(param["direction"]) ) ? param["direction"] : "horizontal",
            color: param["color"] || "default",
            description: param["description"] || null,
            alt: param["alt"] || null,
            onclick: param["onclick"] || null,
            disabled: param["disabled"] || null
        };
        this.data = {
            icon: param["icon"] || null,
            name: param["name"] || null
        };
        this.node = {
            main: create("div",
                `${this.id ? `${this.id} ` : ""}.lyra-button .lyra-button-${this.option.direction} .lyra-button-color-${this.option.color}${this.class ? this.class.join(" ") : ""}`,
                {
                    alt: this.option.alt,
                    onclick: this.option.onclick,
                    disabled: this.option.disabled
                }),
            cover: create("div", ".lyra-button-cover", { description: this.option.description }),
            icon: null,
            name: null
        };

        this.node.main.append(this.node.cover);

        if (this.data.icon) this.setIcon(this.data.icon);
        if (this.data.name) this.setName(this.data.name);

        return this;
    };

    unsetID() {
        this.id = null;
        this.node.main.id = null;

        return this;
    };

    setID(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.id = x;
        this.node.main.id = x;

        return this;
    };

    unsetClass() {
        this.class = null;
        Array.from(this.node.main.classList).forEach(x => {
            this.node.main.classList.remove(x);
        });

        this.node.main.classList.add("lyra-button");
        this.node.main.classList.add(`lyra-button-${this.direction}`);
        this.node.main.classList.add(`lyra-button-color-${this.color}`);

        return this;
    };

    setClass(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.class = `${this.class ? `${this.class} ` : ""}${x}`;
        this.node.main.classList.add(x);

        return this;
    };

    unsetDirection() {
        this.node.main.classList.remove(`lyra-button-${this.direction}`);
        this.direction = "horizontal";
        this.node.main.classList.add(`lyra-button-${this.direction}`);

        return this;
    };

    setDirection(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
        if (!lyra.path["PATH-LYRA-BUTTON-DIRECTIONS"].includes(x)) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.node.main.classList.remove(`lyra-button-${this.direction}`);
        this.direction = x;
        this.node.main.classList.add(`lyra-button-${this.direction}`);

        return this;
    };

    unsetColor() {
        this.node.main.classList.remove(`lyra-button-color-${this.color}`);
        this.color = "default";
        this.node.main.classList.add(`lyra-button-color-${this.color}`);

        return this;
    };

    setColor(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMTER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
        if (!lyra.path["PATH-LYRA-BUTTON-COLORS"].includes(x)) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.node.main.classList.remove(`lyra-button-color-${this.color}`);
        this.color = x;
        this.node.main.classList.add(`lyra-button-color-${this.color}`);

        return this;
    };

    unsetIcon() {
        this.data.icon = null;
        if (this.node.icon) {
            this.node.icon.remove();
            this.node.icon = null;
        };

        return this;
    };

    setIcon(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.node.icon) {
            this.node.icon = create("div", ".lyra-icon .lyra-button-icon");
            this.node.main.append(this.node.icon);
        } else {
            this.node.icon.classList.remove(`lyra-icon-${this.data.icon}`);
        };

        this.data.icon = x;
        this.node.icon.classList.add(`lyra-icon-${this.data.icon}`);

        return this;
    };

    unsetName() {
        this.data.name = null;
        if (this.node.name) {
            this.node.name.remove();
            this.node.name = null;
        };

        return this;
    };

    setName(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.node.name) {
            this.node.name = create("div", ".lyra-button-name");
            this.node.main.append(this.node.name);
        } else {
            this.node.name.innerText = "";
            this.node.name.removeAttribute("lyra-string");
        };

        this.data.name = x;
        this.node.name.setAttribute("lyra-string", this.data.name);
        setString(this.node.name);

        return this;
    };

    unsetDescription() {
        this.description = null;
        this.node.main.removeAttribute("lyra-description");

        return this;
    };

    setDescription(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.description = x;
        this.node.main.setAttribute("lyra-description", x);

        return this;
    };

    unsetAlt() {
        this.alt = null;
        this.node.main.removeAttribute("alt");

        return this;
    };

    setAlt(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.alt = x;
        this.node.main.setAttribute("alt", x);

        return this;
    };

    unsetOnclick() {
        this.onclick = null;
        this.node.main.removeAttribute("onclick");

        return this;
    };

    setOnclick(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.onclick = x;
        this.node.main.setAttribute("onclick", x);

        return this;
    };

    unsetDisable() {
        this.disabled = null;
        this.node.main.removeAttribute("disabled");

        return this;
    };

    setDisable() {
        this.disabled = "true";
        this.node.main.setAttribute("disabled", "true");

        return this;
    };
};

// 기본 모달 클래스
class LyraModal {
    constructor(param = {}) {
        if (param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));
        // if (Object.values(param).filter(x => x.constructor !== String).length) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.uid = getUniqueCode(lyra.ondisplay.modal);
        this.id = param["id"] || null;
        this.class = param["class"] | null;

        this.option = {
            state: true,
            sort: this.uid + lyra.path["PATH-LYRA-MODAL-OFFSET"],
            pos: {
                x: 0,
                y: 0,
                touch: {
                    x: 0,
                    y: 0
                }
            },
            fixed: Boolean(param["fixed"]) || false
        };
        this.data = {
            target: param["target"] || "body",
            title: param["title"] || null,
            content: param["content"] || null,
            icon: param["icon"] || null,
            thumbnail: param["thumbnail"] || null,
            buttons: ( param["buttons"] && param["buttons"].constructor === Array ) ? param["buttons"] : []
        };
        this.node = {
            target: document.querySelector(this.data.target),
            main: create("div", ".lyra-modal"),
            backdrop: create("div", ".lyra-modal-background", { onclick: `closeModal(${this.uid});` }),
            backdropEffect: create("div", ".lyra-modal-background-effect"),
            window: create("div", ".lyra-modal-window"),
            windowEffect: create("div", ".lyra-modal-background-effect"),
            area: create("div", ".lyra-modal-area"),
            wrap: create("div", ".lyra-modal-wrap"),
            handleArea: create("div", ".lyra-modal-handle-area"),
            handleBar: create("div", ".lyra-modal-handle"),
            handleIcon: create("div", ".lyra-modal-handle-icon"),
            title: null,
            content: null,
            icon: null,
            thumbnail: null,
            thumbnailImg: null,
            buttons: create("div", ".lyra-modal-button-area")
        };

        this.node.handleBar.onmousedown = () => {
            this.changeState(false);

            this.node.target.onmousemove = (m) => {
                this.option.pos.x += m.movementX;
                this.option.pos.y += m.movementY;
                this.node.window.style["left"] = `${this.option.pos.x}px`;
                this.node.window.style["top"] = `${this.option.pos.y}px`;
            };
            this.node.target.onmouseup = () => {
                this.changeState(true);

                this.node.window.classList.add("lyra-ani-modal-position-reset");
                setTimeout(() => {
                    this.node.window.classList.remove("lyra-ani-modal-position-reset");
                }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);
                
                this.option.pos.x = 0;
                this.option.pos.y = 0;
                this.node.window.style["left"] = `${this.option.pos.x}px`;
                this.node.window.style["top"] = `${this.option.pos.y}px`;

                this.node.target.onmousemove = null;
                this.node.target.onmouseup = null;
            };
        };

        this.node.handleBar.ontouchstart = (t1) => {
            this.changeState(false);
            this.option.pos.touch.x = t1.touches[0].clientX;
            this.option.pos.touch.y = t1.touches[0].clientY;

            this.node.target.ontouchmove = (t2) => {
                this.option.pos.x = t2.touches[0].clientX - this.option.pos.touch.x;
                this.option.pos.y = t2.touches[0].clientY - this.option.pos.touch.y;
                this.node.window.style["left"] = `${this.option.pos.x}px`;
                this.node.window.style["top"] = `${this.option.pos.y}px`;
            };

            const endTransition = () => {
                this.changeState(true);

                this.node.window.classList.add("lyra-ani-modal-position-reset");
                setTimeout(() => {
                    this.node.window.classList.remove("lyra-ani-modal-position-reset");
                }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);
                
                this.option.pos.x = 0;
                this.option.pos.y = 0;
                this.node.window.style["left"] = `${this.option.pos.x}px`;
                this.node.window.style["top"] = `${this.option.pos.y}px`;
                
                this.node.target.ontouchmove = null;
                this.node.target.ontouchend = null;
                this.node.target.ontouchcancel = null;
            };

            this.node.target.ontouchend = endTransition;

            this.node.target.ontouchcancel = endTransition;
        };

        this.node.handleBar.append(this.node.handleIcon);
        this.node.handleArea.append(this.node.handleBar);
        this.node.wrap.append(this.node.buttons);
        this.node.area.append(this.node.handleArea);
        this.node.area.append(this.node.wrap);
        this.node.window.append(this.node.windowEffect);
        this.node.window.append(this.node.area);
        this.node.backdrop.append(this.node.backdropEffect);
        this.node.main.append(this.node.backdrop);
        this.node.main.append(this.node.window);

        if (this.data.title) this.setTitle(this.data.title);
        if (this.data.content) this.setContent(this.data.content);
        if (this.data.thumbnail) this.setThumbnail(this.data.thumbnail);
        if (this.data.buttons.length) this.setButton(this.data.buttons);

        this.node.main.style["z-index"] = this.option.sort;
        lyra.ondisplay.modal[this.uid] = this; 
        // setStringChildrens(this.node.main);

        return this;
    };

    unsetID() {
        this.id = null;
        this.node.main.id = null;

        return this;
    };

    setID(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.id = x;
        this.node.main.id = x;

        return this;
    };

    unsetClass() {
        this.class = null;
        Array.from(this.node.main.classList).forEach(x => {
            this.node.main.classList.remove(x);
        });

        this.node.main.classList.add("lyra-modal");

        return this;
    };

    setClass(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.class = `${this.class ? `${this.class} ` : ""}${x}`;
        this.node.main.classList.add(x);

        return this;
    };

    unsetTitle() {
        this.data.title = null;
        if (this.node.title) {
            this.node.title.remove();
            this.node.title = null;
        };

        return this;
    };

    setTitle(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.node.title) {
            this.node.title = create("div", ".lyra-title");
            this.node.wrap.append(this.node.title);
        } else {
            this.node.title.innerText = "";
            this.node.title.removeAttribute("lyra-string");
        };

        this.data.title = x;
        this.node.title.setAttribute("lyra-string", this.data.title);
        setString(this.node.title);

        return this;
    };

    unsetContent() {
        this.data.content = null;
        if (this.node.content) {
            this.node.content.remove();
            this.node.content = null;
        };

        return this;
    };

    setContent(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.node.content) {
            this.node.content = create("div", ".lyra-content");
            this.node.wrap.append(this.node.content);
        } else {
            this.node.content.innerText = "";
            this.node.content.removeAttribute("lyra-string");
        };

        this.data.content = x;
        this.node.content.setAttribute("lyra-string", this.data.content);
        setString(this.node.content);

        return this;
    };
    
    unsetThumbnail() {
        if (this.node.thumbnailImg) this.node.thumbnailImg.remove();
        if (this.node.thumbnail) this.node.thumbnail.remove();

        this.node.thumbnail = null;
        this.node.thumbnailImg = null;
        this.data.thumbnail = null;

        return this;
    };

    setThumbnail(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.data.thumbnail = x;

        if (!this.node.thumbnailImg) this.node.thumbnailImg = create("img");
        if (!this.node.thumbnail) this.node.thumbnail = create("div", ".lyra-modal-thumbnail");
        this.node.thumbnailImg.src = this.data.thumbnail;
        this.node.thumbnail.append(this.node.thumbnailImg);
        this.node.wrap.append(this.node.thumbnail);

        return this;
    };

    unsetButtons() {
        this.data.buttons = [];
        Array.from(this.node.buttons.childrens).forEach(b => {
            b.remove();
        });

        return this;
    };

    setButton(b) {
        if (!b) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));

        if (b.constructor === Object) this.data.buttons.push(b);
        else if (b.constructor === Array) this.data.buttons = b;

        this.data.buttons.forEach(x => {
            const button = new LyraButton(x);
            let onclick = "";
            if (x["onclick"]) onclick += x["onclick"];
            if (x["closeModal"]) onclick += `;closeModal(${this.uid});`;
            if (onclick.length) button.node.main.setAttribute("onclick", onclick);
            this.node.buttons.append(button.node.main);
        });

        return this;
    };

    changeState(bool) {
        if (!bool.constructor) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (bool.constructor !== Boolean) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-A-BOOLEAN"));
        this.option.state = bool;

        this.node.target.style["cursor"] = this.option.state ? null : "move";
        this.node.handleBar.style["cursor"] = this.option.state ? null : "move";
        this.node.backdrop.style["opacity"] = this.option.state ? null : "0";
        this.node.area.style["opacity"] = this.option.state ? null : "0";

        this.option.state = this.option.state ? false : true;

        return this;
    };

    changeFixed(bool) {
        if (!bool.constructor) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (bool.constructor !== Boolean) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-A-BOOLEAN"));

        this.fixed = bool;

        return this;
    };

    show() {
        this.node.backdrop.classList.add("lyra-ani-window-hidden");
        this.node.backdrop.classList.add("lyra-ani-modal-transition-in");
        this.node.window.classList.add("lyra-ani-window-jumpup");
        this.node.window.classList.add("lyra-ani-modal-transition-in");

        this.node.target.append(this.node.main);

        setTimeout(() => {
            this.node.backdrop.classList.remove("lyra-ani-window-hidden");
            this.node.window.classList.remove("lyra-ani-window-jumpup");

            setTimeout(() => {
                this.node.window.classList.remove("lyra-ani-modal-transition-in");
            }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);
        }, lyra.path["PATH-LYRA-TIMEOUT-BUFFER"]);

        return this;
    };

    close() {
        if (this.option.fixed) {
            const alertWindow = new LyraAlert({ content: "이 창은 닫을 수 없습니다" });
            alertWindow.show();

            return this;
        };

        this.node.backdrop.classList.add("lyra-ani-window-hidden");
        this.node.window.classList.add("lyra-ani-modal-transition-in");
        this.node.window.classList.add("lyra-ani-window-jumpup");

        setTimeout(() => {
            this.node.target.removeChild(this.node.main);
        }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);

        return this;
    };

    destroy() {
        if (this.fixed) {
            const alertWindow = new LyraAlert({ content: "이 창은 닫을 수 없습니다" });
            alertWindow.show();

            return this;
        };

        this.node.main.remove();
        delete lyra.ondisplay.modal[this.mid];

        return;
    };
};

// 경고 메시지 클래스
class LyraAlert {
    constructor(param = {}) {
        if (param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));

        this.data = {
            content: param["content"] || null
        };
        this.node = {
            target: document.querySelector(lyra.path["PATH-LYRA-ALERT-AREA"]),
            main: create("div", ".lyra-alert"),
            effect: create("div", ".lyra-modal-background-effect"),
            content: create("div", ".lyra-alert-content", { string: this.data.content })
        };

        this.node.main.append(this.node.effect);
        this.node.main.append(this.node.content);

        setString(this.node.content);

        return this;
    };

    show() {
        this.node.main.classList.add("lyra-ani-modal-transition-in");
        this.node.main.classList.add("lyra-ani-window-hidden");
        this.node.main.classList.add("lyra-ani-window-jumpup");

        this.node.target.append(this.node.main);

        setTimeout(() => {
            this.node.main.classList.remove("lyra-ani-window-hidden");
            this.node.main.classList.remove("lyra-ani-window-jumpup");

            setTimeout(() => {
                this.close();
            }, lyra.path["PATH-LYRA-ALERT-TIMEOUT"]);
        }, lyra.path["PATH-LYRA-TIMEOUT-BUFFER"]);

        return this;
    };

    close() {
        this.node.main.classList.remove("lyra-ani-modal-transition-in");
        this.node.main.classList.add("lyra-ani-modal-transition-out");
        this.node.main.classList.add("lyra-ani-window-hidden");
        this.node.main.classList.add("lyra-ani-window-jumpup");

        setTimeout(() => {
            this.node.main.remove();
        }, lyra.path["PATH-LYRA-MODAL-ANIMATION-DURATION"]);

        return;
    };
};

// 기본 알림 클래스
class LyraNotification {
    constructor(param = {}) {
        if (param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));

        this.uid = getUniqueCode(lyra.ondisplay.notification);
        this.id = param["id"] || null;
        this.class = param["class"] || null;

        this.option = {
            autoClose: typeof param["autoClose"] !== "undefined" ? Boolean(param["autoClose"]) : true,
            timeout: parseInt(param["timeout"]) || lyra.path["PATH-LYRA-NOTIFICATION-DEFAULT-TIMEOUT"]
        };
        this.data = {
            title: param["title"] || null,
            content: param["content"] || null,
            thumbnail: param["thumbnail"] || null,
            buttons: ( param["buttons"] && param["buttons"].constructor === Array ) ? param["buttons"] : []
        };
        this.node = {
            target: document.querySelector(lyra.path["PATH-LYRA-NOTIFICATION-AREA"]),
            main: create("div", ".lyra-notification"),
            title: null,
            content: null,
            thumbnail: null,
            thumbnailImg: null,
            thumbnailBackdrop: null,
            buttons: null
        };

        if (this.data.title) this.setTitle(this.data.title);
        if (this.data.content) this.setContent(this.data.content);
        if (this.data.thumbnail) this.setThumbnail(this.data.thumbnail);
        if (this.data.buttons) this.setButton(this.data.buttons);

        lyra.ondisplay.notification[this.uid] = this;

        return this;
    };

    unsetID() {
        this.id = null;
        this.node.main.id = null;

        return this;
    };

    setID(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.id = x;
        this.node.main.id = x;

        return this;
    };

    unsetClass() {
        this.class = null;
        Array.from(this.node.main.classList).forEach(x => {
            this.node.main.classList.remove(x);
        });

        this.node.main.classList.add("lyra-modal");

        return this;
    };

    setClass(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        this.class = `${this.class ? `${this.class} ` : ""}${x}`;
        this.node.main.classList.add(x);

        return this;
    };

    unsetTitle() {
        this.data.title = null;
        if (this.node.title) {
            this.node.title.remove();
            this.node.title = null;
        };

        return this;
    };

    setTitle(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.node.title) {
            this.node.title = create("div", ".lyra-title");
            this.node.main.append(this.node.title);
        } else {
            this.node.title.innerText = "";
            this.node.title.removeAttribute("lyra-string");
        };

        this.data.title = x;
        this.node.title.setAttribute("lyra-string", this.data.title);
        setString(this.node.title);

        return this;
    };

    unsetContent() {
        this.data.content = null;
        if (this.node.content) {
            this.node.content.remove();
            this.node.content = null;
        };

        return this;
    };

    setContent(x) {
        if (!x) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
        if (x.constructor !== String) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));

        if (!this.node.content) {
            this.node.content = create("div", ".lyra-content");
            this.node.main.append(this.node.content);
        } else {
            this.node.content.innerText = "";
            this.node.content.removeAttribute("lyra-string");
        };

        this.data.content = x;
        this.node.content.setAttribute("lyra-string", this.data.content);
        setString(this.node.content);

        return this;
    };
    
    unsetThumbnail() {
        if (this.node.thumbnailBackdrop) this.node.thumbnailBackdrop.remove();
        if (this.node.thumbnailImg) this.node.thumbnailImg.remove();
        if (this.node.thumbnail) this.node.thumbnail.remove();

        this.node.thumbnail = null;
        this.node.thumbnailImg = null;
        this.node.thumbnailBackdrop = null;
        this.data.thumbnail = null;

        return this;
    };

    setThumbnail(url) {
        if (url.constructor !== String) throw Error(getString("ERROR-CLASS-PROVIDED-PARAMETER-IS-NOT-A-STRING"));

        this.node.thumbnail = create("div", ".lyra-notification-thumbnail-area");
        this.node.main.append(this.node.thumbnail);

        this.node.thumbnailImg = create("img", ".lyra-notification-thumbnail-main");
        this.node.thumbnailBackdrop = create("img", ".lyra-notification-thumbnail-backdrop");
        this.node.thumbnailImg.src = url;
        this.node.thumbnailBackdrop.src = url;

        this.data.thumbnail = url;
        this.node.thumbnail.append(this.node.thumbnailBackdrop);
        this.node.thumbnail.append(this.node.thumbnailImg);
        return this;
    };
    
    unsetButtons() {
        if (this.node.buttons) this.node.buttons.remove();
        this.node.buttons = null;

        this.data.buttons = [];
        Array.from(this.node.buttons.childrens).forEach(b => {
            b.remove();
        });

        return this;
    };

    setButton(b) {
        if (!b) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));

        if (b.constructor === Object) this.data.buttons.push(b);
        else if (b.constructor === Array) this.data.buttons = b;
        
        if (!this.node.buttons) this.node.buttons = create("div", ".lyra-notification-button-area");

        this.data.buttons.forEach(x => {
            const button = new LyraButton(x);
            if (!x["onclick"]) button.node.main.setAttribute("onclick", `closeNotification(${this.uid});`);
            this.node.buttons.append(button.node.main);
        });

        if (this.data.buttons.length&& !this.node.main.querySelectorAll(".lyra-notification-button-area").length) this.node.main.append(this.node.buttons);

        return this;
    };

    show() {
        this.node.main.classList.add("lyra-ani-notification-transition-in");
        this.node.main.classList.add("lyra-ani-notification-out");
        this.node.main.classList.add("lyra-ani-window-hidden");

        this.node.target.append(this.node.main);

        setTimeout(() => {
            this.node.main.classList.remove("lyra-ani-notification-out");
            this.node.main.classList.remove("lyra-ani-window-hidden");
        }, lyra.path["PATH-LYRA-TIMEOUT-BUFFER"]);

        return this;
    };

    close() {
        this.node.main.classList.remove("lyra-ani-notification-transition-in");
        this.node.main.classList.add("lyra-ani-notification-transition-out");
        this.node.main.classList.add("lyra-ani-notification-out");
        this.node.main.classList.add("lyra-ani-window-hidden");

        setTimeout(() => {
            this.node.main.remove();
            this.destroy();
        }, lyra.path["PATH-LYRA-NOTIFICATION-ANIMATION-DURATION"]);

        return this;
    };

    destroy() {
        delete lyra.ondisplay.notification[this.uid];
        return;
    };
};