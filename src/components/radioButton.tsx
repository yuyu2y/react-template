type Select = {
    options: string[],
    selectedOption: string,
    onChange: any
};
export const RadioButton =(props: Select)=>{
    const {options,selectedOption,onChange} =props;
    
     return (
         <div>
         
             {options.map((option) => (
                  <label key={option}>
                      <input
                         type="radio"
                         value={option}
                         name="select"
                         checked={selectedOption === option}
                         onChange={onChange}
                     />
                 {option}
                 </label>
                 ))}
             
     
     </div>
     );
 };
