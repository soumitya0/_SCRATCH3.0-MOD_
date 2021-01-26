const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const log = require("../../util/log");

const getByteData = require("../../byteDataGenerate/byteDataGen");
// eslint-disable-next-line max-len

const dynamicMenu = require("../../DynamicMenu/dynamicMenu");
/**
 * Url of icon to be displayed in the toolbox menu for the extension category.
 * @type {string}
 */
// eslint-disable-next-line max-len
const ternImg = require("./tern.png");

class BISOFT_TERN {
    constructor(runtime) {
        this.runtime = runtime;
    }

    // A-I  I-M   OPTION_1

    ALL_PORTS_MENU(value) {
        console.log("Inside All_PORTS_MENU");

        console.log("ALL_PORTS_MENU...", value);

        let array1 = dynamicMenu(value);

        console.log(array1, "ALL_PORTS_MENU................");
        return array1;
    }

    //A-I    OPTION_7
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
            {
                text: "E1",
                value: "E1",
            },
            {
                text: "E2",
                value: "E2",
            },
            {
                text: "F1",
                value: "F1",
            },
            {
                text: "F2",
                value: "F2",
            },
            {
                text: "G1",
                value: "G1",
            },
            {
                text: "G2",
                value: "G2",
            },
            {
                text: "H1",
                value: "H1",
            },
            {
                text: "H2",
                value: "H2",
            },
            {
                text: "I1",
                value: "I1",
            },
            {
                text: "I2",
                value: "I2",
            },
        ];
    }

    // B1 F1  OPTION_2
    get SERVO_PORTS() {
        return [
            {
                text: "B1",
                value: "B1",
            },
            {
                text: "F1",
                value: "F1",
            },
        ];
    }

    // B-F OPTION_9
    get ULTRASONIC_PORTS() {
        return [
            {
                text: "B",
                value: "B",
            },

            {
                text: "F",
                value: "F",
            },
        ];
    }

    // HIGH - LOW  OPTION_1 and OPTION_7
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

    // FORWARD-BACKWORD OPTION_3 OPTION_4 and OPTION_5
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

    // A-F  OPTION_8
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
                text: "E1",
                value: "E1",
            },
            {
                text: "E2",
                value: "E2",
            },
            {
                text: "F1",
                value: "F1",
            },
        ];
    }

    //B1-F1  OPTION_2 and OPTION_6
    get BRIGHTNESS_PORTS() {
        return [
            {
                text: "B1",
                value: "B1",
            },
            {
                text: "F1",
                value: "F1",
            },
        ];
    }

    get SERVO_PORTS() {
        return [
            {
                text: "B1",
                value: "B1",
            },
            {
                text: "F1",
                value: "F1",
            },
        ];
    }

    get MOTOR_PORTS() {
        return [
            {
                text: "M1",
                value: "M1",
            },
            {
                text: "M2",
                value: "M2",
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

    setPortsLogic(args, utils) {
        // console.log("setPortsLogic, 85214795 ");
        // console.log(args);
        // if (localStorage.getItem("isItem") == "true") {
        // }

        getByteData(args.ports, "DIGITAL_OUTPUT");
    }

    setBrighness(args, utils) {
        console.log("setBrighness");
        getByteData(args.ports, "PWM");
    }

    moveMotor(args, utils) {
        console.log("moveMotor");
    }

    moveLeftMotor(args, utils) {
        console.log("moveLeftMotor");
    }

    moveRightMotor(args, utils) {
        console.log("moveRightMotor");
    }

    setServoMotor(args, utils) {
        console.log("setServoMotor");
    }

    setAnalogRead(args, utils) {
        console.log("setAnalogRead");
    }

    checkLogicCondition(args, utils) {
        console.log("checkLogicCondition");
    }

    ultrasonicSensor() {
        console.log("ultrasonicSensor");
    }
    colorSensor() {
        console.log("color sensor");
    }

    getInfo() {
        return {
            id: "tern",
            name: "TERN",
            menuIconURI: ternImg,
            blockIconURI: ternImg,
            color1: "#cc7351",
            color2: "#cc7351",

            blocks: [
                // simple Block

                // {
                //     opcode: "writeLog",
                //     blockType: BlockType.COMMAND,
                //     text: "log [TEXT]",
                //     arguments: {
                //         TEXT: {
                //             type: ArgumentType.STRING,
                //             defaultValue: "hello",
                //         },
                //     },
                // },

                {
                    opcode: "setPortsLogic",
                    text: "Set [ports]at  Logic [logic]",
                    blockType: "command",
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
                            defaultValue: "B1",
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
                            defaultValue: "B1",
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
            ],
            menus: {
                allPorts: {
                    acceptReporters: false,
                    items: "ALL_PORTS_MENU",
                },

                checkLogicConditionPorts: {
                    acceptReporters: false,
                    items: this.CHECK_LOGIC_PORTS_MENU,
                },
                brightnessPorts: {
                    acceptReporters: false,
                    items: this.BRIGHTNESS_PORTS,
                },
                motorPorts: {
                    acceptReporters: false,
                    items: this.MOTOR_PORTS,
                },
                analogPorts: {
                    acceptReporters: false,
                    items: this.ANALOG_PORTS,
                },
                servoPorts: {
                    acceptReporters: false,
                    items: this.SERVO_PORTS,
                },
                logic: {
                    acceptReporters: false,
                    items: this.LOGIC,
                },
                motor_actions: {
                    acceptReporters: false,
                    items: this.MOTOR_ACTIONS,
                },
                servo_ports: {
                    acceptReporters: false,
                    items: this.SERVO_PORTS,
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
            },
        };
    }

    // opcode  function
    writeLog(args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);
    }
}

module.exports = BISOFT_TERN;
