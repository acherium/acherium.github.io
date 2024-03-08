(() => {
    // 변수, 상수 정의
    const info = {
        name: "Project Pyxis",
        author: "Acherium",
        version: "1.0.candi.1@240308",
    }
    const list = {};
    const pos = {
        x: 0,
        y: 0
    };
    let scale = 11;
    const color = {
        r: 255,
        g: 100,
        b: 100
    };
    const backdropColor = {
        r: 119,
        g: 194,
        b: 245
    };
    const palette = [];
    let mode = 0;
    const modeList = {
        0: "이동",
        1: "단일 채움",
        2: "연속 채움",
        3: "지움"
    };
    const layerList = {
        "SEO": {
            group: document.querySelector("#GROUP-SEO"),
            layers: [
                document.querySelector("#GROUP-SEO-LAYER0"),
                document.querySelector("#GROUP-SEO-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "BUS": {
            group: document.querySelector("#GROUP-BUS"),
            layers: [
                document.querySelector("#GROUP-BUS-LAYER0"),
                document.querySelector("#GROUP-BUS-LAYER1"),
                document.querySelector("#GROUP-BUS-LAYER2"),
                document.querySelector("#GROUP-BUS-LAYER3"),
                document.querySelector("#GROUP-BUS-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            pageNode: null
        },
        "DAE": {
            group: document.querySelector("#GROUP-DAE"),
            layers: [
                document.querySelector("#GROUP-DAE-LAYER0"),
                document.querySelector("#GROUP-DAE-LAYER1"),
                document.querySelector("#GROUP-DAE-LAYER2"),
                document.querySelector("#GROUP-DAE-LAYER3"),
                document.querySelector("#GROUP-DAE-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            pageNode: null
        },
        "INC": {
            group: document.querySelector("#GROUP-INC"),
            layers: [
                document.querySelector("#GROUP-INC-LAYER0"),
                document.querySelector("#GROUP-INC-LAYER1"),
                document.querySelector("#GROUP-INC-LAYER2"),
                document.querySelector("#GROUP-INC-LAYER3"),
                document.querySelector("#GROUP-INC-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            pageNode: null
        },
        "GWJ": {
            group: document.querySelector("#GROUP-GWJ"),
            layers: [
                document.querySelector("#GROUP-GWJ-LAYER0"),
                document.querySelector("#GROUP-GWJ-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "DJN": {
            group: document.querySelector("#GROUP-DJN"),
            layers: [
                document.querySelector("#GROUP-DJN-LAYER0"),
                document.querySelector("#GROUP-DJN-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "ULS": {
            group: document.querySelector("#GROUP-ULS"),
            layers: [
                document.querySelector("#GROUP-ULS-LAYER0"),
                document.querySelector("#GROUP-ULS-LAYER1"),
                document.querySelector("#GROUP-ULS-LAYER2"),
                document.querySelector("#GROUP-ULS-LAYER3"),
                document.querySelector("#GROUP-ULS-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            pageNode: null
        },
        "SEJ": {
            group: document.querySelector("#GROUP-SEJ"),
            layers: [
                document.querySelector("#GROUP-SEJ-LAYER0"),
                document.querySelector("#GROUP-SEJ-LAYER1"),
                document.querySelector("#GROUP-SEJ-LAYER2"),
                document.querySelector("#GROUP-SEJ-LAYER3")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0 ]
                },
                1: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 1, 1, 0 ]
                },
                2: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1 ]
                },
                3: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0 ]
                },
            },
            active: 0,
            tabNode: null,
            pageNode: null
        },
        "SGG": {
            group: document.querySelector("#GROUP-SGG"),
            layers: [
                document.querySelector("#GROUP-SGG-LAYER0"),
                document.querySelector("#GROUP-SGG-LAYER1"),
                document.querySelector("#GROUP-SGG-LAYER2"),
                document.querySelector("#GROUP-SGG-LAYER3"),
                document.querySelector("#GROUP-SGG-LAYER4"),
                document.querySelector("#GROUP-SGG-LAYER5"),
                document.querySelector("#GROUP-SGG-LAYER6"),
                document.querySelector("#GROUP-SGG-LAYER7"),
                document.querySelector("#GROUP-SGG-LAYER8"),
                document.querySelector("#GROUP-SGG-LAYER9"),
                document.querySelector("#GROUP-SGG-LAYER10"),
                document.querySelector("#GROUP-SGG-LAYER11"),
                document.querySelector("#GROUP-SGG-LAYER12"),
                document.querySelector("#GROUP-SGG-LAYER13"),
                document.querySelector("#GROUP-SGG-LAYER14"),
                document.querySelector("#GROUP-SGG-LAYER15"),
                document.querySelector("#GROUP-SGG-LAYER16")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 구",
                    value: [ 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                3: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0 ]
                },
                4: {
                    name: "시내지역, 구 및 시외지역",
                    value: [ 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0 ]
                },
                5: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                6: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                7: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "NCC": {
            group: document.querySelector("#GROUP-NCC"),
            layers: [
                document.querySelector("#GROUP-NCC-LAYER0"),
                document.querySelector("#GROUP-NCC-LAYER1"),
                document.querySelector("#GROUP-NCC-LAYER2"),
                document.querySelector("#GROUP-NCC-LAYER3"),
                document.querySelector("#GROUP-NCC-LAYER4"),
                document.querySelector("#GROUP-NCC-LAYER5"),
                document.querySelector("#GROUP-NCC-LAYER6"),
                document.querySelector("#GROUP-NCC-LAYER7"),
                document.querySelector("#GROUP-NCC-LAYER8"),
                document.querySelector("#GROUP-NCC-LAYER9"),
                document.querySelector("#GROUP-NCC-LAYER10"),
                document.querySelector("#GROUP-NCC-LAYER11"),
                document.querySelector("#GROUP-NCC-LAYER12"),
                document.querySelector("#GROUP-NCC-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "SCC": {
            group: document.querySelector("#GROUP-SCC"),
            layers: [
                document.querySelector("#GROUP-SCC-LAYER0"),
                document.querySelector("#GROUP-SCC-LAYER1"),
                document.querySelector("#GROUP-SCC-LAYER2"),
                document.querySelector("#GROUP-SCC-LAYER3"),
                document.querySelector("#GROUP-SCC-LAYER4"),
                document.querySelector("#GROUP-SCC-LAYER5"),
                document.querySelector("#GROUP-SCC-LAYER6"),
                document.querySelector("#GROUP-SCC-LAYER7"),
                document.querySelector("#GROUP-SCC-LAYER8"),
                document.querySelector("#GROUP-SCC-LAYER9"),
                document.querySelector("#GROUP-SCC-LAYER10"),
                document.querySelector("#GROUP-SCC-LAYER11"),
                document.querySelector("#GROUP-SCC-LAYER12"),
                document.querySelector("#GROUP-SCC-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "NJE": {
            group: document.querySelector("#GROUP-NJE"),
            layers: [
                document.querySelector("#GROUP-NJE-LAYER0"),
                document.querySelector("#GROUP-NJE-LAYER1"),
                document.querySelector("#GROUP-NJE-LAYER2"),
                document.querySelector("#GROUP-NJE-LAYER3"),
                document.querySelector("#GROUP-NJE-LAYER4"),
                document.querySelector("#GROUP-NJE-LAYER5"),
                document.querySelector("#GROUP-NJE-LAYER6"),
                document.querySelector("#GROUP-NJE-LAYER7"),
                document.querySelector("#GROUP-NJE-LAYER8")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "SJE": {
            group: document.querySelector("#GROUP-SJE"),
            layers: [
                document.querySelector("#GROUP-SJE-LAYER0"),
                document.querySelector("#GROUP-SJE-LAYER1"),
                document.querySelector("#GROUP-SJE-LAYER2"),
                document.querySelector("#GROUP-SJE-LAYER3"),
                document.querySelector("#GROUP-SJE-LAYER4"),
                document.querySelector("#GROUP-SJE-LAYER5"),
                document.querySelector("#GROUP-SJE-LAYER6"),
                document.querySelector("#GROUP-SJE-LAYER7")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 시내지역",
                    value: [ 0, 1, 0, 1, 1, 0, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                4: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "NGS": {
            group: document.querySelector("#GROUP-NGS"),
            layers: [
                document.querySelector("#GROUP-NGS-LAYER0"),
                document.querySelector("#GROUP-NGS-LAYER1"),
                document.querySelector("#GROUP-NGS-LAYER2"),
                document.querySelector("#GROUP-NGS-LAYER3"),
                document.querySelector("#GROUP-NGS-LAYER4"),
                document.querySelector("#GROUP-NGS-LAYER5"),
                document.querySelector("#GROUP-NGS-LAYER6"),
                document.querySelector("#GROUP-NGS-LAYER7"),
                document.querySelector("#GROUP-NGS-LAYER8"),
                document.querySelector("#GROUP-NGS-LAYER9"),
                document.querySelector("#GROUP-NGS-LAYER10"),
                document.querySelector("#GROUP-NGS-LAYER11"),
                document.querySelector("#GROUP-NGS-LAYER12"),
                document.querySelector("#GROUP-NGS-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "SGS": {
            group: document.querySelector("#GROUP-SGS"),
            layers: [
                document.querySelector("#GROUP-SGS-LAYER0"),
                document.querySelector("#GROUP-SGS-LAYER1"),
                document.querySelector("#GROUP-SGS-LAYER2"),
                document.querySelector("#GROUP-SGS-LAYER3"),
                document.querySelector("#GROUP-SGS-LAYER4"),
                document.querySelector("#GROUP-SGS-LAYER5"),
                document.querySelector("#GROUP-SGS-LAYER6"),
                document.querySelector("#GROUP-SGS-LAYER7"),
                document.querySelector("#GROUP-SGS-LAYER8"),
                document.querySelector("#GROUP-SGS-LAYER9"),
                document.querySelector("#GROUP-SGS-LAYER10"),
                document.querySelector("#GROUP-SGS-LAYER11"),
                document.querySelector("#GROUP-SGS-LAYER12"),
                document.querySelector("#GROUP-SGS-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "GWN": {
            group: document.querySelector("#GROUP-GWN"),
            layers: [
                document.querySelector("#GROUP-GWN-LAYER0"),
                document.querySelector("#GROUP-GWN-LAYER1"),
                document.querySelector("#GROUP-GWN-LAYER2"),
                document.querySelector("#GROUP-GWN-LAYER3"),
                document.querySelector("#GROUP-GWN-LAYER4"),
                document.querySelector("#GROUP-GWN-LAYER5"),
                document.querySelector("#GROUP-GWN-LAYER6"),
                document.querySelector("#GROUP-GWN-LAYER7")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 시내지역",
                    value: [ 0, 1, 0, 1, 1, 0, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                4: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "JJU": {
            group: document.querySelector("#GROUP-JJU"),
            layers: [
                document.querySelector("#GROUP-JJU-LAYER0"),
                document.querySelector("#GROUP-JJU-LAYER1"),
                document.querySelector("#GROUP-JJU-LAYER2"),
                document.querySelector("#GROUP-JJU-LAYER3"),
                document.querySelector("#GROUP-JJU-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "행정시",
                    value: [ 0, 1, 0, 0, 0 ]
                },
                2: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                4: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "XNG": {
            group: document.querySelector("#GROUP-XNG"),
            layers: [
                document.querySelector("#GROUP-XNG-LAYER0"),
                document.querySelector("#GROUP-XNG-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "XGW": {
            group: document.querySelector("#GROUP-XGW"),
            layers: [
                document.querySelector("#GROUP-XGW-LAYER0"),
                document.querySelector("#GROUP-XGW-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "XHW": {
            group: document.querySelector("#GROUP-XHW"),
            layers: [
                document.querySelector("#GROUP-XHW-LAYER0"),
                document.querySelector("#GROUP-XHW-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "XNP": {
            group: document.querySelector("#GROUP-XNP"),
            layers: [
                document.querySelector("#GROUP-XNP-LAYER0"),
                document.querySelector("#GROUP-XNP-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "XSP": {
            group: document.querySelector("#GROUP-XSP"),
            layers: [
                document.querySelector("#GROUP-XSP-LAYER0"),
                document.querySelector("#GROUP-XSP-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "XNH": {
            group: document.querySelector("#GROUP-XNH"),
            layers: [
                document.querySelector("#GROUP-XNH-LAYER0"),
                document.querySelector("#GROUP-XNH-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        },
        "XSH": {
            group: document.querySelector("#GROUP-XSH"),
            layers: [
                document.querySelector("#GROUP-XSH-LAYER0"),
                document.querySelector("#GROUP-XSH-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            pageNode: null
        }
    };
    const keikenchiMapInitList = [
        [
            0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            2, 2, 2, 2, 2, 2, 2
        ],
        [
            1,
            2, 2, 2, 1, 1, 2, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2
        ],
        [
            1,
            4, 4, 4, 1, 1, 4, 2,
            6, 0, 0, 0, 0, 0, 0, 3, 3,
            2, 2, 2, 2, 2, 2, 2
        ],
        [
            0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0
        ],
        [
            1,
            2, 2, 2, 1, 1, 2, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1
        ],
        [
            1,
            4, 4, 4, 1, 1, 4, 2,
            6, 0, 0, 0, 0, 0, 0, 3, 3,
            1, 1, 1, 1, 1, 1, 1
        ]
    ];
    const keikenchiList = {};

    // 노드 정의
    const $bottom = document.querySelector("#bottom-area");
    const $areaName = document.querySelector("#area-name-preview");
    const $koreamap = document.querySelector("#map-viewport");
    const $backdrop = document.querySelector("#map-backdrop");
    const $layerScale = document.querySelector("#map-scale");
    const $layerPosition = document.querySelector("#map-position");
    const $mapConfigTabArea = document.querySelector(".map-config-tab-area");
    const $mapConfigPageArea = document.querySelector(".map-config-page-area");
    const $recentColorPalette = document.querySelector("#recent-color").querySelectorAll("div");
    const $colorPickerPreview = document.querySelector("#toolbar-color-picker-preview");
    const $backdropColorPalette = document.querySelector("#backdrop-color-palette");
    const $backdropColorPreview = document.querySelector("#backdrop-color-preview");
    const $iHEX = $colorPickerPreview.querySelector("#input-hex");
    const $iRGBr = $colorPickerPreview.querySelector("#input-rgb-r");
    const $iRGBg = $colorPickerPreview.querySelector("#input-rgb-g");
    const $iRGBb = $colorPickerPreview.querySelector("#input-rgb-b");
    const $buttonsFillmode = {
        0: document.querySelector("#button-fillmode-none"),
        1: document.querySelector("#button-fillmode-single"),
        2: document.querySelector("#button-fillmode-multiple"),
        3: document.querySelector("#button-fillmode-erase"),
    };
    const $buttonToggleToolbar1 = document.querySelector("#button-toggle-toolbar-toolbar");
    const $buttonToggleToolbar2 = document.querySelector("#button-toggle-toolbar-viewport");
    const $buttonZoomin = document.querySelector("#button-scale-zoomin");
    const $buttonZoomout = document.querySelector("#button-scale-zoomout");
    const $buttonExport = document.querySelector("#button-export");
    const $buttonImport = document.querySelector("#button-import");
    const $buttonReset = document.querySelector("#button-reset");
    const $buttonsKeikenchiMapInit = [
        document.querySelector("#button-initialize-keikenchi-map0"),
        document.querySelector("#button-initialize-keikenchi-map1"),
        document.querySelector("#button-initialize-keikenchi-map2"),
        document.querySelector("#button-initialize-keikenchi-map3"),
        document.querySelector("#button-initialize-keikenchi-map4"),
        document.querySelector("#button-initialize-keikenchi-map5")
    ]
    const $buttonsWindowToggle = {
        "CONFIG": document.querySelector("#button-window-config"),
        "KEIKENCHI": document.querySelector("#button-window-keikenchi"),
        "COLORPICKER": document.querySelector("#color-preview"),
        "BACKDROPCOLORPICKER": document.querySelector("#backdrop-color-preview"),
        "DOWNLOAD": document.querySelector("#button-window-download"),
        "EXPORT": document.querySelector("#button-window-export"),
        "IMPORT": document.querySelector("#button-window-import"),
        "RESET": document.querySelector("#button-window-reset")
    };
    const $windows = {
        "CONFIG": document.querySelector("#toolbar-map-config"),
        "KEIKENCHI": document.querySelector("#toolbar-keikenchi"),
        "COLORPICKER": document.querySelector("#toolbar-color-picker"),
        "BACKDROPCOLORPICKER": document.querySelector("#toolbar-backdrop-color-picker"),
        "DOWNLOAD": document.querySelector("#toolbar-download"),
        "EXPORT": document.querySelector("#toolbar-export"),
        "IMPORT": document.querySelector("#toolbar-import"),
        "RESET": document.querySelector("#toolbar-reset")
    };

    // 함수 정의
    const setHash = () => {
        location.hash = `pos=${pos.x},${pos.y}&scale=${scale}`;
    };
    const getHash = () => {
        const filter = [ "pos", "scale" ];
        const hash = location.hash.substring(1).split("&");
        const res = {};
        hash.forEach((x, i) => {
            const data = x.split("=");
            if (!filter.includes(data[0])) return;
            res[data[0]] = data[1];
        });
        return res;
    };
    const refreshRecentColorPalette = () => {
        Array.from($recentColorPalette).forEach(($box, i) => {
            if (!palette[i]) return;
            $box.style["background-color"] = `#${palette[i].hex}`;
            $box.setAttribute("value", Object.values(palette[i].rgb).join(","));
        });
        return 0;
    };
    const addPalette = (col) => {
        const hex = RGBtoHEX(col);
        if (palette.filter((x) => x.hex === hex).length) return;
        if (palette.length >= 20) palette.pop();
        palette.unshift({ rgb: { r: col.r, g: col.g, b: col.b }, hex: hex });
        refreshRecentColorPalette();
        return 0;
    };
    const fillmodeFunctions = {
        0: () => {
            $koreamap.onmousedown = () => {
                setHash();
                $koreamap.onmousemove = (mousemove) => {
                    pos.x += mousemove.movementX / scale;
                    pos.y += mousemove.movementY / scale;
                    $layerPosition.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
                };
            };
            $koreamap.onmousemove = null;
            $koreamap.onmouseup = () => {
                $koreamap.onmousemove = null;
                setHash();
            };
            $koreamap.ontouchstart = (touchesOrigin) => {
                setHash();
                const xo = touchesOrigin.changedTouches[0].pageX;
                const yo = touchesOrigin.changedTouches[0].pageY;
                let xl = xo;
                let yl = yo;
                $koreamap.ontouchmove = (touches) => {
                    const x = touches.changedTouches[0].pageX;
                    const y = touches.changedTouches[0].pageY;
                    const movementX = x - xl;
                    const movementY = y - yl;
                    xl = x;
                    yl = y;
                    pos.x += movementX / scale;
                    pos.y += movementY / scale;
                    $layerPosition.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
                };
            };
            $koreamap.ontouchmove = null;
            $koreamap.ontouchend = () => {
                $koreamap.ontouchmove = null;
                setHash();
            };
        },
        1: () => {
            $koreamap.onmousedown = (mouse) => {
                if (!mouse.target.classList.contains("map-area")) return;
                mouse.target.style["fill"] = `#${RGBtoHEX(color)}`;
                addList(mouse.target.id, `#${RGBtoHEX(color)}`);
                addPalette(color);
            };
            $koreamap.onmousemove = null;
            $koreamap.onmouseup = null;
            $koreamap.ontouchstart = (touch) => {
                if (!touch.target.classList.contains("map-area")) return;
                touch.target.style["fill"] = `#${RGBtoHEX(color)}`;
                addList(touch.target.id, `#${RGBtoHEX(color)}`);
                addPalette(color);
            };
            $koreamap.ontouchmove = null;
            $koreamap.ontouchend = null;
        },
        2: () => {
            $koreamap.onmousedown = (mouse) => {
                $koreamap.onmousemove = (mousemove) => {
                    if (!mousemove.target.classList.contains("map-area")) return;
                    mousemove.target.style["fill"] = `#${RGBtoHEX(color)}`;
                    addList(mousemove.target.id, `#${RGBtoHEX(color)}`);
                    addPalette(color);
                };
    
                if (!mouse.target.classList.contains("map-area")) return;
                mouse.target.style["fill"] = `#${RGBtoHEX(color)}`;
                addList(mouse.target.id, `#${RGBtoHEX(color)}`);
                addPalette(color);
            };
            $koreamap.onmousemove = null;
            $koreamap.onmouseup = () => {
                $koreamap.onmousemove = null;
            };
            $koreamap.ontouchstart = (touch) => {
                if (!touch.target.classList.contains("map-area")) return;
                touch.target.style["fill"] = `#${RGBtoHEX(color)}`;
                addList(touch.target.id, `#${RGBtoHEX(color)}`);
                addPalette(color);
            };
            $koreamap.ontouchmove = null;
            $koreamap.ontouchend = () => {
                $koreamap.ontouchmove = null;
            };
        },
        3: () => {
            $koreamap.onmousedown = (mouse) => {
                $koreamap.onmousemove = (mousemove) => {
                    if (!mousemove.target.classList.contains("map-area")) return;
                    mousemove.target.style["fill"] = null;
                    removeList(mousemove.target.id);
                };
    
                if (!mouse.target.classList.contains("map-area")) return;
                mouse.target.style["fill"] = null;
                removeList(mouse.target.id);
            };
            $koreamap.onmouseup = () => {
                $koreamap.onmousemove = null;
            };
            $koreamap.ontouchstart = (touch) => {
                if (!touch.target.classList.contains("map-area")) return;
                touch.target.style["fill"] = null;
                removeList(touch.target.id);
            };
            $koreamap.ontouchmove = null;
            $koreamap.ontouchend = () => {
                $koreamap.ontouchmove = null;
            };
        }
    };
    const applyMode = (id) => {
        fillmodeFunctions[id]();
        Object.values($buttonsFillmode).forEach((button) => {
            button.classList.remove("toolbar-button-active");
        });
        $buttonsFillmode[id].classList.add("toolbar-button-active");
    };
    const setScale = (i) => {
        if (Number.isNaN(parseInt(i))) return;
        if (i <= 0 || i > 100) return;
        scale = i;
        $layerScale.style["transform"] = `scale(${scale})`;
        setHash();
        return 0;
    };
    const addScale = (i) => {
        if (Number.isNaN(parseInt(i))) return;
        if (scale + i <= 0 || scale + i > 100) return;
        scale += i;
        $layerScale.style["transform"] = `scale(${scale})`;
        setHash();
        return 0;
    };
    const setLayer = (name, number) => {
        if (typeof number === "undefined") return;
        keikenchiList[name] = {};
        layerList[name].active = number;
        layerList[name].options[number].value.forEach((x, i) => {
            if (x) {
                Array.from(layerList[name].layers[i].querySelectorAll(".map-area")).forEach((y) => {
                    keikenchiList[name][y.id] = 0;
                });
                layerList[name].layers[i].style["display"] = "block";
            } else {
                layerList[name].layers[i].style["display"] = "none";
            };
        });
        return 0;
    };
    const applyBackdropColor = () => {
        const hex = `#${RGBtoHEX(backdropColor)}`;
        $koreamap.style["background-color"] = hex;
        $backdrop.style["fill"] = hex;
        $backdropColorPreview.style["background-color"] = hex;
        return 0;
    };
    const applyColorPicker = () => {
        const $colorPreview = document.querySelector("#color-preview");
        const $colorPickerPreview = document.querySelector("#toolbar-color-picker-preview");
        const $iHEX = $colorPickerPreview.querySelector("#input-hex");
        const $iRGBr = $colorPickerPreview.querySelector("#input-rgb-r");
        const $iRGBg = $colorPickerPreview.querySelector("#input-rgb-g");
        const $iRGBb = $colorPickerPreview.querySelector("#input-rgb-b");
    
        const HEX = RGBtoHEX(color);
        $colorPreview.style["background-color"] = `#${HEX}`;
        $colorPickerPreview.style["background-color"] = `#${HEX}`;
        $iHEX.value = HEX;
        $iRGBr.value = color.r;
        $iRGBg.value = color.g;
        $iRGBb.value = color.b;
    
        Array.from(document.querySelectorAll(".color-picker-cursor")).forEach((node) => {
            const i = color[node.getAttribute("target")];
            node.style["left"] = `${i}px`;
        });
    };
    const RGBtoHEX = (rgb) => {
        let r = rgb.r.toString(16).toUpperCase();
        let g = rgb.g.toString(16).toUpperCase();
        let b = rgb.b.toString(16).toUpperCase();
        r = r.length === 1 ? `0${r}` : r;
        g = g.length === 1 ? `0${g}` : g;
        b = b.length === 1 ? `0${b}` : b;
    
        return `${r}${g}${b}`;
    };
    const exportList = () => {
        return btoa(JSON.stringify(list));
    };
    const copyExportCode = () => {
        window.navigator.clipboard.writeText(exportList());
        return 0;
    };
    const refreshExportCodePreview = () => {
        const codePreview = document.querySelector("#export-string-preview");
        codePreview.innerText = exportList();
        return 0;
    };
    const importCode = () => {
        const string = document.querySelector("#import-string-area").value;
        try {
            const origin = atob(string);
            const newList = JSON.parse(origin);
            Object.keys(list).forEach((x) => {
                document.querySelector(`#${x}`).style["fill"] = null;
                removeList(x);
            });
            Object.keys(newList).forEach((x) => {
                document.querySelector(`#${x}`).style["fill"] = newList[x];
                addList(x, newList[x]);
            });
            alert("데이터를 가져왔습니다.");
        } catch(error) {
            alert("가져오기에 실패했습니다!\n입력한 값이 올바르지 않습니다.");
        };
        return 0;
    };
    const addList = (name, color) => {
        list[name] = color;
        refreshExportCodePreview();
    };
    const removeList = (name) => {
        delete list[name];
        refreshExportCodePreview();
    };
    const mapReset = () => {
        Array.from(document.querySelectorAll(".map-area")).forEach(($node) => {
            $node.style["fill"] = null;
        });
        refreshExportCodePreview();
    };
    const initFromHash = () => {
        const hash = getHash();
        if (hash.pos) {
            const hashPos = hash.pos.split(",")
            if (hashPos.length !== 2) return;
            if (Number.isNaN(Number(hashPos[0])) || Number.isNaN(Number(hashPos[1]))) return;
            pos.x = Number(hashPos[0]);
            pos.y = Number(hashPos[1]);
        };
        if (hash.scale) {
            setScale(parseInt(hash.scale));
        };
    };
    const setLayerAll = (array) => {
        if (!array || array.constructor !== Array || array.length !== Object.keys(layerList).length) return;
        array.forEach((x, i) => {
            setLayer(Object.keys(layerList)[i], x);
        });
    };

    // 초기화
    document.addEventListener("DOMContentLoaded", () => {
        document.body.style["animation-name"] = "document-ready";
        document.body.style["animation-duration"] = "0.5s";
        document.body.style["animation-timing-function"] = "ease-out";
        document.body.style["animation-fill-mode"] = "forwards";
    });

    document.onpointermove = (pointer) => {
        if (!pointer.target.classList.contains("map-area")) {
            $areaName.innerText = null;
            $areaName.style["display"] = "none";
        } else {
            const regionCode = pointer.target.id.split("-");
            const regionData = [];
            regionCode.forEach((x, i) => {
                if (i <= 0) {
                    regionData.push(REGIONSALT[x] ? REGIONSALT[x] : x);
                } else {
                    regionData.push(regionData[i - 1].name ? ( regionData[i - 1].sub[x] ? regionData[i-1].sub[x] : x) : x);
                };
            });
            $areaName.innerText = regionData.filter((x) => x).map((x) => x.name ? x.name[0] : x).filter((x) => x).join(" ").trim();
            $areaName.style["display"] = "flex";
        };
    };
    $koreamap.onwheel = (wheel) => {
        addScale(wheel.deltaY < 0 ? 5 : -5);
    };

    initFromHash();
    $layerPosition.style["transform"] = `translate(${pos.x}px, ${pos.y}px)`;
    setHash();

    applyMode(0);
    applyBackdropColor();
    applyColorPicker();
    refreshExportCodePreview();

    Array.from(document.querySelectorAll(".color-picker-cursor")).forEach(($node) => {
        $node.onmousedown = (mouse) => {
            $node.setPointerCapture(mouse.pointerId);

            $node.onmousemove = (drag) => {
                let i = color[$node.getAttribute("target")];
                i += drag.movementX;
                i = i < 0 ? 0 : ( i > 255 ? 255 : i );
                $node.style["left"] = `${i}px`;
                color[$node.getAttribute("target")] = i;
                applyColorPicker();
            };
            $node.onmouseup = () => {
                $node.onmousemove = null;
                $node.releasePointerCapture(mouse.pointerId);
            };
        };

        $node.ontouchstart = (touchesOrigin) => {
            const xo = touchesOrigin.changedTouches[0].pageX;
            let xl = xo;

            $node.ontouchmove = (touches) => {
                const x = touches.changedTouches[0].pageX;
                const movementX = x - xl;
                xl = x;
                
                let i = color[$node.getAttribute("target")];
                i += Math.round(movementX);
                i = i < 0 ? 0 : ( i > 255 ? 255 : i );
                $node.style["left"] = `${i}px`;
                color[$node.getAttribute("target")] = i;
                applyColorPicker();
            };

            $node.ontouchend = () => {
                $node.ontouchmove = null;
            };
        };
    });
    Array.from($backdropColorPalette.querySelectorAll(".palette-item")).forEach(($node) => {
        $node.onclick = () => {
            const raw = $node.getAttribute("value");
            if (!raw) {
                backdropColor.r = 0;
                backdropColor.g = 0;
                backdropColor.b = 0;
                applyBackdropColor();
                return;
            };
            const col = raw.split(",").map((x) => parseInt(x));
            backdropColor.r = col[0];
            backdropColor.g = col[1];
            backdropColor.b = col[2];
            applyBackdropColor();
            return;
        };
    });
    
    Object.values($buttonsWindowToggle).forEach(($node, i) => {
        const $target = Object.values($windows)[i];
        $node.addEventListener("click", () => {
            $target.style["display"] = $target.style["display"] === "flex" ? "none" : "flex";
        });
    });
    Object.keys($buttonsFillmode).forEach((id) => {
        $buttonsFillmode[id].onclick = () => {
            applyMode(id);
        };
    });
    $buttonToggleToolbar1.onclick = () => {
        $bottom.style["display"] = "none"
        $buttonToggleToolbar2.style["display"] = "flex";
    };
    $buttonToggleToolbar2.onclick = () => {
        $bottom.style["display"] = "flex";
        $buttonToggleToolbar2.style["display"] = "none";
    };
    $buttonZoomin.onclick = () => addScale(5);
    $buttonZoomout.onclick = () => addScale(-5);
    $buttonExport.onclick = () => {
        copyExportCode();
        alert("데이터를 클립보드에 복사했습니다.");
    };
    $buttonImport.onclick = () => {
        importCode();
    };
    $buttonReset.onclick = () => {
        const res = confirm("정말 지도를 초기화합니까?");
        if (res) {
            mapReset();
            alert("지도를 초기화했습니다.");
        };
    };
    $buttonsKeikenchiMapInit.forEach(($node, i) => {
        $node.onclick = () => {
            setLayerAll(keikenchiMapInitList[i]);
        };
    });

    Array.from($recentColorPalette).forEach(($box) => {
        $box.onclick = () => {
            const raw = $box.getAttribute("value");
            if (!raw) {
                color.r = 0;
                color.g = 0;
                color.b = 0;
                applyColorPicker();
                return;
            };
            const col = raw.split(",").map((x) => parseInt(x));
            color.r = col[0];
            color.g = col[1];
            color.b = col[2];
            applyColorPicker();
            return;
        };
    });

    $iHEX.onchange = () => {
        const r = parseInt($iHEX.value.substring(0, 2), 16);
        const g = parseInt($iHEX.value.substring(2, 4), 16);
        const b = parseInt($iHEX.value.substring(4, 6), 16);
        if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
            color.r = 255;
            color.g = 255;
            color.b = 255;
        } else {
            color.r = r;
            color.g = g;
            color.b = b;
        };
        applyColorPicker();
    };
    [ $iRGBr, $iRGBg, $iRGBb ].forEach(($node, i) => {
        $node.onchange = () => {
            if (Number.isNaN(parseInt($node.value)) || parseInt($node.value) < 0 || parseInt($node.value) > 255) {
                color[Object.keys(color)[i]] = 0;
            } else {
                color[Object.keys(color)[i]] = parseInt($node.value);
            };
            applyColorPicker();
        };
    });

    Object.keys(layerList).forEach((x) => {
        const $tab = document.createElement("div");
        $tab.classList.add("map-config-tab");
        $tab.setAttribute("target", x);
        $tab.innerText = REGIONSALT[x] ? REGIONSALT[x].name[0] : x;
        $mapConfigTabArea.append($tab);

        const $page = document.createElement("div");
        $page.id = `map-config-${x}`;
        $page.classList.add("config-page-main");
        Object.values(layerList[x].options).forEach((option, i) => {
            const $content = document.createElement("div");
            $content.innerText = option.name;
            $content.onclick = () => {
                setLayer(x, i);

                const $oldContent = $page.querySelector(".map-config-page-content-active");
                if ($oldContent) $oldContent.classList.remove("map-config-page-content-active");
                $content.classList.add("map-config-page-content-active");
            };
            $page.append($content);
        });

        $tab.onclick = () => {
            const $old = document.querySelector(".map-config-tab-active");
            if ($old) $old.classList.remove("map-config-tab-active");
            $tab.classList.add("map-config-tab-active");

            const $oldPage = document.querySelector(".map-config-page-active");
            if ($oldPage) $oldPage.classList.remove("map-config-page-active");
            $page.classList.add("map-config-page-active");
        };
        $mapConfigPageArea.append($page);

        layerList[x].tabNode = $tab;
        layerList[x].pageNode = $page;
    });
    Object.keys(layerList).forEach((x) => {
        setLayer(x, layerList[x].active);
        Array.from(layerList[x].pageNode.querySelectorAll("div"))[layerList[x].active].classList.add("map-config-page-content-active");
    });
    Array.from($mapConfigTabArea.childNodes)[0]?.click();

    const watermark = document.querySelector("p");
    watermark.id = "watermark";
    watermark.innerText = `${info.name}\nv${info.version}`;
    document.body.append(watermark);
})();