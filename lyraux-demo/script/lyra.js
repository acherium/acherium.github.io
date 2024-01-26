const view = (target, view) => {
    if (!target || target.constructor !== String) throw Error(1);
    if (!document.querySelector(target)) throw Error(2);
    if (!viewList[view]) throw Error(3);

    const area = document.querySelector(target);
    const filter = [ "#text", "#comment", "SCRIPT" ];
    clearNode(target);
    
    fetch(viewList[view]).then((res) => {
        res.text().then((html) => {
            let dom = new DOMParser().parseFromString(html, "text/html");
            dom = dom.body;

            Array.from(dom.childNodes).filter((node) => !filter.includes(node.nodeName)).forEach((node) => {
                console.log(node);
                area.append(node);
            });
        });
    });

    return 0;
};

const clearNode = (target) => {
    Array.from(document.querySelector(target).childNodes).forEach((node) => {
        node.remove();
    });

    return 0;
};