const repeatString = function(string, number) {
        let newString = '';
        if (number > 0) {
            while (number > 0) {
            newString += string;
            number--;
        } 
    } else if (number === 0 || string === '') {
        newString;
    } else {
        newString = 'ERROR'
    }
        return newString;   
    }

repeatString('hey',3);
repeatString('hey',10);
repeatString('hey',1);
repeatString('hey',0);
repeatString('hey',-1);
repeatString('hey',Math.floor(Math.random() * 1000));
repeatString('',10);

// Do not edit below this line
module.exports = repeatString;
