var aliss = angular.module("aliss", ["ngRoute"]);
aliss.config(function($routeProvider , $locationProvider) {
    $routeProvider
    
    .when("/", { templateUrl : "view/templates/home.html", controller: "homeCTRL"})
    .when("/product", { templateUrl : "view/templates/product.html", controller: "productCTRL" })
    .when("/industry", {templateUrl : "view/templates/industry.html",controller: "industryCTRL"})
    .when("/application", {templateUrl : "view/templates/application.html",controller: "applicationCTRL"})
    
    .when("/about", {templateUrl : "view/templates/about.html",controller: "aboutCTRL"})
    .when("/team", {templateUrl : "view/templates/team.html",controller: "teamCTRL"})
    .when("/contact", {templateUrl : "view/templates/contact.html",controller: "contactCTRL"})
    
    .when("/login", {templateUrl : "view/templates/login.html",controller: "loginCTRL"})
    .when("/register", {templateUrl : "view/templates/register.html",controller: "registerCTRL"})
    .when("/singleProduct", {templateUrl : "view/templates/singleProduct.html",controller: "singleProductCTRL"})

    
   .otherwise({ redirectTo: '/'});
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });
    
});

aliss.controller('homeCTRL' , function(){console.log('homeCTRL'); });
aliss.controller('productCTRL' , function(){console.log('productCTRL'); });
aliss.controller('industryCTRL' , function(){console.log('industryCTRL'); });
aliss.controller('applicationCTRL' , function(){console.log('applicationCTRL'); });
aliss.controller('aboutCTRL' , function(){console.log('aboutCTRL'); });
aliss.controller('teamCTRL' , function(){console.log('teamCTRL'); });
aliss.controller('contactCTRL' , function(){console.log('contactCTRL'); });
aliss.controller('loginCTRL' , function(){console.log('loginCTRL'); });
aliss.controller('registerCTRL' , function(){console.log('registerCTRL'); });
aliss.controller('singleProductCTRL' , function(){console.log('singleProductCTRL'); });
