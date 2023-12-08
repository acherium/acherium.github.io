const names = {
    // 서울시
    "SEO_PROV_SEOUL": "서울시",
    "seoul": "서울시",

    // 부산시
    "BUS_PROV_BUSAN": "부산시",
    "busan": "부산시",
    "gijang": "기장군",

    // 대구시
    "DAE_PROV_DAEGU": "대구시",
    "daegu": "대구시",
    "dalseong": "달성군",
    "gunwi": "군위군",

    // 인천시
    "INC_PROV_INCHEON": "인천시",
    "INC_DISTRICT_CENTRAL": "중구",
    "INC_DISTRICT_EASTERN": "동구",
    "INC_DISTRICT_MICHUHOL": "미추홀구",
    "INC_DISTRICT_YEONSU": "연수구",
    "INC_DISTRICT_NAMDONG": "남동구",
    "INC_DISTRICT_BUPYEONG": "부평구",
    "INC_DISTRICT_GYEYANG": "계양구",
    "INC_DISTRICT_WESTERN": "서구",
    "INC_COUNTY_GANGHWA": "강화군",
    "INC_COUNTY_ONGJIN": "옹진군",
    "incheon": "인천시",
    "ganghwa": "강화군",
    "ongjin": "옹진군",

    // 광주시
    "GWJ_PROV_GWANGJU": "광주시",
    "gwangju": "광주시",

    // 대전시
    "DJN_PROV_DAEJEON": "대전시",
    "daejeon": "대전시",

    // 울산시
    "ULS_PROV_ULSAN": "울산시",
    "ulsan": "울산시",
    "ulju": "울주군",

    // 세종시
    "SEJ_PROV_SEJONG": "세종시",
    "sejong": "세종시",

    // 경기도
    "SGG_PROV_GYEONGGI": "경기도",
    "goyang": "고양시",
    "suwon": "수원시",
    "yongin": "용인시",
    "gwacheon": "과천시",
    "gwangmyeong": "광명시",
    "gyeongan": "광주시",
    "guri": "구리시",
    "gunpo": "군포시",
    "gimpo": "김포시",
    "namyangju": "남양주시",
    "dongducheon": "동두천시",
    "bucheon": "부천시",
    "seongnam": "성남시",
    "siheung": "시흥시",
    "ansan": "안산시",
    "anseong": "안성시",
    "anyang": "안양시",
    "yangju": "양주시",
    "yeoju": "여주시",
    "osan": "오산시",
    "uiwang": "의왕시",
    "uijeongbu": "의정부시",
    "icheon": "이천시",
    "paju": "파주시",
    "pyeongtaek": "평택시",
    "pocheon": "포천시",
    "hanam": "하남시",
    "hwaseong": "화성시",
    "gapyeong": "가평군",
    "yangpyeong": "양평군",
    "yeoncheon": "연천군",
    "gaeseong": "개성시",
    "gaepung": "개풍군",
    "jangdan": "장단군",

    // 충청북도
    "NCC_PROV_NORTHCHUNGCHEONG": "충청북도",
    "jecheon": "제천시",
    "cheongju": "청주시",
    "chungju": "충주시",
    "goesan": "괴산군",
    "danyang": "단양군",
    "boeun": "보은군",
    "yeongdong": "영동군",
    "okcheon": "옥천군",
    "eumseong": "음성군",
    "jeungpyeong": "증평군",
    "jincheon": "진천군",

    // 충청남도
    "SCC_PROV_SOUTHCHUNGCHEONG": "충청남도",
    "gyeryong": "계룡시",
    "gongju": "공주시",
    "nonsan": "논산시",
    "dangjin": "당진시",
    "boryeong": "보령시",
    "seosan": "서산시",
    "asan": "아산시",
    "cheonan": "천안시",
    "geumsan": "금산군",
    "buyeo": "부여군",
    "seocheon": "서천군",
    "yesan": "예산군",
    "cheongyang": "청양군",
    "taean": "태안군",
    "hongseong": "홍성군",

    // 전라북도
    "NJE_PROV_NORTHJEOLLA": "전라북도",
    "gunsan": "군산시",
    "gimje": "김제시",
    "namwon": "남원시",
    "iksan": "익산시",
    "jeonju": "전주시",
    "jeongeup": "정읍시",
    "gochang": "고창군",
    "muju": "무주군",
    "buan": "부안군",
    "sunchang": "순창군",
    "wanju": "완주군",
    "imsil": "임실군",
    "jangsu": "장수군",
    "jinan": "진안군",

    // 전라남도
    "SJE_PROV_SOUTHJEOLLA": "전라남도",
    "mokpo": "목포시",
    "yeosu": "여수시",
    "suncheon": "순천시",
    "naju": "나주시",
    "gwangyang": "광양시",
    "damyang": "담양군",
    "gokseong": "곡성군",
    "gurye": "구례군",
    "goheung": "고흥군",
    "boseong": "보성군",
    "hwasun": "화순군",
    "jangheung": "장흥군",
    "gangjin": "강진군",
    "haenam": "해남군",
    "yeongam": "영암군",
    "muan": "무안군",
    "hampyeong": "함평군",
    "yeonggwang": "영광군",
    "jangseong": "장성군",
    "wando": "완도군",
    "jindo": "진도군",
    "sinan": "신안군",

    // 경상북도
    "NGS_PROV_NORTHGYEONGSANG": "경상북도",
    "gyeongsan": "경산시",
    "gyeongju": "경주시",
    "gumi": "구미시",
    "gimcheon": "김천시",
    "mungyeong": "문경시",
    "sangju": "상주시",
    "andong": "안동시",
    "yeongju": "영주시",
    "yeongcheon": "영천시",
    "pohang": "포항시",
    "goryeong": "고령군",
    "bonghwa": "봉화군",
    "seongju": "성주군",
    "yeongdeok": "영덕군",
    "yeongyang": "영양군",
    "yecheon": "예천군",
    "ulleung": "울릉군",
    "uljin": "울진군",
    "uiseong": "의성군",
    "cheongdo": "청도군",
    "cheongsong": "청송군",
    "chilgok": "칠곡군",

    // 경상남도
    "SGS_PROV_SOUTHGYEONGSANG": "경상남도",
    "changwon": "창원시",
    "geoje": "거제시",
    "gimhae": "김해시",
    "miryang": "밀양시",
    "sacheon": "사천시",
    "yangsan": "양산시",
    "jinju": "진주시",
    "tongyeong": "통영시",
    "geochang": "거창군",
    "goseong": "고성군",
    "namhae": "남해군",
    "sancheong": "산청군",
    "uiryeong": "의령군",
    "changnyeong": "창녕군",
    "hadong": "하동군",
    "haman": "함안군",
    "hamyang": "함양군",
    "hapcheon": "합천군",

    // 강원도
    "GWN_PROV_GANGWON": "강원도",
    "gangneung": "강릉시",
    "donghae": "동해시",
    "samcheok": "삼척시",
    "sokcho": "속초시",
    "wonju": "원주시",
    "chuncheon": "춘천시",
    "taebaek": "태백시",
    "ganseong": "고성군",
    "yanggu": "양구군",
    "yangyang": "양양군",
    "yeongwol": "영월군",
    "inje": "인제군",
    "jeongseon": "정선군",
    "cheorwon": "철원군",
    "pyeongchang": "평창군",
    "hongcheon": "홍천군",
    "hwacheon": "화천군",
    "hoengseong": "횡성군",
    "gimhwa": "김화군",
    "icheongw": "이천군",
    "tongcheon": "통천군",
    "pyeonggang": "평강군",
    "hoeyang": "회양군",

    // 제주도
    "JJU_PROV_JEJU": "제주도",
    "jeju": "제주시",
    "seogwipo": "서귀포시",

    // 황해도
    "HWA_PROV_HWANGHAE": "황해도",
    "HWA_CITY_HAEJU": "해주시",
    "HWA_CITY_SARIWON": "사리원시",
    "HWA_CITY_SONGNIM": "송림시",

    // 평안북도
    "NPY_PROV_NORTHPYEONGAN": "평안북도",
    "NPY_CITY_SINUIJU": "신의주시",

    // 평안남도
    "SPY_PROV_SOUTHPYEONGAN": "평안남도",
    "SPY_CITY_PYEONGYANG": "평양시",
    "SPY_CITY_JINNAMPO": "진남포시",

    // 함경북도
    "NHG_PROV_NORTHHAMGYEONG": "함경북도",
    "NHG_CITY_CHEONGJIN": "청진시",
    "NHG_CITY_SEONGJIN": "성진시",
    "NHG_CITY_NAJIN": "나진시",

    // 함경남도
    "SHG_PROV_SOUTHHAMGYEONG": "함경남도",
    "SHG_CITY_HAMHEUNG": "함흥시",
    "SHG_CITY_WONSAN": "원산시",
    "SHG_CITY_HEUNGNAM": "흥남시"
};

const nameTitle = document.querySelector("#name");
const debugInput = document.querySelector("#debug_input");

console.log(document.querySelector(".area"));

document.querySelectorAll(".area").forEach(x => {
    x.addEventListener("mouseover", () => {
        nameTitle.innerText = names[x.id] ? names[x.id] : x.id;
    });
});


// 디버깅용
const doCheckCode = () => {
    const x = debugInput.value;
    nameTitle.innerText = names[x] ? names[x] : x;
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