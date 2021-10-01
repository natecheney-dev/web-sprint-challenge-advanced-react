import {useState} from 'react';
// write your custom hook here to control your checkout form

const useLocalStorage = (key, initialValues) => {
    const [useValues, setUseValues] = useState(()=> {
        if (localStorage.getItem(key)) {
            return(JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValues));
            return(initialValues);
        }
    });
    
    const setStoredValues = (item) => {
        localStorage.setItem(key, JSON.stringify(item));
        setUseValues(item);
    }

    return [useValues, setStoredValues];


}
const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage("data", initialValues);
  
    const handleChanges = e => {
      setValues({
        ...values, [e.target.name]: e.target.value
        
      });
      console.log('changes')
    };
  
   
  
    return([values, handleChanges]);
}

export default useForm;