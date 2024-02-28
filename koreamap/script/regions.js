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