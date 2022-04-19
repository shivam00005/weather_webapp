const storge = new Storage();

const getdata = storge.getdataLs();
const wethr = new Weather(getdata.state, getdata.city);
const ui = new UI();



document.addEventListener('DOMContentLoaded', getweather)

const change=document.getElementById('w-save').addEventListener('click',()=>{
  
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value;
  
  wethr.locationchange(state, city);
  
  storge.setdataLs(state,city);
  getweather();
  
 // $('#discModal').modal('hide');
  
});

function getweather(){
wethr.weather()
.then(result=> {
  ui.paint(result);
})
.catch(err=> console.log(err));
}