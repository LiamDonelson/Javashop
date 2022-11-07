
const fruit = ["Apples", "Pears", "Oranges"];

const appleprice = 1.99;
const pearprice = 2.99;
const orangeprice = 1.59;

const price = ["appleprice", "pearprice", "orangeprice"];

const cart = [0.00];

var x = true;

let sum = 0;


while(x){
    console.log("Apples = 1.99 (1) Pears = 2.99 (2) Oranges = 1.59 (3)"); 
    let width = prompt("Please select an index that you would like to buy");
    width+1;    




if (width ="1"){
    console.log("Adding apples to your cart!")
    cart.concat(appleprice)
}
else if (width = "2"){
    console.log("Adding Pears to your cart!")
    cart.concat(pearprice)
}
else if (width = "3"){
    console.log("Adding Orangers to your cart!")
    cart.concat(orangeprice)
}


    let goOn = prompt("Would you like to add anything else to your cart?(Y/N)");

    if (goOn = "Y")
    {
        continue;
    }
    
    console.log("Alright lets checkout!")


    cart.forEach(Myfunction);


    function Myfunction(price){
        sum+=price;
    }


console.log(`Total Cost: ${sum}`)

}
