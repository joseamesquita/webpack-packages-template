
export class Tamagotchi {
  constructor(tamagotchi) {
    this.tamagotchi = tamagotchi;
    this.health = 100;
    this.feed = 10;
    this.play = 0; 
  }

  wakeUp() {
    return "Hello, I am " + this.tamagotchi;
  }

  setHunger() {
    setInterval(() => {
      this.feed --;
    }, 1000);
    
  }
  play(){
    setInterval(() => {
      this.health --;
      this.feed --;
    }, 1000);
  }

  getFood(){
    return this.feed;
  }

  getHealth(){
    return this.health;
  }

  countDown(){
    setInterval(() => {
      if(this.health == 0){
        return this.health;
      }
      else{
        this.health --;
      }
    }, 1000)

  }
  

}