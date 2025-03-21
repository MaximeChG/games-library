export function ArrayToString(array) {
    let newString = "";
    if (array.length > 0) {
        array.map((item) => (
            newString += item + " "
        ));


        newString = newString.substring(0, newString.length - 1);
    }
    return newString;
}
