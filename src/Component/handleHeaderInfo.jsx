

export function HandleHeaderInfo() {
    const inputs = Array.from(document.querySelectorAll("input"));
console.log(inputs)
    return (
        <>
        
      {  inputs.map(input => {
          if (input.value) {
                
                return <h1>Cv form is successfully filled</h1>
          } 
          
          return <h1> Please fill your Cv form</h1> 
        })}
        
        </>
    )
}
HandleHeaderInfo();