// =====================================================================================================================
// Student: Aaron Martone (am@aaronmartone.com)
// Class: Fullstack JavaScript Development Accelerator (Apr 27 - Jun 19, Seattle Campus)
// Assignment: Reading: Eloquent JavaScript (Due Apr 27, 2015)
// Task: Submit a Github repo containing solutions for exercises found at end of Ch. 5.
// =====================================================================================================================



// Cause holding ourselves to standards and not barfing all over the global namespace is how the cool kids do...
// fo realz...ya'll...
'use strict';

// (FROM EXERCISE) Data set JSON, used in Exercise 2 and 3:
var $am = {
    jsonData: "[\n  " + [
        '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
        '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
        '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
        '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
        '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
        '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
        '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
        '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
        '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
        '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
        '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
        '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
        '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
        '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
        '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
        '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
        '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
        '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
        '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
        '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
        '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
        '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
        '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
        '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
        '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
        '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
        '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
        '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
        ].join(",\n  ") + "\n]",
    ancestry: undefined,
    average: // (FROM EXERCISE) Returns the average of the data in the [array].
        function average(array) {
            function plus(a, b) { return a + b; }
            return array.reduce(plus) / array.length;
        },
    round: // Rounds a [value] to the specified number of [decimals].
        function round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }
};
$am.ancestry = JSON.parse($am.jsonData);



// =====================================================================================================================
// Student: Aaron Martone (am@aaronmartone.com)
// Class: Fullstack JavaScript Development Accelerator (Apr 27 - Jun 19, Seattle Campus)
// Assignment: Reading: Eloquent JavaScript (Due Apr 27, 2015)
// Exercise 1: Flattening
// =====================================================================================================================
// Use the reduce() method in combination with the concat() method to "flatten" an array of arrays into a single array
// that has all the elements of the input arrays.

$am.exercise1 = (function() {
    var arrays = [[1, 2, 3], [4, 5], [6]],
        results1;

    // THOUGHT PROCESS: We need to use reduce() and concat() in our solution. The reduce() function sequentially takes
    // elements of an array, passes them through an accumulator function and expects a single return. Since 'arrays' is an
    // array of arrays, the first set of data will be 3 arrays. Since the concat() method will take an array, and add to
    // it the values or array of the second operand to it, we can use it as the return of the anonymous accumulator function
    // to return a concatenated array of the 2 arrays passed in. This is then done with the remaining arrays in the 'arrays'
    // variable to build our result.
    var results1 = arrays.reduce(function(a, b) {
        return a.concat(b);
    });

    console.log('Exercise 1:', results1);
})();



// =====================================================================================================================
// Student: Aaron Martone (am@aaronmartone.com)
// Class: Fullstack JavaScript Development Accelerator (Apr 27 - Jun 19, Seattle Campus)
// Assignment: Reading: Eloquent JavaScript (Due Apr 27, 2015)
// Exercise 2: Mother-Child Age Difference
// =====================================================================================================================
// Using the example data set from this chapter, computer the average age difference between mothers and children (the
// age of the mother when the child is born). You can use the average() function defined earlier in this chapter. Note
// that not all the mothers mentioned in the data are themselves present in the array. The 'byName' object, which makes
// it easy to find a person's object from their name, might be useful here.

$am.exercise2 = (function() {
    // Filters the [array] via the [func] provided.
    function filter(array, func) {
        return array.filter(func);
    }

    // Returns the [person]'s 'mother' object's age at time of the [person]'s birth in the 'dataset'.
    function getMotherAgeAtBirth(dataset, person) {
        return person.born - dataset[person.mother].born;
    }

    // Determines if the [person] object's mother is represented in the [dataset].
    function haveMothersInData(dataset, person) {
        return (person.mother in dataset) ? (person.born - dataset[person.mother].born) : 0;
    }

    // Maps the [array] via the [func] provided.
    function map(array, func) {
        return array.map(func);
    }

    var byName = {},
        data = [],
        results2;

    // Populate the 'byName' data set:
    $am.ancestry.forEach(function(person) { byName[person.name] = person; });

    // THOUGHT PROCESS: With the 'byName' object providing easy name-based reference to their respective 'person' objects,
    // we can sequentially run through each person in the ancestry data easily. Though I could have implemented a simpler
    // approach where upon through each iteration, I performed an 'in' check to ensure the current person had a mother who
    // was in our data set for filtering, and then mapped that resulting set to the ages of their mothers when they were
    // born (before passing off for averaging), I instead wanted to do as the chapter instructed earlier on and abstracted
    // the functionality of my solution into a more human-readable example. For this reason, I named the filtering function:
    // haveMothersInData(), which reduces our initial data set to just those having mothers in our data, and the mapping
    // function to: getMotherAgeAtBirth(), to indicate our resulting data set contains age data, and not the filtered
    // 'person' object reference. Though the filter() and map() functions defined above are somewhat redundant due to the
    // Array object's builtin ability to do similar, this is the abstraction the chapter spoke of earlier. This aids in
    // readability even though I could have omitted them and used a syntax based on builtin functions.
    results2 = $am.round($am.average(map(filter($am.ancestry, haveMothersInData.bind(null, byName)), getMotherAgeAtBirth
        .bind(null, byName))), 1);

    console.log('Exercise 2:', results2);
})();



// =====================================================================================================================
// Student: Aaron Martone (am@aaronmartone.com)
// Class: Fullstack JavaScript Development Accelerator (Apr 27 - Jun 19, Seattle Campus)
// Assignment: Reading: Eloquent JavaScript (Due Apr 27, 2015)
// Exercise 3: Historical Life Expectancy
// =====================================================================================================================
// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the
// data came out. Let's take a closer look at that phenomenon. Computer and output the average age of the people in the
// ancestry data set per century. A person is assigned to a centry by taking their year of death, dividing it by 100,
// and rounding it up, as in 'Math.ceil(person.died / 100)'.

// NOTICE: For brevity sake, we are using the average() function that has been predefined in Exercise 2.

// THOUGHT PROCESS: One of the key issues here is that the output wants what appears to be (though it was not listed as
// criteria) a sequential display of centuries from lowest to highest. Arrays, with numerical indices, are strict in
// their ordering, but objects are more lax. Though many browsers alphabetize and sort object keys on display, this is
// not a guarantee of their output order, so we have to devise a data structure that will handle this; ever mindful that
// even though the indices are numeric, we are not starting at 0. I ultimately decided to use a sparse array, as it
// would allow us to display numeric indices where needed, and the output function could ignore empty values.

$am.exercise3 = (function() {
    // Generates expected display output from [data].
    function buildOutput(data) {
        var result = '';
        for (var i = 0; i < data.length; i++) {
            if (!!data[i]) { result += '\n' + i + ': ' + $am.round($am.average(data[i]), 1); }
        }
        return result;
    }

    var results3 = [];

    $am.ancestry.forEach(function(person) {
        var century = Math.ceil(person.died / 100),
            age = person.died - person.born;
        if (!results3[century]) { results3[century] = []; }
        results3[century].push(age);
    })

    console.log('Exercise 3:', buildOutput(results3));
})();



// =====================================================================================================================
// Student: Aaron Martone (am@aaronmartone.com)
// Class: Fullstack JavaScript Development Accelerator (Apr 27 - Jun 19, Seattle Campus)
// Assignment: Reading: Eloquent JavaScript (Due Apr 27, 2015)
// Exercise 4: Every And Then Some
// =====================================================================================================================
// Arrays also come with the standard methods every() and some(). Both take a predicate function that, when called with
// an array element as argument, returns true or false. Just like && returns a true value only when the expressions on
// both sides are true, every() returns true only when the predicate returns true for all elements of the array.
// Similarly, some() returns true as soon as the predicate returns true for any of the elements. They do not process
// more elements than necessary - for example, if some() finds that the predicate holds for the first element of the
// array, it will not look at the values after that. Write two functions, every() and some(), that behave like these
// methods, except that they take the array as their first argument rather than being a method.

// THOUGHT PROCESS: The thing to keep in mind here is that these functions don't waste time once they determine that
// no further computation can change the returned result. This reminds us to not simply iterate over all data when it
// is not needed, and instead to only do the minimal amount of work necessary to get an accurate result.
(function() {
    function every(array, func) {
        var result = true;
        for (var i = 0; i < array.length; i++) {
            if (!func(array[i])) { result = false; break; }
        }
        return result;
    }

    function some(array, func) {
        var result = false;
        for (var i = 0; i < array.length; i++) {
            if (func(array[i])) { result = true; break; }
        }
        return result;
    }

    console.log('Exercise 4:',
        '\n' + every([NaN, NaN, NaN], isNaN),
        '\n' + every([NaN, NaN, 4], isNaN),
        '\n' + some([NaN, 3, 4], isNaN),
        '\n' + some([2, 3, 4], isNaN)
    );
})();