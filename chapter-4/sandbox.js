// 31) Arguments and parameters

const speak = function(name = 'luigi', time = 'day'){
    console.log(`good ${time}, ${name}!`);
};


speak('Mark', 'morning');
speak();