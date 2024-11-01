
/*const btn=()=>{
   
}

*/

const btn=()=>{
    const getValue=document.getElementById('btn').value;
    const API=`https://api.dictionaryapi.dev/api/v2/entries/en/ ${getValue}`;
    fetch(API).then(res=>res.json()).then(data=>{
        console.log(data);
        

   const mydiv=document.getElementById('result-div');
   const definition = data[0].meanings[0].definitions[0].definition;

   const word = data[0].word
     
   mydiv.innerHTML=`
   
             <h4> <span style='text-decoration:underline'>main word:</span> ${word}</h4>
                <h4 style='text-decoration:underline'>defination:${definition}</h4>
               
   `




   

document.getElementById('btn').value='';








    }

    )}