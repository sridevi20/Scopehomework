const Park = function (name, ticket_price, []){
this.name = name;
this.ticket_price = ticket_price;
this.dinosaurs = [];

}

 Park.prototype.addDinosaur = function(dinosaur) {

    this.dinosaurs.push(dinosaur)
 };

 Park.prototype.removeDinosaur = function(dinosaur) {

   this.dinosaurs.shift(dinosaur)

 };

 Park.prototype.findDinosaur = function(dinosaur) {
  for (const dinosaur of this.guestsAttractedPerDay){
     if(this.dinosaurs >= guestsAttractedPerDay){
       return  this.dinosaurs;
    };

  };

};



module.exports = Park;
