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

function create(type, value = "", param) {
    if (!type) throw Error("ERROR-COMMON-UNDEFINED-TYPE");
    // if (!value) throw Error(getString("ERROR-COMMON-UNDEFINED-PARAMETER"));
    if (value.constructor !== String) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-A-STRING"));
    if (param && param.constructor !== Object) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-AN-OBJECT"));
    if (param && Object.values(param).filter(x => x).filter(x => x.constructor !== String).length) throw Error(getString("ERROR-COMMON-PARAMETER-IS-NOT-A-STRING"));

    const result = document.createElement(`${type}`);
    value.split(/ +/g).forEach(x => {
        if (x.startsWith("#")) {
            result.id = x.substring(1);
        } else if (x.startsWith(".")) {
            result.classList.add(x.substring(1));
        };
    });

    if (param) {
        if (param["string"]) result.setAttribute("lyra-string", param["string"]);
        if (param["description"]) result.setAttribute("lyra-description", param["description"]);
        if (param["alt"]) result.setAttribute("alt", param["alt"]);
        if (param["onclick"]) result.setAttribute("onclick", param["onclick"]);
        if (param["disabled"]) result.setAttribute("disabled", "true");
    };

    return result;
};

// 알림창 개체 만들고 표시하는 함수
function showNotification(target) {
    const raw = notificationList[target];
    const notification = new LyraNotification(raw);
    notification.show();
    return 0;
};

// 특정 알림창 닫는 함수
function closeNotification(target) {
    lyra.ondisplay.notification[target].close();
    return 0;
};

// 특정 배열에 대한 새 고유 코드값을 생성하는 함수
// 키가 숫자 ID로 지정되어 오름차순으로 저장된 객체를 대상으로 함
// 목록 속 마지막 객체의 ID값의 +1을 반환, 객체가 없는 빈 목록이면 0을 반환
function getUniqueCode(list) {
    return Object.keys(list).length ? parseInt(Object.keys(list)[Object.keys(list).length - 1]) + 1 : 0;
};

// CSS 값에서 숫자만 추출하는 함수
// 값이 비어있으면 0을 반환
function getValue(x) {
    const r = x.length ? parseInt(`${x}`.split(/\D*/g).join("")) : 0;
    return r;
};

// 모달 관련 함수
function showModal(id) {
    lyra.ondisplay.modal[id].show();
    return 0;
};

function closeModal(id) {
    lyra.ondisplay.modal[id].close();
    return 0;
};

// 테마 관련 함수
function changeTheme(name) {
    if (!lyra.path["PATH-LYRA-THEMES"].includes(name)) throw Error(getString("ERROR-COMMON-INVALID-PARAMETER"));
    
    lyra.theme = lyra.path["PATH-LYRA-THEMES"].indexOf(name);
    console.log(lyra.theme);
    applyTheme();

    return 0;
};

function applyTheme() {
    document.querySelector("body").classList.add("lyra-ani-theme-transition");
    document.querySelector("#style-palette").href = `./stylesheets/palette/lyra-palette-${lyra.path["PATH-LYRA-THEMES"][lyra.theme]}.css`;
    setTimeout(() => {
        document.querySelector("body").classList.remove("lyra-ani-theme-transition");
    }, lyra.path["PATH-LYRA-THEME-TRANSITION-DURATION"]);

    return 0;
};