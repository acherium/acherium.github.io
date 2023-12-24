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
};

const modalOndisplayList = {};
const notificationOndisplayList = [];

function showModal(e) {
    const id = Object.keys(modalOndisplayList).length ? parseInt(Object.keys(modalOndisplayList).pop()) + 1 : 0;

    const data = modalList[e];
    const buttons = [];

    data.buttons.forEach(x => {
        const button = new LyraButton("horizontal", `${x.icon}`, `${x.nametag}`);
        if (x.onclick) {
            button.setAttribute("onclick", `${x.onclick};modalOndisplayList[${id}].modal.close();`);
        } else {
            button.setAttribute("onclick", `modalOndisplayList[${id}].modal.close();`);
        };
        buttons.push(button);
    });

    const modal = new LyraModal(id, `${data.title}`, `${data.content}`, "body", buttons);
    modal.show(body);

    modalOndisplayList[id] = {
        id: id,
        modal: modal
    };
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

const notificationArea = document.querySelector("#lyra-notification-area");

function addNotification(t, c) {
    const notification = document.createElement("div");
    notification.classList.add("lyra-notification");
    notification.classList.add("lyra-ani-notification-out");
    notification.classList.add("lyra-ani-window-fade");

    const title = document.createElement("div");
    title.classList.add("lyra-title");
    title.innerText = `${t}`;

    const content = document.createElement("div");
    content.classList.add("lyra-content");
    content.innerText = `${c}`;

    const clearButton = new LyraButton("horizontal", "deny", "닫기")
    clearButton.setAttribute("onclick", "closeNotification(this.parentNode)");

    notification.append(title);
    notification.append(content);
    notification.append(clearButton);
    notificationArea.append(notification);

    let timeout = setTimeout(() => {
        closeNotification(notification, timeout);
    }, 5000);

    setTimeout(() => {
        notification.classList.add("lyra-ani-notification-transition-in");
        notification.classList.remove("lyra-ani-notification-out");
        notification.classList.remove("lyra-ani-window-fade");
    }, 30);

    return 0;
};

function closeNotification(n) {
    // clearTimeout(t);

    n.classList.add("lyra-ani-notification-transition-out");
    n.classList.remove("lyra-ani-notification-transition-in");
    n.classList.add("lyra-ani-notification-out");
    n.classList.add("lyra-ani-window-fade");

    setTimeout(() => {
        notificationArea.removeChild(n);
    }, 200);
};