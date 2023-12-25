// 버튼 클래스
class LyraButton {
    constructor(type, icon, nametag, alt) {
        const _types = [ "vertical", "horizontal", "minimal" ];

        if (!_types.includes(type)) {
            throw Error("invalid type");
        };
        if (!icon) {
            throw Error("no icon");
        };
        if (!nametag) {
            throw Error("no nametag");
        };

        const _button = create("div", [ ".lyra-button", `.lyra-button-${type}` ]);
        const _cover = create("div", ".lyra-button-cover");
        const _icon = create("div", [ ".lyra-icon", `.lyra-icon-${icon}` ]);
        const _nametag = create("div", ".lyra-button-nametag");
        _nametag.innerText = nametag;

        if (alt) _button.setAttribute("alt", alt);

        _button.append(_cover);
        _button.append(_icon);
        _button.append(_nametag);
        return _button;
    };
};

// 기본 모달 윈도우 클래스
class LyraModal {
    constructor(id, title, content, target, buttons) {
        if (id.constructor !== Number) throw Error(getString("ERROR-CLASS-INVALID-ID"));
        if (!title) throw Error(getString("ERROR-MODAL-UNDEFINED-TITLE"));
        if (!content) throw Error(getString("ERROR-MODAL-UNDEFINED-CONTENT"));
        if (!target) throw Error(getString("ERROR-MODAL-UNDEFINED-TARGET"));
        
        if (!document.querySelector(target)) throw Error(getString("ERROR-MODAL-INVALID-TARGET"));
        const _target = document.querySelector(target);

        if (buttons && buttons.constructor !== Array) throw Error(getString("ERROR-MODAL-PROVIDED-BUTTON-LIST-IS-NOT-AN-ARRAY"));

        const _modal = create("div", ".lyra-modal");
        const _background = create("div", [ ".lyra-modal-background", ".lyra-ani-window-fade" ]);
        const _area = create("div", [ ".lyra-modal-area", ".lyra-ani-window-jumpup" ]);
        const _main = create("div", ".lyra-modal-area-main");
        const _wrap = create("div", ".lyra-modal-wrap");
        const _title = create("div", ".lyra-title");
        const _content = create("div", ".lyra-content");
        const _buttonArea = create("div", ".lyra-modal-button-area");
        const _gradient = create("div", ".lyra-modal-backdrop");

        _background.setAttribute("onclick", `modalOndisplayList[${id}].modal.close();`);
        _title.setAttribute("lyra-string", `${title}`);
        _content.setAttribute("lyra-string", `${content}`);

        if (buttons) {
            buttons.forEach(x => {
                _buttonArea.append(x);
            });
        };

        _wrap.append(_title);
        _wrap.append(_content);
        _wrap.append(_buttonArea);
        _main.append(_wrap);
        _area.append(_gradient);
        _area.append(_main);
        _modal.append(_background);
        _modal.append(_area);

        _modal.style["z-index"] = id + 1;
        setStringChildrens(_modal);

        this.id = id;
        this.raw = _modal;
        this.background = _background;
        this.area = _area;
        this.main = _main;
        this.wrap = _wrap;
        this.title = _title;
        this.content = _content;
        this.buttons = _buttonArea;
        this.gradient = _gradient;
        this.target = {
            name: target,
            raw: _target
        };

        return this;
    };

    show() {
        this.target.raw.append(this.raw);

        setTimeout(() => {
            this.area.classList.remove("lyra-ani-window-jumpup");
            this.background.classList.remove("lyra-ani-window-fade");
        }, 30);

        return 0;
    };

    close() {
        this.area.classList.add("lyra-ani-window-jumpup");
        this.background.classList.add("lyra-ani-window-fade");

        setTimeout(() => {
            this.target.raw.removeChild(this.raw);
            delete modalOndisplayList[this.id];
        }, 200);

        return 0;
    }
};

// 기본 알림 개체 클래스
class LyraNotification{
    constructor(param) {
        const _list = Object.keys(lyra.ondisplay.notification);
        const _id = _list.length ? parseInt(_list[_list.length - 1]) + 1 : 0;

        if (param && param.constructor !== Object) throw Error(getString("ERROR-CLASS-PROVIDED-PARAMETER-IS-NOT-AN-OBJECT"));

        if (!document.querySelector(lyra.path["PATH-DOM-NOTIFICATION-AREA"])) throw Error(getString("ERROR-NOTIFICATION-AREA-IS-NOT-EXIST"));
        const _target = document.querySelector(lyra.path["PATH-DOM-NOTIFICATION-AREA"]);

        const _notification = create("div", [ ".lyra-notification", ".lyra-ani-notification-out", ".lyra-ani-window-fade" ]);
        const _title = create("div", ".lyra-title");
        const _content = create("div", ".lyra-content");
        const _thumbnail = create("div", ".lyra-notification-thumbnail");
        const _buttonArea = create("div", ".lyra-notification-button-area");

        _notification.append(_thumbnail);
        _notification.append(_title);
        _notification.append(_content);
        _notification.append(_buttonArea);

        this.id = _id;
        this.raw = _notification;
        this.autoClose = true;
        this.timeout = lyra.path["PATH-DOM-NOTIFICATION-DEFAULT-TIMEOUT"];
        this.title = {
            value: null,
            raw: _title
        };
        this.content = {
            value: null,
            raw: _content
        };
        this.thumbnail = {
            value: null,
            raw: _thumbnail
        };
        this.buttons = {
            values: [],
            area: _buttonArea
        };
        this.target = {
            name: lyra.path["PATH-DOM-NOTIFICATION-AREA"],
            raw: _target
        };

        if (param) {
            if (typeof param["title"] !== "undefined") this.setTitle(param["title"]);
            if (typeof param["content"] !== "undefined") this.setContent(param["content"]);
            if (typeof param["autoClose"] !== "undefined") this.setAutoClose(param["autoClose"]);

            if (typeof param["buttons"] !== "undefined") {
                if (param["buttons"].constructor !== Array) throw Error(getString("ERROR-NOTIFICATION-PROVIDED-BUTTON-LIST-IS-NOT-AN-ARRAY"));
                param["buttons"].forEach(x => {
                    this.addButton(x);
                });
            };
        };

        lyra.ondisplay.notification[this.id] = this;
        
        return this;
    };

    unsetTitle() {
        this.title.value = null;
        this.title.raw.innerText = "";
        return this;
    };

    setTitle(string) {
        if (string.constructor !== String) throw Error(getString("ERROR-CLASS-PROVIDED-PARAMETER-IS-NOT-A-STRING"));
        this.title.value = string;
        this.title.raw.innerText = string;
        return this;
    };

    unsetContent() {
        this.content.value = null;
        this.content.raw.innerText = "";
        return this;
    };

    setContent(string) {
        if (string.constructor !== String) throw Error(getString("ERROR-CLASS-PROVIDED-PARAMETER-IS-NOT-A-STRING"));
        this.content.value = string;
        this.content.raw.innerText = string;
        return this;
    };

    setAutoClose(bool) {
        if (bool.constructor !== Boolean) throw Error(getString("ERROR-CLASS-PROVIDED-PARAMETER-IS-NOT-A-BOOLEAN"));
        this.autoClose = bool;
        return this;
    };

    addButton(param) {
        if (!param) throw Error(getString("ERROR-NOTIFICATION-NO-BUTTON-DATA"));
        if (!param["button"]) throw Error(getString("ERROR-NOTIFICATION-INVALID-BUTTON-DATA"));
        const raw = param.button;

        if (param["action"] && param["action"].constructor !== String) throw Error(getString("ERROR-NOTIFICATION-INVALID-BUTTONS-DATA"));
        raw.setAttribute("onclick", ( param["action"] || `closeNotification(${this.id});` ));

        this.buttons.values.push(raw);
        this.buttons.area.append(raw);
        
        return this;
    }

    show() {
        this.target.raw.append(this.raw);
        setTimeout(() => {
            this.raw.classList.add("lyra-ani-notification-transition-in");
            this.raw.classList.remove("lyra-ani-notification-out");
            this.raw.classList.remove("lyra-ani-window-fade");
        }, lyra.path["PATH-LYRA-TIMEOUT-BUFFER"]);

        if (this.autoClose) {
            setTimeout(() => {
                this.close();
            }, this.timeout);
        };
        return this;
    };

    close() {
        setTimeout(() => {
            this.raw.classList.remove("lyra-ani-notification-transition-in");
            this.raw.classList.add("lyra-ani-notification-transition-out");
            this.raw.classList.add("lyra-ani-notification-out");
            this.raw.classList.add("lyra-ani-window-fade");

            setTimeout(() => {
                this.raw.remove();
                this.destroy();
            }, 200);
        }, lyra.path["PATH-LYRA-TIMEOUT-BUFFER"]);
        return this;
    };

    destroy() {
        delete lyra.ondisplay.notification[this.id];
        return;
    };
};