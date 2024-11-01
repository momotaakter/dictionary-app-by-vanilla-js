
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
   
 
                <p>${definition}</p>
                <p>${word}</p>
              
   
   
   `
    /*




    */




    }

    )}