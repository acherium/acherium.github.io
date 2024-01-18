const body = document.querySelector("body");

const testbutton1 = new LyraButton({
    name: "DEBUG-LYRA-TEST-MODAL-SHOW",
    onclick: `modal1.show();`
});
const modal1 = new LyraModal({
    title: "DEBUG-LYRA-LOREM-SHORT",
    content: "DEBUG-LYRA-LOREM-LONG",
    buttons: [
        {
            name: "STRING-BUTTON-OKAY"
        }
    ]
});


const testbutton2 = new LyraButton({
    name: "STRING-BUTTON-ABOUT-LYRA",
    icon: "lyra",
    onclick: `modal2.show();`
});
const modal2 = new LyraModal({
    title: "STRING-TITLE-ABOUT-LYRA",
    content: `${lyra.information.name}\n${lyra.information.author} 제작\n버전 ${lyra.information.version}`,
    thumbnail: "./assets/banners/banner-lyra.svg",
    buttons: [
        {
            name: "STRING-BUTTON-OKAY",
            closeModal: true
        }
    ]
});

body.append(testbutton1.node.main);
body.append(testbutton2.node.main);

const testbutton3 = new LyraButton({
    name: "DEBUG-LYRA-TEST-NOTIFICATION-SHORT",
    onclick: `showNotification("testnoti1");`
});
const notis = {
    testnoti1: {
        title: "test",
        content: "test",
        thumbnail: "./assets/banners/banner-lyra.svg",
        autoClose: false,
        buttons: [
            {
                name: "STRING-BUTTON-OKAY",
                color: "red"
            },
            {
                name: "alert",
                onclick: `alert(true);`
            }
        ]
    }
};

body.append(testbutton3.node.main);

function showNotification(x) {
    new LyraNotification(notis[x]).show();
};




const themeCycleButton = new LyraButton({
    name: `STRING-BUTTON-THEME-${lyra.theme ? "DAY" : "NIGHT"}`,
    icon: lyra.theme ? "day" : "night",
    onclick: "cycleThemeConfirm();"
});

function cycleThemeConfirm() {
    const themeModal = new LyraModal({
        title: `STRING-TITLE-CHANGE-${lyra.theme ? "DAY" : "NIGHT"}-MODE`,
        content: `STRING-CONTENT-CHANGE-${lyra.theme ? "DAY" : "NIGHT"}-MODE`
    });
    themeModal.setButton([
        {
            name: "STRING-BUTTON-OKAY",
            color: "accent",
            onclick: `cycleTheme();`,
            closeModal: true
        },
        {
            name: "STRING-BUTTON-CANCEL",
            closeModal: true
        }
    ])
    themeModal.show();
    return 0;
};

function cycleTheme() {
    changeTheme(lyra.theme ? "day" : "night");
    themeCycleButton.setName(`STRING-BUTTON-THEME-${lyra.theme ? "DAY" : "NIGHT"}`).setIcon(lyra.theme ? "day" : "night");
    return 0;
};

body.append(themeCycleButton.node.main);