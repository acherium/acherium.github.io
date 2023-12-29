const body = document.querySelector("body");

const horizontalButton = new LyraButtonEnhanced({
    id: "#test-button-horizontal",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-HORIZONTAL",
    onclick: `alert(true);`
});

const verticalButton = new LyraButtonEnhanced({
    id: "#test-button-vertical",
    direction: "vertical",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-VERTICAL",
    onclick: `alert(true);`
});

const minimalButton1 = new LyraButtonEnhanced({
    id: "#test-button-minimal",
    color: "red",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-RED"
});

const minimalButton2 = new LyraButtonEnhanced({
    id: "#test-button-minimal",
    color: "green",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-GREEN"
});

const minimalButton3 = new LyraButtonEnhanced({
    id: "#test-button-minimal",
    color: "blue",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-BLUE"
});

const minimalButton4 = new LyraButtonEnhanced({
    id: "#test-button-minimal",
    color: "warning",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-WARNING"
});

const minimalButton5 = new LyraButtonEnhanced({
    id: "#test-button-minimal",
    color: "transparent",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-TRANSPARENT"
});

const minimalButton6 = new LyraButtonEnhanced({
    id: "#test-button-minimal",
    color: "transparent",
    icon: "none",
    name: "DEBUG-LYRA-TEST-BUTTON-DISABLED",
    disabled: "true"
});

body.append(horizontalButton.raw);
body.append(verticalButton.raw);
body.append(minimalButton1.raw);
body.append(minimalButton2.raw);
body.append(minimalButton3.raw);
body.append(minimalButton4.raw);
body.append(minimalButton5.raw);
body.append(minimalButton6.raw);