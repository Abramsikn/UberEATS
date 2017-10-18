/// <reference path="C:\Users\User\Documents\Itumeleng Abrams\UberEATS\UberEATS\Scripts/angular.js" />

var UserService = angular.module('UserService', []);

UserService.factory('UserApi', function ($http) {
    var urlBase = "http://localhost:2346/api/";
    var UserApi = {};
    
    /*      ******************************************      */
    /*      ================ Customer ================      */

    //  Get all users
    UserApi.getUser = function ()
    {
        return $http.get(urlBase + 'tblCustomers/');
    }

    //  Register User
    UserApi.AddUser = function (user)
    {
        return $http.post(urlBase + 'tblCustomers', user);
    }

    //  Login User
    UserApi.GetUserInfo = function (Email, Password, Firstname)
    {
        return $http.get(urlBase + 'tblCustomers/?cust_Email=' + Email + '&cust_Password=' + Password + '&cust_Firstname=' + Firstname);
    }

    //  Update user's profile
    UserApi.EditUser = function (UserToEdit)
    {

        var request = $http({
            method: 'PUT',
            url: urlBase + 'tblCustomers/' + UserToEdit.cust_Id,
            data: UserToEdit

        });
        return request;
    }
    
    /*      ******************************************      */
    /*      =============== Restuarants ==============      */

    // Register Restuarant
    UserApi.AddRestuarant = function (restuarant)
    {
        return $http.post(urlBase + 'tblRestuarants', restuarant);
    }

    //  Get all restuarants
    UserApi.getRestuarant = function ()
    {
        return $http.get(urlBase + 'GetResst');
    }

    //  Restuarant Login
    UserApi.GetRestInfo = function (Email, Password, Manager)
    {
        return $http.get(urlBase + 'tblRestuarants/?rest_Email=' + Email + '&rest_Password=' + Password + '&rest_Manager=' + Manager);
    };

    // Update restuarant's profile
    UserApi.EditRestuarant = function (RestToEdit)
    {

        var request = $http({
            method: 'PUT',
            url: urlBase + 'tblRestuarants/' + RestToEdit.rest_Id,
            data: RestToEdit

        });
        return request;
    }

    //  View orders ## restuarant view orders to update status
    UserApi.GetOrders = function ()
    {
        return $http.get(urlBase + 'tblOrders');
    }

    /*      ******************************************      */
    /*      ================= Admin ==================      */

    //Admin login
    UserApi.GetAdminInfo = function (Email, Password, Firstname)
    {
        return $http.get(urlBase + 'tblAdmins/?adm_Email' + Email + '&adm_Password' + Password + '&adm_Firstname' + Firstname);
    }

    //  Get all users
    UserApi.getAdmin = function ()
    {
        return $http.get(urlBase + 'tblAdmins');
    }
    
    /*      ******************************************      */
    /*      ================ Products ================      */

    // Add Product
    UserApi.AddProduct = function (ProductToAdd)
    {
        return $http.post(urlBase + 'tblProducts/', ProductToAdd);
    }

    //  Get all products
    UserApi.getProduct = function ()
    {
        return $http.get(urlBase + 'tblProducts');
    }

    //  Get Prod
    UserApi.getProdInfo = function ()
    {
        return $http.get(urlBase + 'tblProducts');
    };
    
    /*      ******************************************      */
    /*      ================ Payments ================      */

    //  Add payment
    UserApi.AddPayment = function (payment)
    {
        return $http.post(urlBase + 'tblPayments', payment);
    }


    /*      ******************************************      */
    /*      ================= Order ==================      */

    //  Add to order table
    UserApi.AddOrders = function (Order)
    {
        return $http.post(urlBase + 'tblOrders', Order);
    }

    //Restuarant get view all orders
    UserApi.GetAllOrders = function ()
    {
        return $http.get(urlBase + 'GetOrders');
    }

    //  Get and view all the Orders   (Can't view orders yet)
    UserApi.RetreiveOrders = function ()
    {
        return $http.get(urlBase + 'GetOrders');
    }

    /*      ******************************************      */
    /*      ============== Order_Product =============      */

    //  Add to associative table
    UserApi.AddToAssociative = function (Orders)
    {
        return $http.post(urlBase + 'tblOrder_Product', Orders);
    }


    /*      ******************************************      */
    /*      ================ Driver ================      */

    //  Get all drivers
    UserApi.getDriver = function ()
    {
        return $http.get(urlBase + 'tblDrivers/');
    }

    //  Register User
    UserApi.AddDriver = function (driver)
    {
        return $http.post(urlBase + 'tblDrivers', driver);
    }

    //  Login driver
    UserApi.GetDriverInfo = function (Email, Password, Firstname)
    {
        return $http.get(urlBase + 'tblDrivers/?drv_Email=' + Email + '&drv_Password=' + Password + '&drv_Firstname=' + Firstname);
    }

    //  Update driver's profile
    UserApi.EditDriver = function (DriverToEdit)
    {
        var request = $http({
            method: 'PUT',
            url: urlBase + 'tblDrivers/' + DriverToEdit.drv_Id,
            data: DriverToEdit
        });
        return request;
    }

    //  Status update
    UserApi.updateStatus = function (OrderToEdit)
    {
        var dattta = $http({
            method: 'PUT',
            url: urlBase + 'tblOrders/' + OrderToEdit.order_Id,
            data: OrderToEdit,
        });
        return dattta;
    };

    //  Retreive all the orders
    UserApi.RetreiveOrders = function ()
    {
        return $http.get(urlBase + 'tblOrders/');
    }

    //  Retreive all the orders
    UserApi.RetrieverDriverOrder = function ()
    {
        return $http.get(urlBase + 'GetDriverOrders');
    }


    //  Retreive all the orders
    UserApi.RetrieveDriverOrders = function ()
    {
        return $http.get(urlBase + 'DriverOrders');
    }

    return UserApi;
});