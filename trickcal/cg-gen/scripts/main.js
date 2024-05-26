(() => {
    const LYRA = {
        name: "Trickcal CG Scene Generator",
        author: "Acherium",
        contact: "acherium@pm.me",
        version: "1.0.1012",
        date: "24-05-26",
        watermark: false,
        isBeta: true
    };

    const $ = (x) => document.querySelector(x);
    const $a = (x) => document.querySelectorAll(x);

    const data = {
        name: "",
        content: "나오라고.",
        box: 0,
        buttonVisibility: true,
        color: "",
        init: "butter",
        initSize: 0
    };
    const PALETTE = {
        "player": [ "player", "교주", "FBAC26" ],
        "youngchun": [ "youngchun", "영춘", "768964" ],
        "sub": [ "sub", "게스트", "A1AD88" ],
    
        "chloe": [ "chloe", "클로에", "BB3626" ],
        "erpin": [ "erpin", "에르핀", "F09D7D" ],
        "ner": [ "ner", "네르", "847592" ],
        "ashur": [ "ashur", "에슈르", "E6838D" ],
        "kyarot": ["kyarot",  "캬롯", "F49C62" ],
        "shoupan": [ "shoupan", "슈팡", "FFE182" ],
        "marie": [ "marie", "마리", "E7BBBB" ],
        "mayo": [ "mayo", "마요", "A0B5D5" ],
    
        "epica": [ "epica", "에피카", "BDD2F0" ],
        "diana": [ "diana", "디아나", "C19079" ],
        "tig": [ "tig", "티그", "9AAABF" ],
        "rufo": [ "rufo", "루포", "F69E72" ],
        "kommy": [ "kommy", "코미", "FFA8A7" ],
        "butter": [ "butter", "버터", "EEC375" ],
        "beni": [ "beni", "베니", "64443E" ],
        "mago": [ "mago", "마고", "B6BBCB" ],
        "bana": [ "bana", "바나", "EDB983" ],
    
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
        
        "ui": [ "ui", "우이", "FFDB5B" ],
        "sylla": [ "sylla", "실라", "C9DBBA" ],
        "naia": [ "naia", "나이아", "91D2EB" ],
        "meluna": [ "meluna", "멜루나", "BCD190" ],
        "blanchet": [ "blanchet", "블랑셰", "2660E1" ],
        "ifrit": ["ifrit",  "이프리트", "EE5C3A" ],
        "gabia": [ "gabia", "가비아", "8A5350" ],
        "jubee": [ "jubee", "쥬비", "D89E5A" ],
        "bigwood": [ "bigwood", "빅우드", "97A262" ],
    
        "xion": [ "xion", "시온 더 다크불릿", "4C76AD" ],
        "shady": [ "shady", "셰이디", "9DBAC1" ],
        "rim": [ "rim", "림", "AB474A" ],
        "elice": [ "elice", "엘리스", "CAA4DD" ],
        "selline": [ "selline", "셀리네", "F7AFBB" ],
        "speaki": [ "speaki", "스피키", "71566C" ],
        "espi": [ "espi",  "에스피", "D4B9BA" ],
    
        "vivi": [ "vivi", "비비", "B8AFB1" ],
        "daya": [ "daya", "다야", "A8BBC8" ],
        "rude": [ "rude", "루드", "C75B5C" ],
        "kidian": [ "kidian", "키디언", "604E65" ],
        "leets": [ "leets", "리츠", "8F868A" ],
        "sist": [ "sist", "시스트", "BD8CB7" ],
        "jade": [ "jade", "제이드", "85A491" ],
        "silphir": [ "silphir", "실피르", "8AA9CF" ],
    
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
    const $modalNameBtnClose = $("#modal-name button");
    const $btnName = $("#photo-script-box-namebox > span:last-child");
    const $content = $("#script-content");
    const $inputContent = $("#content");
    const $modalContent = $("#modal-content");
    const $modalContentBtnClose = $("#modal-content button");
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
    const $modalSlideSizeBtnClose = $("#modal-slide-size button");
    const $btnSlideSize = $a(".slide-size-label");

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

    document.addEventListener("keydown", (k) => {
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
        $op.value = `${x[1]}::${x[2]}`;
        $op.innerText = `${x[1]} :: #${x[2]}`;
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
    
    $ver.innerText = `${LYRA.name} v${LYRA.version}@${LYRA.date} :: `;
    if (LYRA.watermark) {
        $wm = document.createElement("div");
        $wm.id = "watermark";
        $wm.innerText = `${LYRA.name}\nv${LYRA.version}@${LYRA.date}${LYRA.isBeta ? "\n테스트용 빌드입니다" : ""}`;
        document.body.append($wm);
    };
})();