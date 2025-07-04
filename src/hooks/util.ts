export function ArrayToString(array: string[]) {
    let newString = "";
    if (array.length > 0) {
        array.map((item) => (
            newString += item + " "
        ));


        newString = newString.substring(0, newString.length - 1);
    }
    return newString;
}

export function GetValueByKey(arr: { key: string, value: string }[], keyToFind: string) {
    arr.map((item) => {
        if (item.key == keyToFind) {
            return item.value
        }
    })

    return null;
}
