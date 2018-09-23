var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  visitorData: [
    {title: 'Mr.', isRequired: false},
    {fullName: '', isRequired: false},
    {date: '', isRequired: false},
    {time: '', isRequired: false},
    {uniqueID: '', isRequired: false},
    {carRego: '', isRequired: false},
    {reasonForVisit: '', isRequired: false}
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

function _validateVisitorData () {
  const data = _store.visitorData;
  let invalidFields = []; // Array to keep invalid visitor entry fields

  data.forEach(( field, i ) => {
    let keys = Object.keys(field); // eg. ['title', 'isRequired']
    field[keys[1]] && ! field[keys[0]] ? invalidFields.push(field) : null;
    // If a field is marked as required & data is not given by the visitor, then make it as an invalid entry.
   })

   return invalidFields;
}


var AppStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  emitErrorEvent: function(invalidFields) {
    this.emit(AppConstants.ERROR, invalidFields);
  },
  emitSuccessEvent: function(data) {
    this.emit(AppConstants.SUCCESS, data);
  },
  addChangeListener: function (eventName, callback) {
    this.on(eventName, callback);
  },
  removeChangeListener: function (eventName, callback) {
    this.removeListener(eventName, callback);
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
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_VIST_TITLE:
      _updateFieldValue(action.data, 'title');
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_DATE_TIME:
      _updateFieldValue(action.data[0], 'date');
      _updateFieldValue(action.data[1], 'time');
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_UNIQ_ID:
      _updateFieldValue(action.data, 'uniqueID');
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_CAR_REGO:
      _updateFieldValue(action.data, 'carRego');
      AppStore.emitChange();
      break;

    case AppConstants.UPDATE_VIST_REASON:
      _updateFieldValue(action.data, 'reasonForVisit');
      AppStore.emitChange();
      break;

    case AppConstants.VERIFY_AND_SUBMIT:
      let inputValidation = _validateVisitorData();
      console.log('validation : ', inputValidation);
      if (inputValidation.length) { // If visitor didn't fill all the mandatory fields requried to process
        AppStore.emitErrorEvent(inputValidation);
      } else {
        let data = AppStore.getDetails();
        AppStore.emitSuccessEvent(data);
      }
      break;

    default:
      return true;
  }

});

module.exports = AppStore;
