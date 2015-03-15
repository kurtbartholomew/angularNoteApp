angular.module("NoteWrangler")
.directive('title', function() {
  return function(scope, element, attrs, $timeout) {
    $timeout(function(){
      $(element).tooltip();
    });

    scope.$on('$destroy', function() {
       $element.tooltip('destroy');
    });
  }
});