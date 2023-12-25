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
        "title": "STRING-TITLE-CHANGE-NIGHT-MODE",
        "content": "STRING-CONTENT-CHANGE-NIGHT-MODE",
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

const notificationList = {
    "LOREM-SHORT": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-SHORT")
    },
    "LOREM-MEDIUM": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-MEDIUM")
    },
    "LOREM-LONG": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-LONG")
    },
    "LOREM-PERMANENT": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-LONG"),
        "autoClose": false,
        "buttons": [
            {
                button: {
                    type: "horizontal",
                    icon: "deny",
                    nametag: "닫기"
                },
            },
            {
                button: {
                    type: "horizontal",
                    icon: "none",
                    nametag: `alert("Hello, world!);`
                },
                action: `alert("Hello, world!");`
            }
        ]
    },
    "LOREM-IMAGE": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-MEDIUM"),
        "autoClose": false,
        "thumbnail": "./assets/banners/banner-snapforgithub.svg",
        "buttons": [
            {
                button: {
                    type: "horizontal",
                    icon: "accept",
                    nametag: getString("STRING-BUTTON-NOTIFICATION-OKAY")
                }
            }
        ]
    },
    "LOREM-VERTICAL-IMAGE": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-MEDIUM"),
        "autoClose": false,
        "thumbnail": "./assets/images/image-banner-vertical.png",
        "buttons": [
            {
                button: {
                    type: "horizontal",
                    icon: "accept",
                    nametag: getString("STRING-BUTTON-NOTIFICATION-OKAY")
                }
            }
        ]
    },
    "LOREM-HORIZONTAL-IMAGE": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-MEDIUM"),
        "autoClose": false,
        "thumbnail": "./assets/images/image-100px-horizontal.png",
        "buttons": [
            {
                button: {
                    type: "horizontal",
                    icon: "accept",
                    nametag: getString("STRING-BUTTON-NOTIFICATION-OKAY")
                }
            }
        ]
    },
    "LOREM-SMALL-IMAGE": {
        "title": getString("DEBUG-LYRA-TEST-NOTIFICATION-TITLE"),
        "content": getString("DEBUG-LYRA-LOREM-MEDIUM"),
        "autoClose": false,
        "thumbnail": "./assets/images/image-100px.png",
        "buttons": [
            {
                button: {
                    type: "horizontal",
                    icon: "accept",
                    nametag: getString("STRING-BUTTON-NOTIFICATION-OKAY")
                }
            }
        ]
    }
};

function showNotification(target) {
    const raw = notificationList[target];
    const notification = new LyraNotification(raw);
    notification.show();
    return 0;
};

function closeNotification(target) {
    lyra.ondisplay.notification[target].close();
    return 0;
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