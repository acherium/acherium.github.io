const tooltip = document.querySelector("#name_tooltip");
const map = document.querySelector("#koreamap");
const mapShape = document.querySelector("#koreamap_shape");

let translateX = 160;
let translateY = 360;
let scale = 0.05;

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
    scale = scale + ( x ? 0.01 : -0.01 );
    mapShape.style.scale = scale;
    return 0;
};

map.onmousewheel = x => {
    mapSize(x.deltaY > 0 ? 0 : 1);
};

map.onmousedown = () => {
    map.onmousemove = x => {
        translateX += x.movementX * 1.5;
        translateY += x.movementY * 1.5;
        mapShape.style.translate = `${translateX}px ${translateY}px`;
    };

    map.onmouseup = () => {
        map.onmousemove = null;
    };
};





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
    console.log(x.value);
    x.style.fill = color[x.value];
};