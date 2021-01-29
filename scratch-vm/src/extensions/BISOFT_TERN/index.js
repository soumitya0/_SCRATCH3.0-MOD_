const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const log = require("../../util/log");

const getByteData = require("../../byteDataGenerate/byteDataGen");
// eslint-disable-next-line max-len

// const dynamicMenu = require("../../DynamicMenu/dynamicMenu");
/**
 * Url of icon to be displayed in the toolbox menu for the extension category.
 * @type {string}
 */
// eslint-disable-next-line max-len
const ternImg = require("./tern.png");
const { TURBO_MODE_OFF } = require("../../engine/runtime");

let SERVO_PORTS_Array = [
    {
        text: "B1",
        value: "B1",
    },
    {
        text: "F1",
        value: "F1",
    },
];

let BRIGHTNESS_PORTS_Array = [
    {
        text: "B1",
        value: "B1",
    },
    {
        text: "F1",
        value: "F1",
    },
];

let PoartB1 = false;

let PoartF1 = false;

// sessionStorage.setItem("blocksInPresentWorkSpace", JSON.stringify([]));

sessionStorage.setItem("blockOnWorkSpace", JSON.stringify([]));

RemovingSessionData = () => {
    console.log("RemovingSessionData");
    let sessionData = JSON.parse(sessionStorage.getItem("blockOnWorkSpace"));
    let newSessionData = [];
    let uniqueObject = {};
    for (let i in sessionData) {
        objblockId = sessionData[i]["blockId"];

        uniqueObject[objblockId] = sessionData[i];
    }
    for (i in uniqueObject) {
        newSessionData.push(uniqueObject[i]);
    }
    console.log(newSessionData, "newSessionData");
    sessionStorage.setItem("blockOnWorkSpace", JSON.stringify(newSessionData));
};

class BISOFT_TERN {
    constructor(runtime) {
        this.runtime = runtime;
    }

    // A-I  I-M   OPTION_1

    ALL_PORTS_MENU(value, name) {
        if (typeof name != "undefined" && name == "setPortsLogic") {
            // blockOnWorkSpace.push({
            //     blockId: name,
            // });
        }

        let ALL_PORTS_MENU_Array = [
            {
                text: "A1",
                value: "A1",
            },
            {
                text: "A2",
                value: "A2",
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

        return ALL_PORTS_MENU_Array;

        // if (name === "setPortsLogic") {
        //     console.log("INSIDE : ALL_PORTS_MENU. ");
        //     console.log("SELECTED MENU: ", value);

        //     let array1 = dynamicMenu.dynamicMenuDataSetPortLogic(value);

        //     console.log(array1, "ALL_PORTS_MENU................");

        //     ALL_PORTS_MENU_Array = [];
        //     array1.map((data, index) => {
        //         // console.log("MAP FUNCTION", data);
        //         ALL_PORTS_MENU_Array.push(data);
        //     });

        //     // return array1;
        // } else {
        //     return ALL_PORTS_MENU_Array;
        // }
    }

    BRIGHTNESS_PORTS(value, name, element, blockId) {
        console.log("WELCOME TO BRIGHTNESS_PORTS");

        RemovingSessionData();
        let sessionblockOnWorkSpaceData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );

        console.log("sessionblockOnWorkSpace", sessionblockOnWorkSpaceData);

        let objCheck = sessionblockOnWorkSpaceData.find(
            (data) => data.blockName === "setServoMotorPorts"
        );

        if (typeof objCheck == "undefined") {
            BRIGHTNESS_PORTS_Array = [
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
        PoartB1 = false;

        PoartF1 = false;

        let checkPort = sessionblockOnWorkSpaceData.find((data, index) => {
            if (
                data.blockName == "setBrighnessPorts" &&
                data.SelectedPort == "B1"
            ) {
                PoartB1 = true;
            } else if (
                data.blockName == "setBrighnessPorts" &&
                data.SelectedPort == "F1"
            ) {
                PoartF1 = true;
            }
        });

        console.log("PoartB1: ", PoartB1, " PoartF1: ", PoartF1);

        if (typeof name != "undefined" && name == "setBrighnessPorts") {
            if (value == "B1") {
                console.log("IF -> B1");
                SERVO_PORTS_Array = [];
                SERVO_PORTS_Array.push({
                    text: "F1",
                    value: "F1",
                });
            }
            if (value == "F1") {
                console.log("IF -> F1");
                SERVO_PORTS_Array = [];
                SERVO_PORTS_Array.push({
                    text: "B1",
                    value: "B1",
                });
            }
        }

        if (PoartB1 == true && PoartF1 == true) {
            SERVO_PORTS_Array = [
                {
                    text: "B1&F1  are allready selected",
                    // value: "B1",
                },
            ];
        }

        console.log("BRIGHTNESS_PORTS name:", name);

        console.log("BRIGHTNESS_PORTS element:", element);

        console.log("BRIGHTNESS_PORTS blockId:", blockId);

        // console.log("SERVO_PORTS_Array FORM BRIGTHNESS: ", SERVO_PORTS_Array);

        console.log("BRIGHTNESS_PORTS_Array: ", BRIGHTNESS_PORTS_Array);

        return BRIGHTNESS_PORTS_Array;
    }

    SERVO_PORTS(value, name, element, blockId) {
        console.log("WELCOME TO SERVO_PORTS");
        RemovingSessionData();

        let NosetBrighnessPorts = "false";

        // let sessionItems = JSON.parse(
        //     sessionStorage.getItem("blocksInPresentWorkSpace")
        // );

        let sessionblockOnWorkSpace = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );

        console.log("sessionblockOnWorkSpace", sessionblockOnWorkSpace);

        // objCheck is 'undefined' that means  setBrighnessPorts is not in SessionStorage
        let objCheck = sessionblockOnWorkSpace.find(
            (data) => data.blockName === "setBrighnessPorts"
        );
        if (typeof objCheck == "undefined") {
            SERVO_PORTS_Array = [
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

        PoartB1 = false;

        PoartF1 = false;

        let checkPort = sessionblockOnWorkSpace.find((data, index) => {
            if (
                data.blockName == "setServoMotorPorts" &&
                data.SelectedPort == "B1"
            ) {
                PoartB1 = true;
            } else if (
                data.blockName == "setServoMotorPorts" &&
                data.SelectedPort == "F1"
            ) {
                PoartF1 = true;
            }
        });

        console.log("PoartB1: ", PoartB1, " PoartF1: ", PoartF1);

        if (typeof name != "undefined" && name == "setServoMotorPorts") {
            if (value == "B1") {
                console.log("SERVO_PORTS B1");
                console.log("IF -> B1");
                BRIGHTNESS_PORTS_Array = [];
                BRIGHTNESS_PORTS_Array.push({
                    text: "F1",
                    value: "F1",
                });
            }
            if (value == "F1") {
                console.log("SERVO_PORTS F1");

                BRIGHTNESS_PORTS_Array = [];

                console.log("BRIGHTNESS_PORTS_Array", BRIGHTNESS_PORTS_Array);
                BRIGHTNESS_PORTS_Array.push({
                    text: "B1",
                    value: "B1",
                });
            }
        }

        if (PoartB1 == true && PoartF1 == true) {
            BRIGHTNESS_PORTS_Array = [
                {
                    text: "B1&F1  are allready selected",
                    // value: "B1",
                },
            ];
        }
        console.log("SERVO_PORTS blockId:", blockId);

        console.log("SERVO_PORTS_Array: ", SERVO_PORTS_Array);

        return SERVO_PORTS_Array;
    }

    //A-I    OPTION_7
    CHECK_LOGIC_PORTS_MENU() {
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

    setPortsLogicFun(args, utils) {
        // console.log("setPortsLogic, 85214795 ");
        // console.log(args);
        // if (localStorage.getItem("isItem") == "true") {
        // }

        console.log("ARGS: ", args);

        console.log("CLICK: ", args.setPortsLogic);

        getByteData(args.setPortsLogic, "DIGITAL_OUTPUT");
    }

    setBrighnessFun(args, utils) {
        // console.log("setBrighness");
        // console.log("CLICK GET: ", args.setPortsLogic);
        console.log("ARGS: ", args);

        getByteData(args.setBrighnessPorts, "PWM");
    }

    moveMotor(args, utils) {
        console.log("ARGS:", args);
        getByteData("M1", "M1&M2");
        getByteData("M2", "M1&M2");
    }

    moveLeftMotor(args, utils) {
        console.log("ARGS:", args);

        getByteData("M1", "LeftMotor");
    }

    moveRightMotor(args, utils) {
        console.log("ARGS:", args);

        getByteData("M2", "RightMotor");
    }

    setServoMotorFun(args, utils) {
        console.log("setServoMotor");

        console.log("ARGS: ", args);

        // console.log("setBrighness");
        // console.log("CLICK: ", args.setPortsLogic);
        getByteData(args.setServoMotorPorts, "S");
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
                //         },
                //     },
                // },

                {
                    opcode: "setPortsLogicFun",
                    text: "Set [setPortsLogic] at  Logic [logic]",
                    blockType: "command",
                    arguments: {
                        setPortsLogic: {
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
                    opcode: "setBrighnessFun",
                    text:
                        "set [setBrighnessPorts] at  brightness [brightness]%",
                    blockType: "command",
                    arguments: {
                        setBrighnessPorts: {
                            type: ArgumentType.STRING,
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
                    opcode: "setServoMotorFun",
                    text:
                        "set servo motor at [setServoMotorPorts] to [degree] degrees",
                    blockType: "command",
                    arguments: {
                        setServoMotorPorts: {
                            type: ArgumentType.STRING,
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
                    opcode: "checkLogicCondition",
                    text: "Port [portsLogic] is [logic]",
                    blockType: "Boolean",
                    arguments: {
                        portsLogic: {
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

                brightnessPorts: {
                    acceptReporters: false,
                    items: "BRIGHTNESS_PORTS",
                },

                servo_ports: {
                    acceptReporters: false,
                    items: "SERVO_PORTS",
                },

                checkLogicConditionPorts: {
                    acceptReporters: false,
                    items: "CHECK_LOGIC_PORTS_MENU",
                },

                motorPorts: {
                    acceptReporters: false,
                    items: this.MOTOR_PORTS,
                },
                analogPorts: {
                    acceptReporters: false,
                    items: this.ANALOG_PORTS,
                },

                logic: {
                    acceptReporters: false,
                    items: this.LOGIC,
                },
                motor_actions: {
                    acceptReporters: false,
                    items: this.MOTOR_ACTIONS,
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
