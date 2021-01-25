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

let array2 = [];

let previousValue;

const dynamicMenuData = (value) => {
    console.log("dynamicMenuData .....2250");

    console.log("length value:", value.length);

    console.log("dynamicMenuData VALUE...", value);
    if (typeof value != "undefined") {
        console.log("dynamicMenuData VALUE i am checkinh undefine.........");

        array2 = array1.filter((data, index) => {
            let mainData = data.value;

            if (value.length > 2) {
                return mainData != previousValue;
            } else {
                previousValue = value;
                return mainData != value;
            }
        });

        console.log("if array2:", array2);

        return array2;
    } else {
        console.log("else ..............");
        return array1;
    }
};

module.exports = dynamicMenuData;
