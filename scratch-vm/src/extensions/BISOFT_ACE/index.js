const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const log = require("../../util/log");

const ACEImg = require("./ACE.png");
class BISOFT_ACE {
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
                text: "B1",
                value: "B1",
            },
            {
                text: "B2",
                value: "B2",
            },
            {
                text: "D1",
                value: "D1",
            },
            {
                text: "D2",
                value: "D2",
            },
            {
                text: "F1",
                value: "F1",
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
                text: "A1",
                value: "A1",
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
        ];
    }

    get SERVO_PORTS() {
        return [
            {
                text: "G1",
                value: "G1",
            },
            {
                text: "G2",
                value: "G2",
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
            {
                text: "D2",
                value: "D2",
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
                text: "D",
                value: "D",
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

    get LED_COLOR() {
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
        ];
    }

    get PLAY_TONE() {
        return [
            {
                text: "Sa",
                value: "Sa",
            },
            {
                text: "Re",
                value: "Re",
            },
            {
                text: "Ga",
                value: "Ga",
            },
            {
                text: "Ma",
                value: "Ma",
            },
            {
                text: "Pa",
                value: "Pa",
            },
            {
                text: "Dha",
                value: "Dha",
            },
            {
                text: "Ni",
                value: "Ni",
            },
        ];
    }

    getInfo() {
        return {
            id: "ace",
            name: "ACE",
            // color1: "#FFE455",
            // color2: "#FFE455",

            menuIconURI: ACEImg,
            blockIconURI: ACEImg,
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
                            defaultValue: "A1",
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
                    text: "move [action] at [speed]% speed",
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
                    opcode: "moveLeftMotor",
                    text: "move left motor [action] at [speed] % speed",
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
                    opcode: "moveRightMotor",
                    text: "move right motor [action] at [speed] % speed",
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
                            defaultValue: "G1",
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
                    text: " Set [LEDPort] LED at brightness [brightness]%",
                    arguments: {
                        LEDPort: {
                            type: "string",
                            menu: "LEDColor",
                            defaultValue: "red",
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
                    opcode: "setPlayTone",
                    blockType: "command",
                    text: "Play Tone [tone]",
                    arguments: {
                        tone: {
                            type: "string",
                            defaultValue: "Sa",
                            menu: "playTone",
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

                LEDColor: {
                    acceptReporters: false,
                    items: this.LED_COLOR,
                },
                playTone: {
                    acceptReporters: false,
                    items: this.PLAY_TONE,
                },
            },
        };
    }
}

module.exports = BISOFT_ACE;
