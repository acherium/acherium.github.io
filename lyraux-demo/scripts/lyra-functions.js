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
    } else if (param && param.constructor === String) {
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