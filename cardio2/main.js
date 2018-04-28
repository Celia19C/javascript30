function start() {
    'use strict'

    const people = [
        {name: 'Wes', year: 1988 },
        {name: 'Kait', year: 1986 },
        {name: 'Irv', year: 1970 },
        {name: 'Luk', year: 2015 },
    ];

    const comments = [
        {text: 'Love this!', id: 523423 },
        {text: 'Super good', id: 823423 },
        {text: 'You are the best', id: 20398 },
        {text: 'Ramen in my fav food ever', id: 2015 },
        {text: 'Nices Nices Nice!', id: 2015 },
    ];


//Some and every checks
//Array.prototype.some() // is at least one person 19?
    const isAdult = people.some(function(person){
        const currentYear = (new Date()).getFullYear();
          if(currentYear - person.year >=19){
              return true;
             
          }
    })
    console.log({isAdult})

    // OTRA FORMA MÄS COMPACTA
    // const isAdult = people.some(person => 
    // (new Date()).getFullYear() - person.year >= 19)
    // console.log({isAdult})


//Array.prototype.every() // is everyone 19?
    const allAdults = people.every(function(person) {
        const currentYear = (new Date()).getFullYear();
        if(currentYear - person.year >=19){
            return true;
         }
    })
    console.log({allAdults})

    //FORMA COMPACTA
    // const allAdults = people.every(person =>
    // new Date().getFullYear() - person.year >=19);
    // console.log({allAdults})


//Array.prototype.find()
//Find is like filter, but instead returns just the one are you looking for
//find the comment with the ID of 823423
    const findComment = comments.find(function(comment){
        if (comment.id === 823423) {
            return true
        }
    })
    console.log(findComment)

    //FORMA COMPACTA
    // const findComment = comments.find(comentario =>
    //     comentario.id === 823423)
   
    // console.log(findComment)


//Array.prototype.findIndex()
//Find the comment with this ID
//delete the comment with the ID of 823423
    const index = comments.findIndex(function(comment){ //también se puede compactar como los anteriores
        if (comment.id === 823423){
           return true        
        } 
    })
    // comments.splice(index, 1)  // Esto borra ese elemento del array original
    console.log(comments)
    
    //Si queremos manter el original intacto y hacer una copia sin ese elemento, lo hacemos así;
     const newComments =  [
        ...comments.slice(0, index),
        ...comments.slice(index + 1),         
     ];
     console.log(newComments)














    
}
start()