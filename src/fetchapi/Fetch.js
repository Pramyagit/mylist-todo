import React from "react"

function Fecth() {
// const url="https://google.com"
  const Text="./src/fetch.txt";
const fetchApi=()=>{
  let fet=async()=>{
    try{

      const response=await fetch(Text);
      const result=await response.text();
      document.getElementById('pet').innerHTML=result;
      console.log("success",result)

    }
    catch(err){
console.log(err.msg);
    }
    finally{
      console.log("api success")
    }

  }
  fet();

}




  return (
    <div>
      <h1 id="pet">FETCH API</h1>
      <button type="button" onClick={fetchApi}>Website</button>
    </div>

  )
}

export default Fecth