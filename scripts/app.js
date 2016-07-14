(function (document) {
    'use strict';
    var app = document.querySelector('#app');
    app.fbid = "";
    app.page = 0;
          // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBmkBdp9qZFRQIanKoFWvj_bZo7USflQnE",
        authDomain: "pokemapper.firebaseapp.com",
        databaseURL: "https://pokemapper.firebaseio.com",
        storageBucket: "pokemapper.appspot.com",
    	};
    firebase.initializeApp(config);

	firebase.auth().signInAnonymously().catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    var isAnonymous = user.isAnonymous;
	    var uid = user.uid;
	    console.log("user Logged to FB" + uid);
	    app.fbid = uid;
	    // ...
	  } else {
	    // User is signed out.
	    // ...
	  }
	  // ...
	});

    var pokerrayone = ["All","Abra","Aerodactyl","Alakazam","Arbok","Arcanine","Articuno","Beedrill","Bellsprout","Blastoise","Bulbasaur","Butterfree","Caterpie","Chansey","Charizard","Charmander","Charmeleon","Clefable","Clefairy","Cloyster","Cubone","Dewgong","Diglett","Ditto","Dodrio","Doduo","Dragonair","Dragonite","Dratini","Drowzee","Dugtrio","Eevee","Ekans","Electabuzz","Electrode","Exeggcute","Exeggutor","Farfetch'd","Fearow","Flareon","Gastly","Gengar","Geodude","Gloom","Golbat","Goldeen","Golduck","Golem","Graveler","Grimer","Growlithe","Gyarados","Haunter","Hitmonchan","Hitmonlee","Horsea","Hypno","Ivysaur","Jigglypuff","Jolteon","Jynx","Kabuto","Kabutops","Kadabra","Kakuna","Kangaskhan","Kingler","Koffing","Krabby","Lapras","Lickitung","Machamp","Machoke","Machop","Magikarp","Magmar","Magnemite","Magneton","Mankey","Marowak","Meowth","Metapod","Mew","Mewtwo","Moltres","Mr. Mime","Muk","Nidoking","Nidoqueen","Nidoran♀","Nidoran♂","Nidorina","Nidorino","Ninetales","Oddish","Omanyte","Omastar","Onix","Paras","Parasect","Persian","Pidgeot","Pidgeotto","Pidgey","Pikachu","Pinsir","Poliwag","Poliwhirl","Poliwrath","Ponyta","Porygon","Primeape","Psyduck","Raichu","Rapidash","Raticate","Rattata","Rhydon","Rhyhorn","Sandshrew","Sandslash","Scyther","Seadra","Seaking","Seel","Shellder","Slowbro","Slowpoke","Snorlax","Spearow","Squirtle","Starmie","Staryu","Tangela","Tauros","Tentacool","Tentacruel","Vaporeon","Venomoth","Venonat","Venusaur","Victreebel","Vileplume","Voltorb","Vulpix","Wartortle","Weedle","Weepinbell","Weezing","Wigglytuff","Zapdos","Zubat"];
    var pokerraytwo = ["Abra","Aerodactyl","Alakazam","Arbok","Arcanine","Beedrill","Bellsprout","Blastoise","Bulbasaur","Butterfree","Caterpie","Chansey","Charizard","Charmander","Charmeleon","Clefable","Clefairy","Cloyster","Cubone","Dewgong","Diglett","Dodrio","Doduo","Dragonair","Dragonite","Dratini","Drowzee","Dugtrio","Eevee","Ekans","Electabuzz","Electrode","Exeggcute","Exeggutor","Fearow","Flareon","Gastly","Gengar","Geodude","Gloom","Golbat","Goldeen","Golduck","Golem","Graveler","Grimer","Growlithe","Gyarados","Haunter","Hitmonchan","Hitmonlee","Horsea","Hypno","Ivysaur","Jigglypuff","Jolteon","Jynx","Kabuto","Kabutops","Kadabra","Kakuna","Kangaskhan","Kingler","Koffing","Krabby","Lapras","Lickitung","Machamp","Machoke","Machop","Magikarp","Magmar","Magnemite","Magneton","Mankey","Marowak","Meowth","Metapod","Mr. Mime","Muk","Nidoking","Nidoqueen","Nidoran♀","Nidoran♂","Nidorina","Nidorino","Ninetales","Oddish","Omanyte","Omastar","Onix","Paras","Parasect","Persian","Pidgeot","Pidgeotto","Pidgey","Pikachu","Pinsir","Poliwag","Poliwhirl","Poliwrath","Ponyta","Porygon","Primeape","Psyduck","Raichu","Rapidash","Raticate","Rattata","Rhydon","Rhyhorn","Sandshrew","Sandslash","Scyther","Seadra","Seaking","Seel","Shellder","Slowbro","Slowpoke","Snorlax","Spearow","Squirtle","Starmie","Staryu","Tangela","Tauros","Tentacool","Tentacruel","Vaporeon","Venomoth","Venonat","Venusaur","Victreebel","Vileplume","Voltorb","Vulpix","Wartortle","Weedle","Weepinbell","Weezing","Wigglytuff","Zubat"];

    app.pokerray1 = pokerrayone;
    app.pokerray2 = pokerraytwo;
    app.latt = 42.689;
    app.long = -83.138;

	app.findme = function() {

	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function(position) {
	            var pos = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	        	};
	        	console.log("Supports, and works");
	        	app.latt = pos.lat;
	        	app.long = pos.lng;
	         }, function() {
	            
	          });
	        } 
	    else {
	          // Browser doesn't support Geolocation
	          handleLocationError(false, infoWindow, map.getCenter());
	        }
	};

	app.helplaunch = function() {
		this.$.help.open();
	};


    app.submittofb = function() {
    	var choseloc = false;

    	if (app.latt != 42.689 && app.long != -83.138) { 
    		choseloc = true;
    		if (app.var && choseloc) {
		    	console.log(app.var);
		    	console.log(app.latt);
		    	console.log(app.long);
		    	console.log(app.fbid);
		    	
		    	var postData = {
		    		poke: app.var,
		    		lat: app.latt,
		    		long: app.long,
		    		user: app.fbid
	    		};
	    		this.$.thankyou.open(); 
	    		return firebase.database().ref().child('userPoints').push(postData);

    		}
    		else { this.$.selectpokenote.open(); }
    	}
    	else { this.$.maperror.open(); }


    };
    var allz = new Array();
    app.dataPoints = {};
    app.mapPoints = [];
    //LOADCODE//
    app.loaddatafb = function() {
    	app.dataPoints = firebase.database().ref().child('userPoints').on('value', function(snapshot) {
    		var arbObject = {};
    		arbObject = snapshot.val();
    		console.log("loaded");
    		
    		//enumerate object
    		for (var key in arbObject) {
    			if (arbObject.hasOwnProperty(key)) {
    				allz.push(arbObject[key]);    				
    			}    			
    		}
    		//everything must be done here in the callback func
    		app.mapPoints = allz;
    		console.log(app.mapPoints[3]);
    	});  	

    };

    app.display = function(pokemon) {
    	var filterby = "";

    	if (pokemon == "All") {
    		return null;
    	}
    	else {
    		return function(marker) {
    			if (marker.poke == pokemon) {
    				return marker;
    			}
    		}
    	}
    };
   
    
    })(document);