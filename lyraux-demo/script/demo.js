const demo = () => {
    alert("Hello, world!");

    return 0;
};

const viewList = {
    "index": "./view/index.html",
    "main": "./view/main.html",
    "demo": "./view/demo.html",
    "demo-main": "./view/demo/main.html",
    "demo-buttons": "./view/demo/buttons.html",
    "demo-loading": "./view/demo/loading.html",
    "demo-theme": "./view/demo/theme.html"
};

Object.freeze(viewList);
view("#main", "demo");

const viewdemo = (node) => {
    document.querySelector(".view-list-active").classList.remove("view-list-active");
    node.classList.add("view-list-active");

    view("#demo-right", node.attributes["value"].value)

    return 0;
};