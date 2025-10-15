const add = (numbers) => {

    if(!numbers) return 0;

    numArr = numbers.split(',');
    
    if(numArr.length > 0) {
        let sum = 0;
        numArr.forEach(num => {
            sum += parseInt(num);
        });
        return sum;
    }

}

module.exports = { add };