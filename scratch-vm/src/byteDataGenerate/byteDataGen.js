const identifierBytesData = ["R", "T", "5", "1", "1", "S", "E", "T"];

let dataSpace = [];
let portTypeSpace = [];

let uniqueChars;

let myObj;

let finalByteData;

const getByteData = (port, portType) => {
    // step-1
    // i have push into array
    dataSpace.push(port);
    portTypeSpace.push(portType);

    myObj = {
        ...myObj,
        [port]: `${portType}`,
    };
    console.log(dataSpace.length);

    // step-2
    // then  check if dataSpace[0] == dataSpace[dataSpace.length - 1] i.e  [a1,a2,b1,a1] a1 == a1 then empty arr and push
    if (dataSpace[0] == dataSpace[dataSpace.length - 1]) {
        console.log("yes");
        dataSpace = [];
        portTypeSpace = [];
        myObj = {};

        dataSpace.push(port);
        portTypeSpace.push(portType);

        myObj = {
            [port]: `${portType}`,
        };
    }

    // step-3
    // remove single and add dubble [a1,a2,b1,a2,b1] = new push arr [a2,b1] because they are dubble and remve a1 because its is single
    uniqueChars = dataSpace.filter((c, index) => {
        if (dataSpace.indexOf(c) != index) {
            console.log("uniqueChar works ..");
            // console.log(c, "yes");
            dataSpace = [];
            portTypeSpace = [];
            myObj = {};

            dataSpace.push(c);
            portTypeSpace.push(portType);

            myObj = {
                ...myObj,
                [port]: `${portType}`,
            };
        } else {
            // console.log("no unique");
            // console.log(c, "no");
        }
    });

    console.log(dataSpace, "dataSpace");
    sessionStorage.setItem("selectedPortTern", JSON.stringify(dataSpace));
    console.log(
        JSON.parse(sessionStorage.getItem("selectedPortTern")),
        "sessionStorage ........"
    );
    console.log(portTypeSpace, "portTypeSpace");
    console.log(myObj, "myObj");

    console.log(uniqueChars, "uniqueChars");

    generateByteData(myObj);
};

generateByteData = (myObj) => {
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
    };

    console.log("generateByteData runing .................");
    console.log(myObj);

    for (const [key, value] of Object.entries(myObj)) {
        switch (value) {
            case "DIGITAL_OUTPUT": {
                bytesObject[key] = "CHANGE TO O";
                break;
            }
            case "PWM": {
                bytesObject[key] = "P";
                break;
            }
        }
    }

    console.log(bytesObject, "bytesObject ....................");

    finalByteData = identifierBytesData.concat(Object.values(bytesObject));
    console.log(finalByteData, "finally Data .........................");
};

module.exports = getByteData;
