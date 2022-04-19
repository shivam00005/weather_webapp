class Storage{
  constructor(){
    this.state;
    this.city;
    this.defaultstate = 'punjab';
    this.defaultcity = 'Ludhiana';
  }
  getdataLs(){
    if(localStorage.getItem('state') === null){
      
      this.state = this.defaultstate;
    }else{
      this.state = localStorage.getItem('state');
    }
    
    if(localStorage.getItem('city') === null){
      
      this.city = this.defaultcity;
    }else{
      this.city = localStorage.getItem('city');
    }
    
    return {
      state :this.state,
      city :this.city
      
    }
   }
   
   setdataLs(state,city){
     
     
     localStorage.setItem('state', state);
     
     localStorage.setItem('city',city);
     
   }
  }

