//declare variables input which take classname="bill" ,select and input which take people number which share in paying process
let bill = document.querySelector('.bill');
let service=document.querySelector('select');
let people=document.querySelector('.people');
class CalApp{
    //clculateBill is a method to calculate 
    calculateBill(bill,service,peopleShared){
        return(bill/peopleShared)*service
    }
    //put result in divison which take classname="result"
    billResult(){
            document.querySelector('.result').innerHTML=`everyone pay`+this.calculateBill(parseInt(bill.value),parseFloat(service.value),parseInt(people.value))+`$`
            
        
    }
    // make inputs empty when u enter data
    resetForm(){
        bill.value ="";
        people.value = "";
    }
        //make button dont display result if input is empty
    vaildInput(){
        document.querySelector('button').addEventListener('click',()=>{
            
            if(bill.value === "" || people.value === ""){
                window.alert('Fill is empty')
            }
            else if(bill.value <= 0 ||people.value <= 0){
                window.alert("Invaild value");
                this.resetForm();
            }
            else{
                this.billResult()
                this.resetForm();
            }
        })
    }
    
}
const cal = new CalApp();
cal.vaildInput();

//dont reload(send data) when click button     
document.querySelector('form').addEventListener('click',(e)=>{
    e.preventDefault();
})














//(bill/num_people)*quality
//  document.querySelector('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
// })
// let bill = document.querySelector('.bill');
// let people = document.querySelector('.people');
// let quality =document.querySelector('select')



// function result(bill , people,quality){
//     return (bill/people)*quality
// }
// console.log(result(10,5,2))

// function display(){
//     document.querySelector('.result').innerHTML=result(parseInt(bill.value),parseInt(people.value),parseFloat(quality.value))
// }

