class Business {
    
    constructor(name, price, time, profit, coefficient, x, y) { // add price, return, etc
        this.name = name;
        this.initPrice = price;
        this.price = price;
        this.timeToCashout = time*30;
        this.time = 0;
        this.initProfit = profit;
        this.profit = profit;
        this.coefficient = coefficient;
        this.levelAddend = 1;
        this.level = 0;
        this.milestones = [25, 50, 100, 200, 300, 400];
        
        this.x = -HALFWIDTH*0.4 + x*WIDTH*0.4;
        this.y = HALFHEIGHT*(-0.7 + 0.3*y);
        this.width = HALFWIDTH*0.4;
        this.height = HALFHEIGHT*0.26;
    }
    
    display() {
        // bounding rectangle
        fill(64, 58, 47);
        stroke(0, 0, 0);
        if (Input["mousepos"]["x"] > this.x - this.width/2 && Input["mousepos"]["x"] < this.x + this.width/2 && Input["mousepos"]["y"] > this.y - this.height/2 && Input["mousepos"]["y"] < this.y + this.height/2)
            fill(44, 41, 36);
        rect(this.x, this.y, this.width, this.height);
        // name and level
        fill(180, 80, 60);
        textSize(this.height*0.3);
        text(this.name, this.x, this.y - this.height*0.1);
        fill(170, 170, 170);
        textSize(this.height*0.25);
        if(this.level === 0)
            text(this.level + " - Buy ฿" + formatCount(this.price,true,1), this.x, this.y + this.height*0.15);
        else
        text(this.level + " - Upgrade ฿" + formatCount(this.price,true,1), this.x, this.y + this.height*0.15);
        // time to cashout (if a business is owned; background box drawn regardless)
        strokeWeight(this.height/16);
        stroke(130, 101, 90);
        fill(133, 115, 102);
        rect(this.x, this.y + this.height*0.34, this.width*0.8, this.height*0.2);
        strokeWeight(1);
        if (this.level > 0) { // loading bar for cashout
            fill(141, 204, 59);
            noStroke();
            if (this.timeToCashout > 5) // draw solid green if more than 1/3 of the bar is filled per frame
                rect(this.x - this.width*0.4*(1 - this.time/this.timeToCashout), this.y + this.height*0.34,
                     this.width*0.8 * (this.time/this.timeToCashout), this.height*0.2);
            else
                rect(this.x, this.y + this.height*0.34, this.width*0.8, this.height*0.2);
            fill(0, 0, 0);
            textSize(this.height*0.17);
            text("฿" + formatCount(this.profit,true,1),this.x, this.y + this.height*0.41);
        }
    }
    
    reachedMilestone() {
        this.timeToCashout /= 2;
        var flg = true;
        for (var biz of GC.businesses) {
            if (biz.level < this.level){
                flg = false;
            }
        }
        if (flg) {
            GC.businesses.forEach(business => business.timeToCashout/=2);
        }
    }
    
    levelAddendChanger() {
        if (Input[188]) {
            this.levelAddend = 1;
        }
        
        if (Input[190]) {
            this.levelAddend = 10;
        }
        
        if (Input[191]) {
            this.levelAddend = 100;
        }
    }
    
    purchase() {
        if (Input["mousepos"]["x"] > this.x - this.width/2  && 
            Input["mousepos"]["x"] < this.x + this.width/2  && 
            Input["mousepos"]["y"] > this.y - this.height/2 && 
            Input["mousepos"]["y"] < this.y + this.height/2) {
            if (Input["click"] && 
            GC.player.money >= this.price) {
                
                GC.player.money -= this.price;
                this.level += 1;
                this.price = Math.ceil(summation(1, this.level + 1, 1, (x) => this.initPrice * Math.pow(this.coefficient, x)));
                this.profit = Math.ceil(this.level * this.initProfit);
                if (this.milestones.indexOf(this.level) > -1){
                    this.reachedMilestone();
                }    
            }
        }
    }
    
    cashout() {
        if (this.level > 0) {
            this.time++;
            if (this.time >= this.timeToCashout) {
                this.time = 0;
                GC.player.money += this.profit;
            }
        }
    }

    update() {
        this.display();
        this.levelAddendChanger();
        this.purchase();
        this.cashout();
    }
    
}