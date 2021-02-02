const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const log = require("../../util/log");

const getByteData = require("../../byteDataGenerate/byteDataGen");

const ACEImg = require("./ACE.png");

let ACE_ALL_PORTS_Array = [
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

let TEMP_ACE_ALL_PORTS_Array = [];

let ACE_CHECK_LOGIC_PORTS_Array = [
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

let TEMP_ACE_CHECK_LOGIC_PORTS_Array = [];

let ACE_ANALOG_PORTS_Array = [
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

let TEMP_ACE_ANALOG_PORTS_Array = [];

let ACE_BRIGHTNESS_PORTS_Array = [
    {
        text: "B1",
        value: "B1",
    },
    {
        text: "D1",
        value: "D1",
    },
];

let ACE_SERVO_PORTS_Array = [
    {
        text: "B1",
        value: "B1",
    },
    {
        text: "D1",
        value: "D1",
    },
];

let ACE_ULTRASONIC_PORTS_Array = [
    {
        text: "B",
        value: "B",
    },

    {
        text: "D",
        value: "D",
    },
];

class BISOFT_ACE {
    constructor(runtime) {
        this.runtime = runtime;
    }

    ACE_ALL_PORTS_MENU(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData ACE_ALL_PORTS_Array", sessionData);

        if (sessionData.length == 0) {
            ACE_ALL_PORTS_Array = [
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
                case "ACE_Input_Ports_Logic": {
                    ACE_ALL_PORTS_Array = ACE_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ACE_Analog_Read_Port": {
                    ACE_ALL_PORTS_Array = ACE_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ACE_SetBrighness": {
                    ACE_ALL_PORTS_Array = ACE_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Servo_Motor": {
                    ACE_ALL_PORTS_Array = ACE_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_ultrasonicPort": {
                    ACE_ALL_PORTS_Array = ACE_ALL_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value.substring(0, 1) !=
                                    data.SelectedPort
                                );
                            }
                        }
                    );
                }
            }

            if (data.blockName != "ACE_Output_Ports_Logic") {
                ACE_CHECK_LOGIC_PORTS_Array = [
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

                ACE_ANALOG_PORTS_Array = [
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

                ACE_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_SERVO_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_ULTRASONIC_PORTS_Array = [
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
        });

        // if  objCheck undefined i.e portsLogic is not present so it will return all data[]
        // let objCheck = sessionData.find(
        //     (data) => data.blockName === "ACE_Input_Ports_Logic"
        // );
        // if (typeof objCheck == "undefined") {
        //     console.log("COME INSIDE ARRAY4", ACE_ALL_PORTS_Array);

        //     ACE_ALL_PORTS_Array = [
        //         {
        //             text: "A1",
        //             value: "A1",
        //         },
        //         {
        //             text: "A2",
        //             value: "A2",
        //         },
        //         {
        //             text: "B1",
        //             value: "B1",
        //         },
        //         {
        //             text: "B2",
        //             value: "B2",
        //         },
        //         {
        //             text: "C1",
        //             value: "C1",
        //         },
        //         {
        //             text: "C2",
        //             value: "C2",
        //         },
        //         {
        //             text: "D1",
        //             value: "D1",
        //         },
        //         {
        //             text: "D2",
        //             value: "D2",
        //         },
        //     ];
        // }

        if (typeof name != "undefined" && name == "ACE_Output_Ports_Logic") {
            console.log("COME INSIDE ARRAY3", ACE_ALL_PORTS_Array);

            console.log("VALUE 777", value);
        }

        console.log("COME INSIDE ARRAY2", ACE_ALL_PORTS_Array);

        if (ACE_ALL_PORTS_Array.length == 0) {
            ACE_ALL_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }

        return ACE_ALL_PORTS_Array;
    }

    ACE_CHECK_LOGIC_PORTS_MENU(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData LOGIC_PORT", sessionData);

        if (sessionData.length == 0) {
            ACE_CHECK_LOGIC_PORTS_Array = [
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
            // console.log("sessionData LOGIC_PORT", data);

            let blockName = data.blockName;

            switch (blockName) {
                case "ACE_Output_Ports_Logic": {
                    ACE_CHECK_LOGIC_PORTS_Array = ACE_CHECK_LOGIC_PORTS_Array.filter(
                        (LOGIC_PORTS_data, index) => {
                            return LOGIC_PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Analog_Read_Port": {
                    ACE_CHECK_LOGIC_PORTS_Array = ACE_CHECK_LOGIC_PORTS_Array.filter(
                        (LOGIC_PORTS_data, index) => {
                            return LOGIC_PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_SetBrighness": {
                    ACE_CHECK_LOGIC_PORTS_Array = ACE_CHECK_LOGIC_PORTS_Array.filter(
                        (LOGIC_PORTS_data, index) => {
                            return LOGIC_PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Servo_Motor": {
                    ACE_CHECK_LOGIC_PORTS_Array = ACE_CHECK_LOGIC_PORTS_Array.filter(
                        (LOGIC_PORTS_data, index) => {
                            return LOGIC_PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_ultrasonicPort": {
                    ACE_CHECK_LOGIC_PORTS_Array = ACE_CHECK_LOGIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value.substring(0, 1) !=
                                    data.SelectedPort
                                );
                            }
                        }
                    );
                }
            }

            if (data.blockName != "ACE_Input_Ports_Logic") {
                ACE_ALL_PORTS_Array = [
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
                ACE_ANALOG_PORTS_Array = [
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

                ACE_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_SERVO_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_ULTRASONIC_PORTS_Array = [
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

            // if (data.blockName == "ACE_Output_Ports_Logic") {
            //     ACE_CHECK_LOGIC_PORTS_Array = ACE_CHECK_LOGIC_PORTS_Array.filter(
            //         (LOGIC_PORTS_data, index) => {
            //             return LOGIC_PORTS_data.value != data.SelectedPort;
            //         }
            //     );
            // }
        });

        console.log("sessionData LOGIC_PORT", ACE_CHECK_LOGIC_PORTS_Array);

        if (typeof name != "undefined" && name == "ACE_Input_Ports_Logic") {
        }

        if (ACE_CHECK_LOGIC_PORTS_Array.length == 0) {
            ACE_CHECK_LOGIC_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }
        return ACE_CHECK_LOGIC_PORTS_Array;
    }

    ACE_ANALOG_PORTS(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData LOGIC_PORT", sessionData);

        if (sessionData.length == 0) {
            ACE_ANALOG_PORTS_Array = [
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
            // console.log("sessionData LOGIC_PORT", data);

            let blockName = data.blockName;

            switch (blockName) {
                case "ACE_Output_Ports_Logic": {
                    ACE_ANALOG_PORTS_Array = ACE_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Input_Ports_Logic": {
                    ACE_ANALOG_PORTS_Array = ACE_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Servo_Motor": {
                    ACE_ANALOG_PORTS_Array = ACE_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_SetBrighness": {
                    ACE_ANALOG_PORTS_Array = ACE_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_ultrasonicPort": {
                    ACE_ANALOG_PORTS_Array = ACE_ANALOG_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value.substring(0, 1) !=
                                    data.SelectedPort
                                );
                            }
                        }
                    );
                }
            }

            if (data.blockName != "ACE_Analog_Read_Port") {
                ACE_ALL_PORTS_Array = [
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
                ACE_CHECK_LOGIC_PORTS_Array = [
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

                ACE_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_SERVO_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_ULTRASONIC_PORTS_Array = [
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
        });

        console.log("sessionData LOGIC_PORT", ACE_ANALOG_PORTS_Array);

        if (typeof name != "undefined" && name == "ACE_Input_Ports_Logic") {
        }
        if (ACE_ANALOG_PORTS_Array.length == 0) {
            ACE_ANALOG_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }
        return ACE_ANALOG_PORTS_Array;
    }

    ACE_BRIGHTNESS_PORTS(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData LOGIC_PORT", sessionData);

        sessionData.map((data, index) => {
            console.log("sessionData LOGIC_PORT BRO", data);

            let blockName = data.blockName;

            switch (blockName) {
                case "ACE_Output_Ports_Logic": {
                    ACE_BRIGHTNESS_PORTS_Array = ACE_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Input_Ports_Logic": {
                    ACE_BRIGHTNESS_PORTS_Array = ACE_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Analog_Read_Port": {
                    ACE_BRIGHTNESS_PORTS_Array = ACE_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Servo_Motor": {
                    ACE_BRIGHTNESS_PORTS_Array = ACE_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_ultrasonicPort": {
                    ACE_BRIGHTNESS_PORTS_Array = ACE_BRIGHTNESS_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            // if

                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value.substring(0, 1) !=
                                    data.SelectedPort
                                );
                            }
                        }
                    );
                }
            }

            if (data.blockName != "ACE_SetBrighness") {
                ACE_ALL_PORTS_Array = [
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
                ACE_CHECK_LOGIC_PORTS_Array = [
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

                ACE_ANALOG_PORTS_Array = [
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
                ACE_SERVO_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_ULTRASONIC_PORTS_Array = [
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
        });

        console.log("ACE_BRIGHTNESS_PORTS_Array", ACE_BRIGHTNESS_PORTS_Array);

        // let objCheck = sessionData.find(
        //     (data) => data.blockName === "ACE_Servo_Motor"
        // );

        // if (typeof objCheck == "undefined") {
        //     ACE_BRIGHTNESS_PORTS_Array = [
        //         {
        //             text: "B1",
        //             value: "B1",
        //         },
        //         {
        //             text: "D1",
        //             value: "D1",
        //         },
        //     ];
        // }

        if (ACE_BRIGHTNESS_PORTS_Array.length == 0) {
            ACE_BRIGHTNESS_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
            // console.log("Length ACE_SERVO_PORTS:", ACE_SERVO_PORTS_Array.length);
            console.log("YES GOT IT");
        }

        return ACE_BRIGHTNESS_PORTS_Array;
    }

    ACE_SERVO_PORTS(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData LOGIC_PORT", sessionData);

        sessionData.map((data, index) => {
            // console.log("sessionData LOGIC_PORT", data);

            let blockName = data.blockName;

            switch (blockName) {
                case "ACE_SetBrighness": {
                    ACE_SERVO_PORTS_Array = ACE_SERVO_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }
                case "ACE_Output_Ports_Logic": {
                    ACE_SERVO_PORTS_Array = ACE_SERVO_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Input_Ports_Logic": {
                    ACE_SERVO_PORTS_Array = ACE_SERVO_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_Analog_Read_Port": {
                    ACE_SERVO_PORTS_Array = ACE_SERVO_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            return PORTS_data.value != data.SelectedPort;
                        }
                    );
                }

                case "ACE_ultrasonicPort": {
                    ACE_SERVO_PORTS_Array = ACE_SERVO_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value.substring(0, 1) !=
                                    data.SelectedPort
                                );
                            }
                        }
                    );
                }
            }

            if (data.blockName != "ACE_Servo_Motor") {
                ACE_ALL_PORTS_Array = [
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
                ACE_CHECK_LOGIC_PORTS_Array = [
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

                ACE_ANALOG_PORTS_Array = [
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

                ACE_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];
                ACE_ULTRASONIC_PORTS_Array = [
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
        });

        // let objCheck = sessionData.find(
        //     (data) => data.blockName === "ACE_SetBrighness"
        // );

        // if (typeof objCheck == "undefined") {
        //     ACE_SERVO_PORTS_Array = [
        //         {
        //             text: "B1",
        //             value: "B1",
        //         },
        //         {
        //             text: "D1",
        //             value: "D1",
        //         },
        //     ];
        // }

        if (ACE_SERVO_PORTS_Array.length == 0) {
            ACE_SERVO_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
            // console.log("Length ACE_SERVO_PORTS:", ACE_SERVO_PORTS_Array.length);
            console.log("YES GOT IT");
        }

        return ACE_SERVO_PORTS_Array;
    }

    ACE_ULTRASONIC_PORTS(value, name, element, blockId) {
        let sessionData = JSON.parse(
            sessionStorage.getItem("blockOnWorkSpace")
        );
        console.log("sessionData ACE_ALL_PORTS_Array", sessionData);

        if (sessionData.length == 0) {
            ACE_ULTRASONIC_PORTS_Array = [
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

        sessionData.map((data, index) => {
            let blockName = data.blockName;

            switch (blockName) {
                case "ACE_Output_Ports_Logic": {
                    ACE_ULTRASONIC_PORTS_Array = ACE_ULTRASONIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value !=
                                    data.SelectedPort.substring(0, 1)
                                );
                            }
                        }
                    );
                }
                case "ACE_SetBrighness": {
                    ACE_ULTRASONIC_PORTS_Array = ACE_ULTRASONIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value !=
                                    data.SelectedPort.substring(0, 1)
                                );
                            }
                        }
                    );
                }

                case "ACE_Servo_Motor": {
                    ACE_ULTRASONIC_PORTS_Array = ACE_ULTRASONIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value !=
                                    data.SelectedPort.substring(0, 1)
                                );
                            }
                        }
                    );
                }

                case "ACE_Input_Ports_Logic": {
                    ACE_ULTRASONIC_PORTS_Array = ACE_ULTRASONIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value !=
                                    data.SelectedPort.substring(0, 1)
                                );
                            }
                        }
                    );
                }

                case "ACE_Analog_Read_Port": {
                    ACE_ULTRASONIC_PORTS_Array = ACE_ULTRASONIC_PORTS_Array.filter(
                        (PORTS_data, index) => {
                            if (PORTS_data.value != null) {
                                return (
                                    PORTS_data.value !=
                                    data.SelectedPort.substring(0, 1)
                                );
                            }
                        }
                    );
                }
            }

            if (data.blockName != "ACE_ULTRASONIC_PORTS_Array") {
                ACE_CHECK_LOGIC_PORTS_Array = [
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

                ACE_ANALOG_PORTS_Array = [
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

                ACE_BRIGHTNESS_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_SERVO_PORTS_Array = [
                    {
                        text: "B1",
                        value: "B1",
                    },
                    {
                        text: "D1",
                        value: "D1",
                    },
                ];

                ACE_ALL_PORTS_Array = [
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
        // if (typeof name != "undefined" && name == "ACE_Output_Ports_Logic") {
        //     console.log("COME INSIDE ARRAY3", ACE_ALL_PORTS_Array);

        //     console.log("VALUE 777", value);
        // }

        // console.log("COME INSIDE ARRAY2", ACE_ALL_PORTS_Array);

        if (ACE_ULTRASONIC_PORTS_Array.length == 0) {
            ACE_ULTRASONIC_PORTS_Array = [
                {
                    text: "All Ports Are used",
                },
            ];
        }

        return ACE_ULTRASONIC_PORTS_Array;
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
            color1: "#03506f",
            color2: "#03506f",

            menuIconURI: ACEImg,
            blockIconURI: ACEImg,
            blocks: [
                {
                    opcode: "ACE_setPortsLogic",
                    blockType: "command",
                    text: "Set [ACE_Output_Ports_Logic]at Logic  [logic]",
                    arguments: {
                        ACE_Output_Ports_Logic: {
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
                    opcode: "ACE_setBrighness",
                    text: "set [ACE_SetBrighness]at  brightness [brightness]%",
                    blockType: "command",
                    arguments: {
                        ACE_SetBrighness: {
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
                    opcode: "ACE_setServoMotor",
                    text:
                        "set servo motor at [ACE_Servo_Motor] to [degree] degrees",
                    blockType: "command",
                    arguments: {
                        ACE_Servo_Motor: {
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
                    opcode: "ACE_checkLogicCondition",
                    text: "Port [ACE_Input_Ports_Logic] is [logic]",
                    blockType: "Boolean",
                    arguments: {
                        ACE_Input_Ports_Logic: {
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
                    opcode: "ACE_setAnalogRead",
                    text: "Analog read of port [ACE_Analog_Read_Port]",
                    blockType: "reporter",
                    arguments: {
                        ACE_Analog_Read_Port: {
                            type: "string",
                            menu: "analog_ports",
                            defaultValue: "SELECT",
                        },
                    },
                },

                {
                    opcode: "ACE_ultrasonicSensor",
                    text: "ultrasonic sensor at port [ACE_ultrasonicPort]",
                    blockType: "reporter",
                    arguments: {
                        ACE_ultrasonicPort: {
                            type: "string",
                            menu: "ultraSonic_ports",
                            defaultValue: "SELECT",
                        },
                    },
                },

                {
                    opcode: "ACE_colorSensor",
                    text: "[ACE_colorSensorPort] of 4-in 1 sensor is",
                    blockType: "reporter",
                    arguments: {
                        ACE_colorSensorPort: {
                            type: "string",
                            menu: "color",
                            defaultValue: "red",
                        },
                    },
                },

                {
                    opcode: "ACE_setLEDColor",
                    blockType: "command",
                    text: " Set [AEC_LEDPort] LED at brightness [brightness]%",
                    arguments: {
                        AEC_LEDPort: {
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
                    opcode: "ACE_setPlayTone",
                    blockType: "command",
                    text: "Play Tone [ACE_setPlayTonePorts]",
                    arguments: {
                        ACE_setPlayTonePorts: {
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
                    items: "ACE_ALL_PORTS_MENU",
                },
                logic: {
                    acceptReporters: false,
                    items: this.LOGIC,
                },
                brightnessPorts: {
                    acceptReporters: false,
                    items: "ACE_BRIGHTNESS_PORTS",
                },

                servo_ports: {
                    acceptReporters: false,
                    items: "ACE_SERVO_PORTS",
                },

                checkLogicConditionPorts: {
                    acceptReporters: false,
                    items: "ACE_CHECK_LOGIC_PORTS_MENU",
                },

                analog_ports: {
                    acceptReporters: false,
                    items: "ACE_ANALOG_PORTS",
                },
                ultraSonic_ports: {
                    acceptReporters: false,
                    items: "ACE_ULTRASONIC_PORTS",
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

    ACE_setPortsLogic(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_Output_Ports_Logic);

        getByteData(args.ACE_Output_Ports_Logic, "DIGITAL_OUTPUT");
    }

    ACE_setBrighness(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_SetBrighness);

        getByteData(args.ACE_SetBrighness, "PWM");
    }

    ACE_setServoMotor(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_Servo_Motor);
        getByteData(args.ACE_Servo_Motor, "PWM");
    }

    ACE_checkLogicCondition(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_Input_Ports_Logic);

        getByteData(args.ACE_Input_Ports_Logic, "I");
    }

    ACE_setAnalogRead(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_Analog_Read_Port);

        getByteData(args.ACE_Analog_Read_Port, "A");
    }

    ACE_ultrasonicSensor(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_ultrasonicPort);

        getByteData(args.ACE_ultrasonicPort + "1", "A");
        // getByteData("D1", "A");
    }

    ACE_colorSensor(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_colorSensorPort);
        getByteData(args.ACE_colorSensorPort, "G");
    }

    ACE_setLEDColor(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.AEC_LEDPort);
        getByteData(args.AEC_LEDPort, "L");
    }

    ACE_setPlayTone(args) {
        console.log("ARGS: ", args);

        console.log("CLICK: ", args.ACE_setPlayTonePorts);

        getByteData(args.ACE_setPlayTonePorts, "B");
    }
}

module.exports = BISOFT_ACE;
