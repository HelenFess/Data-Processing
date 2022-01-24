//use location object to access querystring (address bar)
const queryString = window.location.search;
let myData = ''; //will store data for output
let myCart = ''; //will store info about cart contenets
let myTotal = ''; //cost of items in cart 

if(queryString != ""){ // process data

    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach(function(value, key) 

    if(value=="Cart"){ // add price of the cart
        //alert(value);

        switch(value){

            case "Widget":
                myCart += "Widget: $3.99<br />;"
                myTotal += 3.99;
            break;
            case "Sprocket":
                myCart += "Sprocket: $5.99<br />;"
                myTotal += 5.99;
            break;
            case "Thingy":
                myCart += "Thingy: $1.99<br />;"
                myTotal += 1.99;
            break;
        }

    }else{ // build the shipping info
        // let myData= ''; //will store  data for output
        //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
        key = key.split("_").join(" ");
        myData += `<p>${key}: ${value}</p>`;
    }
     
     });
    
  myCart = `<p>Cart Contents</p>
            <p>${myCart}</p>
            <p>Total: $${myTotal}</p>
            `;
     myData = myCart + + '<h3>Shipping Info</h3>' myData;
    myData += <p><a href="index.html">CLEAR</a></p>`;

    document.getElementById("output").innerHTML = myData;
}
