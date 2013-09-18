'use strict';

angular.module('chorelistApp')
  .controller('MainCtrl', function ($scope) {
    

    $scope.chores = [{task: 'Do Laundry', reward: 'candy', punishment: 'loss of computer time'},
    {task: 'Do Dishes', reward: 'stay up 30 minutes extra', punishment: 'early bedtime'},
    {task: 'Take Out Trash', reward: '$5', punishment: 'grounded'},
    ];

    $scope.rewardPoints = 0;
    $scope.punishmentPoints = 0;

   

    $scope.completedTask = function($index){
    	
    	if ($scope.chores[$index].status === 'failed')
    	{
    		$scope.punishmentPoints -= 5;
    	}
    	if ($scope.chores[$index].status != 'done')
    	{
    		$scope.chores[$index].status = 'done';
    		$scope.rewardPoints += 5;
		}
    };

    $scope.failedTask = function($index){
    	if ($scope.chores[$index].status === 'done')
    	{
    		$scope.rewardPoints -= 5;
    	}
    	if ($scope.chores[$index].status != 'failed')
    	{
    		$scope.chores[$index].status = 'failed';
    		$scope.punishmentPoints	+= 5;
		}
    };

    $scope.determineCondition = function($index){
    	if ($scope.chores[$index].status === 'done')
    		{
    			return 'success';
    		}

    	if ($scope.chores[$index].status === 'failed')
    		{
    			return 'error';

    	    }
    };

    $scope.determineButtonCompleted = function($index){
    	if ($scope.chores[$index].status === 'done')
    	{
    		return 'btn btn-success disabled';
    	}
    	else
    	{
    		return 'btn btn-success';
    	}

    };	

    $scope.determineButtonFailed = function($index){
    	if ($scope.chores[$index].status === 'failed')
    	{
    		return 'btn btn-danger disabled';
    	}
    	else
    	{
    		return 'btn btn-danger' ;
    	}

    };	

    $scope.deleteChore = function(index){
    	$scope.chores.splice(index, 1);

    }

    $scope.addNewChore = function(chore){
        
        var temp = Object.create(null);

        angular.copy(chore,temp);
        $scope.chores.push(temp);
        chore.task = '';
        chore.reward = '';
        chore.punishment = '';
        
    }

  });
