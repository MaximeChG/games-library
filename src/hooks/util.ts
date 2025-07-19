// Function to convert an array of string to a single string
// THIS WILL PROBABLY NO LONGER BE USED ONCE THE CHECKBOXES FOR CONSOLES HAVE BEEN IMPLEMENTED
// SEE GETKEYVALUEARRAYBYKEY
export function ArrayToString(array: string[]) {
    // Create the string variable
    let newString = "";
    // Check that there is information in the array
    if (array.length > 0) {
        // Loop through the array
        array.map((item) => (
            // concatenate the item to the string
            newString += item + ", "
        ));

        // Remove the last "," from the string.
        newString = newString.substring(0, newString.length - 2);
    };
    return newString;
}

// function for Getting a value based on a key
export function GetValueByKey(arr: { key: string, value: string }[], keyToFind: string) {

    let value = null;
    // loop through array
    arr.map((item) => {
        // Compare the key from the array item, to the keyToFind
        if (item.key === keyToFind) {
            // return the value found which should be a string
            value = item.value
        }
    });
    return value;
}

// Function to get all keyValue pairs based on an array of keys
export function GetKeyValueArrayByKey(arr: { key: string, value: string }[], arrayOfKeys: string[]) {
    // Create a new array of key-value pairs
    const newArray: { key: string, value: string }[] = [];

    arrayOfKeys.map((key) => {
        // get the value based on the key
        const value = GetValueByKey(arr, key);
        // Check that the value returned was not null
        if (value) {
            // push to the new array
            newArray.push({ key: key, value: value });
        }
        else {
            newArray.push({ key: 'notFound' + key, value: key });
            console.log("Value not found for " + key);
        }
    })
    // return the newArray, 
    return newArray;
}

// Function to only get all the values based on the key for each keys in an array
export function GetValueArrayByKey(arr: { key: string, value: string }[], arrayOfKeys: string[]) {
    // Create new array to store the values
    const newArray: string[] = [];

    // Loop through the array of keys
    arrayOfKeys.map((key) => {
        // For each key get the Value
        const value = GetValueByKey(arr, key);

        // Check to make sure a value was returned
        if (value) {
            newArray.push(value);
        }
        else {
            newArray.push(key);
            console.log("Value not found for " + key);
        }
    })
    return newArray;
}

export function GetNotFound(arr: { key: string, value: string }[]) {
    const newArray: string[] = [];

    arr.map((item) => {
        if (item.key == 'notFound') {
            newArray.push(item.value);
        }
    })
    return newArray;
}


// function to edit the consoles string
