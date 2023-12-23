const body = document.querySelector("body");

const modalList = {
    "info": {
        "title": "Window",
        "content": "테스트",
        "buttons": [
            {
                "icon": "accept",
                "nametag": "확인",
                "onclick": null
            }
        ]
    },
    "theme-cycle-day": {
        "title": "테마 전환",
        "content": "테마를 라이트모드로 전환합니다.",
        "buttons": [
            {
                "icon": "accept",
                "nametag": "확인",
                "onclick": `location.href = "./index.html"`
            },
            {
                "icon": "deny",
                "nametag": "취소",
                "onclick": null
            }
        ]
    },
    "theme-cycle-night": {
        "title": "테마 전환",
        "content": "테마를 다크모드로 전환합니다.",
        "buttons": [
            {
                "icon": "accept",
                "nametag": "확인",
                "onclick": "cycleTheme();"
            },
            {
                "icon": "deny",
                "nametag": "취소",
                "onclick": null
            }
        ]
    }
}

function showModal(e) {
    const raw = modalList[e];
    const modal = document.createElement("div");
    modal.classList.add("lyra-modal")

    const modalBackground = document.createElement("div");
    modalBackground.classList.add("lyra-modal-background");
    modalBackground.classList.add("lyra-ani-window-fade");
    modalBackground.setAttribute("onclick", "closeModal(this.parentNode);");

    const modalArea = document.createElement("div");
    modalArea.classList.add("lyra-modal-area");
    modalArea.classList.add("lyra-ani-window-jumpup");

    const modalAreaMain = document.createElement("div");
    modalAreaMain.classList.add("lyra-modal-area-main");

    const modalWrap = document.createElement("div");
    modalWrap.classList.add("lyra-modal-wrap");

    const modalTitle = document.createElement("div");
    modalTitle.classList.add("lyra-title");
    modalTitle.innerText = raw.title;

    const modalContent = document.createElement("div");
    modalContent.classList.add("lyra-content");
    modalContent.innerText = raw.content;

    const modalButtonArea = document.createElement("div");
    modalButtonArea.classList.add("lyra-modal-button-area");

    raw.buttons.forEach(b => {
        const _button = document.createElement("div");
        _button.classList.add("lyra-button");
        _button.classList.add("lyra-button-horizontal");

        const _buttonCover = document.createElement("div");
        _buttonCover.classList.add("lyra-button-cover");

        const _buttonIcon = document.createElement("div");
        _buttonIcon.classList.add("lyra-icon");
        _buttonIcon.classList.add(`lyra-icon-${b.icon}`);

        const _buttonNametag = document.createElement("div");
        _buttonNametag.classList.add("lyra-button-nametag");
        _buttonNametag.innerText = b.nametag;

        if (b.onclick) {
            _button.setAttribute("onclick", `${b.onclick}closeModal(this.parentNode.parentNode.parentNode.parentNode.parentNode);`);
        } else {
            _button.setAttribute("onclick", "closeModal(this.parentNode.parentNode.parentNode.parentNode.parentNode);");
        };

        _button.append(_buttonCover);
        _button.append(_buttonIcon);
        _button.append(_buttonNametag);
        modalButtonArea.append(_button);
    });

    const modalGradient = document.createElement("div");
    modalGradient.classList.add("lyra-modal-backdrop");

    modalWrap.append(modalTitle);
    modalWrap.append(modalContent);
    modalWrap.append(modalButtonArea);
    modalAreaMain.append(modalWrap);
    modalArea.append(modalAreaMain);
    modalArea.append(modalGradient);
    modal.append(modalBackground);
    modal.append(modalArea);
    body.append(modal);

    setTimeout(() => {
        modalArea.classList.remove("lyra-ani-window-jumpup");
        modalBackground.classList.remove("lyra-ani-window-fade");
    }, 30);
};

function closeModal(e) {
    e.querySelector(".lyra-modal-area").classList.add("lyra-ani-window-jumpup");
    e.querySelector(".lyra-modal-background").classList.add("lyra-ani-window-fade");
    setTimeout(() => {
        body.removeChild(e);
    }, 200);
};


const stylesheetList = {
    "day": {
        "main": "./stylesheets/day/lyra-mainstyle.css",
        "palette": "./stylesheets/day/lyra-color-palette.css"
    },
    "night": {
        "main": "./stylesheets/night/lyra-mainstyle.css",
        "palette": "./stylesheets/night/lyra-color-palette.css"
    }
};

let themeMode = 0;

const stylesheet = document.querySelector("#style-main");
const palette = document.querySelector("#style-palette");

function cycleTheme() {
    body.classList.add("lyra-ani-transition");
    setTimeout(() => {
        body.classList.remove("lyra-ani-transition");
    }, 500);
    stylesheet.href = stylesheetList[themeMode ? "day" : "night"]["main"];
    palette.href = stylesheetList[themeMode ? "day" : "night"]["palette"];
    themeMode = themeMode ? 0 : 1;
    return 0;
};