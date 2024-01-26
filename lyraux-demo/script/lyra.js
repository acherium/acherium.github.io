const view = (target) => {
    if (!viewList[target]) throw Error();

    const main = document.querySelector("#main");
    const filter = [ "#text", "#comment", "SCRIPT" ];
    
    fetch(viewList[target]).then((res) => {
        res.text().then((html) => {
            let dom = new DOMParser().parseFromString(html, "text/html");
            dom = dom.body;

            Array.from(main.childNodes).forEach((x) => {
                x.remove();
            });

            Array.from(dom.childNodes).filter((x) => !filter.includes(x.nodeName)).forEach((x) => {
                main.append(x);
            });
        });
    });
};