export class Pokemon {
  name: string;
  url: string;
  weight: number;
  height: number;
  experience: number;
  image: string;

  constructor(
    name: string,
    url: string,
    height: number,
    weight: number,
    experience: number,
    image: string
  ) {
    this.name = name;
    this.url = url;
    this.weight = weight;
    this.height = height;
    this.experience = experience;
    this.image = image;

    // this.weight = weight;
  }
}
