// LyraUX 설정값
const lyra = {
    language: "ko-KR",
    theme: 0,
    ondisplay: {
        window: {},
        modal: {},
        notification: {}
    },
    path: {
        "PATH-LYRA-NOTIFICATION-AREA": "#lyra-notification-area",
        "PATH-LYRA-NOTIFICATION-DEFAULT-TIMEOUT": 5000,
        "PATH-LYRA-NOTIFICATION-ANIMATION-DURATION": 200,
        "PATH-LYRA-ALERT-AREA": "#lyra-alert-area",
        "PATH-LYRA-MODAL-ANIMATION-DURATION": 200,
        "PATH-LYRA-TIMEOUT-BUFFER": 30,
        "PATH-LYRA-MODAL-OFFSET": 110,
        "PATH-LYRA-WINDOW-OFFSET": 10,
        "PATH-LYRA-THEMES": [ "day", "night" ],
        "PATH-LYRA-BUTTON-DIRECTIONS": [ "horizontal", "vertical" ],
        "PATH-LYRA-BUTTON-COLORS": [ "default", "accent", "warning", "transparent", "red", "green", "blue" ],
        "PATH-LYRA-ALERT-TIMEOUT": 5000
    },
    information: {
        name: "LyraEngine for GitHub Pages",
        author: "Acherium",
        version: "1.0-dev"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 로딩 완료 후 개체에 코드별 문자열 할당
    setStringAll();

    // 필수 알림 영역, 경고 영역 생성
    document.querySelector("body").append(create("div", "#lyra-notification-area"));
    document.querySelector("body").append(create("div", "#lyra-alert-area"));

    // 오류 발생 시 화면에 표시
    window.onerror = (event, source, lineno, colno, error) => {
        const message = `${event} @ ${source.split("/").pop()}`;
        const errorAlert = new LyraAlert({ content: message });
        errorAlert.show();
    };
});