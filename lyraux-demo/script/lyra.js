const view = (target) => {
    if (!viewList[target]) throw Error();

    const main = document.querySelector("#main");
    const filter = [ "#text", "#comment", "SCRIPT" ];
    clearMain();
    
    fetch(viewList[target]).then((res) => {
        res.text().then((html) => {
            let dom = new DOMParser().parseFromString(html, "text/html");
            dom = dom.body;

            Array.from(dom.childNodes).filter((node) => !filter.includes(node.nodeName)).forEach((node) => {
                main.append(node);
            });
        });
    });

    return 0;
};

const clearMain = () => {
    Array.from(document.querySelector("#main").childNodes).forEach((node) => {
        node.remove();
    });

    return 0;
};