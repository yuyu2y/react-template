import { useState  } from "react";
import { RadioButton } from "./components/radioButton";

const App = () => {
    const [ selectedOption, setSelectedOption ] = useState('');
    const options = [ "option 1","option 2"];
 const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  };

return(
    <div>
    <RadioButton
      options={options}
      selectedOption={selectedOption}
      onChange={handleOptionChange}
    />
  </div>
  
);
};
export default App;
