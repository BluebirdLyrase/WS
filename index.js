
function showOutput(resultText,pic,picText){
    $('#result').text(resultText); 
    $('#pic').attr('src',pic);
    $('#dc').text(picText); 
}


$(function(){
    $('#go').click(function(){
        $('#pic').hide(); 
        $('#pic').fadeIn(500);

        ///////////////data////////////////////////////
        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();
        var integer = parseInt(year)
        console.log(day + ',' + month);
        var ArrayPic = ['pic/1.jpg','pic/2.jpg','pic/3.jpg','pic/4.jpg','pic/5.jpg','pic/6.jpg','pic/7.jpg'];
        var rdmPic = Math.floor(Math.random() * ArrayPic.length);
        var ArrayPicText = ['Goodnight teacher or fellow student.',
        'Ever heard of Lynks disease?',
        'Please turn off ad-block to enjoy the music',
        'DONR EVER ANSWER THE PHONE. DONT MAKE MY MISTAKE!',
        'lifes toughest problems do not have simple answers.',
        '4 have been shot but one were missing',
        '4 have been shot but one were missing',
        'Sometime I saw a weird pink man.',
        'Maybe it is just a hallucination.She said',
        'Dad is holding a shogun at us',
        'I rush in thier room because I heard 2 gunshots',
        'It is not my falut.I HAVE THAT DISEASE. I KNOW IT!',
        'I do not know how to pick up a blue chair off the ground'
        ];
        ////////////////////////Random and calculate///////////////////////////////
        var rdmPicText = Math.floor(Math.random() * ArrayPicText.length);
        var date = new Date();
        var currentYear = date.getFullYear();
        var live = year-1941;
        var rdmYear = Math.floor(Math.random() * live);
        var pic = Math.floor(Math.random() * live);
        var time = date.getHours()
        console.log(time);

        if(time>=5&&time<12){
            ArrayPicText[0] = "Good moring teacher or fellow friend."
        }else if(time>=12&&time<18){
            ArrayPicText[0] = "Good afternoon teacher or fellow friend."
        }else if(time>=18&&time<22){
            ArrayPicText[0] = "Good evening teacher or fellow friend."
        }
        ////////////////////////////////////////////////////////

        ///////////Special////////////
        if(day=="Thursday"&&month=="March"&&year=="1999"){
            console.log("birthday");
            $('#go').css("background-color","pink"); 
            $('#month').css("background-color","pink"); 
            $('#day').css("background-color","pink"); 
            $('#year').css("background-color","pink"); 
            $('#day').css("color","white"); 
            $('#go').css("color","white"); 
            $('#month').css("color","white"); 
            $('#year').css("color","white"); 
            $('#bar1').css("color","white"); 
            $('#bar2').css("color","white"); 
            $('#bar3').css("color","white");
            $('#result').css("color","white");
            $('#html').css("background-image", "url(pic/birthday.png)");  
            showOutput("We have the same birthday",'pic/gif.gif'," ");
        }
      
        else if(isNaN(integer)){
            console.log("User didn't type the year correctly");
            alert("PLEASE ENTER YOUR YEAR OF BIRTH!!!"); 
            showOutput("Please type your Year of birth correctly",
            'pic/wat.jpg',
            "What Are You Doing? Just Do What It Said!!");

        } else if(integer<1853){
            console.log("DEAD");
            showOutput("omae wa mou shindeiru",
            'pic/dead.jpg',
            "You are already DEAD!! ..... if that isn't the case then, contact somebody!!! You gonna get famous by being the oldest human ever (:");
            
          ////////////////////////////////////////////////////////////////////////////
        } else if(integer>=1853&&integer<currentYear){
            console.log("Normal");
            if(rdmYear==0){
            showOutput("Sorry, but you have less then a year",ArrayPic[rdmPic],"You are really unlucky or just really old. I'm sure your did so many things to this world. stay healthy :D");
            }
            
            else if(rdmYear==1){

            showOutput("You have only one year left",ArrayPic[rdmPic],"make it count");    

            }else{

          showOutput("You have "+rdmYear+" Years left",ArrayPic[rdmPic],ArrayPicText[rdmPicText]);

            }

            

        } else if(integer>currentYear&&integer<2500){
            showOutput("......","pic/joke.jpg","Am I a joke to you?");
        } else if(integer>=2500){
          showOutput("ใช้ปีคริสต์ศักราช!!!!!!","pic/over9000.gif","ปีพุทธศักราช - 543 = ปีคริสต์ศักราช");
        }

        
    });

});
