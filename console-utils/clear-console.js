module.exports = {
    clearConsole: () => {
      // Check if the console is available (e.g., in a browser environment)
      console.log(console)
        if (typeof console !== 'undefined') {
          // Clear the console
          console.clear();
        }
      }
}
