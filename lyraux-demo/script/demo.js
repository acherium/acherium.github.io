const demo = () => {
    alert("Hello, world!");

    return 0;
};

const modaldemo = () => {
    const m = new Modal({
        href: "./view/window/test.html"
    });
    m.set();
    m.show();
};