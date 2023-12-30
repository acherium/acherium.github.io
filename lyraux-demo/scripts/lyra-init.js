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
        "PATH-LYRA-MODAL-ANIMATION-DURATION": 200,
        "PATH-LYRA-TIMEOUT-BUFFER": 30,
        "PATH-LYRA-MODAL-OFFSET": 110,
        "PATH-LYRA-WINDOW-OFFSET": 10,
        "PATH-LYRA-THEMES": [ "day", "night" ],
        "PATH-LYRA-BUTTON-DIRECTIONS": [ "horizontal", "vertical" ],
        "PATH-LYRA-BUTTON-COLORS": [ "default", "accent", "warning", "transparent", "red", "green", "blue" ]
    },
    information: {
        name: "LyraEngine for GitHub Pages",
        author: "Acherium",
        version: "1.0-dev"
    }
};

// 로딩 완료 후 개체에 코드별 문자열 할당
document.addEventListener("DOMContentLoaded", () => {
    setStringAll();
});