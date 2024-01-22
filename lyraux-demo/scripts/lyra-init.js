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
        "PATH-LYRA-THEMES": [ "day", "night" ],
        "PATH-LYRA-THEME-TRANSITION-DURATION": 300,
        "PATH-LYRA-NOTIFICATION-AREA": "#lyra-notification-area",
        "PATH-LYRA-NOTIFICATION-DEFAULT-TIMEOUT": 5000,
        "PATH-LYRA-NOTIFICATION-ANIMATION-DURATION": 200,
        "PATH-LYRA-ALERT-AREA": "#lyra-alert-area",
        "PATH-LYRA-MODAL-ANIMATION-DURATION": 200,
        "PATH-LYRA-TIMEOUT-BUFFER": 30,
        "PATH-LYRA-MODAL-OFFSET": 110,
        "PATH-LYRA-WINDOW-OFFSET": 10,
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

    // 툴팁 생성
    const tooltipArea = create("div", "#lyra-description");
    const tooltip = create("div", "#lyra-description-main");
    tooltipArea.append(tooltip);

    tooltipArea.style["top"] = "0px";
    tooltipArea.style["left"] = "0px";
    // tooltipArea.style["opacity"] = "0";

    tooltipArea.append(create("div", "#lyra-description-backdrop"));
    tooltipArea.append(tooltip);
    document.querySelector("body").append(tooltipArea);

    function openTooltip(content) {
        tooltip.innerText = `${content}`;
        tooltipArea.classList.remove("lyra-ani-tooltip-fade-out");
        tooltipArea.classList.add("lyra-ani-tooltip-fade-in");
        return;
    };

    function closeTooltip() {
        tooltipArea.classList.remove("lyra-ani-tooltip-fade-in");
        tooltipArea.classList.add("lyra-ani-tooltip-fade-out");
    };

    document.onpointerover = (e) => {
        if (e.target.attributes["lyra-description"]) {
            openTooltip(e.target.attributes["lyra-description"].value);
        } else {
            if (!tooltip.innerText.length) return;
            closeTooltip();
        };
    };

    document.onpointermove = (e) => {
        tooltipArea.style["top"] = `${e.clientY + 20}px`;
        tooltipArea.style["left"] = `${e.clientX + 20}px`;
    };

    document.onclick = () => {
        closeTooltip();
    };

    // 오류 발생 시 화면에 표시
    window.onerror = (event, source, lineno, colno, error) => {
        const message = `${event} @ ${source.split("/").pop()}`;
        const errorAlert = new LyraAlert({ content: message });
        errorAlert.show();
    };
});