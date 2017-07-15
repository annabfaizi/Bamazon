var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Anali!2016",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  afterConnection();
});

//Function to display Products table from bamazon database in mysql
function afterConnection(){
		connection.query(
			"SELECT item_id, product_name, department_name, price FROM products",
			function(err, result){
				if (err) throw err;
				console.log(result);
				connection.result;
                selectPurchase();
			});
};

//Prompts user with Inquirer
function selectPurchase() {
  inquirer
    .prompt([
        {
        name: "item",
        type: "input",
        message: "Which item would you like to purchase? (please enter item_id number)"
        },
        {
        name: "units",
        type: "input",
        message: "How many units of this item would you like?"
        },
    ])
    .then(function(answer) {
        //check if item_id and unit entered is an integer
        if(!Number.isInteger(parseInt(answer.item)) || !Number.isInteger(parseInt(answer.units))) {
            console.log(answer.item + " and " + answer.units + " are not both numbers please select item and units again!");
            selectPurchase();
        }
        else {
          //run quantity check function
            function checkQuantity(){

            };
          //run total function
            function total(){

            };
        }
        
    });
}