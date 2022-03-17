(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;

    let myTruck = new Truck('12345', new DataStore());

    window.myTruck = myTruck;

    //find the form that is being submitted and create a formHandler object
    let formHandler = new FormHandler(FORM_SELECTOR);
    //bind the crateOrder to a specific truck and pass it to addSubmitHandler
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

})(window);
