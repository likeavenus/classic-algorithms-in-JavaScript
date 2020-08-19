export const binarySearch = (array, item) => {
    let low = 0;
    let high = array.length - 1;

    let counter = 0;

    while(low <= high) {
        counter += 1;

        let mid = Math.floor((low + high) / 2);
        const guess = array[mid];

        if (guess === item) {
            console.log(`Искомое число: ${item}`);
            console.log(`Попыток сделано: ${counter}`);

            showResult({
                item,
                counter,
                array
            });
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
};

function showResult({ counter, item, array }) {
    const body = document.body;
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    const resultFragment = document.createDocumentFragment();
    const counterElem = document.createElement('p');
    const itemElem = document.createElement('p');
    const arrayElem = document.createElement('p');

    counterElem.innerText = `Попыток сделано: ${counter}`;
    itemElem.innerText = `Искомое число: ${item}`;
    arrayElem.innerText = `Массив: [${array}]`;
    arrayElem.style.letterSpacing = '1px';

    resultFragment
        .appendChild(arrayElem)
        .appendChild(itemElem)
        .appendChild(counterElem);

    body.appendChild(resultFragment);

}


const sortedArray = [1, 3, 5, 7, 9, 10, 15, 22, 33, 45, 70, 100, 119, 187, 2000];
binarySearch(sortedArray, 119);
