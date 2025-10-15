const add = (numbers) => {

    if (!numbers) return 0;

    const delimiters = ['\n'];

    if (numbers.startsWith('//[')) {
        const delimiterBlocks = numbers.split(']').slice(0, -1);
        delimiterBlocks.forEach(block => {
            delimiters.push(block.split('[')[1]);
        });

        numbers = numbers.slice(numbers.indexOf(']\n') + 2);
    }
    else if (numbers.startsWith('//')) {
        delimiters[0] = numbers[2];
        numbers = numbers.slice(4);
    }

    delimiters.forEach(delimiter => {
        numbers = numbers.split(delimiter).join(',');
    });
    let numArr = numbers.split(',');

    let negativeNumbers = numArr.filter(num => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }

    if (numArr.length > 0) {
        let sum = 0;
        numArr.forEach(num => {
            if (num <= 1000) sum += parseInt(num);
        });
        return sum;
    }
}

module.exports = { add };