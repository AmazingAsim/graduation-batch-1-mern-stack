// // // falsy values

// // // 0
// // // ''
// // // null
// // // undefinded
// // //NaN
// // // false 

// // if(100){
// //    console.log('it is true')
// // }
// // else{
// //    console.log('it is false')
// // }

//  let light = 'red' // red, yellow, green , dlkfjdfd

// // if(light=='red'){
// //     console.log('please stop')
// // }
// // else if(light=='yellow'){
// //     console.log('slow down and wait')
// // }
// // else if(light=='green'){
// //     console.log('go go go')
// // }
// // else{
// //     console.log('light has invalid color')
// // }

// // switch(light){
// //     case 'red':
// //         console.log('stop');
// //         break;
// //     case 'yellow':
// //         console.log('wait')
// //         break;
// //     case 'green':
// //         console.log('gogogogo')
// //         break
// //     default:
// //         console.log('invalid color')
// // }

// 100==100? console.log('this is true'):console.log('this is false');

// 10>9 && console.log('this is true');

// // arrays

// let friends = ['dixon','juned','rishi','henna'];
// let numbs = [1,2,3,8,9];

// // map , reduce, filter

// let newlist = friends.map((f)=>{
//     return `${f} is mad`
// });
// console.log(newlist);


// let filteredData = numbs.filter((num)=>{
//     return num>5;
// })

// console.log(filteredData);

// let result = numbs.reduce((prev,current)=>{
//     return prev+current
// })

// console.log(result);

// /// DOM 

// let subheader = document.getElementById('subheader');

// subheader.innerHTML = `Welcome to the city`;
// subheader.style.background = 'blue';
// subheader.classList.add('darkmode');
// subheader.classList.remove('lightmode');


// let fruitBox = document.querySelector('#fruits');

// let li = document.createElement('li');
// li.innerHTML = 'banana';
// fruitBox.appendChild(li);

// let x = document.getElementsByClassName('a');

// for(let y of x){
//     console.log(y)
//     y.innerHTML = 'Guava'
// }


// console.log('hello')
// setTimeout(function(){console.log('world')},0);
// console.log('from mars');

let bike = new Promise((resolve,reject)=>{
    let percent = 60;
    if(percent>80){
        setTimeout(function(){resolve('new bike')},3000)
    }
    else{
        reject('no bike')
    }
});


bike
.then((res)=>{console.log(res)})
.catch(err=>console.log(err))