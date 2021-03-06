const identifierBytesData = ["R", "T", "5", "1", "1", "S", "E", "T"];

let dataSpace = [];
let portTypeSpace = [];

let uniqueChars;

let finalByteData;

let globalObj;

const getByteData = (port, portType) => {
    // step-1
    // i have push into array

    dataSpace.push(port);
    portTypeSpace.push(portType);

    let myObj = {
        ...myObj,
        [port]: `${portType}`,
    };

    console.log("MY_OBJ:", myObj);

    var oldItems = JSON.parse(sessionStorage.getItem("myObj"));

    console.log(oldItems);
    console.log(typeof oldItems);

    oldItems.push(myObj);

    console.log("ByteDataCheck:", Object.keys(myObj)[0]);

    if (Object.keys(myObj)[0] != "All Ports Are used") {
        sessionStorage.setItem("myObj", JSON.stringify(oldItems));
    }

    generateByteData();
};

generateByteData = () => {
    let StackData = JSON.parse(sessionStorage.getItem("myObj"));

    console.log("generateByteData runing .................");

    console.log(StackData);
    let bytesObject = {
        A1: "O",
        A2: "O",
        B1: "O",
        B2: "O",
        C1: "O",
        C2: "O",
        D1: "O",
        D2: "O",
        E1: "O",
        E2: "O",
        F1: "O",
        F2: "O",
        G1: "O",
        G2: "O",
        H1: "O",
        H2: "O",
        I1: "O",
        I2: "O",
        M1: "O",
        M2: "O",
        M3: "O",
        M4: "O",
    };

    StackData.map((data, index) => {
        // console.log(data);

        console.log("KEY: ", Object.keys(data)[0]);
        console.log("Value: ", Object.values(data)[0]);
        console.log("bytesObject:", bytesObject);

        switch (Object.values(data)[0]) {
            case "DIGITAL_OUTPUT": {
                bytesObject[Object.keys(data)[0]] = "CHANGE TO O";
                break;
            }
            case "PWM": {
                bytesObject[Object.keys(data)[0]] = "P";
                break;
            }
            case "S": {
                bytesObject[Object.keys(data)[0]] = "S";
                break;
            }
            case "M1&M2": {
                bytesObject[Object.keys(data)[0]] = "P";
                break;
            }
            case "LeftMotor": {
                bytesObject[Object.keys(data)[0]] = "P";
                break;
            }
            case "RightMotor": {
                bytesObject[Object.keys(data)[0]] = "P";
                break;
            }
            case "I": {
                bytesObject[Object.keys(data)[0]] = "I";
                break;
            }
            case "A": {
                bytesObject[Object.keys(data)[0]] = "A";
                break;
            }
            case "U": {
                bytesObject[Object.keys(data)[0]] = "U";
                break;
            }
        }
    });

    console.log(bytesObject, "bytesObject ....................");

    finalByteData = identifierBytesData.concat(
        Object.values(bytesObject),
        Array(37).fill("O")
    );

    StackData.map((data, index) => {
        // console.log(data);

        console.log("KEY: ", Object.keys(data)[0]);
        console.log("Value: ", Object.values(data)[0]);
        console.log("bytesObject:", bytesObject);

        switch (Object.values(data)[0]) {
            case "G": {
                finalByteData[32] = "G";
                break;
            }
            case "L": {
                finalByteData[31] = "L";
                break;
            }
            case "B": {
                finalByteData[30] = "B";
                break;
            }
        }
    });

    console.log(finalByteData, "finally Data .........................");
};

module.exports = getByteData;
