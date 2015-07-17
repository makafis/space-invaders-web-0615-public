var Spaceship = function(name, members, phaser, shield){
  this.name = name;
  this.members = members;
  this.phasers = parseInt(phaser);
  this.shields = parseInt(shield); 
  this.cloaked = false;
  this.warpDrive = 'disengaged'
  this.phasersCharge = 'uncharged';

  if (members.length == 0){
    this.docked = true;
  } else {
    this.docked = false;
    for (var i = 0; i < members.length; i++) {
      members[i].currentShip = this;
    } 
  }
  
  
}

