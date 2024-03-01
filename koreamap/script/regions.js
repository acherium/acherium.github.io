const REGIONS = {
    // 서울시
    "SEO-PROV-SEOUL": "서울시",
    "SEO-CITY-SEOUL": "서울시",
    "SEO-DISTRICT-JONGNO": "종로구",
    "SEO-DISTRICT-CENTRAL": "중구",
    "SEO-DISTRICT-YONGSAN": "용산구",
    "SEO-DISTRICT-SEONGDONG": "성동구",
    "SEO-DISTRICT-GWANGJIN": "광진구",
    "SEO-DISTRICT-DONGDAEMUN": "동대문구",
    "SEO-DISTRICT-JUNGNANG": "중랑구",
    "SEO-DISTRICT-SEONGBUK": "성북구",
    "SEO-DISTRICT-GANGBUK": "강북구",
    "SEO-DISTRICT-DOBONG": "도봉구",
    "SEO-DISTRICT-NOWON": "노원구",
    "SEO-DISTRICT-EUNPYEONG": "은평구",
    "SEO-DISTRICT-SEODAEMUN": "서대문구",
    "SEO-DISTRICT-MAPO": "마포구",
    "SEO-DISTRICT-YANGCHEON": "양천구",
    "SEO-DISTRICT-GANGSEO": "강서구",
    "SEO-DISTRICT-GURO": "구로구",
    "SEO-DISTRICT-GEUMCHEON": "금천구",
    "SEO-DISTRICT-YEONGDEUNGPO": "영등포구",
    "SEO-DISTRICT-DONGJAK": "동작구",
    "SEO-DISTRICT-GWANAK": "관악구",
    "SEO-DISTRICT-SEOCHO": "서초구",
    "SEO-DISTRICT-GANGNAM": "강남구",
    "SEO-DISTRICT-SONGPA": "송파구",
    "SEO-DISTRICT-GANGDONG": "강동구",

    // 부산시
    "BUS-PROV-BUSAN": "부산시",
    "BUS-CITY-BUSAN": "부산시",
    "BUS-DISTIRCT-CENTRAL": "중구",
    "BUS-DISTRICT-WESTERN": "서구",
    "BUS-DISTRICT-EASTERN": "동구",
    "BUS-DISTRICT-YEONGDO": "영도구",
    "BUS-DISTRICT-BUSANJIN": "부산진구",
    "BUS-DISTRICT-DONGNAE": "동래구",
    "BUS-DISTRICT-SOUTHERN": "남구",
    "BUS-DISTRICT-NORTHERN": "북구",
    "BUS-DISTRICT-HAEUNDAE": "해운대구",
    "BUS-DISTRICT-SAHA": "사하구",
    "BUS-DISTRICT-GEUMJEONG": "금정구",
    "BUS-DISTRICT-GANGSEO": "강서구",
    "BUS-DISTRICT-YEONJE": "연제구",
    "BUS-DISTRICT-SUYEONG": "수영구",
    "BUS-DISTRICT-SASANG": "사상구",
    "BUS-COUNTY-GIJANG": "기장군",

    // 대구시
    "DAE-PROV-DAEGU": "대구시",
    "DAE-CITY-DAEGU": "대구시",
    "DAE-DISTRICT-CENTRAL": "중구",
    "DAE-DISTRICT-EASTERN": "동구",
    "DAE-DISTRICT-WESTERN": "서구",
    "DAE-DISTRICT-SOUTHERN": "남구",
    "DAE-DISTRICT-NORTHERN": "북구",
    "DAE-DISTRICT-SUSEONG": "수성구",
    "DAE-DISTRICT-DALSEO": "달서구",
    "DAE-COUNTY-DALSEONG": "달성군",
    "DAE-COUNTY-GUNWI": "군위군",

    // 인천시
    "INC-PROV-INCHEON": "인천시",
    "INC-CITY-INCHEON": "인천시",
    "INC-DISTRICT-CENTRAL": "중구",
    "INC-DISTRICT-EASTERN": "동구",
    "INC-DISTRICT-MICHUHOL": "미추홀구",
    "INC-DISTRICT-YEONSU": "연수구",
    "INC-DISTRICT-NAMDONG": "남동구",
    "INC-DISTRICT-BUPYEONG": "부평구",
    "INC-DISTRICT-GYEYANG": "계양구",
    "INC-DISTRICT-WESTERN": "서구",
    "INC-COUNTY-GANGHWA": "강화군",
    "INC-COUNTY-ONGJIN": "옹진군",

    // 광주시
    "GWJ-PROV-GWANGJU": "광주시",
    "GWJ-CITY-GWANGJU": "광주시",
    "GWJ-DISTRICT-EASTERN": "동구",
    "GWJ-DISTRICT-WESTERN": "서구",
    "GWJ-DISTRICT-SOUTHERN": "남구",
    "GWJ-DISTRICT-NORTHERN": "북구",
    "GWJ-DISTRICT-GWANGSAN": "광산구",

    // 대전시
    "DJN-PROV-DAEJEON": "대전시",
    "DJN-CITY-DAEJEON": "대전시",
    "DJN-DISTRICT-EASTERN": "동구",
    "DJN-DISTRICT-CENTRAL": "중구",
    "DJN-DISTRICT-WESTERN": "동구",
    "DJN-DISTRICT-YUSEONG": "유성구",
    "DJN-DISTRICT-DAEDEOK": "대덕구",

    // 울산시
    "ULS-PROV-ULSAN": "울산시",
    "ULS-CITY-ULSAN": "울산시",
    "ULS-DISTRICT-CENTRAL": "중구",
    "ULS-DISTRICT-SOUTHERN": "남구",
    "ULS-DISTRICT-EASTERN": "동구",
    "ULS-DISTRICT-NORTHERN": "북구",
    "ULS-COUNTY-ULJU": "울주군",

    // 세종시
    "SEJ-PROV-SEJONG": "세종시",
    "SEJ-CITY-SEJONG": "세종시",

    // 경기도
    "SGG-PROV-GYEONGGI": "경기도",
    "SGG-CITY-GOYANG": "고양시",
    "SGG-CITY-SUWON": "수원시",
    "SGG-CITY-YONGIN": "용인시",
    "SGG-CITY-GWACHEON": "과천시",
    "SGG-CITY-GWANGMYEONG": "광명시",
    "SGG-CITY-GWANGJU": "광주시",
    "SGG-CITY-GURI": "구리시",
    "SGG-CITY-GUNPO": "군포시",
    "SGG-CITY-GIMPO": "김포시",
    "SGG-CITY-NAMYANGJU": "남양주시",
    "SGG-CITY-DONGDUCHEON": "동두천시",
    "SGG-CITY-BUCHEON": "부천시",
    "SGG-CITY-SEONGNAM": "성남시",
    "SGG-CITY-SIHEUNG": "시흥시",
    "SGG-CITY-ANSAN": "안산시",
    "SGG-CITY-ANSEONG": "안성시",
    "SGG-CITY-ANYANG": "안양시",
    "SGG-CITY-YANGJU": "양주시",
    "SGG-CITY-YEOJU": "여주시",
    "SGG-CITY-OSAN": "오산시",
    "SGG-CITY-UIWANG": "의왕시",
    "SGG-CITY-UIJEONGBU": "의정부시",
    "SGG-CITY-ICHEON": "이천시",
    "SGG-CITY-PAJU": "파주시",
    "SGG-CITY-PYEONGTAEK": "평택시",
    "SGG-CITY-POCHEON": "포천시",
    "SGG-CITY-HANAM": "하남시",
    "SGG-CITY-HWASEONG": "화성시",
    "SGG-COUNTY-GAPYEONG": "가평군",
    "SGG-COUNTY-YANGPYEONG": "양평군",
    "SGG-COUNTY-YEONCHEON": "연천군",
    "SGG-CITY-GAESEONG": "개성시",
    "SGG-COUNTY-GAEPUNG": "개풍군",
    "SGG-COUNTY-JANGDAN": "장단군",

    // 충청북도
    "NCC-PROV-NORTHCHUNGCHEONG": "충청북도",
    "NCC-CITY-JECHEON": "제천시",
    "NCC-CITY-CHEONGJU": "청주시",
    "NCC-CITY-CHUNGJU": "충주시",
    "NCC-COUNTY-GOESAN": "괴산군",
    "NCC-COUNTY-DANYANG": "단양군",
    "NCC-COUNTY-BOEUN": "보은군",
    "NCC-COUNTY-YEONGDONG": "영동군",
    "NCC-COUNTY-OKCHEON": "옥천군",
    "NCC-COUNTY-EUMSEONG": "음성군",
    "NCC-COUNTY-JEUNGPYEONG": "증평군",
    "NCC-COUNTY-JINCHEON": "진천군",

    // 충청남도
    "SCC-PROV-SOUTHCHUNGCHEONG": "충청남도",
    "SCC-CITY-GYERYONG": "계룡시",
    "SCC-CITY-GONGJU": "공주시",
    "SCC-CITY-NONSAN": "논산시",
    "SCC-CITY-DANGJIN": "당진시",
    "SCC-CITY-BORYEONG": "보령시",
    "SCC-CITY-SEOSAN": "서산시",
    "SCC-CITY-ASAN": "아산시",
    "SCC-CITY-CHEONAN": "천안시",
    "SCC-COUNTY-GEUMSAN": "금산군",
    "SCC-COUNTY-BUYEO": "부여군",
    "SCC-COUNTY-SEOCHEON": "서천군",
    "SCC-COUNTY-YESAN": "예산군",
    "SCC-COUNTY-CHEONGYANG": "청양군",
    "SCC-COUNTY-TAEAN": "태안군",
    "SCC-COUNTY-HONGSEONG": "홍성군",

    // 전라북도
    "NJE-PROV-NORTHJEOLLA": "전라북도",
    "NJE-CITY-GUNSAN": "군산시",
    "NJE-CITY-GIMJE": "김제시",
    "NJE-CITY-NAMWON": "남원시",
    "NJE-CITY-IKSAN": "익산시",
    "NJE-CITY-JEONJU": "전주시",
    "NJE-CITY-JEONGEUP": "정읍시",
    "NJE-COUNTY-GOCHANG": "고창군",
    "NJE-COUNTY-MUJU": "무주군",
    "NJE-COUNTY-BUAN": "부안군",
    "NJE-COUNTY-SUNCHANG": "순창군",
    "NJE-COUNTY-WANJU": "완주군",
    "NJE-COUNTY-IMSIL": "임실군",
    "NJE-COUNTY-JANGSU": "장수군",
    "NJE-COUNTY-JINAN": "진안군",

    // 전라남도
    "SJE-PROV-SOUTHJEOLLA": "전라남도",
    "SJE-CITY-MOKPO": "목포시",
    "SJE-CITY-YEOSU": "여수시",
    "SJE-CITY-SUNCHEON": "순천시",
    "SJE-CITY-NAJU": "나주시",
    "SJE-CITY-GWANGYANG": "광양시",
    "SJE-COUNTY-DAMYANG": "담양군",
    "SJE-COUNTY-GOKSEONG": "곡성군",
    "SJE-COUNTY-GURYE": "구례군",
    "SJE-COUNTY-GOHEUNG": "고흥군",
    "SJE-COUNTY-BOSEONG": "보성군",
    "SJE-COUNTY-HWASUN": "화순군",
    "SJE-COUNTY-JANGHEUNG": "장흥군",
    "SJE-COUNTY-GANGJIN": "강진군",
    "SJE-COUNTY-HAENAM": "해남군",
    "SJE-COUNTY-YEONGAM": "영암군",
    "SJE-COUNTY-MUAN": "무안군",
    "SJE-COUNTY-HAMPYEONG": "함평군",
    "SJE-COUNTY-YEONGGWANG": "영광군",
    "SJE-COUNTY-JANGSEONG": "장성군",
    "SJE-COUNTY-WANDO": "완도군",
    "SJE-COUNTY-JINDO": "진도군",
    "SJE-COUNTY-SINAN": "신안군",

    // 경상북도
    "NGS-PROV-NORTHGYEONGSANG": "경상북도",
    "NGS-CITY-GYEONGSAN": "경산시",
    "NGS-CITY-GYEONGJU": "경주시",
    "NGS-CITY-GUMI": "구미시",
    "NGS-CITY-GIMCHEON": "김천시",
    "NGS-CITY-MUNGYEONG": "문경시",
    "NGS-CITY-SANGJU": "상주시",
    "NGS-CITY-ANDONG": "안동시",
    "NGS-CITY-YEONGJU": "영주시",
    "NGS-CITY-YEONGCHEON": "영천시",
    "NGS-CITY-POHANG": "포항시",
    "NGS-COUNTY-GORYEONG": "고령군",
    "NGS-COUNTY-BONGHWA": "봉화군",
    "NGS-COUNTY-SEONGJU": "성주군",
    "NGS-COUNTY-YEONGDEOK": "영덕군",
    "NGS-COUNTY-YEONGYANG": "영양군",
    "NGS-COUNTY-YECHEON": "예천군",
    "NGS-COUNTY-ULLEUNG": "울릉군",
    "NGS-COUNTY-ULJIN": "울진군",
    "NGS-COUNTY-UISEONG": "의성군",
    "NGS-COUNTY-CHEONGDO": "청도군",
    "NGS-COUNTY-CHEONGSONG": "청송군",
    "NGS-COUNTY-CHILGOK": "칠곡군",

    // 경상남도
    "SGS-PROV-SOUTHGYEONGSANG": "경상남도",
    "SGS-CITY-CHANGWON": "창원시",
    "SGS-CITY-GEOJE": "거제시",
    "SGS-CITY-GIMHAE": "김해시",
    "SGS-CITY-MIRYANG": "밀양시",
    "SGS-CITY-SACHEON": "사천시",
    "SGS-CITY-YANGSAN": "양산시",
    "SGS-CITY-JINJU": "진주시",
    "SGS-CITY-TONGYEONG": "통영시",
    "SGS-COUNTY-GEOCHANG": "거창군",
    "SGS-COUNTY-GOSEONG": "고성군",
    "SGS-COUNTY-NAMHAE": "남해군",
    "SGS-COUNTY-SANCHEONG": "산청군",
    "SGS-COUNTY-UIRYEONG": "의령군",
    "SGS-COUNTY-CHANGNYEONG": "창녕군",
    "SGS-COUNTY-HADONG": "하동군",
    "SGS-COUNTY-HAMAN": "함안군",
    "SGS-COUNTY-HAMYANG": "함양군",
    "SGS-COUNTY-HAPCHEON": "합천군",

    // 강원도
    "GWN-PROV-GANGWON": "강원도",
    "GWN-CITY-GANGNEUNG": "강릉시",
    "GWN-CITY-DONGHAE": "동해시",
    "GWN-CITY-SAMCHEOK": "삼척시",
    "GWN-CITY-SOKCHO": "속초시",
    "GWN-CITY-WONJU": "원주시",
    "GWN-CITY-CHUNCHEON": "춘천시",
    "GWN-CITY-TAEBAEK": "태백시",
    "GWN-COUNTY-GOSEONG": "고성군",
    "GWN-COUNTY-YANGGU": "양구군",
    "GWN-COUNTY-YANGYANG": "양양군",
    "GWN-COUNTY-YEONGWOL": "영월군",
    "GWN-COUNTY-INJE": "인제군",
    "GWN-COUNTY-JEONGSEON": "정선군",
    "GWN-COUNTY-CHEORWON": "철원군",
    "GWN-COUNTY-PYEONGCHANG": "평창군",
    "GWN-COUNTY-HONGCHEON": "홍천군",
    "GWN-COUNTY-HWACHEON": "화천군",
    "GWN-COUNTY-HOENGSEONG": "횡성군",
    "GWN-COUNTY-GIMHWA": "김화군",
    "GWN-COUNTY-ICHEON": "이천군",
    "GWN-COUNTY-TONGCHEON": "통천군",
    "GWN-COUNTY-PYEONGGANG": "평강군",
    "GWN-COUNTY-HOEYANG": "회양군",

    // 제주도
    "JJU-PROV-JEJU": "제주도",
    "JJU-CITY-JEJU": "제주시",
    "JJU-CITY-SEOGWIPO": "서귀포시",
    "JJU-XCITY-JEJU": "제주시",
    "JJU-XCITY-SEOGWIPO": "서귀포시",
    "JJU-XCOUNTY-NORTHJEJU": "북제주군",
    "JJU-XCOUNTY-SOUTHJEJU": "남제주군",

    // 황해도
    "HWA-PROV-HWANGHAE": "황해도",
    "HWA-CITY-HAEJU": "해주시",
    "HWA-CITY-SARIWON": "사리원시",
    "HWA-CITY-SONGNIM": "송림시",
    "HWA-COUNTY-BYEOKSEONG": "벽성군",
    "HWA-COUNTY-YEONBAEK": "연백군",
    "HWA-COUNTY-GEUMCHEON": "금천군",
    "HWA-COUNTY-PYEONGSAN": "평산군",
    "HWA-COUNTY-SINGYE": "신계군",
    "HWA-COUNTY-JANGYEON": "장연군",
    "HWA-COUNTY-SONGHWA": "송화군",
    "HWA-COUNTY-EUNYUL": "은율군",
    "HWA-COUNTY-ANAK": "안악군",
    "HWA-COUNTY-SINCHEON": "신천군",
    "HWA-COUNTY-JAERYEONG": "재령군",
    "HWA-COUNTY-HWANGJU": "황주군",
    "HWA-COUNTY-BONGSAN": "봉산군",
    "HWA-COUNTY-SEOHEUNG": "서흥군",
    "HWA-COUNTY-SUAN": "수안군",
    "HWA-COUNTY-GOKSAN": "곡산군",
    "HWA-COUNTY-ONGJIN": "옹진군",

    // 평안북도
    "NPY-PROV-NORTHPYEONGAN": "평안북도",
    "NPY-CITY-SINUIJU": "신의주시",
    "NPY-COUNTY-EUIJU": "의주군",
    "NPY-COUNTY-YONGCHEON": "용천군",
    "NPY-COUNTY-CHEOLSAN": "철산군",
    "NPY-COUNTY-SEONCHEON": "선천군",
    "NPY-COUNTY-GANGGYE": "강계군",
    "NPY-COUNTY-JEONGJU": "정주군",
    "NPY-COUNTY-BAKCHEON": "박천군",
    "NPY-COUNTY-TAECHEON": "태천군",
    "NPY-COUNTY-YEONGBYEON": "영변군",
    "NPY-COUNTY-JASEONG": "자성군",
    "NPY-COUNTY-UNSAN": "운산군",
    "NPY-COUNTY-GUSEONG": "구성군",
    "NPY-COUNTY-CHANGSEONG": "창성군",
    "NPY-COUNTY-BYEOKDONG": "벽동군",
    "NPY-COUNTY-HUCHANG": "후창군",
    "NPY-COUNTY-SAKJU": "삭주군",
    "NPY-COUNTY-CHOSAN": "초산군",
    "NPY-COUNTY-WIWON": "위원군",
    "NPY-COUNTY-HUICHEON": "희천군",

    // 평안남도
    "SPY-PROV-SOUTHPYEONGAN": "평안남도",
    "SPY-CITY-PYEONGYANG": "평양시",
    "SPY-CITY-JINNAMPO": "진남포시",
    "SPY-COUNTY-DAEDONG": "대동군",
    "SPY-COUNTY-SUNCHEON": "순천군",
    "SPY-COUNTY-MAENGSAN": "맹산군",
    "SPY-COUNTY-YANGDEOK": "양덕군",
    "SPY-COUNTY-DEOKCHEON": "덕천군",
    "SPY-COUNTY-SEONGCHEON": "성천군",
    "SPY-COUNTY-GANGDONG": "강동군",
    "SPY-COUNTY-JUNGHWA": "중화군",
    "SPY-COUNTY-YONGGANG": "용강군",
    "SPY-COUNTY-YEONGWON": "영원군",
    "SPY-COUNTY-GANGSEO": "강서군",
    "SPY-COUNTY-PYEONGWON": "평원군",
    "SPY-COUNTY-ANJU": "안주군",
    "SPY-COUNTY-GAECHEON": "개천군",

    // 함경북도
    "NHG-PROV-NORTHHAMGYEONG": "함경북도",
    "NHG-CITY-CHEONGJIN": "청진시",
    "NHG-CITY-SEONGJIN": "성진시",
    "NHG-CITY-NAJIN": "나진시",
    "NHG-COUNTY-GYEONGSEONG": "경성군",
    "NHG-COUNTY-MYEONGCHEON": "명천군",
    "NHG-COUNTY-GILJU": "길주군",
    "NHG-COUNTY-HAKSEONG": "학성군",
    "NHG-COUNTY-BURYEONG": "부령군",
    "NHG-COUNTY-MUSAN": "무산군",
    "NHG-COUNTY-HOERYEONG": "회령군",
    "NHG-COUNTY-JONGSEONG": "종성군",
    "NHG-COUNTY-GYEONGHEUNG": "경흥군",
    "NHG-COUNTY-GYEONGWON": "경원군",
    "NHG-COUNTY-ONSEONG": "온성군",

    // 함경남도
    "SHG-PROV-SOUTHHAMGYEONG": "함경남도",
    "SHG-CITY-HAMHEUNG": "함흥시",
    "SHG-CITY-WONSAN": "원산시",
    "SHG-CITY-HEUNGNAM": "흥남시",
    "SHG-COUNTY-HAMJU": "함주군",
    "SHG-COUNTY-JEONGPYEONG": "정평군",
    "SHG-COUNTY-YEONGHEUNG": "영흥군",
    "SHG-COUNTY-GOWON": "고원군",
    "SHG-COUNTY-MUNCHEON": "문천군",
    "SHG-COUNTY-ANBYEONG": "안변군",
    "SHG-COUNTY-HONGWON": "홍원군",
    "SHG-COUNTY-BUKCHEONG": "북청군",
    "SHG-COUNTY-IWON": "이원군",
    "SHG-COUNTY-DANCHEON": "단천군",
    "SHG-COUNTY-SINHEUNG": "신흥군",
    "SHG-COUNTY-JANGJIN": "장진군",
    "SHG-COUNTY-PUNGSAN": "풍산군",
    "SHG-COUNTY-SAMSU": "삼수군",
    "SHG-COUNTY-GAPSAN": "갑산군",
    "SHG-COUNTY-HYESAN": "혜산군"
};

const REGIONSALT = {
    "SEO": {
        name: [ "서울특별시", "서울", "특별시" ],
        sub: {}
    },
    "BUS": {
        name: [ "부산광역시", "부산", "광역시" ],
        sub: {
            "BUS": {
                name: [ "시내지구", "시내", "시내지구" ],
                sub: {}
            },
            "DRA": {
                name: [ "기장군", "기장", "군" ],
                sub: {}
            }
        }
    },
    "DAE": {
        name: [ "대구광역시", "대구", "광역시" ],
        sub: {
            "DAE": {
                name: [ "시내지구", "시내", "시내지구" ],
                sub: {}
            },
            "DAL": {
                name: [ "달성군", "달성", "군" ],
                sub: {}
            },
            "GWI": {
                name: [ "군위군", "군위", "군" ],
                sub: {}
            }
        }
    },
    "INC": {
        name: [ "인천광역시", "인천", "광역시" ],
        sub: {
            "INC": {
                name: [ "시내지구", "시내", "시내지구" ],
                sub: {}
            },
            "GHW": {
                name: [ "강화군", "강화", "군" ],
                sub: {}
            },
            "OJI": {
                name: [ "옹진군", "옹진", "군" ],
                sub: {}
            }
        }
    },
    "GWJ": {
        name: [ "광주광역시", "광주", "광역시" ],
        sub: {}
    },
    "DJN": {
        name: [ "대전광역시", "대전", "광역시" ],
        sub: {}
    },
    "ULS": {
        name: [ "울산광역시", "울산", "광역시" ],
        sub: {
            "ULS": {
                name: [ "시내지구", "시내", "시내지구" ],
                sub: {}
            },
            "ULJ": {
                name: [ "울주군", "울주", "군" ],
                sub: {}
            }
        }
    },
    "SEJ": {
        name: [ "세종특별자치시", "세종", "특별자치시" ],
        sub: {}
    },
    "SGG": {
        name: [ "경기도", "경기", "도" ],
        sub: {
            "GOY": {
                name: [ "고양시", "고양", "시" ],
                sub: {}
            },
            "SUW": {
                name: [ "수원시", "수원", "시" ],
                sub: {}
            },
            "YIN": {
                name: [ "용인시", "용인", "시" ],
                sub: {}
            },
            "GCN": {
                name: [ "과천시", "과천", "시" ],
                sub: {}
            },
            "GWM": {
                name: [ "광명시", "광명", "시" ],
                sub: {}
            },
            "GGJ": {
                name: [ "광주시", "광주", "시" ],
                sub: {}
            },
            "GRI": {
                name: [ "구리시", "구리", "시" ],
                sub: {}
            },
            "GNP": {
                name: [ "군포시", "군포", "시" ],
                sub: {}
            },
            "GMP": {
                name: [ "김포시", "김포", "시" ],
                sub: {}
            },
            "NAM": {
                name: [ "남양주시", "남양주", "시" ],
                sub: {}
            },
            "DDC": {
                name: [ "동두천시", "동두천", "시" ],
                sub: {}
            },
            "BUC": {
                name: [ "부천시", "부천", "시" ],
                sub: {}
            },
            "SNM": {
                name: [ "성남시", "성남", "시" ],
                sub: {}
            },
            "SIH": {
                name: [ "시흥시", "시흥", "시" ],
                sub: {}
            },
            "ANS": {
                name: [ "안산시", "안산", "시" ],
                sub: {}
            },
            "ASN": {
                name: [ "안성시", "안성", "시" ],
                sub: {}
            },
            "ANY": {
                name: [ "안양시", "안양", "시" ],
                sub: {}
            },
            "YNJ": {
                name: [ "양주시", "양주", "시" ],
                sub: {}
            },
            "YEJ": {
                name: [ "여주시", "여주", "시" ],
                sub: {}
            },
            "OSN": {
                name: [ "오산시", "오산", "시" ],
                sub: {}
            },
            "UIW": {
                name: [ "의왕시", "의왕", "시" ],
                sub: {}
            },
            "UIJ": {
                name: [ "의정부시", "의정부", "시" ],
                sub: {}
            },
            "ICH": {
                name: [ "이천시", "이천", "시" ],
                sub: {}
            },
            "PAJ": {
                name: [ "파주시", "파주", "시" ],
                sub: {}
            },
            "PTK": {
                name: [ "평택시", "평택", "시" ],
                sub: {}
            },
            "PCH": {
                name: [ "포천시", "포천", "시" ],
                sub: {}
            },
            "HAN": {
                name: [ "하남시", "하남", "시" ],
                sub: {}
            },
            "HWA": {
                name: [ "화성시", "화성", "시" ],
                sub: {}
            },
            "GAP": {
                name: [ "가평군", "가평", "군" ],
                sub: {}
            },
            "YNP": {
                name: [ "양평군", "양평", "군" ],
                sub: {}
            },
            "YCN": {
                name: [ "연천군", "연천", "군" ],
                sub: {}
            },
        }
    },
    "NCC": {
        name: [ "충청북도", "충북", "도" ],
        sub: {
            "JEC": {
                name: [ "제천시", "제천", "시" ],
                sub: {}
            },
            "CEJ": {
                name: [ "청주시", "청주", "시" ],
                sub: {}
            },
            "CUJ": {
                name: [ "충주시", "충주", "시" ],
                sub: {}
            },
            "GOE": {
                name: [ "괴산군", "괴산", "군" ],
                sub: {}
            },
            "DAN": {
                name: [ "단양군", "단양", "군" ],
                sub: {}
            },
            "BON": {
                name: [ "보은군", "보은", "군" ],
                sub: {}
            },
            "YDN": {
                name: [ "영동군", "영동", "군" ],
                sub: {}
            },
            "OKC": {
                name: [ "옥천군", "옥천", "군" ],
                sub: {}
            },
            "EUM": {
                name: [ "음성군", "음성", "군" ],
                sub: {}
            },
            "JUN": {
                name: [ "증평군", "증평", "군" ],
                sub: {}
            },
            "JIN": {
                name: [ "진천군", "진천", "군" ],
                sub: {}
            }
        }
    },
    "SCC": {
        name: [ "충청남도", "충남", "도" ],
        sub: {
            "GRY": {
                name: [ "계룡시", "계룡", "시" ],
                sub: {}
            },
            "GGJ": {
                name: [ "공주시", "공주", "시" ],
                sub: {}
            },
            "NNN": {
                name: [ "논산시", "논산", "시" ],
                sub: {}
            },
            "DJI": {
                name: [ "당진시", "당진", "시" ],
                sub: {}
            },
            "BRY": {
                name: [ "보령시", "보령", "시" ],
                sub: {}
            },
            "SES": {
                name: [ "서산시", "서산", "시" ],
                sub: {}
            },
            "ASA": {
                name: [ "아산시", "아산", "시" ],
                sub: {}
            },
            "CAN": {
                name: [ "천안시", "천안", "시" ],
                sub: {}
            },
            "GSA": {
                name: [ "금산군", "금산", "군" ],
                sub: {}
            },
            "BYO": {
                name: [ "부여군", "부여", "군" ],
                sub: {}
            },
            "SEO": {
                name: [ "서천군", "서천", "군" ],
                sub: {}
            },
            "YSA": {
                name: [ "예산군", "예산", "군" ],
                sub: {}
            },
            "CHY": {
                name: [ "청양군", "청양", "군" ],
                sub: {}
            },
            "TAE": {
                name: [ "태안군", "태안", "군" ],
                sub: {}
            },
            "HNS": {
                name: [ "홍성군", "홍성", "군" ],
                sub: {}
            }
        }
    },
    "NJE": {
        name: [ "전북특별자치도", "전북", "특별자치도" ],
        sub: {
            "GUN": {
                name: [ "군산시", "군산", "시" ],
                sub: {}
            },
            "GIJ": {
                name: [ "김제시", "김제", "시" ],
                sub: {}
            },
            "NWO": {
                name: [ "남원시", "남원", "시" ],
                sub: {}
            },
            "IKS": {
                name: [ "익산시", "익산", "시" ],
                sub: {}
            },
            "JNJ": {
                name: [ "전주시", "전주", "시" ],
                sub: {}
            },
            "JGP": {
                name: [ "정읍시", "정읍", "시" ],
                sub: {}
            },
            "GCH": {
                name: [ "고창군", "고창", "군" ],
                sub: {}
            },
            "MUJ": {
                name: [ "무주군", "무주", "군" ],
                sub: {}
            },
            "BUA": {
                name: [ "부안군", "부안", "군" ],
                sub: {}
            },
            "SUC": {
                name: [ "순창군", "순창", "군" ],
                sub: {}
            },
            "WAN": {
                name: [ "완주군", "완주", "군" ],
                sub: {}
            },
            "IMS": {
                name: [ "임실군", "임실", "군" ],
                sub: {}
            },
            "JAS": {
                name: [ "장수군", "장수", "군" ],
                sub: {}
            },
            "JAN": {
                name: [ "진안군", "진안", "군" ],
                sub: {}
            }
        }
    },
    "SJE": {
        name: [ "전라남도", "전남", "도" ],
        sub: {
            "MOK": {
                name: [ "목포시", "목포", "시" ],
                sub: {}
            },
            "YSU": {
                name: [ "여수시", "여수", "시" ],
                sub: {}
            },
            "SUN": {
                name: [ "순천시", "순천", "시" ],
                sub: {}
            },
            "NAJ": {
                name: [ "나주시", "나주", "시" ],
                sub: {}
            },
            "GWY": {
                name: [ "광양시", "광양", "시" ],
                sub: {}
            },
            "DMY": {
                name: [ "담양군", "담양", "군" ],
                sub: {}
            },
            "GOK": {
                name: [ "곡성군", "곡성", "군" ],
                sub: {}
            },
            "GUR": {
                name: [ "구례군", "구례", "군" ],
                sub: {}
            },
            "GOH": {
                name: [ "고흥군", "고흥", "군" ],
                sub: {}
            },
            "BOS": {
                name: [ "보성군", "보성", "군" ],
                sub: {}
            },
            "HWS": {
                name: [ "화순군", "화순", "군" ],
                sub: {}
            },
            "JAH": {
                name: [ "장흥군", "장흥", "군" ],
                sub: {}
            },
            "GJI": {
                name: [ "강진군", "강진", "군" ],
                sub: {}
            },
            "HAE": {
                name: [ "해남군", "해남", "군" ],
                sub: {}
            },
            "YAM": {
                name: [ "영암군", "영암", "군" ],
                sub: {}
            },
            "MAN": {
                name: [ "무안군", "무안", "군" ],
                sub: {}
            },
            "HPY": {
                name: [ "함평군", "함평", "군" ],
                sub: {}
            },
            "YGW": {
                name: [ "영광군", "영광", "군" ],
                sub: {}
            },
            "JSO": {
                name: [ "장성군", "장성", "군" ],
                sub: {}
            },
            "WDO": {
                name: [ "완도군", "완도", "군" ],
                sub: {}
            },
            "JDO": {
                name: [ "진도군", "진도", "군" ],
                sub: {}
            },
            "SIA": {
                name: [ "신안군", "신안", "군" ],
                sub: {}
            }
        }
    },
    "NGS": {
        name: [ "경상북도", "경북", "도" ],
        sub: {
            "GES": {
                name: [ "경산시", "경산", "시" ],
                sub: {}
            },
            "WOL": {
                name: [ "경주시", "경주", "시" ],
                sub: {}
            },
            "GUM": {
                name: [ "구미시", "구미", "시" ],
                sub: {}
            },
            "GIM": {
                name: [ "김해시", "김해", "시" ],
                sub: {}
            },
            "JMC": {
                name: [ "문경시", "문경", "시" ],
                sub: {}
            },
            "SJU": {
                name: [ "상주시", "상주", "시" ],
                sub: {}
            },
            "AND": {
                name: [ "안동시", "안동", "시" ],
                sub: {}
            },
            "YGJ": {
                name: [ "영주시", "영주", "시" ],
                sub: {}
            },
            "YCN": {
                name: [ "영천시", "영천", "시" ],
                sub: {}
            },
            "POH": {
                name: [ "포항시", "포항", "시" ],
                sub: {}
            },
            "GRG": {
                name: [ "고령군", "고령", "군" ],
                sub: {}
            },
            "BHW": {
                name: [ "봉화군", "봉화", "군" ],
                sub: {}
            },
            "SGU": {
                name: [ "성주군", "성주", "군" ],
                sub: {}
            },
            "YDK": {
                name: [ "영덕군", "영덕", "군" ],
                sub: {}
            },
            "YYG": {
                name: [ "영양군", "영양", "군" ],
                sub: {}
            },
            "YEC": {
                name: [ "예천군", "예천", "군" ],
                sub: {}
            },
            "ULL": {
                name: [ "울릉군", "울릉", "군" ],
                sub: {}
            },
            "UJN": {
                name: [ "울진군", "울진", "군" ],
                sub: {}
            },
            "UIG": {
                name: [ "의성군", "의성", "군" ],
                sub: {}
            },
            "CDO": {
                name: [ "청도군", "청도", "군" ],
                sub: {}
            },
            "CON": {
                name: [ "청송군", "청송", "군" ],
                sub: {}
            },
            "COK": {
                name: [ "칠곡군", "칠곡", "군" ],
                sub: {}
            }
        }
    },
    "SGS": {
        name: [ "경상남도", "경남", "도" ],
        sub: {
            "CWN": {
                name: [ "창원시", "창원", "시" ],
                sub: {}
            },
            "GJE": {
                name: [ "거제시", "거제", "시" ],
                sub: {}
            },
            "GAE": {
                name: [ "김해시", "김해", "시" ],
                sub: {}
            },
            "MRY": {
                name: [ "밀양시", "밀양", "시" ],
                sub: {}
            },
            "SAC": {
                name: [ "사천시", "사천", "시" ],
                sub: {}
            },
            "YAS": {
                name: [ "양산시", "양산", "시" ],
                sub: {}
            },
            "JIJ": {
                name: [ "진주시", "진주", "시" ],
                sub: {}
            },
            "CHM": {
                name: [ "통영시", "통영", "시" ],
                sub: {}
            },
            "GEC": {
                name: [ "거창군", "거창", "군" ],
                sub: {}
            },
            "GSE": {
                name: [ "고성군", "고성", "군" ],
                sub: {}
            },
            "NHE": {
                name: [ "남해군", "남해", "군" ],
                sub: {}
            },
            "SCG": {
                name: [ "산청군", "산청", "군" ],
                sub: {}
            },
            "URY": {
                name: [ "의령군", "의령", "군" ],
                sub: {}
            },
            "NYE": {
                name: [ "창녕군", "창녕", "군" ],
                sub: {}
            },
            "HAD": {
                name: [ "하동군", "하동", "군" ],
                sub: {}
            },
            "HMN": {
                name: [ "함안군", "함안", "군" ],
                sub: {}
            },
            "HYG": {
                name: [ "함양군", "함양", "군" ],
                sub: {}
            },
            "PCH": {
                name: [ "합천군", "합천", "군" ],
                sub: {}
            }
        }
    },
    "GWN": {
        name: [ "강원특별자치도", "강원", "특별자치도" ],
        sub: {
            "GGG": {
                name: [ "강릉시", "강릉", "시" ],
                sub: {}
            },
            "DHE": {
                name: [ "동해시", "동해", "시" ],
                sub: {}
            },
            "SAK": {
                name: [ "삼척시", "삼척", "시" ],
                sub: {}
            },
            "SKC": {
                name: [ "속초시", "속초", "시" ],
                sub: {}
            },
            "WON": {
                name: [ "원주시", "원주", "시" ],
                sub: {}
            },
            "CCH": {
                name: [ "춘천시", "춘천", "시" ],
                sub: {}
            },
            "TBK": {
                name: [ "태백시", "태백", "시" ],
                sub: {}
            },
            "GSO": {
                name: [ "고성군", "고성", "군" ],
                sub: {}
            },
            "YGG": {
                name: [ "양구군", "양구", "군" ],
                sub: {}
            },
            "YYG": {
                name: [ "양양군", "양양", "군" ],
                sub: {}
            },
            "YWL": {
                name: [ "영월군", "영월", "군" ],
                sub: {}
            },
            "INJ": {
                name: [ "인제군", "인제", "군" ],
                sub: {}
            },
            "JSN": {
                name: [ "정선군", "정선", "군" ],
                sub: {}
            },
            "CRW": {
                name: [ "철원군", "철원", "군" ],
                sub: {}
            },
            "PYC": {
                name: [ "평창군", "평창", "군" ],
                sub: {}
            },
            "HCH": {
                name: [ "홍천군", "홍천", "군" ],
                sub: {}
            },
            "HWH": {
                name: [ "화천군", "화천", "군" ],
                sub: {}
            },
            "HOE": {
                name: [ "횡성군", "횡성", "군" ],
                sub: {}
            }
        }
    },
    "JJU": {
        name: [ "제주특별자치도", "제주", "특별자치도" ],
        sub: {
            "JCT": {
                name: [ "제주시", "제주", "시" ],
                sub: {}
            },
            "GWI": {
                name: [ "서귀포시", "서귀포", "시" ],
                sub: {}
            },
        }
    }
}