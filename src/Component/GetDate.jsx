


export function GetDate(props) {

    const date = new Date(props.updateStudiesDate);
    
    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    
       const dayOfWeek = date.toLocaleDateString("en-Us", options);
       console.log(dayOfWeek);
return dayOfWeek
}