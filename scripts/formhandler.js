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
    FormHandler.prototype.addSubmitHandler = function(func) {
        console.log('Setting the submit handler for the form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            //copy all the info from the form fields into the variable called data
            let data = {};
            $(this).serializeArray().forEach(function(item) {
              data[item.name] = item.value;
              console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            func(data); //call the function that was passed in on the data from the form

            this.reset(); //resets the form
            this.elements[0].focus(); //focus on the first field
        });
    }

    App.FormHandler = FormHandler;
    window.App = App;
})(window);

