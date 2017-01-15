var sails = require('sails');

before(function(done){
    this.timeout(5000);

    sails.lift({
        // sails config
    }, function(err){
        if(err) return done(err);

        // Load fixtures
        done(err, sails);
    });
});

after(function(done){
    // Clear fixtures
    sails.lower(done);
})