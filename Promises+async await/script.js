
const jokes=document.querySelector('#joke')
const jokeBtn=document.querySelector('#jokeBtn')

//fat arrow function
const generatejoke =async() =>{
   
   const txtformat={
      headers:{
          Accept:"application/json"
      }
    }

    // fetch('https://icanhazdadjoke.com/',txtformat)
    // .then((res) =>
    //     res.json()
    //  )
    // .then((data)=>{
    //     console.log(data)
    //  jokes.innerHTML=data.joke;
    // })
    // .catch((error)=>{
    //    console.log(error)
    // })
try{
    const res=await fetch('https://icanhazdadjoke.com/',txtformat)
    const data=await res.json()
    jokes.innerHTML=data.joke
}
catch(err){
    console.log(`this is error ${err}`)
}
}

jokeBtn.addEventListener("click",generatejoke);

generatejoke()

