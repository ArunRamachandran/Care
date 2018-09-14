var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConstants');

var VisitorActions = {

  updateDateAndTime: function (date, time) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.UPDATE_DATE_TIME,
      data: [date, time]
    })
  },

  updateVisitorName: function (value) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.UPDATE_VIST_NAME,
      data: value
    })
  },

  updateVisitorTitle: function (value) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.UPDATE_VIST_TITLE,
      data: value
    })
  },

  updateCustomerUniqueID: function (value) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.UPDATE_UNIQ_ID,
      data: value
    })
  },

  updateVisitorCarRego: function (value) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.UPDATE_CAR_REGO,
      data: value
    })
  },

  updateReasonForVisit: function (value) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.UPDATE_VIST_REASON,
      data: value
    })
  },

  verifyAndSubmitUserData: function () {
    AppDispatcher.handleAction({
      actionType: ActionTypes.VERIFY_AND_SUBMIT
    })
  }
}

module.exports = VisitorActions;
