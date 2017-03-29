window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon for " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        if (totalDamage>=5) {
            console.log("You killed the dragon!");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
        }
        
    }
    else {
        console.log("You missed, the dragon killed you");
        slaying = false;
    }
    
};