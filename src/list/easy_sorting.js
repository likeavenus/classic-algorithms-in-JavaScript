const someArray = [5, 1, 4, 10, 7, 8, 3, 2, 6, 0, 11, 15, 9];


export const easy_sorting = array => {
    let min = array[0];
    let max = array[1];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                max = array[i];
                min = array[j];
                array[i] = min;
                array[j] = max;
            }
        }
    }

    console.log(array);
    return array;
};

easy_sorting(someArray);
