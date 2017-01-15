describe('ScheduleModel', function(){
    describe('#find()', function(){
        it('should check find function', function(done){
            Schedule.find()
            .then(function(results){
                // some test
                done();
            })
            .catch(done);
        });
    });
});