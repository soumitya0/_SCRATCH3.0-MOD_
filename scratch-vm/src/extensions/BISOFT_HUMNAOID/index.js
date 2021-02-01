const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const log = require("../../util/log");
const HUMANOIDImg = require("./humanoidDeviceExtension.png");

const getByteData = require("../../byteDataGenerate/byteDataGen");

let ZING_ALL_PORTS_Array = [
    {
        text: "A1",
        value: "A1",
    },
    {
        text: "A2",
        value: "A2",
    },
    {
        text: "C1",
        value: "C1",
    },
    {
        text: "D1",
        value: "D1",
    },
    {
        text: "D2",
        value: "D2",
    },
];

let ZING_BRIGHTNESS_PORTS_Array = [
    {
        text: "C1",
        value: "C1",
    },
    {
        text: "D1",
        value: "D1",
    },
];

let ZING_CHECK_LOGIC_PORTS_Array = [
    {
        text: "A1",
        value: "A1",
    },
    {
        text: "A2",
        value: "A2",
    },

    {
        text: "B1",
        value: "B1",
    },
    {
        text: "B2",
        value: "B2",
    },

    {
        text: "C1",
        value: "C1",
    },
    {
        text: "C2",
        value: "C2",
    },

    {
        text: "D1",
        value: "D1",
    },
    {
        text: "D2",
        value: "D2",
    },
];

let ZING_ANALOG_PORTS_Array = [
    {
        text: "A1",
        value: "A1",
    },
    {
        text: "A2",
        value: "A2",
    },
    {
        text: "B1",
        value: "B1",
    },
    {
        text: "B2",
        value: "B2",
    },
    {
        text: "C1",
        value: "C1",
    },
    {
        text: "C2",
        value: "C2",
    },
    {
        text: "D1",
        value: "D1",
    },
];

class BISOFT_HUMANOID {
    constructor(runtime) {
        this.runtime = runtime;
    }

    ZING_ALL_PORTS_MENU(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData ACE_ALL_PORTS_Array", sessionData);

        if (sessionData.length == 0) {
            ZING_ALL_PORTS_Array = [
                {
                    text: "A1",
                    value: "A1",
                },
                {
                    text: "A2",
                    value: "A2",
                },
                {
                    text: "C1",
                    value: "C1",
                },
                {
                    text: "D1",
                    value: "D1",
                },
                {
                    text: "D2",
                    value: "D2",
                },
            ];
        }

        sessionData.map((data, index) => {
            let blockName = data.blockName;

            switch (blockName) {
                case "ZING_BrightnesPorts": {
                    ZING_ALL_PORTS_Array = ZING_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_InputPorts": {
                    ZING_ALL_PORTS_Array = ZING_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_AnalogRead": {
                    ZING_ALL_PORTS_Array = ZING_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
            }

            if (data.blockName != "ZING_SetDgitalports") {
                ZING_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];
                ZING_CHECK_LOGIC_PORTS_MENU = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },

                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "B2",
                        value: "B2",
                    },

                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "C2",
                        value: "C2",
                    },

                    {
                        text: "D1",
                        value: "D1",
                    },
                    {
                        text: "D2",
                        value: "D2",
                    },
                ];

                ZING_ANALOG_PORTS_Array = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "B2",
                        value: "B2",
                    },
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "C2",
                        value: "C2",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];
            }
        });

        // console.log("COME INSIDE ARRAY2", ACE_ALL_PORTS_Array);

        if (ZING_ALL_PORTS_Array.length == 0) {
            ZING_ALL_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }

        return ZING_ALL_PORTS_Array;
    }

    ZING_BRIGHTNESS_PORTS(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData ACE_ALL_PORTS_Array", sessionData);

        if (sessionData.length == 0) {
            ZING_BRIGHTNESS_PORTS_Array = [
                {
                    text: "C1",
                    value: "C1",
                },
                {
                    text: "D1",
                    value: "D1",
                },
            ];
        }

        sessionData.map((data, index) => {
            let blockName = data.blockName;

            switch (blockName) {
                case "ZING_SetDgitalports": {
                    ZING_BRIGHTNESS_PORTS_Array = ZING_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_InputPorts": {
                    ZING_BRIGHTNESS_PORTS_Array = ZING_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_AnalogRead": {
                    ZING_BRIGHTNESS_PORTS_Array = ZING_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
            }

            if (data.blockName != "ZING_BrightnesPorts") {
                ZING_ALL_PORTS_Array = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                    {
                        text: "D2",
                        value: "D2",
                    },
                ];
                ZING_CHECK_LOGIC_PORTS_MENU = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },

                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "B2",
                        value: "B2",
                    },

                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "C2",
                        value: "C2",
                    },

                    {
                        text: "D1",
                        value: "D1",
                    },
                    {
                        text: "D2",
                        value: "D2",
                    },
                ];

                ZING_ANALOG_PORTS_Array = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "B2",
                        value: "B2",
                    },
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "C2",
                        value: "C2",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];
            }
        });

        // console.log("COME INSIDE ARRAY2", ACE_ALL_PORTS_Array);

        if (ZING_BRIGHTNESS_PORTS_Array.length == 0) {
            ZING_BRIGHTNESS_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }

        return ZING_BRIGHTNESS_PORTS_Array;
    }

    ZING_CHECK_LOGIC_PORTS_MENU(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData ACE_ALL_PORTS_Array", sessionData);

        if (sessionData.length == 0) {
            ZING_CHECK_LOGIC_PORTS_Array = [
                {
                    text: "A1",
                    value: "A1",
                },
                {
                    text: "A2",
                    value: "A2",
                },

                {
                    text: "B1",
                    value: "B1",
                },
                {
                    text: "B2",
                    value: "B2",
                },

                {
                    text: "C1",
                    value: "C1",
                },
                {
                    text: "C2",
                    value: "C2",
                },

                {
                    text: "D1",
                    value: "D1",
                },
                {
                    text: "D2",
                    value: "D2",
                },
            ];
        }

        sessionData.map((data, index) => {
            let blockName = data.blockName;

            switch (blockName) {
                case "ZING_SetDgitalports": {
                    ZING_CHECK_LOGIC_PORTS_Array = ZING_CHECK_LOGIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_BrightnesPorts": {
                    ZING_CHECK_LOGIC_PORTS_Array = ZING_CHECK_LOGIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_AnalogRead": {
                    ZING_CHECK_LOGIC_PORTS_Array = ZING_CHECK_LOGIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
            }

            if (data.blockName != "ZING_InputPorts") {
                ZING_ALL_PORTS_Array = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                    {
                        text: "D2",
                        value: "D2",
                    },
                ];
                ZING_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ZING_ANALOG_PORTS_Array = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "B2",
                        value: "B2",
                    },
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "C2",
                        value: "C2",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];
            }
        });

        // console.log("COME INSIDE ARRAY2", ACE_ALL_PORTS_Array);

        if (ZING_CHECK_LOGIC_PORTS_Array.length == 0) {
            ZING_CHECK_LOGIC_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }

        return ZING_CHECK_LOGIC_PORTS_Array;
    }

    ZING_ANALOG_PORTS(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData ACE_ALL_PORTS_Array", sessionData);

        if (sessionData.length == 0) {
            ZING_ANALOG_PORTS_Array = [
                {
                    text: "A1",
                    value: "A1",
                },
                {
                    text: "A2",
                    value: "A2",
                },
                {
                    text: "B1",
                    value: "B1",
                },
                {
                    text: "B2",
                    value: "B2",
                },
                {
                    text: "C1",
                    value: "C1",
                },
                {
                    text: "C2",
                    value: "C2",
                },
                {
                    text: "D1",
                    value: "D1",
                },
            ];
        }

        sessionData.map((data, index) => {
            let blockName = data.blockName;

            switch (blockName) {
                case "ZING_SetDgitalports": {
                    ZING_ANALOG_PORTS_Array = ZING_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_BrightnesPorts": {
                    ZING_ANALOG_PORTS_Array = ZING_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ZING_InputPorts": {
                    ZING_ANALOG_PORTS_Array = ZING_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
            }

            if (data.blockName != "ZING_AnalogRead") {
                ZING_ALL_PORTS_Array = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                    {
                        text: "D2",
                        value: "D2",
                    },
                ];
                ZING_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ZING_CHECK_LOGIC_PORTS_Array = [
                    {
                        text: "A1",
                        value: "A1",
                    },
                    {
                        text: "A2",
                        value: "A2",
                    },

                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "B2",
                        value: "B2",
                    },

                    {
                        text: "C1",
                        value: "C1",
                    },
                    {
                        text: "C2",
                        value: "C2",
                    },

                    {
                        text: "D1",
                        value: "D1",
                    },
                    {
                        text: "D2",
                        value: "D2",
                    },
                ];
            }
        });

        // console.log("COME INSIDE ARRAY2", ACE_ALL_PORTS_Array);

        if (ZING_ANALOG_PORTS_Array.length == 0) {
            ZING_ANALOG_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }

        return ZING_ANALOG_PORTS_Array;
    }

    get LOGIC() {
        return [
            {
                text: "HIGH",
                value: "HIGH",
            },
            {
                text: "LOW",
                value: "LOW",
            },
        ];
    }

    get MOTOR_ACTIONS() {
        return [
            {
                text: "Forward",
                value: "Forward",
            },
            {
                text: "Backward",
                value: "Backward",
            },
            {
                text: "Left",
                value: "Left",
            },
            {
                text: "Right",
                value: "Right",
            },
        ];
    }

    get SERVO_PORTS() {
        return [
            {
                text: "1",
                value: "onePort",
            },
            {
                text: "2",
                value: "twoPort",
            },
            {
                text: "3",
                value: "threePort",
            },
            {
                text: "4",
                value: "fourPort",
            },
            {
                text: "5",
                value: "fivePort",
            },
            {
                text: "6",
                value: "sixPort",
            },
            {
                text: "7",
                value: "sevenPort",
            },
            {
                text: "8",
                value: "eightPort",
            },
            {
                text: "9",
                value: "ninePort",
            },
            {
                text: "10",
                value: "tenPort",
            },
            {
                text: "11",
                value: "elevenPort",
            },
            {
                text: "12",
                value: "twelvePort",
            },
            {
                text: "13",
                value: "thirteenPort",
            },
            {
                text: "14",
                value: "fourteenPort",
            },
            {
                text: "15",
                value: "fifteenPort",
            },
            {
                text: "16",
                value: "sixteenPort",
            },
        ];
    }

    get ULTRASONIC_PORTS() {
        return [
            {
                text: "B",
                value: "B",
            },

            {
                text: "C",
                value: "C",
            },
        ];
    }

    get COLOR() {
        return [
            {
                text: "red",
                value: "red",
            },
            {
                text: "green",
                value: "green",
            },
            {
                text: "blue",
                value: "blue",
            },
            {
                text: "distance",
                value: "distance",
            },
            {
                text: "light",
                value: "light",
            },
            {
                text: "gesture",
                value: "gesture",
            },
        ];
    }

    get PLAY_ACTION() {
        return [
            {
                text: "ATTENTION",
                value: "ATTENTION",
            },
            {
                text: "WAVE",
                value: "WAVE",
            },
            {
                text: "BLOW",
                value: "BLOW",
            },
            {
                text: "WINGS",
                value: "WINGS",
            },
            {
                text: "SQUAT",
                value: "SQUAT",
            },
            {
                text: "LAUGH",
                value: "LAUGH",
            },
            {
                text: "BOX FORWARD",
                value: "BOX_FORWARD",
            },
            {
                text: "BOX SQUAT",
                value: "BOX_SQUAT",
            },
            {
                text: "BOX LEFT",
                value: "BOX_LEFT",
            },
            {
                text: "BOX RIGHT",
                value: "BOX_RIGHT",
            },
            {
                text: "BREAK DANCE",
                value: "BREAK_DANCE",
            },
            {
                text: "GANGAM STYLE",
                value: "GANGAM_STYLE",
            },
            {
                text: "LEFT CURVED HOOK",
                value: "LEFT_CURVED_HOOK",
            },
            {
                text: "RIGHT CURVED HOOK",
                value: "RIGHT_CURVED_HOOK",
            },
            {
                text: "HOOK LEFT",
                value: "HOOK_LEFT",
            },
            {
                text: "HOOK RIGHT",
                value: "HOOK_RIGHT",
            },
            {
                text: "MOURN",
                value: "MOURN",
            },
            {
                text: "PUSH UP",
                value: "PUSH_UP",
            },
            {
                text: "SIT UP",
                value: "SIT_UP",
            },
        ];
    }

    getInfo() {
        return {
            id: "humanoid",
            name: "HUMANOID",
            color1: "#f76a8c",
            color2: "#f76a8c",

            menuIconURI: HUMANOIDImg,
            blockIconURI: HUMANOIDImg,
            blocks: [
                {
                    opcode: "ZING_setPortsLogic",
                    blockType: "command",
                    text: "Set [ZING_SetDgitalports]at Logic  [logic]",
                    arguments: {
                        ZING_SetDgitalports: {
                            type: "string",
                            menu: "allPorts",
                            defaultValue: "SELECT",
                        },
                        logic: {
                            type: "string",
                            menu: "logic",
                            defaultValue: "HIGH",
                        },
                    },
                },
                {
                    opcode: "ZING_setBrightness",
                    text:
                        "set [ZING_BrightnesPorts]at  brightness [brightness]%",
                    blockType: "command",
                    arguments: {
                        ZING_BrightnesPorts: {
                            type: "string",
                            menu: "brightnessPorts",
                            defaultValue: "SELECT",
                        },
                        brightness: {
                            type: "number",
                            defaultValue: 100,
                            maxValue: 100,
                            minValue: 0,
                        },
                    },
                },
                {
                    opcode: "ZING_moveMotor",
                    text: "move [ZING_action]",
                    blockType: "command",
                    arguments: {
                        ZING_action: {
                            type: "string",
                            menu: "motor_actions",
                            defaultValue: "SELECT",
                        },
                        speed: {
                            type: "number",
                            defaultValue: 100,
                        },
                    },
                },

                {
                    opcode: "ZING_setServoMotor",
                    text:
                        "set servo motor at [ZING_ServoPorts] to [degree] degrees",
                    blockType: "command",
                    arguments: {
                        ZING_ServoPorts: {
                            type: "string",
                            menu: "servo_ports",
                            defaultValue: "SELECT",
                        },
                        degree: {
                            type: "number",
                            defaultValue: 180,
                        },
                    },
                },
                {
                    opcode: "ZING_checkLogicCondition",
                    text: "Port [ZING_InputPorts] is [logic]",
                    blockType: "Boolean",
                    arguments: {
                        ZING_InputPorts: {
                            type: "string",
                            menu: "checkLogicConditionPorts",
                            defaultValue: "SELECT",
                        },
                        logic: {
                            type: "string",
                            menu: "logic",
                            defaultValue: "HIGH",
                        },
                    },
                },

                {
                    opcode: "ZING_setAnalogRead",
                    text: "Analog read of port [ZING_AnalogRead]",
                    blockType: "reporter",
                    arguments: {
                        ZING_AnalogRead: {
                            type: "string",
                            menu: "analog_ports",
                            defaultValue: "SELECT",
                        },
                    },
                },

                {
                    opcode: "ZING_ultrasonicSensor",
                    text:
                        "ultrasonic sensor at port [ZING_ultrasonicSensorPorts]",
                    blockType: "reporter",
                    arguments: {
                        ZING_ultrasonicSensorPorts: {
                            type: "string",
                            menu: "ultraSonic_ports",
                            defaultValue: "SELECT",
                        },
                    },
                },

                {
                    opcode: "ZING_colorSensor",
                    text: "[ZING_ColorPort] of 4-in 1 sensor is",
                    blockType: "reporter",
                    arguments: {
                        ZING_ColorPort: {
                            type: "string",
                            menu: "color",
                            defaultValue: "SELECT",
                        },
                    },
                },

                {
                    opcode: "ZING_setPlayAction",
                    blockType: "command",
                    text: " Play action [ZING_PlayActionPort]",
                    arguments: {
                        ZING_PlayActionPort: {
                            type: "string",
                            menu: "PlayAction",
                            defaultValue: "SELECT",
                        },
                    },
                },
            ],

            menus: {
                allPorts: {
                    acceptReporters: false,
                    items: "ZING_ALL_PORTS_MENU",
                },
                logic: {
                    acceptReporters: false,
                    items: this.LOGIC,
                },
                brightnessPorts: {
                    acceptReporters: false,
                    items: "ZING_BRIGHTNESS_PORTS",
                },

                motor_actions: {
                    acceptReporters: false,
                    items: this.MOTOR_ACTIONS,
                },

                servo_ports: {
                    acceptReporters: false,
                    items: this.SERVO_PORTS,
                },

                checkLogicConditionPorts: {
                    acceptReporters: false,
                    items: "ZING_CHECK_LOGIC_PORTS_MENU",
                },

                analog_ports: {
                    acceptReporters: false,
                    items: "ZING_ANALOG_PORTS",
                },
                ultraSonic_ports: {
                    acceptReporters: false,
                    items: this.ULTRASONIC_PORTS,
                },
                color: {
                    acceptReporters: false,
                    items: this.COLOR,
                },

                PlayAction: {
                    acceptReporters: false,
                    items: this.PLAY_ACTION,
                },
            },
        };
    }

    ZING_setPortsLogic(args) {
        console.log("HIT ME", args);

        getByteData(args.ZING_SetDgitalports, "DIGITAL_OUTPUT");
    }

    ZING_setBrightness(args) {
        console.log("HIT ME", args);

        getByteData(args.ZING_BrightnesPorts, "PWM");
    }

    ZING_checkLogicCondition(args) {
        console.log("HIT ME", args);

        getByteData(args.ZING_InputPorts, "I");
    }

    ZING_setAnalogRead(args) {
        console.log("HIT ME", args);

        getByteData(args.ZING_AnalogRead, "A");
    }

    ZING_moveMotor(args) {
        console.log("HIT ME", args);
    }

    ZING_setServoMotor(args) {
        console.log("HIT ME", args);
    }

    ZING_ultrasonicSensor(args) {
        console.log("HIT ME", args);
    }

    ZING_colorSensor(args) {
        console.log("HIT ME", args);
    }
    ZING_setPlayAction(args) {
        console.log("HIT ME", args);
    }
}

module.exports = BISOFT_HUMANOID;
