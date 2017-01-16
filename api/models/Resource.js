/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    type: {
      type: 'string',
      enum: [ 'book', 'website', 'pdf', 'doc' ],
      required: true
    },
    data: { type: 'json', required: true },
    getLength: function() {
      switch (this.type) {
        case 'book':
          // Assume ~350 words is on 1 page
          return this.data['ItemAttributes']['NumberOfPages'] * 350;
          break;
        case 'website':
          return this.data.wordCount;
          break;
        case 'pdf':
          break;
        case 'doc':
          break;
      }
    },
    toJSON: function() {
      var obj = this.toObject();

      obj.length = this.getLength();

      return obj;
    }
  }
};
