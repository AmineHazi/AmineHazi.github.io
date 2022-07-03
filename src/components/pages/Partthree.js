import "./css/partone.css";
import FormInput from "./FormInput";
import { useState } from "react";

function Partthree() {
    const [values, setValues] = useState({
      check: "",
    });
    const [result, setResult] = useState("");
    const inputs = [
      {
        id: 3,
        name: "check",
        type: "text",
        placeholder: "Veuillez inserer le mot",
        errorMessage:
        "Le mot doit être du langage ^[a-b]*$",
        label: "Mot",
        pattern: "^[a-b]*$",
        required: false,
      }
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      checkword();
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const checkword = function() {

      if (values.check === "") {

        setResult(" ε appartient au langage L(G).");
        return;

      } else if (values.check !== "") {

        let last_index = values.check.length - 1; 
        let first_index = 0;

        while(last_index >= first_index){
          // check the rule aaSb
          if(values.check.charAt(last_index) === 'b' && values.check.charAt(first_index) === 'a' && values.check.charAt(first_index + 1 ) === 'a'){
            last_index -= 1;
            first_index += 2;
          }
          else{
            // check the rule Sa
            if(values.check.charAt(last_index) === 'a'){
              last_index -= 1;
            }
            // if it folows none of the rules above then it's wrong
            else{
              setResult(" Le mot n'appartient PAS au langage L(G)");
              return;
            }
          }
        }  
        setResult(" Le mot appartient au langage L(G)");   
      } else {
        setResult(" Le mot n'appartient PAS au langage L(G)");   
      }
    }

    return (
    <div className="partone">
      <form onSubmit={handleSubmit}>
        <h1 className="title2">Verifier si un mot appartient au langage L(G)</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <div className="result"> resultat:{result}</div>
      </form>
    </div>
  )
}

export default Partthree