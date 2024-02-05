const demo = () => {
    alert("Hello, world!");

    return 0;
};

const modaldemo = (i) => {
    const list = [
        { href: "./view/window/about.html", maximizable: false, resizable: false },
        { href: "./view/window/test.html", maximizable: false, resizable: false }
    ];
    const m = new Window(list[i]);
    m.show();
};