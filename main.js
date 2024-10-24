let words = ["Apple" , "Banana" , "Carot"];

let word  = words[0].toLowerCase();

let guess = "_".repeat(word.length).split('');

document.getElementById("word").textContent = guess.join('');

let counter = 0 ; 

document.getElementById('guessForm').addEventListener('submit', function(event) 
{
    event.preventDefault();  // Prevent form from refreshing the page
    const userInput = document.getElementById('letter').value;  // Get input value
    check(userInput);  // Call function with input as parameter
});


function check(letter)
{
    let counter = 0 ;
    for (let i = 0 ; i < word.length ; i++)
    {
        if (word [i] == letter.toLowerCase()) 
            {
                counter++;
                guess[i] = letter ;
                continue;
            }
    }

    if (counter == 0 ) {document.getElementById("message").textContent = "Try Again" ;}
    else {document.getElementById("message").textContent = "Good Job" ;}

    document.getElementById("word").textContent = guess.join('') ;
}