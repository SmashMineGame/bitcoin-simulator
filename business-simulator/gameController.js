class GameController {
    
    constructor() {
        this.businesses = [
            new Business("Hello World",       4,           0.6,    1,           1.07, 0, 0),
            new Business("News Channel",      60,          3,      60,          1.15, 0, 1),
            new Business("Hardware Store",    720,         6,      540,         1.14, 0, 2),
            new Business("Mobile Service",    8640,        12,     4320,        1.13, 0, 3),
            new Business("Computer Provider", 103680,      24,     51840,       1.12, 0, 4),
            new Business("eStore",            1244160,     96,     622080,      1.11, 1, 0),
            new Business("Sports Network",    14929920,    384,    7464960,     1.10, 1, 1),
            new Business("Video Site",        179159040,   1536,   89579529,    1.09, 1, 2),
            new Business("Bitcoin Exchange",  2149908280,  6144,   1074954240,  1.08, 1, 3),
            new Business("Internet Provider", 25798901760, 36864,  29668737024, 1.07, 1, 4)
        ];
        this.businesses[0].level = 1;
        this.player = new Player();
    }
    
    update() {
        fill(133, 115, 102);
        noStroke();
        rect(0, 0, WIDTH, HEIGHT);
        stroke(0, 0, 0);
        this.businesses.forEach(business => business.update());
        this.player.update();
    }
}