// Element 생성과 클래스/ID 지정을 한 번에 하는 함수
function create(type, param) {
    if (!type) {
        throw Error("no type");
    };

    const _result = document.createElement(`${type}`);

    if (param && param.constructor === Array) {
        param.forEach(x => {
            if (`${x}`.startsWith("#")) {
                _result.id = `${x}`.substring(1);
            } else if (`${x}`.startsWith(".")) {
                _result.classList.add(`${x}`.substring(1));
            } else {
                throw Error("invalid selector");
            };
        });
    } else {
        if (`${param}`.startsWith("#")) {
            _result.id = `${param}`.substring(1);
        } else if (`${param}`.startsWith(".")) {
            _result.classList.add(`${param}`.substring(1));
        } else {
            throw Error("invalid selector");
        };
    };

    return _result;
};

// LyraUX 버튼 클래스
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

// LyraUX 기본 모달 윈도우 클래스
class LyraModal {
    constructor(id, title, content, target, buttons) {
        if (id.constructor !== Number) {
            throw Error("invalid id");
        };
        if (!title) {
            throw Error("no title");
        };
        if (!content) {
            throw Error("no content");
        };
        if (!target) {
            throw Error("no target selected");
        };
        
        const _target = document.querySelector(target);
        if (!_target) {
            throw Error("invalid target selected");
        };

        if (buttons && buttons.constructor !== Array) {
            throw Error("parameter buttons type is not an array");
        };

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
        _title.innerText = `${title}`;
        _content.innerText = `${content}`;

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