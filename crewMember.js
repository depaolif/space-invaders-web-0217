
class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }
  engageWarpDrive() {
    if (this.position === 'Pilot' && typeof this.currentShip === 'object') {
      this.currentShip.warpDrive = 'engaged!'
    }
    return 'had no effect'
  }
  setsInvisibility() {
    if (this.position === 'Defender' && typeof this.currentShip === 'object') {
      this.currentShip.cloaked = true
    }
    return 'had no effect'
  }
  chargePhasers() {
    if (this.position === 'Gunner' && typeof this.currentShip === 'object') {
      this.currentShip.phasersCharge = 'charged!'
    }
    return 'had no effect'
  }
}
