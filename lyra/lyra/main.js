const __lyra = {
    dir: document.currentScript.src.split("/").slice(0, -1).join("/")
};

function freeze(obj) {
    for (const key in obj) {
        const value = obj[key];
        if (value && typeof value === "object") freeze(value);
    };
    Object.freeze(obj);
    return;
};
function $(selectors, $target=document) {
    return $target.querySelector(selectors);
};
function $all(selectors, $target=document) {
    return $target.querySelectorAll(selectors);
};
function $create(tag, params = {}) {
    const _$res = document.createElement(tag);
    for (const _i in params) {
        if (_i === "id") _$res.id = params[_i];
        else if (_i === "class") _$res.className = params[_i].join(" ");
        else if (_i === "text") _$res.innerText = params[_i];
        else if (_i === "html") _$res.innerHTML = params[_i];
        else _$res[_i] = params[_i];
    };
    return _$res;
};
function $append($element, $target = document.body) {
    $target.append($element);
    return $target;
};

(() => {
    document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${__lyra.dir}/style.css">`);
    if (!Array.from($all("link")).find(($x) => $x.rel === "icon")) {
        document.head.insertAdjacentHTML("beforeend", `<link rel="icon" href="${__lyra.dir}/assets/essentials/favicon.svg" type="image/x-icon">`);
    };
})();
document.addEventListener("DOMContentLoaded", () => {
    freeze(__lyra);
});