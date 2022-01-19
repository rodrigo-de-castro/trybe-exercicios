const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dmgDragon = (dragon) => {
    const minDmg = 15;
    const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
    return dragonDmg;
  };

  const dmgWarrior = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = warrior.strength * warrior.weaponDmg;
    const warriorDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
    return warriorDmg;
  };

  

