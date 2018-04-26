function start() {
    
    const inventors = [
        { first: 'Abert', last: 'Einstein', year: 1879, passed: 1955},
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
        { first: 'Max', last: 'Plank', year: 1858, passed: 1947}     
    ];

    const people = ['Beck, Genn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Below, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin , Walter', 'Benn, Tony',
    'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
    'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin',
    'Bevan, Aneurin', 'Bevel, Ken', 'Biedn, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
    'Biondo, Frank', 'Birrel, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//1. Filter de list of inventors for those who were born in the 1500's

    const fifteen = inventors.filter(function(inventor) { 
        if (inventor.year >= 1500 && inventor.year <= 1599){
            return true; //keep it
        }
    });
    console.table(fifteen);

    // //Se puede reducir a solo una linea con una función flecha y el if que devuelve true o false 
    // const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));
    // console.table(fifteen);


//2. Give us an array of inventors first and last names

    const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
    console.log(fullNames)

//3. Sort of the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort(function(a, b) {
        if ( a.year > b.year) {
            return 1;
        } else {
            return -1
        }
    })
    console.table(ordered)

    // const ordered = inventors.sort((a, b) => a.year > b.year? 1 : -1 )
    // console.table(ordered)

    
//4. How many years did all the inventors live?

    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year)
    }, 0);
    console.log(totalYears)


//5. Sort the inventors by years lived
    const oldest = inventors.sort(function(a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
    })
    console.table(oldest);

//6. Creat a list of Boulevards in paris that contain 'de' anywhere in the name (wiki categoria boulevars in paris)
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));

    // const de = links
    //                 .map(link => link.textContent)
    //                 .filter(streeName => streetName.includes('de'))

//7. Sort exercise

    const peopleOrdered = people.sort((personA, personB) => {
	const personALastName = personA.split(', ')[0];
	const personBLastName = personB.split(', ')[0];
	return personALastName > personBLastName ? 1 : -1;
});
// console.log(peopleOrdered)

//8. Reduce exercise

//Sum up the instances of each of these
    const data = [ 'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 
    'bike', 'walk', 'car', 'van', 'car', 'struck']

    const instances = data.reduce(function(obj, item){
        if(!obj[item]){
         obj[item]= 0;
        }
        obj[item]++
        return obj;
     }, {});
     console.log(instances);
    






















}
start()