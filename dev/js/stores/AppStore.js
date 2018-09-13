var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  visitorData: [
    {fullName: '', isRequired: true},
    {date: '', isRequired: true},
    {time: '', isRequired: true},
    {uniqueID: '', isRequired: true},
    {carRego: '', isRequired: false},
    {reasonForVisit: '', isRequired: true}
  ]
};

function _updateVisitorName (name) {
  _store.visitorData.forEach((field, i) => {
    if ( field.hasOwnProperty('fullName') ) {
      field.fullName = name
    }
  })
}

var AppStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getDetails: function () {
    return _store.visitorData;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.UPDATE_VIST_NAME:
      _updateVisitorName(action.data);
      console.log('updated dettails : ', _store);
      break;
    default:
      return true;
  }

  MovieStore.emitChange();
});

module.exports = AppStore;
