var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  visitorData: [
    {title: 'Mr.', isRequired: true},
    {fullName: '', isRequired: true},
    {date: '', isRequired: true},
    {time: '', isRequired: true},
    {uniqueID: '', isRequired: true},
    {carRego: '', isRequired: false},
    {reasonForVisit: '', isRequired: true}
  ]
};

function _updateFieldValue (value, fieldName) {
  _store.visitorData.forEach((field, i) => {
    if ( field.hasOwnProperty(fieldName) ) {
      field[fieldName] = value;
    }
  })

  console.log('_store : ', _store);
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
      _updateFieldValue(action.data, 'fullName');
      break;

    case AppConstants.UPDATE_VIST_TITLE:
      _updateFieldValue(action.data, 'title');
      break;

    case AppConstants.UPDATE_DATE_TIME:
      _updateFieldValue(action.data[0], 'date');
      _updateFieldValue(action.data[1], 'time');
      break;

    case AppConstants.UPDATE_UNIQ_ID:
      _updateFieldValue(action.data, 'uniqueID');
      break;

    case AppConstants.UPDATE_CAR_REGO:
      _updateFieldValue(action.data, 'carRego');
      break;

    case AppConstants.UPDATE_VIST_REASON:
      _updateFieldValue(action.data, 'reasonForVisit');
      break;

    default:
      return true;
  }

  AppStore.emitChange();
});

module.exports = AppStore;
