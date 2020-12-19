function bmi1() {

    let weight1 = Number(document.getElementById("weight1").value);
    let height1 = Number(document.getElementById("height1").value);



    var BMI1 = (weight1 / Math.pow(height1, 2));

    document.getElementById("output1").innerHTML = BMI1;

}
   
function bmi2() {

    let weight2 = Number(document.getElementById("weight2").value);
    let height2 = Number(document.getElementById("height2").value);



    var BMI2 = (weight2 / Math.pow(height2, 2));

    document.getElementById("output2").innerHTML = BMI2;

}

document.getElementById('Result1').addEventListener('click',()=>{



if (document.getElementById('output1').value > document.getElementById('output2').value)
{
   
    console.log( "Victor BMI is higher than John")
}
else {

    console.log("Victor BMI is lower than John")
}
})
