//---------------------------------------------------------------------------------------
// 1

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

var heroesNotEvil = heroes.filter((hero)=> hero.isEvil==false);

var families = new Set(heroes.map(hero=>hero.family));

for(const hero of heroes){
    console.log("Sir" + hero.name);
}

var heroesMarvelNotEvil = heroes.filter((hero)=>hero.family=='Marvel' && hero.isEvil==false).map(hero => hero.name);

if (heroesMarvelNotEvil.length==0){
    console.log("There are no non-evil Marvel heroes")
} else {
    console.log(heroesMarvelNotEvil)    
}

//---------------------------------------------------------------------------------------
// 2

function multiplyNums(...nums){
    return nums.reduce((prevNum, currNum)=>{
        return prevNum*currNum
    }, 1)
}

console.log(multiplyNums.apply(...[1,2,3,4]));

//---------------------------------------------------------------------------------------
// 3
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

var lastName = person.userDetails.last;

console.log(lastName);

//---------------------------------------------------------------------------------------
// 4
const obj = {};

obj.name = "object";
obj.description = "const makes reference immutable, but object data can be changed";

console.log(obj);


//---------------------------------------------------------------------------------------
// 5

// for-in iterates over values in objects, and is preferred to iterate over objects
// for-of iterates over property names, and is preferred to arrays


//---------------------------------------------------------------------------------------
// 6

const obj2 = {
    name:"Nilay",
    getDetails: function(){
        return this.name;
    }
}

const getDetails1 = obj2.getDetails;
console.log(getDetails1());
// this is unbound context and so this will not have any value and thus it'll print undefined

const getDetailsWithBind = getDetails1.bind(obj2);
console.log(getDetailsWithBind())
// obj2 will be bound and that will be the context, so it'll return the name

// arrow function
const getDetailsWithBind2 = () => getDetails1.call(obj2);

// arrow functions come with ES6, however in classes they are attached to each instance,
// whereas bind is stored in prototype and so can be better performant in some cases

//---------------------------------------------------------------------------------------
// 7

console.log("First execution");

setTimeout(function(){
    console.log("event 1")
    setTimeout(function(){
        console.log("last event")
    },1000)
    
}, 1000)

console.log("second execution")
setTimeout(function(){
     console.log("event 2")
    setTimeout(function(){
        console.log("second to last event")
    },500)
       
}, 1000)

console.log("third exeuction")
setTimeout(function(){
     console.log("event 3")
    
}, 1000)

// JS will execute statements in order, but the setTimeout code block will be sent to event loop
// that will be executed after the set amount of time (1000ms). Inner setTimeouts will be set to 
// event loop and will be executed after the first set of events clear.

//---------------------------------------------------------------------------------------
// 8

let s1 = "abc", s2 = "def", s3 = "ghi", s4 = "jkl";

let s = {s1, s2, s3, s4};

//shorthand allows direct use of variables instead of redundantly writing it in object

function areaRectangle(length=0, width=0){
    return length*width;
}
console.log(areaRectangle(10)) //output 0

//defaualt param allows a default value for variable when it's not explicitly given

//---------------------------------------------------------------------------------------
// 9

let obj3 = {name: "Duncan"}
let obj4 = {age: 25}
let obj5 = {class: "MERN"}

//using Object.assign

let mergedObj1 = Object.assign(obj3, obj4, obj5 )

// ES6
let mergeObj2 = {...obj3, ...obj4, ...obj5}



//---------------------------------------------------------------------------------------
// 10
let map1 = new Map();

map1.set("id", 123)
map1.set("name", "Alice")
map1.set("email", "alice@wonderland.com");

console.log(map1.get("name")); // output Alice

map1.clear();

let set1 = new Set(["Alice", "Bob", "Claire", "David"]);

set1.add("Alice");
// won't add the name

//---------------------------------------------------------------------------------------
// 11

let promise1 = new Promise((resolve, reject)=>{
    let firstName = "Nilay";
    let lastName = "Patel";

    setTimeout(()=> {
        resolve({
            status: "success",
            arrowFunction: () =>{
                return this.status;
            },
            defaultParamsAndRestOperator: function(response={status:"success"}, data={}){
                return [...response, ...data];
            },
            morePromises: new Promise((resolve, reject){
                resolve({
                    id:"new promise",
                    status:"success"
                });

                reject({
                    id:"new promise",
                    status: "rejected"
                })
            }),
            name: `${firstName} ${lastName}`
            

        })
    }, 2000)

    setTimeout(()=>{
        reject({
            status:"rejected"
        })
    }, 1000)
})

console.log(promise1);


//---------------------------------------------------------------------------------------
// 12

// same as question 2


//---------------------------------------------------------------------------------------
// 13
function promiseFunction(){
        return promise1;
    }

function promiseFunction2(){
    return setTimeout(promise1, 2000);
}
    
async function asyncPromiseFunction() {

    await promiseFunction().then((data, err)=> console.log(data));

    Promise.all([promiseFunction(), promiseFunction2()]).then((data, err)=>{
        console.log("promises are again executed")
    })
}

//---------------------------------------------------------------------------------------
// 14



//---------------------------------------------------------------------------------------
// 15

// SPA -> Single Page Application, where instead of redirecting to new pages when
// users interact with a webapp, all the functionality is given on a single page that 
// is dynamically rewritten with calls to the server. 
// Under classical multipage applications, this would be done via redirecting to new pages
// with new resources loaded into that page statically or dynamically

//http -> an application layer protocol to communicate between two endpoints.
// there are server requests that are enabled with http like get, put, post, patch that will fetch
// data, or post data to the server. There is a request header, body, and a response along with a status code denoting success or failure
// HTTP is an unsecured, and its communication is plaintext. HTTPS is encrypted

//REST ->  ??

// statelessness -> it can be applied to many different contexts. But within webapps,
// it is when client data is not stored from one session to another.
