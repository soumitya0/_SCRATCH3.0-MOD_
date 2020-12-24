const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const log = require("../../util/log");
const HUMANOIDImg = require("./humanoidDeviceExtension.png");
class BISOFT_HUMANOID {
    constructor(runtime) {
        this.runtime = runtime;
    }

    get ALL_PORTS_MENU() {
        return [
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

    get BRIGHTNESS_PORTS() {
        return [
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

    get CHECK_LOGIC_PORTS_MENU() {
        return [
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

    get ANALOG_PORTS() {
        return [
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
            // color1: "#575C66",
            // color2: "#575C66",

            menuIconURI: HUMANOIDImg,
            blockIconURI: HUMANOIDImg,
            blocks: [
                {
                    opcode: "setPortsLogic",
                    blockType: "command",
                    text: "Set [ports]at Logic  [logic]",
                    arguments: {
                        ports: {
                            type: "string",
                            menu: "allPorts",
                            defaultValue: "A1",
                        },
                        logic: {
                            type: "string",
                            menu: "logic",
                            defaultValue: "HIGH",
                        },
                    },
                },
                {
                    opcode: "setBrighness",
                    text: "set [ports]at  brightness [brightness]%",
                    blockType: "command",
                    arguments: {
                        ports: {
                            type: "string",
                            menu: "brightnessPorts",
                            defaultValue: "C1",
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
                    opcode: "moveMotor",
                    text: "move [action]",
                    blockType: "command",
                    arguments: {
                        action: {
                            type: "string",
                            menu: "motor_actions",
                            defaultValue: "Forward",
                        },
                        speed: {
                            type: "number",
                            defaultValue: 100,
                        },
                    },
                },

                {
                    opcode: "setServoMotor",
                    text: "set servo motor at [ports] to [degree] degrees",
                    blockType: "command",
                    arguments: {
                        ports: {
                            type: "string",
                            menu: "servo_ports",
                            defaultValue: "1",
                        },
                        degree: {
                            type: "number",
                            defaultValue: 180,
                        },
                    },
                },
                {
                    opcode: "checkLogicCondition",
                    text: "Port [ports] is [logic]",
                    blockType: "Boolean",
                    arguments: {
                        ports: {
                            type: "string",
                            menu: "checkLogicConditionPorts",
                            defaultValue: "A1",
                        },
                        logic: {
                            type: "string",
                            menu: "logic",
                            defaultValue: "HIGH",
                        },
                    },
                },

                {
                    opcode: "setAnalogRead",
                    text: "Analog read of port [ports]",
                    blockType: "reporter",
                    arguments: {
                        ports: {
                            type: "string",
                            menu: "analog_ports",
                            defaultValue: "A1",
                        },
                    },
                },

                {
                    opcode: "ultrasonicSensor",
                    text: "ultrasonic sensor at port [ports]",
                    blockType: "reporter",
                    arguments: {
                        ports: {
                            type: "string",
                            menu: "ultraSonic_ports",
                            defaultValue: "B",
                        },
                    },
                },

                {
                    opcode: "colorSensor",
                    text: "[color] of 4-in 1 sensor is",
                    blockType: "reporter",
                    arguments: {
                        color: {
                            type: "string",
                            menu: "color",
                            defaultValue: "red",
                        },
                    },
                },

                {
                    opcode: "setLEDColor",
                    blockType: "command",
                    text: " Play action [PlayActionPort]",
                    arguments: {
                        PlayActionPort: {
                            type: "string",
                            menu: "PlayAction",
                            defaultValue: "ATTENTION",
                        },
                    },
                },
            ],

            menus: {
                allPorts: {
                    acceptReporters: false,
                    items: this.ALL_PORTS_MENU,
                },
                logic: {
                    acceptReporters: false,
                    items: this.LOGIC,
                },
                brightnessPorts: {
                    acceptReporters: false,
                    items: this.BRIGHTNESS_PORTS,
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
                    items: this.CHECK_LOGIC_PORTS_MENU,
                },

                analog_ports: {
                    acceptReporters: false,
                    items: this.ANALOG_PORTS,
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
}

module.exports = BISOFT_HUMANOID;
