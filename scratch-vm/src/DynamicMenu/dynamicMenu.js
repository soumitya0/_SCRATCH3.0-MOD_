let array1 = [
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
const dynamicMenuData = (value) => {
    console.log("working.....2250");

    console.log("ALL_PORTS_MENU...", value);
    if (value != "undefined") {
        console.log("ALL_PORTS_MENU i am checkinh undefine.........");
        array1 = array1.filter((data, index) => {
            let mainData = data.value;
            return mainData != value;
        });
    }
    return array1;
};

module.exports = dynamicMenuData;
