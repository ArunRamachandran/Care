var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConstants');

var VisitorActions = {
  updateVisitorName: function (value) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.UPDATE_VIST_NAME,
      data: value
    })
  }
}
