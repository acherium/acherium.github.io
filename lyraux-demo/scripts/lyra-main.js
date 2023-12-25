// LyraUX 설정값
const lyra = {
    language: "ko-KR",
    theme: 0
};

// 언어별 문자열을 코드 값에 따라 설정하는 함수들
// 특정 코드에 해당하는 문자열을 가져오는 함수
function getString(target) {
    const stringTable = lyraStrings[lyra.language] ? lyraStrings[lyra.language] : false;
    const string = stringTable ? ( stringTable[target] || target ) : target;
    return string;
};

// 특정 대상 개체의 innerText값을 대상에 지정된 코드 값에 따라 설정하는 함수
function setString(target) {
    if (!target) throw Error(getString("ERROR-STRING-PARSER-INVALID-TARGET"));
    const code = target.attributes["lyra-string"];
    if (!code) return;
    const string = getString(code.value);
    target.innerText = string;
    return 0;
};

// 특정 대상의 자손 개체들의 값을 각 대상의 코드 값에 따라 설정하는 함수
function setStringChildrens(target) {
    if (!target) throw Error(getString("ERROR-STRING-PARSER-INVALID-TARGET"));
    const childrens = Array.from(target.querySelectorAll("*")).filter(x => x.attributes["lyra-string"]);
    childrens.forEach(x => {
        setString(x);
    });
    return 0;
};

// 페이지 내 코드 값을 가진 모든 개체의 문자열을 지정된 코드 값에 따라 설정하는 함수
function setStringAll() {
    const target = Array.from(document.querySelectorAll("*")).filter(x => x.attributes["lyra-string"]);
    target.forEach(x => {
        setString(x);
    });
    return 0;
};

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
        if (id.constructor !== Number) {
            throw Error(getString("ERROR-CLASS-INVALID-ID"));
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
// class LyraNotification{
//     constructor(id, param) {
//         if (id.constructor !== Number) {
//             throw Error("invalid id");
//         };
//     };
// };