function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
const BMI = (weight / (height * 2 /100));
let BMI_state
let BMI_byAge

if(BMI <= 18.5){
  BMI_state = "under weight"
} else
if(BMI <= 24.9){
 BMI_state = "are in the healthy range"
} else 
if(BMI <= 29.9){
 BMI_state =  "over weight"
} else {
 BMI_state = "above obesity"
}

if(age >= 19 && age <=24 && BMI >= 19 && BMI <=24 ||
   age >= 25 && age <=34 && BMI >= 19 && BMI <=24 ||
    age >= 35 && age <=44 && BMI >= 19 && BMI <=24 ||
     age >= 45 && age <=54 && BMI >= 19 && BMI <=24 ||
      age >= 55 && age <=64 && BMI >= 19 && BMI <=24 ||
       age >65 && BMI >= 24 && BMI <=29 ) {
  BMI_byAge = "you are Healthy"
} else (
  BMI_byAge = "You are not Healthy"
)

alert(`your BMI is ${BMI} \nyou are ${BMI_state} \n ${BMI_byAge}`)

}
