const add = (numbers) => {

    if(!numbers) return 0;

    let delimiter = '\n';

    if(numbers.startsWith('//')) {
        delimiter = numbers[2];
        numbers = numbers.slice(4);
    }

    let numArr = numbers.split(delimiter).join(',').split(',');
    
    if(numArr.length > 0) {
        let sum = 0;
        numArr.forEach(num => {
            sum += parseInt(num);
        });
        return sum;
    }

}

module.exports = { add };