class Weather {
  constructor(state, city) {
    this.api_key = 'd331df11ef78403d80e115801211807';
    this.state = state;
    this.city = city;

  }
  async weather() {
    const whea = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.state}/${this.city}&day=1`);
    const data = await whea.json();
    console.log(data);
    return data;
  }

  locationchange(state, city) {
    this.state = state;
    this.city = city;
  }
}