/**
 * Created by Gaurav Shankar on 1/4/2017.
 */

var cartApp = angular.module("cartApp",[])

                     .controller("cartCtrl",function($scope,$http) {

                            $scope.readCart = function (cartId) {

                                $http.get('/eMusicStore/rest/cart/'+cartId).success(function(data) {

                                    $scope.cart = data;
                                });
                            };

                            $scope.initCartId = function (cartId) {

                                $scope.cartId = cartId;
                                $scope.readCart(cartId);
                            };

                            $scope.addToCart = function (productId) {

                                $http.put('/eMusicStore/rest/cart/add/'+productId).success(function () {
                                    $scope.readCart($scope.cartId);
                                    var msg = "Product successfully added to the cart!";
                                    $scope.disp = msg;
                                    //alert("Product successfully added to the cart!")
                                });
                            };

                             $scope.clearCart = function () {
                                 $http.delete('/eMusicStore/rest/cart/'+$scope.cartId).success(function() {
                                     $scope.readCart($scope.cartId);
                                 });
                             };

                             $scope.removeFromCart = function (productId) {
                                 $http.put('/eMusicStore/rest/cart/remove/'+productId).success(function () {
                                     $scope.readCart($scope.cartId);
                                 });
                             };

                     });