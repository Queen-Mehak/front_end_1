
// response object need to be changed in JSON practice chaining for this 
let url="https://official-joke-api.appspot.com/random_joke";
const setup=document.querySelector(".setup");
const punchline=document.querySelector(".punchline");
const btn=document.querySelector(".btn");
btn.addEventListener("click",getjoke);
getjoke();

async function getjoke(){
    try {
        const data= await fetch(url);
        // console.log(data);
        const originaldata =await data.json();
        // console.log(originaldata);
        setup.textContent =originaldata.setup;
        punchline.textContent =originaldata.punchline;
    }
    catch(error){
        console.log(error);
    }
}
// function getjoke(){
//     const data=fetch(url);
//     data.then((data)=>{
//         return data.json();
//         // console.log(data);
//     }).then((originaldata)=>{
//         console.log(originaldata);
//         setup.textContent=originaldata.setup;
//         punchline.textContent=originaldata.punchline;
//     }).catch((error)=>{
//         console.log(error);
//     });
// }
