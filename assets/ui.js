window.ui = {
  addSuggestion: function (suggestion) {
    var $suggestion = $('<li class="suggestion">' + suggestion + '</li>')
    $('#search-drop-down').find('ul').append($suggestion);
  },
  clearSuggestions: function () {
    $('#search-drop-down').find('li').remove();
  }
};
