/**
 * Created by hhe on 11/22/2016.
 */
(function () {

    var app = angular.module('ShoppingListCheckOff', []);
    app.controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var ToBuy = this;
        ToBuy.cutoff = false;
        ToBuy.items = ShoppingListCheckOffService.getBuy();
        ToBuy.removeItem = function (index) {
            ShoppingListCheckOffService.buyToBought(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var ToBought = this;
        ToBought.items = ShoppingListCheckOffService.getBought();
        // if(ToBought.items.length == 0) {
        //     ToBought.cutoff = true;
        // }
    };


    function ShoppingListCheckOffService() {
        var service = this;
        var buyItems = [
            {name:'cookie' , quantity: '1 bag'},
            {name:'chocolate' , quantity: '1 bag'},
            {name:'wine' , quantity: '1 bottle'},
            {name:'apple Pie' , quantity: '1 piece'},
            {name:'ham' , quantity: '1 piece'}
        ];
        var boughtItems = [];
        var item = [];
        service.buyToBought = function (index) {
            var string = buyItems.splice(index,1);
            item = {
                name: string[0].name,
                quantity: string[0].quantity
            };
            boughtItems.push(item);
        };
        service.getBuy = function () {
            return buyItems;
        };
        service.getBought = function () {
            return boughtItems;
        };
    }
})();
