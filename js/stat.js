'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_COLUMNS = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var statisticCoordinateX = CLOUD_X + GAP * 3;
var statisticCoordinateY = CLOUD_HEIGHT - GAP * 2;
var statisticTextCoordinateY = statisticCoordinateY - GAP * 3;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  } return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 4);


  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], statisticCoordinateX + (BAR_WIDTH + GAP_COLUMNS) * i, statisticCoordinateY);
    ctx.fillText(Math.floor(times[i]), statisticCoordinateX + (BAR_WIDTH + GAP_COLUMNS) * i, statisticTextCoordinateY - (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 50%)';
    ctx.fillRect(statisticCoordinateX + (BAR_WIDTH + GAP_COLUMNS) * i, statisticCoordinateY - GAP - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
