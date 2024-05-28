(() => {
    const LYRA = {
        name: "Trickcal CG Scene Generator",
        author: "Acherium",
        contact: "acherium@pm.me",
        version: "1056",
        date: "24-05-28",
        watermark: false,
        isBeta: true
    };
    const SIZEMIN = 32;
    const DATATEMPLATE = {
        version: 2,
        strings: {
            name: "버터",
            content: "나오라고.",
            contentRaw: "나오라고.",
            select: [
                "선택 1",
                "선택 2",
                "선택 3"
            ]
        },
        area: {
            width: 0,
            height: 0
        },
        values: {
            size: 0,
            style: 0,
            color: "EEC375",
            colorId: 18
        },
        toggles: {
            namearea: true,
            select: false,
            photoButtons: true,
            boxCenter: false
        },
        imageLayer: {
            background: "",
            attachments: []
        },
        thumbnail: ""
    };
    THUMBNAIL_QUEUE_INTERVAL = 3000;
    const PALETTE = {
        "player": [ "player", "교주", "FBAC26" ],
        "youngchun": [ "youngchun", "영춘", "768964" ],
        "sub": [ "sub", "게스트", "A1AD88" ],
        
        "partition0": [ "partition", "요정" ],
        "chloe": [ "chloe", "클로에", "BB3626" ],
        "erpin": [ "erpin", "에르핀", "F09D7D" ],
        "ner": [ "ner", "네르", "847592" ],
        "ashur": [ "ashur", "에슈르", "E6838D" ],
        "kyarot": ["kyarot",  "캬롯", "F49C62" ],
        "shoupan": [ "shoupan", "슈팡", "FFE182" ],
        "marie": [ "marie", "마리", "E7BBBB" ],
        "mayo": [ "mayo", "마요", "A0B5D5" ],
    
        "partition1": [ "partition", "수인" ],
        "epica": [ "epica", "에피카", "BDD2F0" ],
        "diana": [ "diana", "디아나", "C19079" ],
        "tig": [ "tig", "티그", "9AAABF" ],
        "rufo": [ "rufo", "루포", "F69E72" ],
        "kommy": [ "kommy", "코미", "FFA8A7" ],
        "butter": [ "butter", "버터", "EEC375" ],
        "beni": [ "beni", "베니", "64443E" ],
        "mago": [ "mago", "마고", "B6BBCB" ],
        "bana": [ "bana", "바나", "EDB983" ],
    
        "partition2": [ "partition", "엘프" ],
        "ed": [ "ed", "이드", "808191" ],
        "llels": [ "llels", "나타", "635966" ],
        "elena": ["elena",  "엘레나", "DA9798" ],
        "amelia": [ "amelia", "아멜리아", "926F6E" ],
        "hilde": [ "hilde", "힐데", "CCE993" ],
        "risty": [ "risty", "리스티", "AE6D7F" ],
        "risty.glove": [ "risty.glove", "글러브", "A1AD88" ],
        "canna": [ "canna", "칸나", "B77148" ],
        "rohne": [ "rohne", "로네", "C1B4B7" ],
        "maestro": [ "maestro", "마에스트로 2호", "35B7AE" ],
        "festa": [ "festa", "페스타", "EC7A84" ],
        "renewa": [ "renewa", "리뉴아", "E8D7B7" ],
        
        "partition3": [ "partition", "정령" ],
        "ui": [ "ui", "우이", "FFDB5B" ],
        "sylla": [ "sylla", "실라", "C9DBBA" ],
        "naia": [ "naia", "나이아", "91D2EB" ],
        "meluna": [ "meluna", "멜루나", "BCD190" ],
        "blanchet": [ "blanchet", "블랑셰", "2660E1" ],
        "ifrit": ["ifrit",  "이프리트", "EE5C3A" ],
        "gabia": [ "gabia", "가비아", "8A5350" ],
        "jubee": [ "jubee", "쥬비", "D89E5A" ],
        "bigwood": [ "bigwood", "빅우드", "97A262" ],
    
        "partition4": [ "partition", "유령" ],
        "xion": [ "xion", "시온 더 다크불릿", "4C76AD" ],
        "shady": [ "shady", "셰이디", "9DBAC1" ],
        "rim": [ "rim", "림", "AB474A" ],
        "elice": [ "elice", "엘리스", "CAA4DD" ],
        "selline": [ "selline", "셀리네", "F7AFBB" ],
        "speaki": [ "speaki", "스피키", "71566C" ],
        "espi": [ "espi",  "에스피", "D4B9BA" ],
    
        "partition5": [ "partition", "용족" ],
        "vivi": [ "vivi", "비비", "B8AFB1" ],
        "daya": [ "daya", "다야", "A8BBC8" ],
        "rude": [ "rude", "루드", "C75B5C" ],
        "kidian": [ "kidian", "키디언", "604E65" ],
        "leets": [ "leets", "리츠", "8F868A" ],
        "sist": [ "sist", "시스트", "BD8CB7" ],
        "jade": [ "jade", "제이드", "85A491" ],
        "silphir": [ "silphir", "실피르", "8AA9CF" ],
    
        "partition6": [ "partition", "마녀" ],
        "aya": [ "aya", "아야", "F1F8FF" ],
        "belita": [ "belita", "벨리타", "D3A9A9" ],
        "fricle": [ "fricle", "프리클", "675359" ],
        "velvet": [ "velvet", "벨벳", "5C4F62" ],
        "posher": [ "posher", "포셔", "D67B8F" ],
        "rollett": [ "rollett", "롤렛", "C65A66" ],
        "picora": [ "picora", "피코라", "8DC9CA" ],
        "levi": [ "levi", "레비", "A0385A" ]
    };
    const BOXES = {
        0: {
            src: "./assets/images/scriptbox-0.png",
            vignetting: false,
            color: "dark"
        },
        1: {
            src: "./assets/images/scriptbox-1.png",
            vignetting: false,
            color: "dark"
        },
        2: {
            src: "./assets/images/scriptbox-2.png",
            vignetting: true,
            color: "light"
        },
        3: {
            src: "./assets/images/scriptbox-3.png",
            vignetting: false,
            color: "dark"
        },
        4: {
            src: "./assets/images/scriptbox-4.png",
            vignetting: false,
            color: "dark"
        },
        5: {
            src: "./assets/images/scriptbox-5.png",
            vignetting: false,
            color: "dark"
        }
    };

    const $ = (x) => document.querySelector(x);
    const $a = (x) => document.querySelectorAll(x);

    let slide = [];
    let thumbnailQueue = {};
    let current = 0;
    let imageItemIdInt = 0;
    let flagMobileMenu = null;
    const areaRect = {
        x: 0,
        y: 0
    };
    const imageController = {
        rect: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        selected: null
    };
    const touchManager = {
        x: 0,
        y: 0
    };

    const $ver = $("#ver");
    const $main = $("main");
    const $left = $("#left");
    const $middle = $("#middle");
    const $right = $("#right");
    const $mBtnTglLeft = $("#m-button-toggle-slide");
    const $mBtnTglRight = $("#m-button-toggle-layer");
    const $namearea = $("#photo-script-box-namearea");
    const $nameOutline = $("#photo-script-box-namebox > span:nth-child(1)");
    const $name = $("#photo-script-box-namebox > span:nth-child(2)");
    const $nameBg = $("#photo-script-box-name-backdrop");
    const $inputName = $("#name");
    const $selNameBgCol = $("#name-color");
    const $chkAutoName = $("#checkbox-toggle-auto-change-name");
    const $chkTglName = $("#checkbox-toggle-namearea");
    const $modalName = $("#modal-name");
    const $modalNameBtnClose = $("#modal-name button.close");
    const $btnName = $("#photo-script-box-namebox > span:last-child");
    const $contentArea = $("#photo-script-box-area");
    const $content = $("#script-content");
    const $contentBox = $("#photo-script-box-backdrop");
    const $btnContent = $("#button-content");
    const $chkTglContentCenter = $("#checkbox-toggle-box-position-center");
    const $inputContent = $("#content");
    const $modalContent = $("#modal-content");
    const $modalContentBtnClose = $("#modal-content button.close");
    const $box = $("#photo-script-box-backdrop");
    const $vignetting = $("#photo-vignetting");
    const $btnBoxStyle = $a(".content-box-label");
    const $photozone = $("#photo-zone");
    const $bg = $("#photo-bg");
    const $prevBg = $("#preview-bg > img");
    const $uploader = $("#uploader");
    const $btnPhotoSet = $("#button-set-bg");
    const $btnPhotoRemove = $("#button-remove-bg");
    const $btnOutput = $("#button-download");
    const $photoBtn = $("#photo-button-area");
    const $chkPhotoBtn = $("#checkbox-toggle-photo-button");
    const $chkKeyShortcut = $("#checkbox-toggle-shortcut");
    const $btnModalSlideSize = $("#button-slide-size");
    const $modalSlideSize = $("#modal-slide-size");
    const $modalSlideSizeBtnClose = $("#modal-slide-size button.close");
    const $btnSlideSize = $a(".slide-size-label");
    const $selboxOption = $a(".photo-select-option");
    const $inputSelboxOption = $a(".select-option");
    const $selbox = $("#photo-select");
    const $modalSelbox = $("#modal-select");
    const $modalSelboxBtnClose = $("#modal-select button.close");
    const $chkSelbox = $("#checkbox-toggle-select");
    const $btnSelbox = $("#button-select-box");
    const $modalBgs = $a(".modal-area");
    const $imageLayer = $("#photo-layer");
    const $btnAddImage = $("#button-add-image");
    const $imageList = $("#image-item-list");
    const $controller = $("#photo-item-controller");
    const $controllerLayer = $("#photo-item-controller-area");
    const $resizePoints = $a("#photo-item-controller > .resize-point");
    const $btnBottommost = $("#button-controller-bottommost");
    const $btnBottom = $("#button-controller-bottom");
    const $btnFront = $("#button-controller-front");
    const $btnFrontmost = $("#button-controller-frontmost");
    const $btnFlipHorizontal = $("#button-controller-flip-horizontal");
    const $btnFlipVertical = $("#button-controller-flip-vertical");
    const $btnControllerReset = $("#button-controller-reset");
    const $btnControllerRemove = $("#button-controller-remove");
    const $btnControllerUnselect = $("#button-controller-unselect");
    const $btnResetImage = $("#button-reset-image");
    const $slideList = $("#slide-list");
    const $btnAddSlide = $("#button-add-slide");
    const $btnDuplicateSlide = $("#button-duplicate-slide");
    const $thumbQueueArea = $("#thumbnail-queue-area");
    const $alertDownload = $("#alert-downloading");
    const $btnOutputAll = $("#button-download-all");

    const setAreaSize = (i) => {
        slide[current].values.size = i;
        $(`#slide-size-${i}`).checked = true;
        $photozone.classList.forEach((x) => {
            $photozone.classList.remove(x);
        });
        $photozone.classList.add(`photo-zone-size-${i}`);
    };
    const setName = (x) => {
        slide[current].strings.name = x;
        $nameOutline.innerText = x;
        $name.innerText = x;
        $inputName.value = x;
    };
    const setColor = (i) => {
        const hex = Object.values(PALETTE)[i][2];
        slide[current].values.color = hex;
        slide[current].values.colorId = i;
        $nameBg.style["background-color"] = `#${hex}`;
        $selNameBgCol.querySelectorAll("option")[i].selected = true;
    };
    const setContent = (x) => {
        const res = x.replace(/(\(\(\()/g, `<span class="s">`)
            .replace(/({{{)/g, `<span class="m">`)
            .replace(/(\[\[\[)/g, `<span class="b">`)
            .replace(/(>>>)/g, `<span class="g">`)
            .replace(/(\:\:\:)/g, `</span>`);
        slide[current].strings.contentRaw = x;
        slide[current].strings.content = res;
        $content.innerHTML = res;
        $inputContent.value = x;
    };
    const setBoxStyle = (i) => {
        const d = BOXES[i];
        if (!d) return;
        $content.classList.remove("script-content-font-dark");
        $content.classList.remove("script-content-font-light");
        $content.classList.add(`script-content-font-${d.color}`);
        $box.src = d.src;
        $vignetting.style["display"] = d.vignetting ? "block" : "none";
        $(`#box-style-${i}`).checked = true;
    };
    const toggleNamearea = (b) => {
        slide[current].toggles.namearea = b;
        $chkTglName.checked = b;
        $name.style["display"] = b ? "inline" : "none";
        $nameOutline.style["display"] = b ? "inline" : "none";
        $nameBg.style["display"] = b ? "block" : "none";
    };
    const toggleSelectBox = (b) => {
        slide[current].toggles.select = b;
        $chkSelbox.checked = b;
        $selbox.style["display"] = b ? "flex" : "none";
    };
    const togglePhotoButtons = (b) => {
        slide[current].toggles.photoButtons = b;
        $chkPhotoBtn.checked = b;
        $photoBtn.style["display"] = b ? "flex" : "none";
    };
    const toggleContentBoxCenter = (b) => {
        slide[current].toggles.boxCenter = b;
        $chkTglContentCenter.checked = b;
        if (b) {
            $contentArea.classList.add("content-box-center");
        } else {
            $contentArea.classList.remove("content-box-center");
        };
    };
    const setBackground = (f) => {
        slide[current].imageLayer.background = f;
        $bg.src = f;
        $prevBg.src = f;
        refreshThumbnail(current, $photozone);
    };
    const addImageItem = (d) => {
        $imageList.append(d.nodes.lab);
        $imageLayer.append(d.nodes.img);
        refreshThumbnail(current, $photozone);
    };
    const addImageItemIterable = (x) => {
        x.forEach((d) => {
            addImageItem(d);
        });
    };
    const selectItem = (i) => {
        Array.from($a(".active-image-item")).forEach(($n) => $n.classList.remove("active-image-item"));
        const t = slide[current].imageLayer.attachments.find((x) => x.id === i);
        if (!t) return;
        imageController.selected = i;
        t.nodes.lab.classList.add("active-image-item");

        setControllerPos(t.rect.x, t.rect.y);
        setControllerSize(0, 0, t.rect.width, t.rect.height);

        $controller.style["display"] = "flex";
    };
    const unselectItem = () => {
        imageController.selected = null;
        $controller.style["display"] = "none";
        Array.from($a(".active-image-item")).forEach(($n) => $n.classList.remove("active-image-item"));
    };
    const addImagePos = (n, x, y) => {
        const d = slide[current].imageLayer.attachments.find((x) => x.id === n);
        const $img = d.nodes.img;
        d.rect.x += x;
        d.rect.y += y;
        $img.style["top"] = `${d.rect.y + y}px`;
        $img.style["left"] = `${d.rect.x + x}px`;
        slide[current].imageLayer.attachments[slide[current].imageLayer.attachments.findIndex((x) => x.id === n)] = d;
    };
    const setImagePos = (n, x, y) => {
        const d = slide[current].imageLayer.attachments.find((x) => x.id === n);
        const $img = d.nodes.img;
        d.rect.x = x;
        d.rect.y = y;
        $img.style["top"] = `${d.rect.y}px`;
        $img.style["left"] = `${d.rect.x}px`;
        slide[current].imageLayer.attachments[slide[current].imageLayer.attachments.findIndex((x) => x.id === n)] = d;
    };
    const addControllerPos = (x, y) => {
        const originX = parseInt($controller.style["left"]);
        const originY = parseInt($controller.style["top"]);
        $controller.style["top"] = `${originY + y}px`;
        $controller.style["left"] = `${originX + x}px`;
    };
    const setControllerPos = (x, y) => {
        imageController.rect.x = x;
        imageController.rect.y = y;
        $controller.style["top"] = `${y}px`;
        $controller.style["left"] = `${x}px`;
    };
    const addImageSize = (n, x, y, w, h) => {
        const d = slide[current].imageLayer.attachments.find((x) => x.id === n);
        const $img = d.nodes.img;
        d.rect.width += w;
        d.rect.height += h;
        addImagePos(n, x, y);
        $img.style["width"] = `${d.rect.width}px`;
        $img.style["height"] = `${d.rect.height}px`;
        slide[current].imageLayer.attachments[slide[current].imageLayer.attachments.findIndex((x) => x.id === n)] = d;
    };
    const setImageSize = (n, x, y, w, h) => {
        const d = slide[current].imageLayer.attachments.find((x) => x.id === n);
        const $img = d.nodes.img;
        addImagePos(n, x, y);
        d.rect.width = w;
        d.rect.height = h;
        $img.style["width"] = `${w}px`;
        $img.style["height"] = `${h}px`;
        slide[current].imageLayer.attachments[slide[current].imageLayer.attachments.findIndex((x) => x.id === n)] = d;
    };
    const addControllerSize = (x, y, w, h) => {
        imageController.rect.width += w;
        imageController.rect.height += h;
        addControllerPos(x, y);
        $controller.style["width"] = `${imageController.rect.width}px`;
        $controller.style["height"] = `${imageController.rect.height}px`;
    };
    const setControllerSize = (x, y, w, h) => {
        imageController.rect.width = w;
        imageController.rect.height = h;
        addControllerPos(x, y);
        $controller.style["width"] = `${w}px`;
        $controller.style["height"] = `${h}px`;
    };
    const createSlide = () => {
        const d = JSON.parse(JSON.stringify(Object.assign({}, DATATEMPLATE)));
        slide.push(d);
        current = slide.length - 1
        unselectItem();
        applySlide();
    };
    const duplicateSlide = () => {
        const d = JSON.parse(JSON.stringify(Object.assign({}, slide[current])));
        slide.push(d);
        current = slide.length - 1
        unselectItem();
        applySlide();
    };
    const setSlide = (i) => {
        unselectItem();
        current = i;
        applySlide();
    };
    const removeSlide = (i) => {
        delete slide[i];
        slide = slide.filter((x) => x);
        if (slide.length) {
            if (i === current && i > 0) {
                setSlide(i - 1);
            } else if (i === current && i === 0) {
                setSlide(0);
            } else if (i < current) {
                setSlide(current - 1);
            };
        } else {
            createSlide();
        };
        refreshSlideList();
    };
    const applySlide = () => {
        current = slide[current] ? current : current - 1;
        const x = slide[current];
        setAreaSize(x.values.size);
        setName(x.strings.name);
        setColor(x.values.colorId);
        setContent(x.strings.content);
        setBoxStyle(x.values.style);
        toggleNamearea(x.toggles.namearea);
        toggleSelectBox(x.toggles.select);
        togglePhotoButtons(x.toggles.photoButtons);
        toggleContentBoxCenter(x.toggles.boxCenter);
        setBackground(x.imageLayer.background);
        $imageLayer.innerHTML = "";
        $imageList.innerHTML = "";
        addImageItemIterable(x.imageLayer.attachments);
        refreshSlideList();
        refreshThumbnail(current, $photozone);
    };
    const refreshSlideList = () => {
        $slideList.innerHTML = "";
        $slideList.innerHTML = slide.map((d, i) => {
            return `<div id="slide-item-${i}" class="slide-item"><div class="thumb"><img src="${d.thumbnail}"></div>` +
                `<div class="slide-item-menu"><p>${i+1}</p><button class="remove"><div class="i i-deny"></div></button></div></div>`;
        }).join("");
        Array.from($slideList.querySelectorAll(".slide-item")).forEach(($n, i) => {
            $n.onpointerdown = (p) => {
                if (p.target !== $n) return;
                setSlide(i);
                refreshThumbnail(i, $photozone);
            };
        });
        Array.from($slideList.querySelectorAll("button.remove")).forEach(($n, i) => {
            $n.onpointerdown = () => {
                removeSlide(i);
            };
        });
        $(`.active-slide:not(#slide-item-${current})`)?.classList.remove("active-slide");
        $(`#slide-item-${current}`)?.classList.add("active-slide");
    };
    const refreshThumbnail = (i, $n) => {
        html2canvas($n, { logging: false, scale: 0.3 }).then((c) => {
            const src = `${c.toDataURL("image/png")}`;
            slide[current].thumbnail = src;
            const $thumb = $(`#slide-item-${i} div.thumb > img`);
            $thumb.src = src;
        });
    };
    const setAreaPos = (x, y) => {
        areaRect.x = x;
        areaRect.y = y;
        $main.style["transform"] = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("keydown", (k) => {
        if (!Number.isNaN(parseInt(slide[current].imageLayer.selectedImageItem)) && k.shiftKey && k.keyCode === 82) {
            $btnControllerReset.click();
        } else if (k.target === document.body && k.keyCode === 27) {
            unselectItem();
        };
        if (!$chkKeyShortcut.checked) return;
        if (k.target !== document.body) return;
        if (k.keyCode === 49) {
            $btnBoxStyle[0].click();
        } else if (k.keyCode === 50) {
            $btnBoxStyle[1].click();
        } else if (k.keyCode === 51) {
            $btnBoxStyle[2].click();
        } else if (k.keyCode === 52) {
            $btnBoxStyle[3].click();
        } else if (k.keyCode === 53) {
            $btnBoxStyle[4].click();
        } else if (k.keyCode === 54) {
            $btnBoxStyle[5].click();
        } else if (k.keyCode === 65) {
            $modalContent.style["display"] = "flex";
            setTimeout(() => {
                $inputContent.focus();
            }, 30);
        } else if (k.keyCode === 83) {
            $btnSelbox.click();
        } else if (k.keyCode === 68) {
            $btnModalSlideSize.click();
        } else if (k.keyCode === 90) {
            $btnAddSlide.click();
        } else if (k.keyCode === 88) {
            $btnDuplicateSlide.click();
        } else if (k.keyCode === 81) {
            $btnPhotoSet.click();
        } else if (k.keyCode === 87) {
            $btnAddImage.click();
        } else if (k.keyCode === 219) {
            $btnOutput.click();
        } else if (k.keyCode === 221) {
            $btnOutputAll.click();
        };
    });

    Object.values(PALETTE).forEach((x, i) => {
        const $op = document.createElement("option");
        if (x[0] === "partition") {
            $op.innerText = `===== ${x[1]} ====`;
            $op.setAttribute("disabled", "true");
        } else {
            $op.value = `${x[1]}::${x[2]}::${i}`;
            $op.innerText = `${x[1]} :: #${x[2]}`;
            $op.style["background-color"] = `#${x[2]}`;
        };
        $selNameBgCol.append($op);
    });
    $selNameBgCol.onchange = (c) => {
        const d = c.target.value.split("::");
        setColor(d[2]);
        if ($chkAutoName.checked) setName(d[0]);
    };

    createSlide();

    $btnAddSlide.onclick = () => {
        createSlide();
    };
    $btnDuplicateSlide.onclick = () => {
        duplicateSlide();
    };

    $middle.onmousedown = (p) => {
        if (p.target !== $middle) return;
        $middle.setPointerCapture(p.pointerId);
        // document.body.style["cursor"] = "grab";
        $middle.onmousemove = (m) => {
            setAreaPos(areaRect.x + m.movementX, areaRect.y + m.movementY);
        };
        $middle.onmouseup = () => {
            $middle.releasePointerCapture(p.pointerId);
            $middle.setPointerCapture(p.pointerId);
            // document.body.style["cursor"] = null;
            $middle.onmousemove = null;
            $middle.onmouseup = null;
        };
    };
    $middle.ontouchstart = (t) => {
        if (t.touches[0].target !== $middle) return;
        let ox = t.touches[0].clientX;
        let oy = t.touches[0].clientY;
        $middle.ontouchmove = (m) => {
            const x = m.touches[0].clientX;
            const y = m.touches[0].clientY;
            const mx = x - ox;
            const my = y - oy;
            ox = x;
            oy = y;
            setAreaPos(areaRect.x + mx, areaRect.y + my);
        };
        $middle.ontouchend = () => {
            $middle.ontouchmove = null;
            $middle.ontouchend = null;
        };
    };

    $controller.onmousedown = (p) => {
        if (p.target !== $controller) return;
        $controller.setPointerCapture(p.pointerId);
        let flag = true;
        $controller.onmousemove = (m) => {
            flag = false;
            const d = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected);
            if (!d) return;
            d.rect.x += m.movementX;
            d.rect.y += m.movementY;
            setImagePos(d.id, d.rect.x, d.rect.y);
            setControllerPos(d.rect.x, d.rect.y);
        };
        $controller.onmouseup = () => {
            if (flag) unselectItem();
            $controller.releasePointerCapture(p.pointerId);
            refreshThumbnail(current, $photozone);
            $controller.onmousemove = null;
            $controller.onmouseup = null;
        };
    };
    $controller.ontouchstart = (t) => {
        if (t.touches[0].target !== $controller) return;
        let ox = t.touches[0].clientX;
        let oy = t.touches[0].clientY;
        $controller.ontouchmove = (m) => {
            const d = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected);
            if (!d) return;
            const x = m.touches[0].clientX;
            const y = m.touches[0].clientY;
            const mx = x - ox;
            const my = y - oy;
            ox = x;
            oy = y;
            d.rect.x += mx;
            d.rect.y += my;
            setImagePos(d.id, d.rect.x, d.rect.y);
            setControllerPos(d.rect.x, d.rect.y);
        };
        $controller.ontouchend = () => {
            refreshThumbnail(current, $photozone);
            $controller.ontouchmove = null;
            $controller.ontouchend = null;
        };
    };
    Array.from($resizePoints).forEach(($n, i) => {
        $n.onmousedown = (p) => {
            $n.setPointerCapture(p.pointerId);
            $n.onmousemove = (m) => {
                const d = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected);
                if (!d) return;
                const mx = m.movementX;
                const my = m.movementY;
                if (i === 0) {
                    if (d.rect.width + mx*-1 >= SIZEMIN) {
                        addImageSize(d.id, mx, 0, mx*-1, 0);
                        addControllerSize(mx, 0, mx*-1, 0);
                    };
                    if (d.rect.height + my*-1 >= SIZEMIN) {
                        addImageSize(d.id, 0, my, 0, my*-1);
                        addControllerSize(0, my, 0, my*-1);
                    };
                } else if (i === 1) {
                    if (d.rect.width + mx >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, mx, 0);
                        addControllerSize(0, 0, mx, 0);
                    };
                    if (d.rect.height + my*-1 >= SIZEMIN) {
                        addImageSize(d.id, 0, my, 0, my*-1);
                        addControllerSize(0, my, 0, my*-1);
                    };
                } else if (i === 2) {
                    if (d.rect.width + mx*-1 >= SIZEMIN) {
                        addImageSize(d.id, mx, 0, mx*-1, 0);
                        addControllerSize(mx, 0, mx*-1, 0);
                    };
                    if (d.rect.height + my >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, 0, my);
                        addControllerSize(0, 0, 0, my);
                    };
                } else if (i === 3) {
                    if (d.rect.width + mx >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, mx, 0);
                        addControllerSize(0, 0, mx, 0);
                    };
                    if (d.rect.height + my >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, 0, my);
                        addControllerSize(0, 0, 0, my);
                    };
                } else if (i === 4) {
                    if (d.rect.height + my*-1 >= SIZEMIN) {
                        addImageSize(d.id, 0, my, 0, my*-1);
                        addControllerSize(0, my, 0, my*-1);
                    };
                } else if (i === 5) {
                    if (d.rect.width + mx >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, mx, 0);
                        addControllerSize(0, 0, mx, 0);
                    };
                } else if (i === 6) {
                    if (d.rect.height + my >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, 0, my);
                        addControllerSize(0, 0, 0, my);
                    };
                } else if (i === 7) {
                    if (d.rect.width + mx*-1 >= SIZEMIN) {
                        addImageSize(d.id, mx, 0, mx*-1, 0);
                        addControllerSize(mx, 0, mx*-1, 0);
                    };
                };
            };
            $n.onmouseup = () => {
                $n.releasePointerCapture(p.pointerId);
                refreshThumbnail(current, $photozone);
                $n.onmousemove = null;
                $n.onmouseup = null;
            };
        };
        $n.ontouchstart = (t) => {
            $middle.classList.add("oh");
            let ox = t.touches[0].clientX;
            let oy = t.touches[0].clientY;
            $n.ontouchmove = (m) => {
                const d = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected);
                if (!d) return;
                const x = m.touches[0].clientX;
                const y = m.touches[0].clientY;
                const mx = x - ox;
                const my = y - oy;
                ox = x;
                oy = y;
                if (i === 0) {
                    if (d.rect.width + mx*-1 >= SIZEMIN) {
                        addImageSize(d.id, mx, 0, mx*-1, 0);
                        addControllerSize(mx, 0, mx*-1, 0);
                    };
                    if (d.rect.height + my*-1 >= SIZEMIN) {
                        addImageSize(d.id, 0, my, 0, my*-1);
                        addControllerSize(0, my, 0, my*-1);
                    };
                } else if (i === 1) {
                    if (d.rect.width + mx >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, mx, 0);
                        addControllerSize(0, 0, mx, 0);
                    };
                    if (d.rect.height + my*-1 >= SIZEMIN) {
                        addImageSize(d.id, 0, my, 0, my*-1);
                        addControllerSize(0, my, 0, my*-1);
                    };
                } else if (i === 2) {
                    if (d.rect.width + mx*-1 >= SIZEMIN) {
                        addImageSize(d.id, mx, 0, mx*-1, 0);
                        addControllerSize(mx, 0, mx*-1, 0);
                    };
                    if (d.rect.height + my >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, 0, my);
                        addControllerSize(0, 0, 0, my);
                    };
                } else if (i === 3) {
                    if (d.rect.width + mx >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, mx, 0);
                        addControllerSize(0, 0, mx, 0);
                    };
                    if (d.rect.height + my >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, 0, my);
                        addControllerSize(0, 0, 0, my);
                    };
                } else if (i === 4) {
                    if (d.rect.height + my*-1 >= SIZEMIN) {
                        addImageSize(d.id, 0, my, 0, my*-1);
                        addControllerSize(0, my, 0, my*-1);
                    };
                } else if (i === 5) {
                    if (d.rect.width + mx >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, mx, 0);
                        addControllerSize(0, 0, mx, 0);
                    };
                } else if (i === 6) {
                    if (d.rect.height + my >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, 0, my);
                        addControllerSize(0, 0, 0, my);
                    };
                } else if (i === 7) {
                    if (d.rect.width + mx*-1 >= SIZEMIN) {
                        addImageSize(d.id, mx, 0, mx*-1, 0);
                        addControllerSize(mx, 0, mx*-1, 0);
                    };
                };
            };
            $n.ontouchend = () => {
                $middle.classList.remove("oh");
                $n.ontouchmove = null;
                $n.ontouchend = null;
            };
        };
    });
    $btnBottommost.onclick = () => {
        const $img = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected).nodes.img;
        $imageLayer.insertAdjacentElement("afterbegin", $img);
    };
    $btnBottom.onclick = () => {
        const $img = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected).nodes.img;
        const $target = $img.previousSibling;
        if (!$target) return;
        $imageLayer.insertBefore($img, $target);
    };
    $btnFront.onclick = () => {
        const $img = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected).nodes.img;
        const $target1 = $img.nextSibling;
        const $target2 = $target1?.nextSibling;
        if ($target1 && !$target2) {
            $imageLayer.insertAdjacentElement("beforeend", $img);
        } else if ($target2) {
            $imageLayer.insertBefore($img, $target2);
        };
    };
    $btnFrontmost.onclick = () => {
        const $img = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected).nodes.img;
        $imageLayer.insertAdjacentElement("beforeend", $img);
    };
    $btnFlipHorizontal.onclick = () => {
        const d = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected);
        const $img = d.nodes.img;
        d.flip.horizontal = !d.flip.horizontal;
        slide[current].imageLayer.attachments[slide[current].imageLayer.attachments.findIndex((x) => x.id === imageController.selected)].flip = d.flip;
        $img.style["transform"] = `${d.flip.horizontal ? "scaleX(-1)" : ""}${d.flip.vertical ? "scaleY(-1)" : ""}`;
    };
    $btnFlipVertical.onclick = () => {
        const d = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected);
        const $img = d.nodes.img;
        d.flip.vertical = !d.flip.vertical;
        slide[current].imageLayer.attachments[slide[current].imageLayer.attachments.findIndex((x) => x.id === imageController.selected)].flip = d.flip;
        $img.style["transform"] = `${d.flip.horizontal ? "scaleX(-1)" : ""}${d.flip.vertical ? "scaleY(-1)" : ""}`;
    };
    $btnControllerReset.onclick = () => {
        const rect = slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected).rectOrigin;
        setImagePos(imageController.selected, rect.x, rect.y);
        setImageSize(imageController.selected, 0, 0, rect.width, rect.height);
        setControllerPos(rect.x, rect.y);
        setControllerSize(0, 0, rect.width, rect.height);
    };
    $btnControllerRemove.onclick = () => {
        slide[current].imageLayer.attachments.find((x) => x.id === imageController.selected).nodes.lab.querySelector("button.remove").click();
    };
    $btnControllerUnselect.onclick = () => {
        unselectItem();
    };
    $btnResetImage.onclick = () => {
        slide[current].imageLayer.attachments.forEach((x) => {
            x.nodes.lab.querySelector("button.remove").click();
        });
        refreshThumbnail(current, $photozone);
    };

    $namearea.onclick = () => {
        $modalName.style["display"] = "flex";
        $inputName.focus();
    };
    $modalNameBtnClose.onclick = () => {
        $modalName.style["display"] = "none";
    };
    $inputName.onkeydown = (k) => {
        if (k.keyCode === 13 && k.ctrlKey || k.keyCode === 27) $modalNameBtnClose.click();
    };
    $inputName.oninput = (x) => {
        setName(x.target.value);
    };
    $inputName.onchange = () => {
        refreshThumbnail(current, $photozone);
    };
    $chkTglName.onchange = (c) => {
        toggleNamearea(c.target.checked);
        refreshThumbnail(current, $photozone);
    };

    $contentBox.onclick = () => {
        $modalContent.style["display"] = "flex";
        $inputContent.focus();
    };
    $btnContent.onclick = () => {
        $modalContent.style["display"] = "flex";
        $inputContent.focus();
    };
    $modalContentBtnClose.onclick = () => {
        $modalContent.style["display"] = "none";
    };
    $inputContent.onkeydown = (k) => {
        if (k.keyCode === 13 && k.ctrlKey || k.keyCode === 27) $modalContentBtnClose.click();
    };
    $inputContent.oninput = (x) => {
        setContent(x.target.value);
    };
    $inputContent.onchange = () => {
        refreshThumbnail(current, $photozone);
    };
    Array.from($btnBoxStyle).forEach(($n, i) => {
        $n.onclick = () => {
            setBoxStyle(i);
            refreshThumbnail(current, $photozone);
        };
    });
    $chkTglContentCenter.onchange = (c) => {
        toggleContentBoxCenter(c.target.checked);
        refreshThumbnail(current, $photozone);
    };

    $btnPhotoSet.onclick = () => {
        $uploader.onchange = (f) => {
            const file = f.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setBackground(reader.result);
                $uploader.onchange = null;
            };
        };
        $uploader.click();
    };
    $btnPhotoRemove.onclick = () => {
        $uploader.value = null;
        $bg.src = "";
        $prevBg.src = "";
    };

    $btnOutput.onclick = () => {
        $alertDownload.style["display"] = "flex";
        html2canvas($photozone, { logging: false }).then((c) => {
            const l = document.createElement("a");
            const d = Date.now();
            const filename = `TCAG-${d}-OUTPUT.png`;
            document.body.append(l);
            l.href = c.toDataURL("image/png");
            l.download = filename;
            l.click();
            l.remove();
            $alertDownload.style["display"] = "none";
        });
    };

    $chkPhotoBtn.onchange = (c) => {
        togglePhotoButtons(c.target.checked);
        refreshThumbnail(current, $photozone);
    };

    $btnModalSlideSize.onclick = () => {
        $modalSlideSize.style["display"] = "flex";
    };
    $modalSlideSizeBtnClose.onclick = () => {
        $modalSlideSize.style["display"] = "none";
    };
    Array.from($btnSlideSize).forEach(($n, i) => {
        $n.onclick = () => {
            setAreaSize(i);
            refreshThumbnail(current, $photozone);
        };
    });

    $btnSelbox.onclick = () => {
        $modalSelbox.style["display"] = "flex";
    };
    $modalSelboxBtnClose.onclick = () => {
        $modalSelbox.style["display"] = "none";
    };
    Array.from($inputSelboxOption).forEach(($n, i) => {
        const $t = $selboxOption[i];
        const $p = $t.querySelector("p");
        $n.value = slide[current].strings.select[i];
        $p.innerText = slide[current].strings.select[i];
        $n.oninput = (c) => {
            if (!c.target.value.length) {
                $t.style["display"] = "none";
            } else {
                $t.style["display"] = "flex";
                $p.innerText = c.target.value;
            };
        };
        $n.onkeydown = (k) => {
            if (k.keyCode === 13 && k.ctrlKey || k.keyCode === 27) $modalSelboxBtnClose.click();
        };
    });
    $chkSelbox.onchange = (c) => {
        toggleSelectBox(c.target.checked);
        refreshThumbnail(current, $photozone);
    };

    Array.from($modalBgs).forEach(($n) => {
        $n.onclick = (c) => {
            if (c.target.classList[0] === "modal-area") {
                $n.querySelector("button.close").click();
            };
        };
    });

    $btnAddImage.onclick = () => {
        $uploader.onchange = (f) => {
            const file = f.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const id = imageItemIdInt++;

                const $div = document.createElement("div");

                const $img = new Image();
                $img.src = reader.result;
                $img.style["top"] = "0px";
                $img.style["left"] = "0px";
                $img.dataset.id = `${id}`;
                $img.onclick = () => {
                    selectItem(id);
                };

                const $lab = document.createElement("div");
                $lab.classList.add("image-item");
                $lab.innerHTML += `<div class="thumb"><img src="${reader.result}"></div>` +
                    `<p>${file.name}</p>` +
                    `<button class="remove"><div class="i i-deny"></div></button>`;
                $lab.querySelector("button.remove").onclick = () => {
                    unselectItem();
                    $div.remove();
                    $img.remove();
                    $lab.remove();
                    delete slide[current].imageLayer.attachments[slide[current].imageLayer.attachments.findIndex((x) => x.id === id)];
                    slide[current].imageLayer.attachments = slide[current].imageLayer.attachments.filter((x) => x);
                };
                $lab.onclick = () => {
                    if (imageController.selected !== id) {
                        selectItem(id);
                    } else {
                        unselectItem();
                    };
                };

                setTimeout(() => {
                    const d = {
                        id: id,
                        name: file.name,
                        visible: true,
                        data: reader.result,
                        nodes: {
                            main: $div,
                            img: $img,
                            chk: null,
                            lab: $lab
                        },
                        rect: {
                            x: 0,
                            y: 0,
                            width: $img.width,
                            height: $img.height
                        },
                        rectOrigin: {
                            x: 0,
                            y: 0,
                            width: parseInt($img.width),
                            height: parseInt($img.height)
                        },
                        flip: {
                            horizontal: false,
                            vertical: false
                        },
                        rotate: 0
                    };
                    slide[current].imageLayer.attachments.push(d);
                    addImageItem(d);
                }, 30);
            };
        };
        $uploader.click();
    };

    $btnPhotoRemove.click();
    $chkAutoName.checked = true;
    $chkKeyShortcut.checked = true;

    $btnOutputAll.onclick = () => {
        let i = 0;
        $alertDownload.style["display"] = "flex";
        const l = document.createElement("a");
        document.body.append(l);
        const cb = () => {
            if (slide[i]) {
                setSlide(i);
                setTimeout(() => {
                    html2canvas($photozone, { logging: false }).then((c) => {
                        l.href = c.toDataURL("image/png");
                        const d = Date.now();
                        const filename = `TCAG-${d}-OUTPUT.png`;
                        l.download = filename;
                        l.click();
                        setTimeout(() => {
                            i++;
                            cb();
                        }, 2000);
                    });
                }, 2000);
            } else {
                l.remove();
                $alertDownload.style["display"] = "none";
            };
        };
        cb();
    };

    $mBtnTglLeft.onclick = () => {
        if (flagMobileMenu === "left") {
            flagMobileMenu = null;
            $left.classList.remove("m-menu-expand");
            $mBtnTglLeft.classList.remove("m-active-toggle-menu");
        } else {
            $right.classList.remove("m-menu-expand");
            $mBtnTglRight.classList.remove("m-active-toggle-menu");
            flagMobileMenu = "left";
            $left.classList.add("m-menu-expand");
            $mBtnTglLeft.classList.add("m-active-toggle-menu");
        };
    };
    $mBtnTglRight.onclick = () => {
        if (flagMobileMenu === "right") {
            flagMobileMenu = null;
            $right.classList.remove("m-menu-expand");
            $mBtnTglRight.classList.remove("m-active-toggle-menu");
        } else {
            $left.classList.remove("m-menu-expand");
            $mBtnTglLeft.classList.remove("m-active-toggle-menu");
            flagMobileMenu = "right";
            $right.classList.add("m-menu-expand");
            $mBtnTglRight.classList.add("m-active-toggle-menu");
        };
    };

    $ver.innerText = `${LYRA.name} - Build ${LYRA.version}@${LYRA.date} :: `;
    if (LYRA.watermark) {
        $wm = document.createElement("div");
        $wm.id = "watermark";
        $wm.innerText = `Build ${LYRA.version}@${LYRA.date}\n${LYRA.isBeta ? "테스트용 빌드입니다" : ""}`;
        document.body.append($wm);
    };
    
})();