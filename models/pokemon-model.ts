export class Pokemon {
  id: string;
  name: string;
  url: string;
  weight: number;
  height: number;
  experience: number;
  image: string;
  hpStats: number;
  attackStats: number;
  defenseStat: number;
  specialAttStats: number;
  specialDefStats: number;
  speedStats: number;

  constructor(
    id: string,
    name: string,
    url: string,
    height: number,
    weight: number,
    experience: number,
    image: string,
    hpStats: number,
    attackStats: number,
    defenseStat: number,
    specialAttStats: number,
    specialDefStats: number,
    speedStats: number
  ) {
    (this.id = id), (this.name = name);
    this.url = url;
    this.weight = weight;
    this.height = height;
    this.experience = experience;
    this.image = image;
    this.hpStats = hpStats;
    this.attackStats = attackStats;
    this.defenseStat = defenseStat;
    this.specialAttStats = specialAttStats;
    this.specialDefStats = specialDefStats;
    this.speedStats = speedStats;

    // this.weight = weight;
  }
}
