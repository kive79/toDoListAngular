var app = angular.module('main',[]);
app.controller('mainCtrl',function($scope){
  $scope.arrTask = [
{
  task: "Kupi Hleb",
  complete: false
},
{
  task: "Kupi Mleko",
  complete: false
},
{
  task: "Kupi Baterije",
  complete: false
},
{
  task: "Radi nesto",
  complete: false
}]
$scope.add = function(){
  var x = {task:$scope.newTask,complete:false};
  $scope.arrTask.push(x);
}
$scope.delete = function(x){
  $scope.arrTask.splice(x,1);
}
$scope.markComplete = function(x){

  $scope.arrTask[x].complete = true;
}
});
