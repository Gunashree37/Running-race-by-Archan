var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var applaud;


var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload() {
    track = loadImage("images/track.jpg ");
    car1_img = loadAnimation("images/img/p1/1.png", "images/img/p1/2.png", "images/img/p1/3.png");
    car2_img = loadAnimation("images/img/p2/1.png", "images/img/p2/2.png", "images/img/p2/3.png");
    car3_img = loadAnimation("images/img/p3/1.png", "images/img/p3/2.png", "images/img/p3/3.png");
    car4_img = loadAnimation("images/img/p4/1.png", "images/img/p4/2.png", "images/img/p4/3.png");
    bg = loadImage("images/bg.jpg");

    applaud = loadSound("sound.mp3");


}

function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();


    game = new Game();
    game.getState();
    game.start();
}


function draw() {

    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }

    if (gameState === 2) {
        game.end();
    }
}