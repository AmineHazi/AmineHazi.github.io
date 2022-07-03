import "./css/partone.css";
import FormInput from "./FormInput";
import { useState } from "react";

function Parttwo() {
    const [value, setValue] = useState({
      Number: "",
    });
    const [result, setResult] = useState("");
    const inputs = [
      {
        id: 1,
        name: "Number",
        type: "number",
        placeholder: "Taille des mots a générer (n)",
        errorMessage: "La taille doit etre superieur ou egal a 3",
        min: 3,
        label: "Taille des mots",
        pattern: "[0-9]+",
        required: true,
      }
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      generateLan();
    };

    //////////////////////////////////////////////////////////////////////
    const generateLan = function() {

      let alphabet = ['a','b'];
      let list = [];
      let length_word = value.Number - 3;
      let alphabet_length = 2;

      printAllKlength(alphabet, "", alphabet_length, length_word ,list);
      generatewords(list,length_word);
    }

    const generatewords = function(list, length) {
      let word_list = [];
      let word = "";
      let i = 0;
      let j = 0;
      let size = length + 3;
      // add "abb" between every character of the every word
      while(i <= length){
          while(j < list.length){
              word = list[j];
              word = word.slice(0,i) + "abb" + word.slice(i);
              word_list.push(word);
              j = j + 1;
          }
          i += 1;
          j = 0;
      }
      let uniqueWordListe = [...new Set(word_list)];
      let s = "Le nombre de mots de taille " + size + " est " + uniqueWordListe.length + " qui sont : ";
      
      for (let i = 0; i< uniqueWordListe.length; i++) {
        s = s + " || " + uniqueWordListe[i];
      }
      setResult(s);
    }

    const printAllKlength = function(alphabet, prefix, alphabet_length, length_word ,list) {
      
      if( length_word == 0 ){
        list.push(prefix);
        return;
      }

      for (let i = 0; i < alphabet_length; i++) {
        var newPrefix = prefix + alphabet[i];
        printAllKlength(alphabet, newPrefix, alphabet_length, length_word-1, list);
      }

    }

    //////////////////////////////////////////////////////////////////////
    
  
    const onChange = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    };
    return (
    <div className="partone">
      <form onSubmit={handleSubmit}>
        <h1 className="title2">Générer les mots de taille n du langage L(G)</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
          />
          ))}
        <button>Submit</button>
  
        <div className="result"> Resultat<br/> {result}</div>
      </form>
    </div>
  )
}

export default Parttwo