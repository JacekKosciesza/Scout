module.exports = function() {
  var config = {
      
      // all ts to vet
      allts: [
        './app/**/*.ts',
        './*.ts'
      ]
  };
  
  return config;
};