var directives = angular.module('myapp.directives',[]);


/* exemple */
directives.directive('dvTeste', function () {
    return{
        scope:{},
        link: function (scope, element, attrs) {
            element.addClass("btn");
            element.addClass("btn-info");
        }
    }
});
