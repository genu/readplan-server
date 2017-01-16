/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    /**
       * FCFS: First Come First Serve
       * SRT: Shortest Remaining Time
       * RR: Round Robin
       * Category: Round robin between categories
       */
    streamSorting: {
      type: 'string',
      enum: [ 'FCFS', 'SRT', 'RR', 'Category' ]
    },
    isPaused: { type: 'boolean', defaultsTo: false },
    roundRobinLength: { type: 'string', defaultsTo: 5 },
    resources: { collection: 'resource', via: 'owner' }
  }
};
