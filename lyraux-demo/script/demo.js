const demo = () => {
    alert("Hello, world!");

    return 0;
};

const modaldemo = () => {
    const m = new Window({
        href: "./view/window/about.html"
    });
    m.show();
};