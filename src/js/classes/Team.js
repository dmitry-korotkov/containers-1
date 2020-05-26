export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(hero) {
      console.log(this.members.has(hero))
      if(this.members.has(hero)) {
          throw new Error("Такой герой уже существует");
      }
      this.members.add(hero)
    }

    addAll (...heroes){
        heroes.forEach(hero => {
          this.members.add(hero);
        })
    }
    
    toArray () {
      const result =[]
      for (const hero of this.members) {
        result.push(hero)
      }
      return result
    }
}