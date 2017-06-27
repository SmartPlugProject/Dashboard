export class Sensor {
  constructor(
    public id: string,
    public name: string,
    public device: string,
    public energy: Array<number>
  ){}
}
