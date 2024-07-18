/* var products=[
    {
        code:799,
        name:"topaz",
        size:16,
amount:100,
price:190


    },
    {
        code:799,
        name:"light rose",
        size:10,
amount:40
,price:190

    },
    {
        code:799,
        name:" light_topaz",
        size:40,
amount:10
,price:190

    },
    {
        code:799,
        name:" colorado_topaz",
        size:30,
amount:12
,price:190

    },
    {
        code:799,
        name:"redsea",
        size:16,
amount:100
,price:190
    },
]
var cartona=``
for(var i =0;i<products.length;i++){
    console.log(products[i]);
cartona+=`
  <tr>
              
                <td>${products[i].name}</td>
                <td>${products[i].code}</td>
                <td>${products[i].size}</td>
                 <td>${products[i].amount}</td>
                  <td>${products[i].price}</td>
              </tr>



`
} */
/* document.getElementById('demo').innerHTML=cartona; */

var prouductArray=[]

if(localStorage.getItem('prouducts')!=null){
    prouductArray=JSON.parse(localStorage.getItem('prouducts'))

    display_prouduct();

}


function getdata() {
    // Retrieve values from input fields
    var productname = document.getElementById("product_name").value;
    var productBR = document.getElementById("product_price").value;
    var productSZ = document.getElementById("product_size").value;
    var productAM = document.getElementById("product_amount").value;

    // Create an object with the retrieved values
    var productobjec = {
        name: productname,
        price: productBR,
        amount: productAM,
        size: productSZ,
    };
    prouductArray.push(productobjec)
localStorage.setItem('prouducts',JSON.stringify( prouductArray));
    // Log the object to the console
    console.log(prouductArray);

    display_prouduct();
    clear();

}

function display_prouduct(){
    var cartona=``
    for(var i =0;i<prouductArray.length;i++){
        console.log(prouductArray[i]);
    cartona+=`
      <tr>
                  
                    <td>${prouductArray[i].name}</td>
                    <td>${prouductArray[i].price}</td>
                    <td>${prouductArray[i].size}</td>
                     <td>${prouductArray[i].amount}</td>
               
                  </tr>
    
    
    
    `
    } 
     document.getElementById('demo').innerHTML=cartona; 
}
function clear(){
document.getElementById("product_name").value="";
 document.getElementById("product_price").value="";
    document.getElementById("product_size").value="";
    document.getElementById("product_amount").value="";
}
function clear_inputs() {
    var productname = document.getElementById("product_name").value="";
    var productBR = document.getElementById("product_price").value="";
    var productSZ = document.getElementById("product_size").value="";
    var productAM = document.getElementById("product_amount").value="";

}
