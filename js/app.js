angular.module('MyApp', ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html?' + Math.random(),
        controller: 'home_ctrl'
      })
      .when('/chitiet/:id', {
        templateUrl: 'chitiet.html?' + Math.random(),
        controller: 'chitiet_ctrl'
      })
      .when('/dangnhap', {
        templateUrl: 'dangnhap.html?' + Math.random(),
        controller: 'dangnhap_ctrl'
      })
      .when('/dangky', {
        templateUrl: 'dangky.html?' + Math.random(),
        controller: 'dangky_ctrl'
      })
      .when('/qmk', {
        templateUrl: 'qmk.html?' + Math.random(),
        controller: 'qmk_ctrl'
      })
      .when('/sanpham', {
        templateUrl: 'sanpham.html?' + Math.random(),
        controller: 'sanpham_ctrl'
      })
      .when('/giohang', {
        templateUrl: 'giohang.html?' + Math.random(),
        controller: 'giohang_ctrl'
      })
      .otherwise({
        template: '<h1 class="text-center p-4">PAGE NOT FOUND</h1>'
      });
  })
  .factory('ProductService', function() {
    var products = [
      {
        id: 1,
        category: "Nike",
        name: "Giày Nike STADIUM",
        price: 1000000,
        sale: 10,
        image: "nike-1.jpeg",
        status: "mới"
      },
      {
        id: 2,
        category: "Jordan",
        name: "Giày Nike MAX",
        price: 1200000,
        sale: 10,
        image: "nike-2.jpeg",
        status: "mới"
      },
      {
        id: 3,
        category: "Nike",
        name: "Giày ULTRABOOST",
        price: 9000000,
        sale: 10,
        image: "nike-3.jpeg",
        status: "mới"
      },
      {
        id: 4,
        category: "Nike",
        name: "Giày Nike THUNDER",
        price: 8000000,
        sale: 10,
        image: "nike-4.jpg",
        status: "mới"
      },
      {
        id: 5,
        category: "Nike",
        name: "Giày Nike CLASSIC",
        price: 7500000,
        sale: 10,
        image: "nike-5.jpeg",
        status: "mới"
      },
      {
        id: 6,
        category: "Yezzy",
        name: "Giày Nike Balance",
        price: 8500000,
        sale: 10,
        image: "nike-6.jpeg",
        status: "nổi bậc"
      },
      {
        id: 7,
        category: "Nike",
        name: "Giày Nike STAR",
        price: 7000000,
        sale: 10,
        image: "nike-7.jpeg",
        status: "nổi bậc"
      },
      {
        id: 8,
        category: "Nike",
        name: "Giày OLD SKOOL",
        price: 6500000,
        sale: 10,
        image: "nike-8.jpeg",
        status: "nổi bậc"
      },
      {
        id: 9,
        category: "Adidas",
        name: "Giày GEL-LYTE",
        price: 9500000,
        sale: 10,
        image: "nike-9.jpeg",
        status: "nổi bậc"
      },
      {
        id: 10,
        category: "Nike",
        name: "Giày Nike D'LITES",
        price: 7000000,
        sale: 10,
        image: "nike-10.jpeg",
        status: "nổi bậc"
      }
    ];

    return {
      getProducts: function() {
        return products;
      },
      getProductById: function(id) {
        return products.find(function(product) {
          return product.id == id;
        });
      }
    };
  })
  
  .controller('home_ctrl', function($scope, ProductService) {
    $scope.Products = ProductService.getProducts();
    $scope.page_home = true;
    $scope.SpMoi = $scope.Products.filter(function(product) {
      return product.status === "mới";
    });
    $scope.SpNoibac = $scope.Products.filter(function(product) {
      return product.status === "nổi bậc";
    });
  })
  .controller('chitiet_ctrl', function($scope, $routeParams, ProductService) {
    var productId = $routeParams.id;
    $scope.sp = ProductService.getProductById(productId);
  })
  .controller('dangnhap_ctrl', function($scope) {
    // Controller logic for dangnhap
  })
  .controller('dangky_ctrl', function($scope) {
    // Controller logic for dangky
  })
  .controller('qmk_ctrl', function($scope) {
    // Controller logic for qmk
  })
  .controller('giohang_ctrl', function($scope) {
    // Controller logic for giohang
  })
  .controller('sanpham_ctrl', function($scope, ProductService) {
    $scope.Products = ProductService.getProducts();
  })
  .controller('404_ctrl', function($scope) {
    // Controller logic for 404 page
  })