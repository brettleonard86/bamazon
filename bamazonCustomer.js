var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "bamazon2_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    var query = connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("--------------------------------------");
            console.log(res[i].id + ". " + res[i].product + " | " + "$" + res[i].price);
            console.log("--------------------------------------");
        }
        console.log("--------------------------------------");
        action();
    });
}

function action() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                type: 'list',
                name: 'productChoice',
                choices: function() {
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push(res[i].product);
                    }
                    return choiceArray;
                },
                message: 'Please select the product you would like to buy.',
            }, {
                type: 'input',
                name: 'qty',
                message: 'How many would you like to buy?'
                
            }, {
                type: 'confirm',
                name: 'confirm',
                message: 'Are you sure?'
            }

        ]).then(function(answer) {
            //get the information of the chosen item
            var chosenItem;
            for (var i = 0; i < res.length; i++) {
                if (res[i].product === answer.productChoice) {
                    chosenItem = res[i];
                    //console.log(chosenItem);
                }
            }//console.log(chosenItem);
            if (chosenItem.stock_quantity >= parseInt(answer.qty)){
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: (chosenItem.stock_quantity - answer.qty)
                        },
                        {
                            id: chosenItem.id
                        }
                    ],
                    function(err){
                        if(err) throw err;
                        console.log("***************************************");                      console.log("Your purchase is complete. You spent $" + (chosenItem.price * answer.qty) + ".");
                        console.log("***************************************");
                        start();
                    }
                );
            }else{
                console.log("***************************************");
                console.log("We do not have enough " + chosenItem.product + ". We have " + chosenItem.stock_quantity + " remaining.");
                console.log("***************************************");
                start();
            }
        });
    });
}









// {
//     type: 'confirm',
//     name: 'areYouSure',
//     message: 'How many would you like to purchase?'
// }