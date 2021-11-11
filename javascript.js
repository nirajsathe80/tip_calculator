function tipAmount() {
    let amount = document.querySelector("#bill").value ; 
    

    let service = document.querySelector('#service').value ; 
    

    let people = document.querySelector("#people").value ; 
 
    let tip = Math.floor((amount * service ) / 100) ; 
    let rupess = Math.floor(tip / people) ; 

    let ans = document.getElementById("ans") ; 

    ans.value = rupess  ; 

    preventDefault() ; 

}






