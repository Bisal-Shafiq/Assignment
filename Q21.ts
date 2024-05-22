interface person {
    name: string,
    age: number,
    qualification: string,
    nationality: string

}

let Person : person = {
    name : "Bisal",
    age : 24,
    qualification: "BS in Software Engineering",
    nationality: "Pakistani"
}


console.log(Person);


interface programmingLanguage_Book {
    Title: string,
    Author: string,
    Edition: number,
    YearPublication: number
}


let Book : programmingLanguage_Book = {
    Title : "Starting out with Python",
    Author: "Tony Gaddis",
    Edition: 4,
    YearPublication: 2018

}

console.log(Book);