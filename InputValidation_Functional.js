var icurrentInputValues ={

    firstName:'Iky',
    lastName:'',
    zipCode:'123',
    state:'',
}

var iinputCriteria = {
   

    firstName:[
    value=>value.length >=2
    ? ''
    : 'First Name must be atleast 2 Characters'
    ],
    lastName:[
     value=>value.length >=2
    ? ''
    : 'Last Name must be atleast 2 Characters' 
    ],
    zipCode:[
     value=>value.length ===5
    ? ''
    : 'Zip Code must be exactly 5 Characters' 
    ],
    state:[
     value=>value.length ===2
    ? ''
    : 'State Code must be exactly 2 Characters' 
    ],

}

var igetErrorMessages = (inputs,criteria)=>{
    console.log(Object.keys(inputs));
    return Object.keys(inputs).reduce((acc,fieldName)=>[      
    ...acc,
    ...criteria[fieldName].map(test=>test(inputs[fieldName])),

    ],[]).filter(x=>x);


}

console.log(igetErrorMessages(icurrentInputValues,iinputCriteria));
