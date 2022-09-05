class CoffeeShop {
	constructor (name, menu, orders) {
		
		this.name = name; 
		this.menu = menu;
		this.orders = orders
	}


	addOrder(item) {

		const result = this.menu.filter(el => el.name === item).length > 0 // returns an array

		const result2 =  this.menu.find(el => el.name === item) //returns an item 

		const result3 = this.menu.findIndex(el => el.name === item) //returns the index of the item 

		const result4 = this.menu.some(el => el.name === item) // returns boolean

		if (result4 === true) {

		 this.orders.push(item)
		} else {
			console.log("This item is currently unavailable!")
		}
	}
	
	fulfillOrder() {

		if(this.orders.length > 0) {
			console.log(`The ${this.orders[0]} is ready!`)
			
			this.orders.shift()
		} else {
			console.log("All orders have been fulfilled!")
		}
	}

	listOrders() {
		console.log(this.orders)
	}

	dueAmount() {
		let total = 0;

		this.orders.forEach(item => {

			const price = this.menu.find(el => el.name === item).price

			total += price
		})
		console.log(total)
	}

	cheapestItem() {
		
		let cheapest = {
			price: Infinity, 
			name: ""
		};

		this.menu.forEach(el => {
            if (el.price < cheapest.price) {
                cheapest.price = el.price
                cheapest.name = el.name
            }
        })
		console.log("The cheapest is", cheapest.name, 'with price', cheapest.price)

		//or 

		const result = this.menu.reduce((cheapest, item) => {

            if (item.price < cheapest) {
                cheapest = item.price
            }
            return cheapest
        }, Infinity)
        console.log("The cheapest is", cheapest.name, 'with price', result)

		//or

		// const prices = this.menu.map(el => el.price)
        // console.log(prices)
        // console.log(Math.min(...prices))

		//or

		const cheapestSort = this.menu.sort((a,b) => a.price - b.price)

		console.log("The cheapest is", cheapest.name, 'with price', cheapestSort[0].price)


	}

	drinksOnly() {

		const drinks = this.menu.filter(el => el.type === "drink")
		console.log(drinks)
	}

	foodsOnly() {

		const foods = this.menu.filter(el => el.type === "food")
		console.log(foods)
	}
}

const menu = [
	{name: "espresso", type: "drink", price: 2},
	{name: "lemonade", type: "drink", price: 3},
	{name: "cappuccino", type: "drink", price: 3.5},
	{name: "toast", type: "food", price: 4},
	{name: "tiramisu", type: "food", price: 4.5},
	{name: "sandwich", type: "food", price: 5}
]

const blackCoffeeShop = new CoffeeShop("Black", menu, []);
blackCoffeeShop.addOrder("espresso")
blackCoffeeShop.addOrder("espresso")
blackCoffeeShop.addOrder("cappuccino")
blackCoffeeShop.fulfillOrder()

blackCoffeeShop.listOrders()

blackCoffeeShop.dueAmount()

blackCoffeeShop.drinksOnly()
blackCoffeeShop.foodsOnly()
blackCoffeeShop.cheapestItem()

console.log(blackCoffeeShop)
