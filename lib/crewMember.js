var CrewMember = function(posit){
  this.position = posit;
  this.currentShip = Spaceship.name || 'Looking for a Rig' ;


};

CrewMember.prototype.engageWarpDrive = function(){
   if(this.position == 'Pilot'){
  if(this.currentShip != 'Looking for a Rig') {
    this.currentShip.warpDrive = 'engaged!';
  } else {
    return "had no effect";
  };} else {
    return "had no effect";
  };
};
CrewMember.prototype.setsInvisibility = function(){
 if(this.position == 'Defender'){
  if(this.currentShip != 'Looking for a Rig') {
    this.currentShip.cloaked = true;
  } else {
    return "had no effect";
  };} else {
    return "had no effect";
  };
};
CrewMember.prototype.chargePhasers = function(){
  if(this.position == 'Gunner'){
  if(this.currentShip != 'Looking for a Rig') {
    this.currentShip.phasersCharge = 'charged!';
  } else {
    return "had no effect";
  };} else {
    return "had no effect";
  };
};

