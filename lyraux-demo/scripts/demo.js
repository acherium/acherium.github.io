const body = document.querySelector("body");

const buttonNotification = new LyraButton({
    id: "#test-button-horizontal",
    icon: "layer",
    name: "DEBUG-LYRA-TEST-MODAL-SHOW",
    onclick: `modal1.show();`
});
const modal1 = new LyraModal({
    title: "DEBUG-LYRA-LOREM-SHORT",
    content: "DEBUG-LYRA-LOREM-LONG",
    buttons: [
        {
            icon: "accept",
            name: "STRING-BUTTON-OKAY"
        }
    ]
});


const buttonLyraInformation = new LyraButton({
    id: "#test-button-horizontal",
    icon: "layer",
    name: "STRING-BUTTON-ABOUT-LYRA",
    onclick: `modal2.show();`
});
const modal2 = new LyraModal({
    title: "STRING-TITLE-ABOUT-LYRA",
    content: `${lyra.information.name}\n${lyra.information.author} 제작\n버전 ${lyra.information.version}`,
    thumbnail: "./assets/banners/banner-snapforgithub.svg",
    buttons: [
        {
            icon: "accept",
            name: "STRING-BUTTON-OKAY"
        }
    ]
});

body.append(buttonNotification.raw);
body.append(buttonLyraInformation.raw);