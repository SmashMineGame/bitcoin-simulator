class Player {
    
    constructor() {
        this.money = 0;
        this.multiplier = 1;
        this.angels = 0;
    }
    
    displayInfo() {
        fill(0, 0, 0);
        textSize(HEIGHT*0.06);
        text("฿" + formatCount(this.money, true, 1), 0, -HALFHEIGHT*0.88);
    }
    
    update() {
        this.displayInfo();
    }
    
}