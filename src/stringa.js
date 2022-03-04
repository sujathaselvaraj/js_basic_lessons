/* eslint-disable semi */
// 3 ways to create a string variables
// 1.using single quotes
// 2.using double quotes
// 3.using back tickes

const nam = 'Sujatha';
const midname = 'Ajitha';
const lastname = 'Selvaraj';
console.log(nam);
console.log(midname);
console.log(lastname)
// const sent0 = 'she's so "cool"';
// console.log(sent0);
const sent1 = 'she\'s so "cool"';
console.log(sent1);
const sent2 = "she's so cool";
console.log(sent2);
const sent3 = 'she\'s so "cool"';
console.log(sent3);
const sent4 = "she's so \"cool\"";
console.log(sent4);

// multi line string using single doesn't work

// const song1 = 'I Like
//         GV songs and
//         sid songs';
//     console.log(song1);
const song2 = `I Like
        GV songs and
        sid songs`;
console.log(song2);
const hello1 = 'hai this is ' + nam + ' Selvaraj';
console.log(hello1);
const hello2 = `hai this is  ${nam}  Selvaraj.My favourite number is ${4 + 3}`;
console.log(hello2);
const html = `<div>
<h2>${nam}</h2>
<p>${hello1}</p>
</div>`;
console.log(html);
document.body.innerHTML = html;
