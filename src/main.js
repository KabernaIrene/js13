//Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі. 
//Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел 
//(наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі). 
//Використовуйте рекурсію для обчислення чисел Фібоначчі.

function fibonachiNum(n) {
    return n <= 1 ? n : fibonachiNum(n - 1) + fibonachiNum(n - 2);
  }

console.log(fibonachiNum(7))
console.log(fibonachiNum(12))
console.log(fibonachiNum(21))
console.log(fibonachiNum(1))

//Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, 
//яке читається зліва направо і справа наліво однаково. Інакше кажучи, 
//відрізняється симетрією запису (розташування цифр), причому число знаків 
//може бути як парним, так і непарним. Але. Паліндром можна отримати 
//як результат операцій над іншими числами. Візьмемо будь-яке натуральне число 
//і складемо його зі зворотним числом, тобто записаним тими самими цифрами, 
//але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, 
//і будемо повторювати її доти, доки не утвориться паліндром. 
//Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), 
//але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 
//4884 тільки на четвертому кроці.... 
//Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result 
//і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома. 
//Для того, щоб перевірити себе використовуйте число 196. 
//Це так зване Lychrel number — число яке немає поліндрому

let count = 0;

function isPalindrome(num) {
  
  let numStr = num.toString().split('').reverse().join('')

  const palindrom ={};

  let summ = 0;

  if(numStr == num.toString()){
    console.log (`${num} is palindrom`)
  }

  if(numStr !== num.toString()) {
    count++
      summ = num + +numStr;
      isPalindrome(summ)
  }
 
  if(summ.toString().split(''). reverse().join('') == summ && summ !== 0){
     palindrom.steps = count
     palindrom.result = summ
    console.log(palindrom)
  }
  
}


//isPalindrome(17);
//isPalindrome(101101);
//isPalindrome(154);
isPalindrome(19);
//isPalindrome(196);


//Напишіть функцію, яка приймає масив унікальних елементів і 
//генерує всі можливі перестановки цього масиву. 
//Використовуйте рекурсію для знаходження всіх перестановок. 
//Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив, що містить 
//[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].


function variants (arr){
  if (arr.length > 1) {
      let firstEl = arr[0];
      let returnedArr = variants(arr.slice(1));
      let firstArr= [];
      let secArr = [];
      elementLength = returnedArr[0].length;
      for (let i = 0; i < returnedArr.length; i++) 
        for (let j = 0; j <= elementLength; j++){             
          secArr = returnedArr[i].slice(0);
          secArr.splice(j,0,firstEl);
          firstArr.push(secArr);
        }
      return firstArr;
    } else {
      return [arr];
  }
}




console.log(variants([1,2,3,4]))