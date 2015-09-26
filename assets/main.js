function Engine () {
  var self = this;

  $(function () {
    self.startEventListeners();
  });
}

Engine.prototype.startEventListeners = function () {
  var self = this;

  $('#search-bar').on('keyup', function () {
    var query = $(this).val();
    self.search(query);

  }).on('keydown', function (event) {
    if (event.keyCode == 27) {
      $(this).val('');
      ui.clearSuggestions();
      return;
    }

    if (event.keyCode == 8 && $(this).val().length == 0) {
      ui.clearSuggestions();
    }
  });
};

Engine.prototype.search = function (query) {
  // TODO: escape HTML

  // TODO: Remove
  this.echo(query);

  // TODO: Uncomment code to send ajax request
  // this.ajaxSearch(query);
};

// TODO: Remove
Engine.prototype.echo = function (query) {
    ui.addSuggestion(query);
  }

Engine.prototype.ajaxSearch = function (query) {
  $.ajax({
    url: 'SERVER_URL',
    data: {
      'query': query
    },
    dataType: 'json'
  }).done(function (data) {
    // Got response
    try {
      var decodedData = JSON.parse(data);
      console.log(decodedData);
    }
    catch (error) {
      console.error('Got error: ' + error);
    }
  }).always(function () {
    // Always do something
  });
};

window.engine = new Engine();
