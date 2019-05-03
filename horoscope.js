function getSign(){
	var birthMonth = document.getElementById("birthdayMonth").value;
	var birthDay = document.getElementById("birthdayDay").value;

	if(birthMonth==1){
		//capricorn
		if(birthDay <= 19){
			document.getElementById("welcome").innerHTML = "Welcome Capricorn";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/capricorn/";
		}
		else{//aquarius
			document.getElementById("welcome").innerHTML = "Welcome Aquarius";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/aquarius/";
		}

	}

	if(birthMonth==2){
		//aquarius
		if(birthDay <= 18){
			document.getElementById("welcome").innerHTML = "Welcome Aquarius";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/aquarius/";

		}
		else{//pisces
			document.getElementById("welcome").innerHTML = "Welcome Pisces";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/pisces/";
		}

	}

	if(birthMonth==3){
		//pisces
		if(birthDay <= 20){
			document.getElementById("welcome").innerHTML = "Welcome Pisces";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/pisces/";
		}
		else{//aries
			document.getElementById("welcome").innerHTML = "Welcome Aries";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/aries/";
		}

	}

	if(birthMonth==4){
		//aries
		if(birthDay <= 19){
			document.getElementById("welcome").innerHTML = "Welcome Aries";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/aries/";
		}
		else{//taurus
			document.getElementById("welcome").innerHTML = "Welcome Taurus";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/taurus/";
		}

	}

	if(birthMonth==5){
		//taurus
		if(birthDay <= 20){
			document.getElementById("welcome").innerHTML = "Welcome Taurus";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/taurus/";
		}
		else{//gemini
			document.getElementById("welcome").innerHTML = "Welcome Gemini";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/gemini/";
		}

	}

	if(birthMonth==6){
		//gemini
		if(birthDay <= 20){
			document.getElementById("welcome").innerHTML = "Welcome Gemini";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/gemini/";
		}
		else{//cancer
			document.getElementById("welcome").innerHTML = "Welcome Cancer";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/cancer/";
		}

	}

	if(birthMonth==7){
		//cancer
		if(birthDay <= 22){
			document.getElementById("welcome").innerHTML = "Welcome Cancer";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/cancer/";
		}
		else{//leo
			document.getElementById("welcome").innerHTML = "Welcome Leo";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/leo/";
		}

	}

	if(birthMonth==8){
		//leo
		if(birthDay <= 22){
			document.getElementById("welcome").innerHTML = "Welcome Leo";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/leo/";
		}
		else{//virgo
			document.getElementById("welcome").innerHTML = "Welcome Virgo";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/virgo/";
		}

	}

	if(birthMonth==9){
		//virgo
		if(birthDay <= 22){
			document.getElementById("welcome").innerHTML = "Welcome Virgo";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/virgo/";

		}
		else{//libra
			document.getElementById("welcome").innerHTML = "Welcome Libra";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/libra/";
		}

	}

	if(birthMonth==10){
		//libra
		if(birthDay <= 22){
			document.getElementById("welcome").innerHTML = "Welcome Libra";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/libra/";
		}
		else{//scorpio
			document.getElementById("welcome").innerHTML = "Welcome Scorpio";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/scorpio/";
		}

	}

	if(birthMonth==11){
		//scorpio
		if(birthDay <= 21){
			document.getElementById("welcome").innerHTML = "Welcome Scorpio";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/scorpio/";
		}
		else{//sagittarius
			document.getElementById("welcome").innerHTML = "Welcome Sagittarius";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/sagittarius/";
		}

	}

	if(birthMonth==12){
		//sagitarius
		if(birthDay <= 21){
			document.getElementById("welcome").innerHTML = "Welcome Sagittarius";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/sagittarius/";
		}
		else{//aquarius
			document.getElementById("welcome").innerHTML = "Welcome Aquarius";
			document.getElementById("link2").innerHTML = "Click here to learn more";
			document.getElementById("link2").href = "https://www.astrology-zodiac-signs.com/zodiac-signs/sagittarius/";
		}

	}
}

function getHoroscope(){

	getSign();

	var horoscopes = 
	["A warm, interesting phone call from a current or potential love partner could have you longing for this person's company. You should have a lot to say to each other and so spend a lot of time on the phone. A meeting could be arranged, probably somewhere in your neighborhood. Your chemistry is intense, so don't be surprised by the direction of this involvement.",
	 "An unexpected but welcome financial windfall could lead to some long-desired changes in your living situation. You may decide to move, or you could opt for a less drastic course of action, such as redecorating or remodeling. A household member could move out or someone new could move in. These are all very positive changes that will make a big difference in your life.",
	 "You're looking great today! A current or potential love partner who lives nearby is likely to be all too aware of this. Your heightened sensuality should be very apparent! A long walk with your friend could involve conversation that brings you closer together. You might spend most of the evening together. Expect a lot of kissing and handholding - maybe more!",
	 "Your aesthetic sense may increase, leading to the discovery of an artistic talent you may not have known you had. You could decide to develop this talent, possibly by enrolling in a class. A current or potential love partner might decide to come with you, creating a new venue for bringing you closer together. This should prove very exciting.",
	 "A social event, possibly involving a group you're affiliated with, could put you in touch with a lot of friendly, intriguing people who share your interests. Among them could be a potential romantic partner, or a current partner could accompany you to this event. Whichever it is, both of you are likely to feel good about the event and will probably want to see your new friends again.",
	 "You could be introduced to a celebrity you admire, probably a woman, perhaps at a lecture or book signing. This could make a profound difference in your life, as this person may inspire you. A romantic partner could meet her as well, and the two of you should have a lot to discuss over dinner. Relax and enjoy your evening. It could change your life in a very subtle way.",
	 "A social event that involves the discussion of intellectual topics could occur today. You could decide to go with a love partner. You're likely to enjoy the gathering so much that you may stay late into the night and then spend another hour or so discussing it with your partner. Afterward, anything could happen! In the future you will remember tonight as magical. Make the most of it!",
	 "Some intense communication could take place today between you and a love partner, possibly about your future together. It's likely to lead to some positive developments in your life, possibly including a move to the next level of commitment. If you aren't involved now, a friend could introduce you to someone new, perhaps at a social gathering. Look your best throughout the day!",
	 "Today you may feel especially sensual and passionate. This is the perfect evening to schedule quality time with a current or potential love partner. You're probably looking and feeling attractive, and this fact isn't likely to be lost on your friend. Scatter some pillows, add some flowers, put out some cheese, fruit, and white wine, and be prepared for anything!",
	 "A social event or gathering that involves work could put you in touch with interesting people, including a sexy potential love partner! Someone new on the scene could stir your blood like it hasn't been stirred in a long time. Whether or not you choose to pursue this attraction depends on your situation, but at least you will have some fun today.",
	 "A new or long-term romantic relationship could be advanced to the next level of commitment. The chemistry between you is strong and you're compatible on several levels. Today you will experience passion like never before! Some intense but honest and very positive discussion about the relationship's future is likely to take place, followed by an intimate encounter.",
	 "Today you should feel especially sensual. You will want to bask in the pleasure of being in love. A passionate encounter could occur at your home, probably after a wonderful meal you've prepared. You could have a frank discussion about the future of the relationship. You might decide to try living together if you don't already. Think carefully about it and do what feels right."
	];

	var int = Math.random() * 12;
	var int2 = Math.floor(int);
	document.getElementById("horoscope").innerHTML = horoscopes[int2];
}

function runTarrot() {
	var myPicture = document.getElementById("tarotCard");
	console.log(myPicture);
	var cards = ["horoscope/1.jpg",
				 "horoscope/2.jpg",
				 "horoscope/3.jpg",
				 "horoscope/4.jpg",
				 "horoscope/5.jpg",
				 "horoscope/6.jpg",
				 "horoscope/7.jpg",
				 "horoscope/8.jpg",
				 "horoscope/9.jpg",
				 "horoscope/10.jpg"
				];

	var tarot = ["The Fool is a very powerful card in the Tarot deck, usually representing a new beginning -- and, consequently, an end to something in your old life. The Fool's position in your spread reveals which aspects of your life may be subject to change. The Fool portends important decisions ahead which may not be easy to make, and involve an element of risk for you. Approach the changes with optimism and care to gain the most positive outcome.",
				 "Symbolic of life's cycles, the Wheel of Fortune speaks to good beginnings. Most likely, you will find the events foretold to be positive, but, being aspects of luck, they may also be beyond your control and influence. Tend those things you can control with care, and learn not to agonize over the ones you cannot.",
				 "Your first instinct will most likely be to associate this card as representing love, but, much like love, it does not possess a simple nature. Not only does love comes in many forms, but the Lovers may indicate important or difficult choices ahead in your life. This is bad, in that the choices it portends are generally mutually exclusive, paths to two very different futures, but also good, in that it also confirms that at least one of those paths will take you to a good place. As such, if you happen to find it in your spread, you should consider it carefully, but not fear it. It tells a story of difficult choices, likely painful, but that the correct decision and a positive outcome are within your grasp.",
				 "Death is indicative of change in your future. This change can be in almost any aspect of your life, but it will almost certainly be permanent, significant, and absolute. Death suggests a complete severance between the past and the future, and it will likely be painful. Despite the sense of loss that may accompany it, Death fills an important and natural role in life, and leads eventually to acceptance. It is a necessary part of moving forward, and you will find the changes easiest if you embrace them, rather than fight them. Expect the end of a close friendship, a job, a marriage, or even a life, but do not focus too greatly on the negative.",
				 "Strength is the rawest form of power, and you possess it in some form. It is a very happy card if you are fighting illness or recovering from injury. As might be suspected, its influence over you, and the use you put it to, can trend towards light or dark. You likely trend towards facing your problems courageously, head-on, and conquering them through perseverance and will. With this ability to overcome life's obstacles, though, comes the responsibility to control yourself, and it this card may be a warning to take command of your own actions or emotions before they damage you or the people you care about.",
				 "The World is an indicator of a major and inexorable change, of tectonic breadth. This change represents a chance for you to bring about a desirable end to the Old and a good beginning to the New. It is indicative of growing maturity, a sense of inner balance and deeper understanding. It suggests that you may be approaching a more final sense of identity, and the security in the self that comes with age. It also represents the falling away of boundaries, sometimes in the effusive sense of the spiritual, but sometimes in a purely physical sense, indicating travels or journeys in the future.",
				 "An optimistic card, Temperance encourages you to find balance in your life and approach problems with a calm demeanour. It recognizes that opposing forces need not be at war within you. Tread carefully in any major decisions you make, with confidence that good decisions will lead to a good resolution for you.",
				 "Traditionally associated with strong maternal influence, the presence of the Empress is excellent news if you are looking for harmony in your marriage or hoping to start a family. Any artistic endeavours you are currently associated with are also likely to be more successful, as this card often finds those exposed to strong bursts of creative or artistic energy. That creative energy may not be in the form of a painting or art project, however: This card also suggests a very strong possibility of pregnancy -- not necessarily yours, but you might be seeing a new addition to your extended family or the family of a close friend in the near future! This card is a good portent for you and those around you.",
				 "The Hanged Man can be interpreted in two very different ways. All change is a small kind of death, as the old must die to create the new, and it may simply indicate upheaval or change in your future, perhaps beyond your control, but more likely a decision that, for good or ill, you will not be able to turn back from. The other interpretation is one of sacrifice, although whether this sacrifice is small or great may not be easily interpreted. Both interpretations imply permanence, and that you should give very careful thought to the decisions in your life.",
				 "As an inherently good influence, finding the Sun is a positive development. It is suggestive of personal gain, and that personal goals and joy are within reach, if you are willing to invest the effort to actualize them. If you are embarking on a new personal venture, such as marriage or beginning a family, the Sun is of particular influence."
				];

	var int = Math.random() * 20;
	var int2 = Math.floor(int);
	console.log(int2);
	myPicture.src = cards[int2];
	document.getElementById("tarotReading").innerHTML = tarot[int2];
}

function runQuiz(){
	var mars = 0;
	var venus = 0;
	var saturn = 0;
	var jupiter = 0;

	var answer1 = document.getElementById("questionOne").value;
	console.log("Answer 1: " + answer1);

	var answer2 = document.getElementById("questionTwo").value;
	console.log("Answer 2: " + answer2);

	var answer3 = document.getElementById("questionThree").value;
	console.log("Answer 3: " + answer3);

	var answer4 = document.getElementById("questionFour").value;
	console.log("Answer 4: " + answer4);

	if(answer1==0 || answer2==0 || answer3==0 || answer4==0)
	{ 
		alert("You have not answered all of the questions");
	}

	if(answer1 >0 || answer2 > 0 || answer3>0 ||answer4>0){
	///////////////question 1///////////////
		if(answer1 == 1){
			saturn ++;
		}
		if(answer1 == 2){
			venus ++;
		}
		if(answer1 == 3){
			jupiter ++;
		}
		if(answer1 == 4){
			mars++;
		}
	/////////////////question 2////////////
		if(answer2 == 1){
			mars++;
		}
		if(answer2 == 2){
			saturn++;
		}
		if(answer2 == 3){
			venus++;
		}
		if(answer2 == 4){
			jupiter++;
		}
	////////////////question 3////////////
		if(answer3 == 1){
			jupiter++;
		}
		if(answer3 == 2){
			venus++;
		}
		if(answer3 == 3){
			saturn++;
		}
		if(answer3 == 4){
			mars++;
		}
	////////////////question 4/////////////
		if(answer4 == 1){
			venus++;
		}
		if(answer4 == 2){
			saturn++;
		}
		if(answer4 == 3){
			jupiter++;
		}
		if(answer4 == 4){
			mars++
		}

	}

	console.log(answer1);
	console.log(answer2);
	console.log(answer3);
	console.log(answer4);
//////////////////check quiz//////////////////////////////
	if(mars > jupiter && mars > saturn && mars > venus){
		document.getElementById("quiz").innerHTML = "It looks like the planet Mars rules your mood."
	}

	if(jupiter > mars && jupiter > saturn && jupiter > venus){
		document,getElementById("quiz").innerHTML = "It looks like the planet Jupiter rules your mood.";
	}

	if(venus > mars && venus > jupiter && venus > saturn){
		document.getElementById("quiz").innerHTML = "It looks like the planet Venus rules your mood.";
	}

	if(saturn > mars && saturn > venus && saturn > jupiter){
		document.getElementById("quiz").innerHTML = "It looks like the planet Satutn rules your mood.";
	}

	if(saturn == mars){
		document.getElementById("quiz"). innerHTML = "It looks like Saturn & Mars equally control your mood.";
	}

	if(saturn == jupiter){
		document.getElementById("quiz"). innerHTML = "It looks like Saturn & Jupiter equally control your mood.";
	}

	if(saturn == venus){
		document.getElementById("quiz"). innerHTML = "It looks like Saturn & Venus equally control your mood.";
	}

	if(mars == jupiter){
		document.getElementById("quiz"). innerHTML = "It looks like Mars & Jupiter equally control your mood.";
	}

	if(mars == venus){
		document.getElementById("quiz"). innerHTML = "It looks like Mars & Venus equally control your mood.";
	}

	if(venus == jupiter){
		document.getElementById("quiz"). innerHTML = "It looks like Mars & Venus equally control your mood.";
	}

	if(mars == 1 && jupiter == 1 && saturn == 1 && venus == 1){
		document.getElementById("quiz"). innerHTML = "You are one tough cookie to crack, it seems your stars align equally with all 4 mood planets."
	}
}