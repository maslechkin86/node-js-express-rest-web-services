var should = require('should'),
	sinon = require('sinon');

describe('Book Controler Tests:', function() {
	describe('Post', function() {
			it('should not allow an empty title on post', function(){
				// Arrange
				var Book = function(book) {
					this.save = function(){}
				};
				var req = {
					body: {
						author: ''
					}
				};
				var res = {
					status: sinon.spy(),
					send: sinon.spy()
				};

				// Act
				var bookController = require('../controllers/bookController')(Book);
				bookController.post(req, res);

				// Assert
				res.status.calledWith(400).should.equal(true, 'Bad status:' + res.status.args[0][0]);
				res.send.calledWith('Title is required').should.equal(true);
			})

	})
})
