const demo = () => {
    alert("Hello, world!");

    return 0;
};

const modaldemo = (i) => {
    const list = [
        {
            href: "./view/window/about.html",
            x: "20px",
            y: "20px",
            width: "450px",
            height: "372px",
            maximizable: false,
            resizable: false
        },
        {
            href: "./view/window/test.html",
            x: "50px",
            y: "50px",
            width: "250px",
            height: "100px",
            maximizable: false,
            resizable: false
        },
        {
            href: "./view/window/search.html",
            y: "80px",
            width: "100vw",
            maximizable: false,
            movable: false,
            resizable: false,
            borderless: true,
            blurclose: true
        }
    ];
    const m = new Window(list[i]);
    m.show();
};