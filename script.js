const display = document.querySelector('#display');
let errorBox = document.getElementById('errorBox');
let Value = display.value;
const increament=()=>{  
    Number(Value);
    Value++;
    display.value = Value;
    
}

const decreament=()=>{
    Number(Value);
    if(Value <= 1){
        displayErr();
    }
    else{
        Value--;
        display.value = Value;
    }
}

const displayErr = () =>{
    let Error = document.createElement('div');
    Error.classList.add('error');
    Error.innerHTML = "Error: Value must be greater than ZERO!";
    errorBox.appendChild(Error);

    setTimeout(()=>{
        Error.remove();
    },3000);
}

