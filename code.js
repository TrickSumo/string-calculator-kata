const add = (numbers) => {

    if(!numbers) return 0;

    let numArr = numbers.split('\n').join(',').split(',');
    
    if(numArr.length > 0) {
        let sum = 0;
        numArr.forEach(num => {
            sum += parseInt(num);
        });
        return sum;
    }

}

module.exports = { add };