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
    thumbnail: "./assets/banners/banner-snapforgithub.svg",
    buttons: [
        {
            name: "STRING-BUTTON-OKAY"
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