(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
      if(!selector) {
        throw new Error('No selector provided!');
      }

      //find the "selector" in the DOM using jQuery and assign it to this.formElement
      this.$formElement = $(selector);
      if (this.$formElement.length == 0) {
          throw new Error('Could not find element with selector: ' + selector);
      }
    }

    //add an event handler for the submit button
    FormHandler.prototype.addSubmitHandler = function() {
        console.log('Setting the submit handler for the form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            let data = $(this).serializeArray();
            console.log(data);
        });
    }

    App.FormHandler = FormHandler;
    window.App = App;
})(window);

