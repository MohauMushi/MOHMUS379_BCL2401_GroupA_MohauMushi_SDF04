// Initialize game variables
// The code initializes the game by generating two random cards using the getRandomCard() function.
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]// The cards are stored in an array called 'cards'
let sum = firstCard + secondCard // The sum of the two cards is calculated and stored in the 'sum' variable.
let hasBlackJack = false // The 'hasBlackJack' variable is set to false, indicating that the player does not have a blackjack yet.
let lisAlive = true // The 'isAlive' variable is set to true, indicating that the player is still in the game.
let message = ""// The 'message' variable is initially empty and will be used to display messages to the player.

// The code also creates a 'player' object with a name of "Mohau" and 145 chips.
let player = {
     name: "Mohau",
     chips: 145 
}

// Storing the message-el paragraph in a variable called messageEl
let messaageEl = document.getElementById("message-el")
//storing the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
//Storing the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": R" + player.chips
// the getRandomCard() function, it generates a random number between 1 and 13 using the Math.random() and Math.floor() functions. Then, it handles special cases for certain card values:
// If the random number is greater than 10, it returns 10.
// If the random number is equal to 1, it returns 11.
// For any other random number, it returns the random number itself.
function getRandomCard() {
    return randomNumber = Math.floor( Math.random()*13 ) + 1 
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}
//The startGame() function it sets the isAlive variable to true, generates two random cards using the getRandomCard() function, assigns them to firstCard and secondCard variables, creates an array cards with these two cards, calculates the sum of the cards and assigns it to the sum variable. Then, it calls the renderGame() function to display the game state on the page
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}
// the renderGame() function, it renders the sum and cards on the page, loops through the cards array to display all the cards, updates the sumEl element with the current sum, and sets the message variable based on the sum value.In the end it updates the messageEl element with the appropriate message.

//RenderGame function
function renderGame() {
    // Rendering the sum and cards on the page
   cardsEl.textContent = "Cards: "
   //A for loop that renders out all the cards instead of just two
    for ( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
   sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
// Displaying the message in the messageEl using messageEl.textContent
messaageEl.textContent = message
}

//the newCard() function, it checks if the player is alive  and does not have a blackjack and If both conditions are met, it generates a new random card using the getRandomCard() function, adds the card to the sum variable, pushes the card to the cards array, and calls the renderGame() function to update the game state
 function newCard() {
     if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card

    cards.push(card)
    renderGame()
     }
 }
 
 
//What i found difficult is the functions that include the array, loops and conditions, because
//it confuse on how to implement them inside the function code. But now am trying to understand 
//how functions work and how the array, loops and conditions can be added into the function.
//I have to practice javascript by building projects that involves javascript, so that i can be proficient in building projects that includes javascript code.