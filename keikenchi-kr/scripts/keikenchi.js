const tooltip = document.querySelector("#name_tooltip");
const map = document.querySelector("#koreamap");
const mapShape = document.querySelector("#koreamap_shape");

const xposOrigin = 200;
const yposOrigin = 360;
const scaleOrigin = 0.045;
let xpos = xposOrigin;
let ypos = yposOrigin;
let scale = scaleOrigin;

let xposOriginLast = 0;
let yposOriginLast = 0;
let xposLast = 0;
let yposLast = 0;

document.querySelectorAll("path").forEach(x => {
    x.addEventListener("mouseover", () => {
        tooltip.style.opacity = 1;
        tooltip.innerText = REGIONS[x.id] ? REGIONS[x.id] + `\n${x.id}` : x.id;
    });

    x.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
        tooltip.innerText = "";
    });
});

document.addEventListener("mousemove", x => {
    const a = x.clientX + 12 + "px";
    const b = x.clientY + 12 + "px";
    tooltip.style.left = a;
    tooltip.style.top = b;
});

function mapSize(x) {
    if (!x && scale - 0.01 <= 0) return 0;
    scale = scale + ( x ? 0.01 : -0.01 );
    mapShape.style.scale = scale;
    return 0;
};

function mapViewReset() {
    xpos = xposOrigin;
    ypos = yposOrigin;
    scale = scaleOrigin;
    mapShape.style.scale = scale;
    mapShape.style.translate = `${xpos}px ${ypos}px`;
    return 0;
};

map.onwheel = x => {
    mapSize(x.deltaY > 0 ? 0 : 1);
};

map.onmousedown = () => {
    map.onmousemove = x => {
        xpos += x.movementX * 1.5;
        ypos += x.movementY * 1.5;
        mapShape.style.translate = `${xpos}px ${ypos}px`;
    };

    map.onmouseup = () => {
        map.onmousemove = null;
    };
};

map.ontouchstart = x => {
    xposOriginLast = parseInt(mapShape.style.translate.split(" ")[0].split("px")[0]);
    yposOriginLast = parseInt(mapShape.style.translate.split(" ")[1].split("px")[0]);
    xposLast = x.touches[0].clientX;
    yposLast = x.touches[0].clientY;
};

map.ontouchmove = x => {
    xpos = xposOriginLast - ( xposLast - x.touches[0].clientX );
    ypos = yposOriginLast - ( yposLast - x.touches[0].clientY );
    mapShape.style.translate = `${xpos}px ${ypos}px`;
};

mapViewReset();





// 이전 코드
const nameTitle = document.querySelector("#name");
const debugInput = document.querySelector("#debug_input");

document.querySelectorAll(".area").forEach(x => {
    x.addEventListener("mouseover", () => {
        nameTitle.innerText = REGIONS[x.id] ? REGIONS[x.id] : x.id;
    });
});


// 디버깅용
const doCheckCode = () => {
    const x = debugInput.value;
    nameTitle.innerText = REGIONS[x] ? REGIONS[x] : x;
};

document.onkeydown = x => {
    if (debugInput === document.activeElement && x.keyCode === 13) {
        doCheckCode();
    };
};

// 초기화
document.querySelectorAll(".area").forEach(x => {
    x.value = "0";
    x.addEventListener("click", () => {
        doChangeColor(x);
    });
});

const color = {
    0: "white",
    1: "yellow",
    2: "orange",
    3: "hotpink",
    4: "red"
};

const doChangeColor = (x) => {
    const i = parseInt(x.value);
    x.value = ( i >= Object.values(color).length - 1? 0 : i + 1 );
    x.style.fill = color[x.value];
};