// /**O/p -> DIGITAL BLOCKS SET AT LOGIC */

// // let array1 = [
// //     {
// //         text: "A1",
// //         value: "A1",
// //     },
// //     {
// //         text: "A2",
// //         value: "A2",
// //     },

// //     {
// //         text: "B2",
// //         value: "B2",
// //     },
// //     {
// //         text: "C1",
// //         value: "C1",
// //     },
// //     {
// //         text: "C2",
// //         value: "C2",
// //     },
// //     {
// //         text: "D1",
// //         value: "D1",
// //     },
// //     {
// //         text: "D2",
// //         value: "D2",
// //     },
// //     {
// //         text: "E1",
// //         value: "E1",
// //     },
// //     {
// //         text: "E2",
// //         value: "E2",
// //     },

// //     {
// //         text: "F2",
// //         value: "F2",
// //     },
// //     {
// //         text: "G1",
// //         value: "G1",
// //     },
// //     {
// //         text: "G2",
// //         value: "G2",
// //     },
// //     {
// //         text: "H1",
// //         value: "H1",
// //     },
// //     {
// //         text: "H2",
// //         value: "H2",
// //     },
// //     {
// //         text: "I1",
// //         value: "I1",
// //     },
// //     {
// //         text: "I2",
// //         value: "I2",
// //     },
// // ];
// // let array2 = [];
// // let previousValue;

// // const dynamicMenuDataSetPortLogic = (value) => {
// //     console.log("dynamicMenuData .....2250");

// //     // console.log("length value:", value.length);

// //     console.log("dynamicMenuData VALUE...", value);
// //     if (typeof value != "undefined") {
// //         console.log("dynamicMenuData VALUE i am checkinh undefine.........");

// //         array2 = array1.filter((data, index) => {
// //             let mainData = data.value;

// //             if (value != null && value.length > 2) {
// //                 return mainData != previousValue;
// //             } else {
// //                 previousValue = value;
// //                 return mainData != value;
// //             }
// //         });

// //         console.log("if array2:", array2);

// //         return array2;
// //     } else {
// //         console.log("else ..............");
// //         return array1;
// //     }
// // };

// //

// /***/
// const testingModule = "Soumitya is TESTING";

// //BRIGHTNESS_and_SERVO_PORTS

// let BRIGHTNESS_PORTS_Array = [
//     {
//         text: "B1",
//         value: "B1",
//     },
//     {
//         text: "F1",
//         value: "F1",
//     },
// ];

// let BRIGHTNESS_PORTS_Array2 = [];
// let PREVIOUSVALUE_BRIGHTNESS;

// const dynamicMenuData_BRIGHTNESS_PORTS = (value) => {
//     console.log("value: ", value);

//     if (typeof value != "undefined") {
//         BRIGHTNESS_PORTS_Array2 = BRIGHTNESS_PORTS_Array.filter(
//             (data, index) => {
//                 let mainData = data.value;

//                 if (value != null && value.length > 2) {
//                     BRIGHTNESS_PORTS_Array2 = [];

//                     return mainData != PREVIOUSVALUE_BRIGHTNESS;
//                 } else if (value == null) {
//                     console.log(
//                         "PREVIOUSVALUE_BRIGHTNESS: ",
//                         PREVIOUSVALUE_BRIGHTNESS
//                     );
//                     return mainData != PREVIOUSVALUE_BRIGHTNESS;
//                 } else {
//                     PREVIOUSVALUE_BRIGHTNESS = value;
//                     // console.log(
//                     //     "PREVIOUSVALUE_BRIGHTNESS: ",
//                     //     PREVIOUSVALUE_BRIGHTNESS
//                     // );

//                     if (value == "B1") {
//                         SERVO_PORTS_Array.splice(0, 2);

//                         SERVO_PORTS_Array.push({
//                             text: "F1",
//                             value: "F1",
//                         });

//                         console.log("SERVO_PORTS_Array", SERVO_PORTS_Array);
//                     }

//                     if (value == "F1") {
//                         SERVO_PORTS_Array.splice(0, 2);

//                         SERVO_PORTS_Array.push({
//                             text: "B1",
//                             value: "B1",
//                         });

//                         console.log("SERVO_PORTS_Array", SERVO_PORTS_Array);
//                     }

//                     return mainData != value;
//                 }
//             }
//         );

//         console.log("if array2:", BRIGHTNESS_PORTS_Array2);

//         return BRIGHTNESS_PORTS_Array2;
//     } else {
//         console.log("else ..............");
//         return BRIGHTNESS_PORTS_Array;
//     }
// };

// // SERVO_PORT

// let SERVO_PORTS_Array = [
//     {
//         text: "B1 WORKING ",
//         value: "B1",
//     },
//     {
//         text: "F1 WORKING",
//         value: "F1",
//     },
// ];
// const dynamicMenuData_SERVO_PORTS = (value) => {
//     console.log("dynamicMenuData_SERVO_PORTS", SERVO_PORTS_Array);

//     return SERVO_PORTS_Array;
// };

// // module.exports.dynamicMenuDataSetPortLogic = dynamicMenuDataSetPortLogic;
// module.exports.testingModule = testingModule;

// module.exports.dynamicMenuData_BRIGHTNESS_PORTS = dynamicMenuData_BRIGHTNESS_PORTS;

// module.exports.dynamicMenuData_SERVO_PORTS = dynamicMenuData_SERVO_PORTS;
