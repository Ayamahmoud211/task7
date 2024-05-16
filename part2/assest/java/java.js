// question1
let num1=document.querySelector(".num1")
let num2=document.querySelector(".num2")
let num3=document.querySelector(".num3")
let max=document.querySelector(".max")
let min=document.querySelector(".min")
function minmax(){
    let maxvalue=Math.max(num1.value,num2.value,num3.value)
    let minvalue=Math.min(num1.value,num2.value,num3.value)
    max.value=maxvalue
    min.value=minvalue
}
// question2
let char=document.querySelector(".char")
let result=document.querySelector(".result")
function vowel(){
    if(char.value=="o" || char.value=="e" || char.value=="a" || char.value=="u" || char.value=="i"){
        result.value="vowel"
    }
    else{
        result.value="consonant"
    }
}
// question3
let num=document.querySelector(".num")
let result2=document.querySelector(".result2")
function mult(){
    let l=[]
    for(let i=1 ; i<=12 ; i++){
        let a= i * num.value
        l.push(a)
    }
    result2.value=l
}
// question4
let number=document.querySelector(".number")
let result3=document.querySelector(".result3")
function even(){
    let l=[]
    for(let i=1 ; i<=number.value ; i++){
        if(i%2==0){
            l.push(i)
        }
    }
    result3.value=l
}
// question5
let mark1=document.querySelector(".mark1")
let mark2=document.querySelector(".mark2")
let mark3=document.querySelector(".mark3")
let mark4=document.querySelector(".mark4")
let mark5=document.querySelector(".mark5")
let total=document.querySelector(".total")
let average=document.querySelector(".average")
let precentage=document.querySelector(".precentage")
let Total=document.querySelector(".Total")

Total.addEventListener("click", ()=>{
    let a=+mark1.value + +mark2.value + +mark3.value + +mark4.value + +mark5.value
    total.value=a
})
function Average(){
    let a=+mark1.value + +mark2.value + +mark3.value + +mark4.value + +mark5.value
    let c= a/5
    average.value=c
}
function Precentage(){
    let a=+mark1.value + +mark2.value + +mark3.value + +mark4.value + +mark5.value
    let b= (mark1.value/a)*100 + (mark2.value/a)*100  +(mark3.value/a)*100  +(mark4.value/a)*100  + (mark5.value/a)*100 
    precentage.value=b
}
// question6
let physics=document.querySelector(".physics")
let chimistry=document.querySelector(".chimistry")
let biology=document.querySelector(".biology")
let mathematics=document.querySelector(".mathematics")
let computer=document.querySelector(".computer")
let p1=document.querySelector(".p1")
let p2=document.querySelector(".p2")
function Precent(){
    let a=+physics.value + +chimistry.value + +biology.value + +mathematics.value + +computer.value
    let b= (physics.value/a)*100 + (chimistry.value/a)*100  +(biology.value/a)*100  +(mathematics.value/a)*100  + (computer.value/a)*100 
    p1.value=b
    p1.value>=90 ? p2.value="A" : p1.value>=80 ? p2.value="B" : p1.value>=70 ? p2.value="C" :p1.value>=60 ? p2.value="D" : p1.value>=40 ? p2.value="E" : p2.value="F"

}















