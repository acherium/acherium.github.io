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
    document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"./lyra/style.css\">");
})();