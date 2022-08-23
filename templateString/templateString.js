// Template Strings/Literals
// `` backticks 
const firstName = "bob";
const lastName = "sanders";
const age = 25;

const phrase = `My name is ${firstName} ${lastName} and I am ${age} years old`;
console.log(phrase);

// Dynamic HTML with objects
const person = {
    name: "Geno",
    job: "Bard",
    hobbies: ["gambling", "guitar", "drink"],
};

const result = document.getElementById("result");

result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
    .map(item => { 
    return `<li>${item}</li>`;
    })
    .join("")}</ul>
`;

// tagged template literals

const author = "Some Author";
const statement = "Some Statment";

const quote = highlight`Here is the ${statement} by ${author} and it is true`;
console.log(quote);

const result2 = document.getElementById("result2");
result2.innerHTML = quote;

function highlight(text, ...vars){
    const awesomeText = text.map((item, index)=>{
        return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
    });
    return awesomeText.join('');
};