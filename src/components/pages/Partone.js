import { useState } from "react";
import "./css/partone.css";
import FormInput from "./FormInput";

const Partone = () => {

  //values of form one and two:
  const [values, setValues] = useState({
    word: "",
    power: "",
  });

  const [value, setValue] = useState({
    wordM: "",
    }
  )

  //result variables:
  const [resultP, setResultP] = useState("");
  const [resultM, setResultM] = useState("");

  //input variables:
  const inputs = [
    {
      id: 1,
      name: "word",
      type: "text",
      placeholder: "entrer votre mot",
      errorMessage:
      "le mot doit etre du langage ^[a-b-c]*$",
      label: "Mot",
      pattern: "^[a-b-c]*$",
      required: false,
    },
    {
      id: 2,
      name: "power",
      type: "number",
      placeholder: "puissance n",
      errorMessage: "La puissance doit être un nombre superieur ou égal à 0",
      min: 0,
      label: "Puissance",
      required: true,
    }
  ];

  const inputstwo = [
    {
      id: 3,
      name: "wordM",
      type: "text",
      placeholder: "entrer votre mot",
      errorMessage:
      "Le mot doit etre du langage ^[a-b-c]*$",
      label: "Mot",
      pattern: "^[a-b-c]*$",
      required: false,
    }
  ];

  const handleSubmitP = (e) => {
    e.preventDefault();
    power();
  };
  const handleSubmitM = (e) => {
    e.preventDefault();
    mirror();
  };


  //onchange for the two forms:
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onChangeT = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  //TP functions:
  const power = function() {  
    if (values.power === "0" || values.word === "") {
      setResultP(" ε");
    } else {
      let powermot = "";
      for (let index = 0; index < values.power; index++) {
          powermot = powermot + values.word;
      }
      setResultP(" " + powermot); 
    }
  }

  const mirror = function() { 

    if (value.wordM === "") {
      setResultM(" ε");
    } else {
        let index = value.wordM.length;
        let motMiroire = "";
        while(index > 0){
          motMiroire = motMiroire + value.wordM.charAt(index - 1);
          index -= 1;
        }
      setResultM(" " + motMiroire);
    }
  }

  return (
    <div className="partone">
      <form onSubmit={handleSubmitP}>
        <h1 className="title2">Puissance d'un mot</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <div className="result"> resultat:{resultP}</div>
      </form>
      <form onSubmit={handleSubmitM}>
        <h1 className="title2">Miroir d'un mot</h1>
        {inputstwo.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChangeT}
          />
        ))}
        <button>Submit</button>
        <div className="result"> resultat:{resultM}</div>
      </form>
    </div>
  );
};

export default Partone;