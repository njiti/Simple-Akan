//A function to verify
function verify(){
    var date = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var yearOfBirth = document.getElementById('year').value;
  
    if(date===""||date<1||date>31){
      alert("The Gregorian calendar only has a maximum of 31 days");
    }
    else if(month===""||month<1||month>12){
      alert("Sorry but we are using the Gregorian calendar that has 12 months");
    }
    else if(year===""){
      alert("Sorry but human-beings have a life span of 80 years .You may calculate your birth year from that info");
    }
    else{
      return false;
    }
  }
  
  function generateName(){
    var date = document.getElementById('date').value;
    
    var month = document.getElementById('month').value;
   
    var yearOfBirth = document.getElementById('year').value;
    
  
    var century = yearOfBirth.slice(0,2);
    var year = yearOfBirth.slice(2,4);
  
    var genders = document.getElementById("gender");
    var gender = genders.options[genders.selectedIndex].text;
  
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
  
    var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    var dayOfBirth = Math.floor(dayOfBirth);
  
    if (gender === "Male") {
         document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  maleName[dayOfBirth -1];
         }
         else if (gender === "Female") {
             document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  femaleName[dayOfBirth -1];
         }
      
  }
  