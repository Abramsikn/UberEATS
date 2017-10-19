/// <reference path="C:\Users\User\Documents\Itumeleng Abrams\UberEATS\UberEATS\Scripts/angular.js" />

var Signin = angular.module("Signin", ['ngRoute', 'UserService']);

Signin.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider.
        when('/CRegister', {
            templateUrl: 'ViewsCustomer/CRegister.html', controller: 'CRegisterController'
        }).
        when('/DRegister', {
            templateUrl: 'ViewsDriver/DRegister.html', controller: 'DRegisterController'
        }).
        when('/RRegister', {
            templateUrl: 'ViewsRestuarant/RRegister.html', controller: 'RRegisterController'
        }).
        when('/ALogin', {
            templateUrl: 'ViewsAdmin/ALogin.html', controller: 'ALoginController'
        }).
        when('/CLogin', {
            templateUrl: 'ViewsCustomer/CLogin.html', controller: 'CLoginController'
        }).
        when('/DLogin', {
            templateUrl: 'ViewsDriver/DLogin.html', controller: 'DLoginController'
        }).
        when('/RLogin', {
            templateUrl: 'ViewsRestuarant/RLogin.html', controller: 'RLoginController'
        }).
        when('/CProfile', {
            templateUrl: 'ViewsCustomer/CProfile.html', controller: 'CProfileController'
        }).
        when('/DProfile', {
            templateUrl: 'ViewsDriver/DProfile.html', controller: 'DProfileController'
        }).
        when('/RProfile', {
            templateUrl: 'ViewsRestuarant/RProfile.html', controller: 'RProfileController'
        }).
        when('/CRestuarant', {
            templateUrl: 'ViewsCustomer/CRestuarant.html', controller: 'CViewRestuarantController'
        }).
        when('/RAddProduct', {
            templateUrl: 'ViewsRestuarant/RAddProduct.html', controller: 'RAddProductController'
        }).
        when('/AAddProduct', {
            templateUrl: 'ViewsAdmin/AAddProduct.html', controller: 'AAddProductController'
        }).
        when('/AViewCustomers', {
            templateUrl: 'ViewsAdmin/AViewCustomers.html', controller: 'AViewCustomersController'
        }).
        when('/AViewRestuarants', {
            templateUrl: 'ViewsAdmin/AViewRestuarants.html', controller: 'AViewRestuarantsController'
        }).
        when('/CProduct', {
            templateUrl: 'ViewsCustomer/CProducts.html', controller: 'CViewProductsController'
        }).
        when('/RProduct', {
            templateUrl: 'ViewsCustomer/CProducts.html', controller: 'RViewProductsController'
        }).
        when('/AUploadRestImage', {
            templateUrl: 'ViewsAdmin/AUploadRestImage.html', controller: 'AUploadRestImageController'
        }).
        when('/AUploadProdImage', {
            templateUrl: 'ViewsAdmin/AUploadProdImage.html', controller: 'AUploadProdImageController'
        }).
        when('/RUploadImage', {
            templateUrl: 'ViewsRestuarant/RUploadImage.html', controller: 'RUploadImageController'
        }).
        when('/CShoppingCart', {
            templateUrl: 'ViewsCustomer/CShoppingCart.html', controller: 'CShoppingCartController'
        }).
        when('/CCheckout', {
            templateUrl: 'ViewsCustomer/CCheckout.html', controller: 'CCheckoutController'
        }).
        when('/CPayment', {
            templateUrl: 'ViewsCustomer/CPayment.html', controller: 'CPaymentController'
        }).
        when('/COrder', {
            templateUrl: 'ViewsCustomer/COrder.html', controller: 'COrderController'
        }).
        when('/AViewOrders', {
            templateUrl: 'ViewsAdmin/AViewOrders.html', controller: 'AViewOrdersController'
        }).
        when('/CHome', {
            templateUrl: 'ViewsCustomer/CHome.html', controller: 'CHomeController'
        }).
        when('/RHome', {
            templateUrl: 'ViewsRestuarant/RHome.html', controller: 'RHomeController'
        }).
        when('/CThankYou', {
            templateUrl: 'ViewsCustomer/CThankYou.html', controller: 'CThankYouController'
        }).
        when('/RViewAllOrders', {
             templateUrl: 'ViewsRestuarant/RViewAllOrders.html', controller: 'RViewAllOrdersController'
         }).
        when('/RViewOrders', {
            templateUrl: 'ViewsRestuarant/RViewOrders.html', controller: 'RViewOrdersController'
        }).
        when('/AHome', {
            templateUrl: 'ViewsAdmin/AHome.html', controller: 'AHomeController'
        }).
        when('/DHome', {
            templateUrl: 'ViewsDriver/DHome.html', controller: 'DHomeController'
        }).
        when('/DOrders', {
            templateUrl: 'ViewsDriver/DOrders.html', controller: 'DOrdersController'
        }).
        when('/DToBePickedOrders', {
            templateUrl: 'ViewsDriver/DToBePickedOrders.html', controller: 'DOrdersController'
        }).
         otherwise({
             redirectTo: '/index'
        });    
}]).constant('FIREBASE_URL', 'something');

//  customer home controller
Signin.controller("CHomeController", function ($scope, UserApi, $location, $rootScope) { });

//  restuarant home controller
Signin.controller("RHomeController", function ($scope, UserApi, $location, $rootScope) { });

//  admin home controller
Signin.controller("AHomeController", function ($scope, UserApi, $location, $rootScope) { });

//  driver home controller
Signin.controller("DHomeController", function ($scope, UserApi, $location, $rootScope) { });

//  file access
Signin.directive('ngFiles', ['$parse', function ($parse)
{
    function fn_link(scope, element, attrs) {

        var Change = $parse(attrs.ngFiles);

        element.on('change', function (event) {
            Change(scope, { $files: event.target.files });
        })
    }
    return {
        link: fn_link
    }
}])

//  registering customer
Signin.controller("CRegisterController", function ($scope, UserApi, $location)
{
    $scope.RegisterUser = function () {
        var UserToAdd = {
            'cust_Firstname': $scope.cust_Firstname,
            'cust_Lastname': $scope.cust_Lastname,
            'cust_Contact': $scope.cust_Contact,
            'cust_Cardnumber': $scope.cust_Cardnumber,
            'cust_Email': $scope.cust_Email,
            'cust_Password': $scope.cust_Password
        };

        UserApi.AddUser(UserToAdd).then(function (reponse) {
            alert("You are successfully registered");
            $scope.cust_Firstname = undefined;
            $scope.cust_Lastname = undefined;
            $scope.cust_Contact = undefined;
            $scope.cust_Cardnumber = undefined;
            $scope.cust_Email = undefined;
            $scope.cust_Password = undefined;
            $location.path('/CHome');
        }),
        function (response) {
            alert("Unable to register");
        }
    }
});

//  registering a restuarant
Signin.controller("RRegisterController", function ($scope, UserApi, $location)
{
    $scope.RegisterRestuarant = function () {
        var RestuarantToAdd = {
            'rest_Name': $scope.rest_Name,
            'rest_Address': $scope.rest_Address,
            'rest_Contact': $scope.rest_Contact,
            'rest_Manager': $scope.rest_Manager,
            'rest_Email': $scope.rest_Email,
            'rest_Password': $scope.rest_Password,
            'rest_Type': $scope.rest_Type
        };

        UserApi.AddRestuarant(RestuarantToAdd).then(function (reponse) {
            alert("Your restuarant is successfully registered");
            $scope.rest_Name = undefined;
            $scope.rest_Address = undefined;
            $scope.rest_Contact = undefined;
            $scope.rest_Manager = undefined;
            $scope.rest_Email = undefined;
            $scope.rest_Password = undefined;
            $scope.rest_Type = undefined;
            $location.path('/RUploadImage');
        }),
        function (response) {
            alert("Unable to add a restuarant");
        }
    }
});

//  registering a driver
Signin.controller("DRegisterController", function ($scope, UserApi, $location)
{
    $scope.RegisterDriver = function () {
        var DriverToAdd = {
            'drv_Firstname': $scope.drv_Firstname,
            'drv_Lastname': $scope.drv_Lastname,
            'drv_Contact': $scope.drv_Contact,
            'drv_Location': $scope.drv_Location,
            'drv_VehicleType': $scope.drv_VehicleType,
            'drv_Email': $scope.drv_Email,
            'drv_Password': $scope.drv_Password
        };

        UserApi.AddDriver(DriverToAdd).then(function (reponse) {
            alert("You are successfully registered");
            $scope.drv_Firstname = undefined;
            $scope.drv_Lastname = undefined;
            $scope.drv_Contact = undefined;
            $scope.drv_Location = undefined;
            $scope.drv_VehicleType = undefined;
            $scope.drv_Email = undefined;
            $scope.drv_Password = undefined;
            $location.path('/DHome');
        }),
        function (response) {
            alert("Unable to register driver");
        }
    }
});

//  admin upload restuarant -logo- image
Signin.controller("AUploadRestImageController", function ($scope, $location, UserApi, $http)
{
    var formdata = new FormData();

    $scope.GetImages = function ($files) {
        $scope.imagesrc = [];

        for (var g = 0; g < $files.length; g++) {
            var reader = new FileReader();
            reader.Filename = $files[g].name;

            reader.onload = function (event) {
                var image = {};
                image.Name = event.target.Filename;
                image.Size = (event.total / 1024).toFixed(2);
                image.Src = event.target.result;
                $scope.imagesrc.push(image);
                $scope.$apply();
            }
            reader.readAsDataURL($files[g]);
        };
        angular.forEach($files, function (value, key) {
            formdata.append(key, value);
        })
    };
    $scope.loadup = function () {
        var reqs = {
            method: 'POST',
            url: 'http://localhost:2346/api/tblResImages',
            data: formdata,
            headers: {
                'Content-Type': undefined
            }
        }

        $http(reqs).then(function (gm) {
            alert("Image saved successfully" + gm);
            $scope.reset();
        }), function () {
            alert("Failed to upload image");
            $scope.reset();
        }
    }

    $scope.reset = function () {
        angular.forEach(
            angular.element("Input [Type = 'file']"),
        function (inElem) {
            angular.element(inElem).val(null);
        }
            );
        $scope.imagesrc = [];
        formdata = new FormData();
    }
})

//  restuarant upload product -logo- image
Signin.controller("AUploadProdImageController", function ($scope, $location, UserApi, $http)
{
    var formdata = new FormData();

    $scope.GetImages = function ($files) {
        $scope.imagesrc = [];

        for (var i = 0; i < $files.length; i++) {
            var reader = new FileReader();
            reader.Filename = $files[i].name;

            reader.onload = function (event) {
                var image = {};
                image.Name = event.target.Filename;
                image.Size = (event.total / 1024).toFixed(2);
                image.Src = event.target.result;
                $scope.imagesrc.push(image);
                $scope.$apply();
            }
            reader.readAsDataURL($files[g]);
        };
        angular.forEach($files, function (value, key) {
            formdata.append(key, value);
        })
    };
    $scope.loadup = function () {
        var reqs = {
            method: 'POST',
            url: 'http://localhost:2346/api/tblProImages',
            data: formdata,
            headers: {
                'Content-Type': undefined
            }
        }

        $http(reqs).then(function (mg) {
            alert("Image saved successfully" + mg);
            $scope.reset();
        }), function () {
            alert("Failed to upload image");
            $scope.reset();
        }
    }

    $scope.reset = function () {
        angular.forEach(
            angular.element("Input [Type = 'file']"),
        function (inElem) {
            angular.element(inElem).val(null);
        }
            );
        $scope.imagesrc = [];
        formdata = new FormData();
    }
})

//  admin login
Signin.controller("ALoginController", function ($scope, $http, UserApi, $rootScope, $location, $window)
{
    $scope.LogInAdmin = {
        'adm_Username': $scope.adm_Username,
        'adm_Password': $scope.adm_Password,
        'adm_Firstname': $scope.adm_Firstname
    }

    $scope.AdminLogin = function () {
        UserApi.GetAdminInfo($scope.adm_Username, $scope.adm_Password).then(function (response) {
            if (response.data === null) {
                alert("You've entered an ivalid email and password");
            } else {
                alert("Login Successful. Welcome to Admin Dashboard");
                $rootScope.currentUser = response.data;
                $location.path('/AHome');
            }
        }), function (response) {
            alert("Error in logging in the system");
        }
    };
});

//  customer login
Signin.controller("CLoginController", function ($scope, $http, UserApi, $rootScope, $location, $window)
{
    $scope.LogInUser = {
        'cust_Email': $scope.cust_Email,
        'cust_Password': $scope.cust_Password,
        'cust_Firstname': $scope.cust_Firstname
    }

    $scope.CustLogin = function () {
        UserApi.GetUserInfo($scope.cust_Email, $scope.cust_Password).then(function (response) {
            if (response.data === null) {
                alert("You've entered an ivalid email and password");
            } else {
                alert("Login Successful. Welcome " + response.data.cust_Firstname);
                $rootScope.currentUser = response.data;
                $location.path('/CHome');
            }
        }), function (response) {
            alert("Error in logging in the system");
        }
    };
});

//  driver login
Signin.controller("DLoginController", function ($scope, $http, UserApi, $rootScope, $location, $window)
{
    $scope.LogInUser = {
        'drv_Email': $scope.drv_Email,
        'drv_Password': $scope.drv_Password,
        'drv_Firstname': $scope.drv_Firstname
    }

    $scope.DriverLogin = function () {
        UserApi.GetDriverInfo($scope.drv_Email, $scope.drv_Password).then(function (response) {
            if (response.data === null) {
                alert("You've entered an ivalid email and password");
            } else {
                alert("Login Successful. Welcome " + response.data.drv_Firstname);
                $rootScope.currentUser = response.data;
                $location.path('/DHome');
            }
        }), function (response) {
            alert("Error in logging in the system");
        }
    };
});

//  restuarant login
Signin.controller("RLoginController", function ($scope, $http, UserApi, $rootScope, $location, $window)
{
    $scope.LogInUser = {
        'rest_Email': $scope.rest_Email,
        'rest_Password': $scope.rest_Password,
        'rest_Manager': $scope.rest_Manager
    }

    $scope.RestLogin = function () {
        UserApi.GetRestInfo($scope.rest_Email, $scope.rest_Password).then(function (response) {
            if (response.data === null) {
                alert("You've entered an ivalid email and password");
            } else {
                alert("Login Successful. Welcome " + response.data.rest_Manager);
                $rootScope.currentUser = response.data;
                $location.path('/RHome');
            }
        }), function (response) {
            alert("Error in logging in the system");
        }
    };
});

//  user edit profile
Signin.controller("CProfileController", function ($scope, UserApi, $rootScope, $location)
{
    GetUsers();
    function GetUsers() {
        UserApi.getUser().then(function (response) {
            $scope.user = response.data;
        }), function () {
            aler("Unable to load users info");
        }
    }

    $scope.cust_Id = $rootScope.currentUser.cust_Id;
    $scope.cust_Firstname = $rootScope.currentUser.cust_Firstname;
    $scope.cust_Lastname = $rootScope.currentUser.cust_Lastname;
    $scope.cust_Contact = $rootScope.currentUser.cust_Contact;
    $scope.cust_Cardnumber = $rootScope.currentUser.cust_Cardnumber;
    $scope.cust_Email = $rootScope.currentUser.cust_Email;
    $scope.cust_Password = $rootScope.currentUser.cust_Password;
    
    $scope.EditUser = function () {
        var UserToEdit = {
            'cust_Id': $scope.cust_Id,
            'cust_Firstname': $scope.cust_Firstname,
            'cust_Lastname': $scope.cust_Lastname,
            'cust_Contact': $scope.cust_Contact,
            'cust_Cardnumber': $scope.cust_Cardnumber,
            'cust_Email': $scope.cust_Email,
            'cust_Password': $scope.cust_Password
        };

        UserApi.EditUser(UserToEdit).then(function (response) {
                alert("User is successfully edited");
                $scope.cust_Id = undefined;
                $scope.cust_Firstname = undefined;
                $scope.cust_Lastname = undefined;
                $scope.cust_Contact = undefined;
                $scope.cust_Cardnumber = undefined;
                $scope.cust_Email = undefined;
                $scope.cust_Password = undefined
                GetUsers();
                $location.path('/CProducts');
            }),
        function (response) {
            alert("unable to edit user");
        }
    }
});

//  driver edit profile
Signin.controller("DProfileController", function ($scope, UserApi, $rootScope, $location)
{
    GetDrivers();
    function GetDrivers() {
        UserApi.getDriver().then(function (response) {
            $scope.user = response.data;
        }), function () {
            aler("Unable to load users info");
        }
    }

    $scope.drv_Id = $rootScope.currentUser.drv_Id;
    $scope.drv_Firstname = $rootScope.currentUser.drv_Firstname;
    $scope.drv_Lastname = $rootScope.currentUser.drv_Lastname;
    $scope.drv_Contact = $rootScope.currentUser.drv_Contact;
    $scope.drv_Location = $rootScope.currentUser.drv_Location;
    $scope.drv_VehicleType = $rootScope.currentUser.drv_VehicleType;
    $scope.drv_Email = $rootScope.currentUser.drv_Email;
    $scope.drv_Password = $rootScope.currentUser.drv_Password;

    $scope.EditDriver = function () {
        var DriverToEdit = {
            'drv_Id': $scope.drv_Id,
            'drv_Firstname': $scope.drv_Firstname,
            'drv_Lastname': $scope.drv_Lastname,
            'drv_Contact': $scope.drv_Contact,
            'drv_Location': $scope.drv_Location,
            'drv_VehicleType': $scope.drv_VehicleType,
            'drv_Email': $scope.drv_Email,
            'drv_Password': $scope.drv_Password
        };

        UserApi.EditDriver(DriverToEdit).then(function (response) {
            alert("Driver is successfully edited");
            $scope.drv_Id = undefined;
            $scope.drv_Firstname = undefined;
            $scope.drv_Lastname = undefined;
            $scope.drv_Contact = undefined;
            $scope.drv_Location = undefined;
            $scope.drv_VehicleType = undefined;
            $scope.drv_Email = undefined;
            $scope.drv_Password = undefined
            GetDrivers();
            $location.path('/DHome');
        }),
        function (response) {
            alert("unable to edit driver");
        }
    }
});

//  edit restuarant profile
Signin.controller("RProfileController", function ($scope, UserApi, $rootScope, $location)
{
    GetRest();
    function GetRest() {
        UserApi.getRestuarant().then(function (response) {
            $scope.rest = response.rest;
        }), function () {
            aler("Unable to load users info");
        }
    }

    $scope.rest_Id = $rootScope.currentUser.rest_Id;
    $scope.rest_Name = $rootScope.currentUser.rest_Name;
    $scope.rest_Address = $rootScope.currentUser.rest_Address;
    $scope.rest_Contact = $rootScope.currentUser.rest_Contact;
    $scope.rest_Manager = $rootScope.currentUser.rest_Manager;
    $scope.rest_Email = $rootScope.currentUser.rest_Email;
    $scope.rest_Password = $rootScope.currentUser.rest_Password;
    $scope.rest_Type = $rootScope.currentUser.rest_Type;

    $scope.EditRestuarant = function () {
        var RestToEdit = {
            'rest_Id': $scope.rest_Id,
            'rest_Name': $scope.rest_Name,
            'rest_Address': $scope.rest_Address,
            'rest_Contact': $scope.rest_Contact,
            'rest_Manager': $scope.rest_Manager,
            'rest_Email': $scope.rest_Email,
            'rest_Password': $scope.rest_Password,
            'rest_Type': $scope.rest_Type
        };

        UserApi.EditRestuarant(RestToEdit).then(function (response)
        {
            alert("Restuarant profile is successfully edited");
            $scope.rest_Id = undefined;
            $scope.rest_Name = undefined;
            $scope.rest_Address = undefined;
            $scope.rest_Contact = undefined;
            $scope.rest_Manager = undefined;
            $scope.rest_Email = undefined;
            $scope.rest_Password = undefined;
            $scope.rest_Type = undefined
            GetRest();
            $location.path('/RProducts');
        }),
        function (response) {
            alert("unable to edit restuarant");
        }
    }
});

//  customer view and search restuarant
Signin.controller("CViewRestuarantController", function ($scope, UserApi, $location)
{
    getRestu();
    function getRestu()
    {
        UserApi.getRestuarant().then(function (response) {
            $scope.Restaurant = response.data;
        }), function () {
            alert('No Restaurants Found');
        }
    }
});

//  restuarnt adding a product
Signin.controller("RAddProductController", function ($scope, UserApi, $location)
{
    $scope.AddProd = function ()
    {
        var ProductToAdd = {
            'prod_Id': $scope.prod_Id,
            'prod_Name': $scope.prod_Name,
            'prod_Price': $scope.prod_Price,
            'prod_Type': $scope.prod_Type,
            'prod_Description': $scope.prod_Description
        };

        UserApi.AddProduct(ProductToAdd).then(function (reponse) {
            alert("Your restuarant product is successfully registered");
            $scope.prod_Id = undefined;
            $scope.prod_Name = undefined;
            $scope.prod_Price = undefined;
            $scope.prod_Type = undefined;
            $scope.prod_Description = undefined;
            $location.path('/RHome');
        }),
        function (response) {
            alert("Unable to add a product");
        }
    }
});

//  admin adding a product
Signin.controller("AAddProductController", function ($scope, UserApi, $location)
{
    $scope.AddProd = function ()
    {
        var ProductToAdd = {
            'prod_Id': $scope.prod_Id,
            'prod_Name': $scope.prod_Name,
            'prod_Price': $scope.prod_Price,
            'prod_Type': $scope.prod_Type,
            'prod_Description': $scope.prod_Description
        };

        UserApi.AddProduct(ProductToAdd).then(function (reponse)
        {
            alert("Restuarant product is successfully registered");
            $scope.prod_Id = undefined;
            $scope.prod_Name = undefined;
            $scope.prod_Price = undefined;
            $scope.prod_Type = undefined;
            $scope.prod_Description = undefined;
            $location.path('/AHome');
        }),
        function (response) {
            alert("Unable to add a product");
        }
    }
});

//  admin view all customers
Signin.controller("AViewCustomersController", function ($scope, UserApi, $location)
{
    getCust();
    function getCust()
    {
        UserApi.getUser().then(function (response) {
            $scope.Customer = response.data;
        }), function () {
            alert('No customers Found');
        }
    }
});

//  admin view all restuarants
Signin.controller("AViewRestuarantsController", function ($scope, UserApi, $location)
{
    getRestu();
    function getRestu()
    {
        UserApi.getRestuarant().then(function (response) {
            $scope.Restaurant = response.data;
        }), function () {
            alert('No Restaurants Found');
        }
    }
});

//  customer view products
Signin.controller("CViewProductsController", function ($scope, UserApi, $location)
{
    getProd();
    function getProd()
    {
        UserApi.getProduct().then(function (response)
        {
            $scope.Product = response.data;
        }), function () {
            alert('No products Found');
        }
    }
});

//  restuarant view products
Signin.controller("RViewProductsController", function ($scope, UserApi, $location)
{
    getProd();
    function getProd()
    {
        UserApi.getProduct().then(function (response) {
            $scope.Product = response.data;
        }), function () {
            alert('No products Found');
        }
    }
});

//  customer shopping cart
Signin.controller("CShoppingCartController", function ($scope, $location, CommonProp, $rootScope, UserApi, $http)
{
    getProd();  //GET ALL THE PRODUCTS
    function getProd() {
        UserApi.getProduct().then(function (response) {
            $scope.Product = response.data;
        }), function () {
            alert('No products Found');
        }
    }
   
    // DEFINING SHOPPING CART ARRAY THAT WILL WILL STORE THE ITEMS
    $rootScope.myItems = [];

    // ADD TO SHOPPING CART
    $scope.addItem = function (newItem)
    {
        if ($scope.myItems.length == 0)
        {
            newItem.count = 1;
            $scope.myItems.push(newItem);
        } else {
            var repeat = false;

            for (var i = 0; i < $scope.myItems.length; i++) {
                if ($scope.myItems[i].prod_Id == newItem.prod_Id) {
                    $scope.myItems[i].count++;
                    repeat = true;
                }
            }
            if (!repeat) {
                newItem.count = 1;
                $scope.myItems.push(newItem);
            }
        }
        updatePrice();
    };

    // CALCULATING THE TOTAL PRICE
    var updatePrice = function ()
    {
        var totalPrice = 0;
        for (var i = 0; i < $scope.myItems.length; i++) {
            totalPrice += ($scope.myItems[i].count) * ($scope.myItems[i].prod_Price);
        }
        $scope.totalPrice = totalPrice;
        CommonProp.setTotal(totalPrice);    //Added from d; Might wanna remove
    };

    // REMOVING ALL THE ITEMS IN CART AT ONES
    $scope.removeBasket = function ()
    {
        $scope.myItems.splice(0, $scope.myItems.length);
        updatePrice();
    };

    // REMOVE JUST ONE ITEM
    $scope.remove = function (index) 
    {
        $scope.myItems.splice(index, 1);
        updatePrice();
    };

    // TO GET ITEMS SELECTED IN CART AND VIEW THEM IN NEW PAGE
    $scope.$watch('myItems', function ()
    {
        CommonProp.setItems($scope.myItems);
    });

    //Updating the price for the next page ??
    $scope.$watch(function ()
    {
        CommonProp.setTotal($scope.totalPrice);
    })    
});

//  customer checking out the order controller to get items from an array
Signin.service('CommonProp', function ()
{
    var itemss = '';
    var total = 0.0;

    return {
        getItems: function () {
            return itemss;
        },
        setItems: function (value) {
            itemss = value;
        },
        getTotal: function () {
            return total;
        },
        setTotal: function (tot) {
            total = tot;
        },
    }
});

//  customer checkout controller
Signin.controller('CCheckoutController', function ($scope, $location, CommonProp, $rootScope, UserApi, $http)
{
    $scope.selectedItems = CommonProp.getItems();
    $scope.amountDue = CommonProp.getTotal();

    $scope.removeItem = function () {
        $scope.selectedItems.splice(0, $rootScope.selectedItems.length);
        $rootScope.updatePrice();
    }
});

//  customer payment controller
Signin.controller("CPaymentController", function ($scope, UserApi, $rootScope, $location, $http)
{
    GetUsers();     //Get user details first
    function GetUsers() {
        UserApi.getUser().then(function (response)
        {
            $scope.user = response.data;
        }), function () {
            aler("Unable to load users info");
        }
    }

    $scope.cust_Id = $rootScope.currentUser.cust_Id;

    $scope.Pay = function () {
        var addingPayment = {
            'card_Name': $scope.card_Name,         
            'card_CVV': $scope.card_CVV,
            'card_ExpMonth': $scope.card_ExpMonth,
            'card_ExpYear': $scope.card_ExpYear,
            'payment_Date': $scope.payment_Date,
            'cust_Id': $scope.cust_Id,
        };

        UserApi.AddPayment(addingPayment).then(function (reponse)
        {
            alert("Your payment was successful");        
            $scope.card_Name = undefined;
            $scope.card_CVV = undefined;
            $scope.card_ExpMonth = undefined;
            $scope.card_ExpYear = undefined;
            $scope.payment_Date = undefined;
            $scope.cust_Id;
            $location.path('/COrder');
            }),
        function (response) {
            alert("Unable to process payment");
        };
    };
});

//  customer order controller
Signin.controller("COrderController", function ($scope, UserApi, $rootScope, $location, $http, CommonProp) 
{
    GetUsers();     //  Get users
    function GetUsers()
    {
        UserApi.getUser().then(function (response)
        {
            $scope.user = response.data;
        }), function ()
        {
            aler("Unable to load users info");
        }
    }

    getProd();  //  Get products
    function getProd()
    {
        UserApi.getProduct().then(function (response)
        {
            $scope.Product = response.data;
        }), function () {
            alert('No products Found');
        }
    }

    $scope.totalPrice = CommonProp.getTotal();
    $scope.order_DeliveryAddress = $scope.order_DeliveryAddress;
    $scope.cust_Id = $rootScope.currentUser.cust_Id;
    $scope.cust_Contact = $rootScope.currentUser.cust_Contact;
    $scope.cust_Firstname = $rootScope.currentUser.cust_Firstname;

    $scope.AdOrder = function ()    //button
    {
        var OrderToAdd =
        {
            'totalPrice': $scope.totalPrice,
            'order_DeliveryAddress': $scope.order_DeliveryAddress,
            'cust_Id': $scope.cust_Id,
        };
    

    UserApi.AddOrders(OrderToAdd).then(function (response)
    {
        $scope.tblOrder = response.data;
        alert("Order has been placed successfully");
        $scope.totalPrice = undefined;
        $scope.order_DeliveryAddress = undefined;
        $scope.cust_Id = undefined;
        $scope.cust_Firstname = undefined;
        $scope.cust_Contact = undefined;
        $location.path('/CThankYou');
        $scope.AddAssociative();    //
    }),
    function (response)
    {
        alert("Unable to add order");
        };
    };

    $scope.AddAssociative = function () //  Adding to tblOrder_Product table
    {
        for (var i = 0; i <= $rootScope.myItems.length; i++)
        {
            $scope.pro_Id = $rootScope.myItems[i].prod_Id;

            var orderItems = {
                'pro_Id': $scope.pro_Id,
                'ord_Id': $scope.tblOrder.order_Id
            }

            UserApi.AddToAssociative(orderItems).then(function (response)
            {
                console.log(response);
            }),
            function (response) {
                alert("Unable to add");
            }
        }
    };

});

//  admin view all orders controller
Signin.controller("AViewOrdersController", function ($scope, UserApi, $location, $rootScope)
{
    getOrders();
    function getOrders()
    {
        UserApi.RetreiveOrders().then(function (response)
        {
            $scope.order_data = response.data;
        }),
        function ()
        {
            alert('Couldnt load data.');
        }
    }
});

//  customer thank you page
Signin.controller("CThankYouController", function ($scope, UserApi, $location, $rootScope)
{
});

//  restuarant view all orders
Signin.controller("RViewAllOrdersController", function ($scope, UserApi, $location, $http, $rootScope)
{
    getOrders();
    function getOrders() {
        UserApi.GetAllOrders().then(function (response) {
            $scope.all_orders = response.data;
        }), function () {
            alert("Couldn't get all the orders requested");
        }
    };
})

//  restuarant view orders and change status
Signin.controller("RViewOrdersController", function ($scope, UserApi, $location, $http, $rootScope)
{
    $scope.selectedItem = "Selected Order";
    $scope.isDeleteItemVisible = false;
    getOrders();
    function getOrders() {  //  get all the orders
        UserApi.GetOrders().then(function (response) {
            $scope.order_data = response.data;
        }), function () {
            alert("Couldn't get all the Orders");
        }
    };

    $scope.dropboxitemselected = function (item) {
        $scope.isDeleteItemVisible = true;
        $scope.selectedItem = item.order_Id;       
        $scope.totalPrice = item.totalPrice;
        $scope.order_DeliveryAddress = item.order_DeliveryAddress;
        $scope.cust_Id = item.cust_Id;
    };

    $scope.statusUpdate = function () {
        var statusToEdit = {
            'order_Id': $scope.selectedItem,         
            'totalPrice': $scope.totalPrice,
            'order_DeliveryAddress': $scope.order_DeliveryAddress,
            'cust_Id': $scope.cust_Id,
            'order_Status': $scope.order_Status          
        };

    UserApi.updateStatus(statusToEdit).then(function (response) {
        alert("Order Status Successfully Updated");       
        $scope.totalPrice = undefined;
        $scope.order_DeliveryAddress = undefined;
        $scope.cust_Id = undefined;
        $scope.order_Status = undefined;
        getOrders();
        $location.path('/RHome');
        }),
        function (response) {
            alert("Couldn't update the status");
        }
    };
})

//  driver change order status
Signin.controller("DOrdersController", function ($scope, UserApi, $location, $http, $rootScope)
{
    $scope.selectedItem = "Selected Order";
    $scope.isDeleteItemVisible = false;
    getOrders();    //  Get all the orders
    function getOrders()
    {
        UserApi.RetrieverDriverOrder().then(function (response)
        {
            $scope.order_data = response.data;
        }), function () {
            alert("Couldn't get all the orders");
        }
    };

    $scope.dropboxitemselected = function (item)
    {
        $scope.isDeleteItemVisible = true;
        $scope.selectedItem = item.order_Id;       
        $scope.totalPrice = item.totalPrice;
        $scope.order_DeliveryAddress = item.order_DeliveryAddress;
        $scope.cust_Id = item.cust_Id;
        $scope.order_Status = "Picked Up";
    };

    $scope.statusUpdate = function ()
    {
        var statusToEdit = {
            'order_Id': $scope.selectedItem,          
            'totalPrice': $scope.totalPrice,
            'order_DeliveryAddress': $scope.order_DeliveryAddress,
            'cust_Id': $scope.cust_Id,
            'order_Status': $scope.order_Status,
            'order_DeliveryStatus': $scope.order_DeliveryStatus
        };

        UserApi.updateStatus(statusToEdit).then(function (response)
        {
        alert("Delivery Status Successfully updated");
        $scope.totalPrice = undefined;
        $scope.order_DeliveryAddress = undefined;
        $scope.cust_Id = undefined;
        $scope.order_Status = undefined;
        $scope.order_DeliveryStatus = undefined;
        getOrders();
        $location.path('/DHome');
        }),
        function (response) {
            alert("Couldn't update the status");
        }
    };
})
