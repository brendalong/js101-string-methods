// 1. Paste the code below into your HTML file.
	// <div id="sonnet">
	// 	<pre>
	// How like a winter hath my absence been
	// From thee, the pleasure of the fleeting year!
	// What freezings have I felt, what dark days seen!
	// What old December's bareness everywhere! 
	// And yet this time removed was summer's time;
	// The teeming autumn, big with rich increase,
	// Bearing the wanton burden of the prime,
	// Like widow'd wombs after their lords' decease:
	// Yet this abundant issue seemed to me
	// But hope of orphans, and unfathered fruit;
	// For summer and his pleasures wait on thee,
	// And, thou away, the very birds are mute:
	//    Or, if they sing, 'tis with so dull a cheer,
	//    That leaves look pale, dreading the winter's near.
	//    </pre>
	// </div>

 // Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet");
console.log("sonnet", sonnet);
var sonnetString = sonnet.innerHTML;
console.log("sonnetString", sonnetString);

// Find and output the starting position of the word "orphans"
var orphanIndex = sonnetString.indexOf("orphans");
console.log("orphanIndex", orphanIndex);

// Output the number of characters in the sonnet
var sonnetChars = sonnetString.length;
console.log("sonnetChars", sonnetChars);

// Replace the first occurance of the string "winter" with "yuletide"
var sonnetUpdate = sonnetString.replace("winter", "yuletide");
console.log("sonnetUpdate", sonnetUpdate);

// Replace all occurances of the string "the" with "a large"
sonnetUpdate = sonnetString.replace(/the/g, "a large");
console.log("sonnetUpdate #2", sonnetUpdate);
// in this situation, we are replacing the sonnetUpdate with the new version

// Set the content of the sonnet div with the new string
sonnet.innerHTML = sonnetUpdate;
console.log("sonnetString from the DOM", sonnet.innerHTML);