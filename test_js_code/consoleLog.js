console.log=(function() {
  var orig=console.log;
  return function() {
    try {
      var tmp=process.stdout;
      process.stdout=process.stderr;
      orig.apply(console, arguments);
    } finally {
      process.stdout=tmp;
    }
  };
})();

console.log("aaaa");