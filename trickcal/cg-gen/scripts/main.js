(() => {
    const LYRA = {
        name: "Trickcal CG Scene Generator",
        author: "Acherium",
        contact: "acherium@pm.me",
        version: "1.0.1032",
        date: "24-05-26",
        watermark: false,
        isBeta: true
    };
    const SIZEMIN = 32;

    const $ = (x) => document.querySelector(x);
    const $a = (x) => document.querySelectorAll(x);

    const data = {
        name: "",
        content: "나오라고.",
        select: [
            "선택 1",
            "선택 2",
            "선택 3"
        ],
        images: [],
        selectedImageItem: null,
        controllerRect: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        box: 0,
        buttonVisibility: true,
        color: "",
        init: "butter",
        initSize: 0
    };
    let imageItemIdInt = 0;
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

    const $ver = $("#ver");
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
    const $content = $("#script-content");
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
    const $chkphotoBtn = $("#checkbox-toggle-photo-button");
    const $tglphotoBtn = $("#toggle-photo-button");
    const $chkKeyShortcut = $("#checkbox-toggle-shortcut");
    const $btnModalSlideSize = $("#button-slide-size");
    const $modalSlideSize = $("#modal-slide-size");
    const $modalSlideSizeBtnClose = $("#modal-slide-size button.close");
    const $btnSlideSize = $a(".slide-size-label");
    const $selboxOption = $a(".photo-select-option");
    const $inputSelboxOption = $a(".select-option");
    const $selbox = $("#photo-select");
    const $selboxInner = $("#photo-select > .inner");
    const $modalSelbox = $("#modal-select");
    const $modalSelboxBtnClose = $("#modal-select button.close");
    const $chkSelbox = $("#checkbox-toggle-select");
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

    const setName = (x) => {
        data.name = x;
        $nameOutline.innerText = x;
        $name.innerText = x;
        $inputName.value = x;
    };
    const setColor = (hex) => {
        data.color = hex;
        $nameBg.style["background-color"] = `#${hex}`;
    };
    const setContent = (x) => {
        data.content = x;
        $content.innerText = x;
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
    };
    const setAreaSize = (i) => {
        $photozone.classList.forEach((x) => {
            $photozone.classList.remove(x);
        });
        $photozone.classList.add(`photo-zone-size-${i}`);
    };
    const selectItem = (i) => {
        const t = data.images.find((x) => x.id === i);
        if (!t) return;
        data.selectedImageItem = i;

        setControllerPos(t.rect.x, t.rect.y);
        setControllerSize(0, 0, t.rect.width, t.rect.height);

        $controller.style["display"] = "flex";
    };
    const unselectItem = () => {
        data.selectedImageItem = null;
        $controller.style["display"] = "none";
    };
    const addImagePos = (n, x, y) => {
        const d = data.images.find((x) => x.id === n);
        const $img = d.nodes.img;
        d.rect.x += x;
        d.rect.y += y;
        $img.style["top"] = `${d.rect.y + y}px`;
        $img.style["left"] = `${d.rect.x + x}px`;
        data.images[data.images.findIndex((x) => x.id === n)] = d;
    };
    const setImagePos = (n, x, y) => {
        const d = data.images.find((x) => x.id === n);
        const $img = d.nodes.img;
        d.rect.x = x;
        d.rect.y = y;
        $img.style["top"] = `${d.rect.y}px`;
        $img.style["left"] = `${d.rect.x}px`;
        data.images[data.images.findIndex((x) => x.id === n)] = d;
    };
    const addControllerPos = (x, y) => {
        const originX = parseInt($controller.style["left"]);
        const originY = parseInt($controller.style["top"]);
        $controller.style["top"] = `${originY + y}px`;
        $controller.style["left"] = `${originX + x}px`;
    };
    const setControllerPos = (x, y) => {
        data.controllerRect.x = x;
        data.controllerRect.y = y;
        $controller.style["top"] = `${y}px`;
        $controller.style["left"] = `${x}px`;
    };
    const addImageSize = (n, x, y, w, h) => {
        const d = data.images.find((x) => x.id === n);
        const $img = d.nodes.img;
        d.rect.width += w;
        d.rect.height += h;
        addImagePos(n, x, y);
        $img.style["width"] = `${d.rect.width}px`;
        $img.style["height"] = `${d.rect.height}px`;
        data.images[data.images.findIndex((x) => x.id === n)] = d;
    };
    const setImageSize = (n, x, y, w, h) => {
        const d = data.images.find((x) => x.id === n);
        const $img = d.nodes.img;
        addImagePos(n, x, y);
        d.rect.width = w;
        d.rect.height = h;
        $img.style["width"] = `${w}px`;
        $img.style["height"] = `${h}px`;
        data.images[data.images.findIndex((x) => x.id === n)] = d;
    };
    const addControllerSize = (x, y, w, h) => {
        data.controllerRect.width += w;
        data.controllerRect.height += h;
        addControllerPos(x, y);
        $controller.style["width"] = `${data.controllerRect.width}px`;
        $controller.style["height"] = `${data.controllerRect.height}px`;
    };
    const setControllerSize = (x, y, w, h) => {
        data.controllerRect.width = w;
        data.controllerRect.height = h;
        addControllerPos(x, y);
        $controller.style["width"] = `${w}px`;
        $controller.style["height"] = `${h}px`;
    };

    document.addEventListener("keydown", (k) => {
        if (!Number.isNaN(parseInt(data.selectedImageItem)) && k.shiftKey && k.keyCode === 82) {
            $btnControllerReset.click();
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
            $modalName.style["display"] = "flex";
            setTimeout(() => {
                $inputName.focus();
            }, 30);
        } else if (k.keyCode === 83) {
            $modalContent.style["display"] = "flex";
            setTimeout(() => {
                $inputContent.focus();
            }, 30);
        } else if (k.keyCode === 68) {
            $uploader.click();
        } else if (k.keyCode === 70) {
            $btnOutput.click();
        }
    });

    $controller.onpointerdown = (p) => {
        if (p.target !== $controller) return;
        $controller.setPointerCapture(p.pointerId);
        $controller.onpointermove = (m) => {
            const d = data.images.find((x) => x.id === data.selectedImageItem);
            if (!d) return;
            d.rect.x += m.movementX;
            d.rect.y += m.movementY;
            setImagePos(d.id, d.rect.x, d.rect.y);
            setControllerPos(d.rect.x, d.rect.y);
        };
        $controller.onpointerup = () => {
            $controller.releasePointerCapture(p.pointerId);
            $controller.onpointermove = null;
            $controller.onpointerup = null;
        };
    };
    Array.from($resizePoints).forEach(($n, i) => {
        $n.onpointerdown = (p) => {
            $n.setPointerCapture(p.pointerId);
            $n.onpointermove = (m) => {
                const d = data.images.find((x) => x.id === data.selectedImageItem);
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
                    if (d.rect.height + m.movementY >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, 0, my);
                        addControllerSize(0, 0, 0, my);
                    };
                } else if (i === 3) {
                    if (d.rect.width + mx >= SIZEMIN) {
                        addImageSize(d.id, 0, 0, mx, 0);
                        addControllerSize(0, 0, mx, 0);
                    };
                    if (d.rect.height + m.movementY >= SIZEMIN) {
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
                    if (d.rect.height + m.movementY >= SIZEMIN) {
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
            $n.onpointerup = () => {
                $n.releasePointerCapture(p.pointerId);
                $n.onpointermove = null;
                $n.onpointerup = null;
            };
        };
    });
    $btnBottommost.onclick = () => {
        const $img = data.images.find((x) => x.id === data.selectedImageItem).nodes.img;
        $imageLayer.insertAdjacentElement("afterbegin", $img);
    };
    $btnBottom.onclick = () => {
        const $img = data.images.find((x) => x.id === data.selectedImageItem).nodes.img;
        const $target = $img.previousSibling;
        if (!$target) return;
        $imageLayer.insertBefore($img, $target);
    };
    $btnFront.onclick = () => {
        const $img = data.images.find((x) => x.id === data.selectedImageItem).nodes.img;
        const $target1 = $img.nextSibling;
        const $target2 = $target1?.nextSibling;
        if ($target1 && !$target2) {
            $imageLayer.insertAdjacentElement("beforeend", $img);
        } else if ($target2) {
            $imageLayer.insertBefore($img, $target2);
        };
    };
    $btnFrontmost.onclick = () => {
        const $img = data.images.find((x) => x.id === data.selectedImageItem).nodes.img;
        $imageLayer.insertAdjacentElement("beforeend", $img);
    };
    $btnFlipHorizontal.onclick = () => {
        const d = data.images.find((x) => x.id === data.selectedImageItem);
        const $img = d.nodes.img;
        d.flip.horizontal = !d.flip.horizontal;
        data.images[data.images.findIndex((x) => x.id === data.selectedImageItem)].flip = d.flip;
        $img.style["transform"] = `${d.flip.horizontal ? "scaleX(-1)" : ""}${d.flip.vertical ? "scaleY(-1)" : ""}`;
    };
    $btnFlipVertical.onclick = () => {
        const d = data.images.find((x) => x.id === data.selectedImageItem);
        const $img = d.nodes.img;
        d.flip.vertical = !d.flip.vertical;
        data.images[data.images.findIndex((x) => x.id === data.selectedImageItem)].flip = d.flip;
        $img.style["transform"] = `${d.flip.horizontal ? "scaleX(-1)" : ""}${d.flip.vertical ? "scaleY(-1)" : ""}`;
    };
    $btnControllerReset.onclick = () => {
        const rect = data.images.find((x) => x.id === data.selectedImageItem).rectOrigin;
        setImagePos(data.selectedImageItem, rect.x, rect.y);
        setImageSize(data.selectedImageItem, 0, 0, rect.width, rect.height);
        setControllerPos(rect.x, rect.y);
        setControllerSize(0, 0, rect.width, rect.height);
    };
    $btnControllerRemove.onclick = () => {
        data.images.find((x) => x.id === data.selectedImageItem).nodes.lab.querySelector("button.remove").click();
    };

    $name.onclick = () => {
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
    $chkTglName.onchange = (c) => {
        $namearea.style["display"] = c.target.checked ? "flex" : "none";
    };

    $content.onclick = () => {
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
    Array.from($btnBoxStyle).forEach(($n, i) => {
        $n.onclick = () => {
            setBoxStyle(i);
        };
    });

    $btnPhotoSet.onclick = () => {
        $uploader.onchange = (f) => {
            const file = f.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                $bg.src = reader.result;
                $prevBg.src = reader.result;
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
        html2canvas($photozone).then((c) => {
            const l = document.createElement("a");
            const d = Date.now();
            const filename = `TCAG-${d}-OUTPUT.png`;
            document.body.append(l);
            l.href = c.toDataURL("image/png");
            l.download = filename;
            l.click();
            l.remove();
        });
    };

    Object.values(PALETTE).forEach((x) => {
        const $op = document.createElement("option");
        if (x[0] === "partition") {
            $op.innerText = `===== ${x[1]} ====`;
            $op.setAttribute("disabled", "true");
        } else {
            $op.value = `${x[1]}::${x[2]}`;
            $op.innerText = `${x[1]} :: #${x[2]}`;
            $op.style["background-color"] = `#${x[2]}`;
        };
        $selNameBgCol.append($op);
    });
    $selNameBgCol.onchange = (c) => {
        const d = c.target.value.split("::");
        setColor(d[1]);
        if ($chkAutoName.checked) setName(d[0]);
    };

    $chkphotoBtn.onchange = (c) => {
        $photoBtn.style["display"] = c.target.checked ? "block" : "none";
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
        };
    });

    $selbox.onclick = () => {
        $modalSelbox.style["display"] = "flex";
    };
    $modalSelboxBtnClose.onclick = () => {
        $modalSelbox.style["display"] = "none";
    };
    Array.from($inputSelboxOption).forEach(($n, i) => {
        const $t = $selboxOption[i];
        const $p = $t.querySelector("p");
        $n.value = data.select[i];
        $p.innerText = data.select[i];
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
        $selboxInner.style["display"] = c.target.checked ? "block" : "none";
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

                const $main = document.createElement("div");

                const $img = new Image();
                $img.src = reader.result;
                $img.style["top"] = "0px";
                $img.style["left"] = "0px";
                $img.dataset.id = `${id}`;

                const $chk = document.createElement("input");
                $chk.type = "checkbox";
                $chk.id = `image-item-${id}`;
                $chk.classList.add("checkbox-image-item");
                $chk.onchange = (c) => {
                    unselectItem();
                    Array.from($a(".checkbox-image-item")).filter(($n) => $n !== c.target).forEach(($n) => $n.checked = false);
                    if (c.target.checked) {
                        selectItem(id);
                    };
                };

                const $lab = document.createElement("label");
                $lab.setAttribute("for", `image-item-${id}`);
                $lab.classList.add("image-item");
                $lab.innerHTML += `<div class="thumb"><img src="${reader.result}"></div>` +
                    `<p>${file.name}</p>` +
                    `<button class="remove"><div class="i i-deny"></div></button>`;
                $lab.querySelector("button.remove").onclick = () => {
                    unselectItem();
                    $main.remove();
                    $img.remove();
                    $chk.remove();
                    $lab.remove();
                    delete data.images[data.images.findIndex((x) => x.id === id)];
                    data.images = data.images.filter((x) => x);
                };

                setTimeout(() => {
                    const d = {
                        id: id,
                        name: file.name,
                        visible: true,
                        data: reader.result,
                        nodes: {
                            main: $main,
                            img: $img,
                            chk: $chk,
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
                    data.images.push(d);

                    d.nodes.main.append(d.nodes.chk);
                    d.nodes.main.append(d.nodes.lab);
                    $imageList.append(d.nodes.main);
                    $imageLayer.append(d.nodes.img);
                }, 30);
            };
        };
        $uploader.click();
    };

    Array.from($btnSlideSize)[data.initSize].click();
    setName(PALETTE[data.init][1]);
    setContent(data.content);
    $selNameBgCol.options[16].selected = true;
    setColor(PALETTE[data.init][2]);
    $btnBoxStyle[data.box].click();
    $btnPhotoRemove.click();
    $chkphotoBtn.checked = true;
    $chkAutoName.checked = true;
    $chkKeyShortcut.checked = true;
    $chkTglName.checked = true;
    $chkSelbox.checked = false;
    
    $ver.innerText = `${LYRA.name} v${LYRA.version}@${LYRA.date} :: `;
    if (LYRA.watermark) {
        $wm = document.createElement("div");
        $wm.id = "watermark";
        $wm.innerText = `${LYRA.name}\nv${LYRA.version}@${LYRA.date}${LYRA.isBeta ? "\n테스트용 빌드입니다" : ""}`;
        document.body.append($wm);
    };
})();