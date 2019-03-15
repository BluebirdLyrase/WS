
function showInput(resultText,pic,picText){
    $('#result').text(resultText); 
    $('#pic').attr('src',pic);
    $('#dc').text(picText); 
}


$(function(){
    var pre_names = ['A','B','C','D','E'];
    var post_names = ['1','2','3','4','5'];
    $('#go').click(function(){
        $('#go').hide(); 
        $('#imgResult').hide() 
        $('#go').fadeIn(800); 
        $('#imgResult').fadeIn(800);
        ///////////////data////////////////////////////
        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();
        var integer = parseInt(year)
        console.log(day + ',' + month);
        var ArrayPic = ['https://www.img.in.th/images/0fae5999e4c6cbe9670e45ba2f216beb.jpg',
        'https://www.img.in.th/images/a47955cabed17437d1cdecf901fbd9db.jpg',
        'http://scientifist.com/wp-content/uploads/2017/03/FB-SuicideAI.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyd6wTibwH9M6WH-CBcU30VNbC7gTNruSXP0r8rSmNJODdcXyQg',
        'https://cdn.vox-cdn.com/thumbor/1-ERyN6iNc6GlY8q4ch7jyXJEpk=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/56442233/LDOJ_screenshot_1.0.jpg',
        'https://farm4.staticflickr.com/3264/2554428050_9ab3a2337d_b.jpg'
        ]
        var rdmPic = Math.floor(Math.random() * ArrayPic.length);
        var ArrayPicText = ['You know this is just a website right? a student project website.',
        'Ever heard of Lynks disease? That might be the cause of your death',
        'never like any front end work...sadly',
        'I suppose to do a good website for better score.What on earth am i doing here?',
        'lifes toughest problems do not have simple answers. You should not kill yourself',
        'Hope this will has any fun? HAH!!!',
        'It is her idea to change this part of this website.I hope this has any meaning to her.',
        'It is her idea to change this part of this website.I hope this has any meaning to her.'
        ]
        var rdmPicText = Math.floor(Math.random() * ArrayPicText.length);
        var date = new Date();
        var currentYear = date.getFullYear();
        var live = year-1941;
        var rdmYear = Math.floor(Math.random() * live);
        var pic = Math.floor(Math.random() * live);

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
            $('#body').css("background-image", "url(birthday.png)");  
 
            showInput("We have the same birthday",'gif.gif'," ");
        }
      
        else if(isNaN(integer)){
            console.log("User didn't type the year correctly");
            alert("PLEASE ENTER YOUR YEAR OF BIRTH!!!"); 
            showInput("Please type your Year of birth correctly",
            'https://i.kym-cdn.com/photos/images/newsfeed/000/173/576/Wat8.jpg?1315930535',
            "What Are You Doing? Just Do What It Said!!");

        } else if(integer<1853){
            console.log("DEAD");
            showInput("omae wa mou shindeiru",
            'https://i.ytimg.com/vi/wLp2Ukv8YPE/hqdefault.jpg',
            "You are already DEAD!! ..... if that isn't the case then, contact somebody!!! You gonna get famous by being the oldest human ever (:");
            
          ////////////////////////////////////////////////////////////////////////////
        } else if(integer>=1853&&integer<currentYear){
            console.log("Normal");
            if(rdmYear==0){
            showInput("Sorry, but you have less then a year",ArrayPic[rdmPic],"You are really unlucky or just really old. I'm sure your did so many things to this world. stay healthy :D");
            }
            
            else if(rdmYear==1){

            showInput("You have only onr year left",ArrayPic[rdmPic],"make it count");    

            }else{

            showInput("You have "+rdmYear+" Years left",ArrayPic[rdmPic],ArrayPicText[rdmPicText]);

            }

            

        } else if(integer>currentYear&&integer<2500){

            alert("ใจเย็นๆนะคุณยังไม่ได้เกิด")
        } else if(integer>=2500){

            alert("ใช้ปีคริสต์ศักราช!!!!!!")
        }

        
    });

});
