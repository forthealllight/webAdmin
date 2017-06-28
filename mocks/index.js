module.exports = function(app) {
  app.get("rest", function(req, content, callback) {
    setTimeout(function() {
      callback(null, {
        a: 1,
        b: 2
      });
    }, 500);
  });
};
