function shuffleArray(arr) {
    // Create a copy of the original array
    const shuffledArray = [...arr];
  
    // Shuffle the copied array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const shuffledArray = shuffleArray(originalArray);
  
  // console.log(originalArray); // Original array remains unchanged
  // console.log(shuffledArray); // Shuffled array

  export default shuffleArray