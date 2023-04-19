
let gender = document.getElementById('gender').value;

const idInputBox = document.getElementById("id2");
idInputBox.disabled = true;
const msg = document.getElementById("msg");
const date = document.getElementById("date")

const my_id = document.getElementById("id1");
my_id.disabled=true


const hidden_id = document.getElementById("id3")


function verify(){

    const strNumbers = idInputBox.value
    let setNumbers = idInputBox
    const RESTOFIDNUMBERS = 7
    const GENDERNUMBERS =4

    if(strNumbers.length>RESTOFIDNUMBERS){
        setNumbers.value = strNumbers.slice(0,RESTOFIDNUMBERS)
    }

    if(strNumbers.length>GENDERNUMBERS){
    const numbers = parseInt(strNumbers.slice(0,GENDERNUMBERS))
    const gender = document.getElementById("gender").value;
    
    checkGender(gender,numbers);
      
    }
 
}


// helper functions


function checkGender(gender,numbers){
    switch(gender){
        case "f":
            if(numbers<5000){
                setColors('correct')
                
            }else{
                
                setColors('incorrect')
                msg.innerHTML = "ID not matching Gender"
                setTimeout(setError,2000)
            }
            break;
    
        case "m":
            if(numbers<5000){
                
                setColors('incorrect')
                msg.innerHTML = "ID not matching Gender"
                setTimeout(setError,2000)
            }else{
                setColors('correct')
            }   
    }
    }
    
    
    function addStrings(total,str){
        return total+str;
    }
    
    function setError(){
        msg.innerHTML = " "
    }
    
    function setColors(status){
        if (status === 'correct'){
            // my_id.classList.remove('box-red')
            // my_id.classList.add('box-black')

            idInputBox.classList.remove('box-red');
            idInputBox.classList.add('box-black')

        } else {

            // my_id.classList.remove('box-black');
            // my_id.classList.add('box-red')
            idInputBox.classList.remove('box-black');
            idInputBox.classList.add('box-red')
            
        }
    }
    
    function setID(){
        idInputBox.disabled = false;
        idInputBox.focus()
        const date = document.getElementById('date').value;
        const date_filter = date.split("").filter(x=>x!=='-');
        const date_slice = date_filter.slice(2)
        const date_num = date_slice.reduce(addStrings,"").trim()
        my_id.value = date_num
        hidden_id.value = date_num
    }
    
    function resetID(){
        my_id.value="";
        idInputBox.value="";
        date.value=""
        idInputBox.disabled = true;
        my_id.disabled=true

       
    }
    
    