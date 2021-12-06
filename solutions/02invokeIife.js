export default (function() {
  
  //file has private scope
  function getTotal(a,b) {
    return a+b;
  }

  if (true) console.log(getTotal(1,2)) //3
  
})();
