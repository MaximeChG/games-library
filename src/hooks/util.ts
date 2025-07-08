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
            newString += item + " "
        ));
        
        // Remove the last "," from the string.
        newString = newString.substring(0, newString.length - 1);
    };
    return newString;
}

// function for Getting a value based on a key
export function GetValueByKey(arr: { key: string, value: string }[], keyToFind: string) {
    // loop through array
    arr.map((item) => {
        // Compare the key from the array item, to the keyToFind
        if (item.key == keyToFind) {
            // return the value found which should be a string
            return item.value
        }
    });
    // if the key send does not match anything, return null
    return null
}

// Function to get all keyValue pairs based on an array of keys
export function GetKeyValueArrayByKey(arr: {key: string, value: string}[], arrayOfKeys: string[]){
    // Create a new array of key-value pairs
    const newArray: {key: string, value: string}[] = [];

    arrayOfKeys.map((key) => {
        // get the value based on the key
        const value = GetValueByKey(arr, key);
        // Check that the value returned was not null
        if (value){
            // push to the new array
            newArray.push({key: key, value: value});
        }
    })
    // return the newArray, 
    return newArray;
}
