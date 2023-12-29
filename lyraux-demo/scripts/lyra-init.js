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
        "PATH-DOM-NOTIFICATION-AREA": "#lyra-notification-area",
        "PATH-DOM-NOTIFICATION-DEFAULT-TIMEOUT": 5000,
        "PATH-LYRA-TIMEOUT-BUFFER": 30,
        "PATH-LYRA-MODAL-OFFSET": 110,
        "PATH-LYRA-WINDOW-OFFSET": 10,
        "PATH-LYRA-THEMES": [ "day", "night" ],
        "PATH-LYRA-BUTTON-DIRECTIONS": [ "horizontal", "vertical" ],
        "PATH-LYRA-BUTTON-COLORS": [ "default", "accent", "warning", "transparent", "red", "green", "blue" ]
    }
};

// 로딩 완료 후 개체에 코드별 문자열 할당
document.addEventListener("DOMContentLoaded", () => {
    setStringAll();
});