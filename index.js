



$(function(){
    var pre_names = ['A','B','C','D','E'];
    var post_names = ['1','2','3','4','5'];
    $('#go').click(function(){
        $('#go').hide(); 
        $('#imgResult').hide() 
        $('#go').fadeIn(800); 
        $('#imgResult').fadeIn(800);
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

        var date = new Date();
        var currentYear = date.getFullYear();
        var live = year-1941;

        ///////////Special////////////
        if(day=="Thursday"&&month=="March"&&year=="1999"){
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
            $('#result').text("We have the same birthday");
            $('#pic').attr('src','');
            $('#dc').text(""); 
            $('#body').css("background-image", "url(birthday.png)");  
        }
        //////////////////////////////
        else if(isNaN(integer)){
            console.log("๊User didn't type the year correctly");
            alert("PLEASE ENTER YOUR YEAR OF BIRTH!!!"); 
            $('#result').text("Please type your Year of birth correctly"); 
            $('#pic').attr('src','https://i.kym-cdn.com/photos/images/newsfeed/000/173/576/Wat8.jpg?1315930535');
            $('#dc').text("What Are You Doing? Just Do What It Said!!"); 
        } else if(integer<1853){
            console.log("DEAD");
            $('#result').text("omae wa mou shindeiru"); 
            $('#dc').text("You are already DEAD!! ..... if that isn't the case then, contact somebody!!! You gonna get famous by being the oldest human ever (:");
            $('#pic').attr('src','https://i.ytimg.com/vi/wLp2Ukv8YPE/hqdefault.jpg');
            $('#result').text(""); 
            
        } else if(integer>=1853&&integer<currentYear){
            ////////Year///////
            console.log("good");
            var rdmYear = Math.floor(Math.random() * live);
            var pic = Math.floor(Math.random() * live);

            if(rdmYear==0){
            $('#result').text("Sorry, but you have less then a year");    
            }else{
            $('#result').text("You have "+rdmYear+" Years left"); 
            }

            ////////Picture////////
            var rdmPic = Math.floor(Math.random() * ArrayPic.length);
            $('#pic').attr('src',ArrayPic[rdmPic]);

            /////////////DC////////////////
            if(rdmYear==0)
            {$('#dc').text("You are really unlucky or just really old. I'm sure your did so many things to this world. stay healthy :D");}
            else if(rdmYear==1)$('#dc').text("make it count.Dont make my mistake.");
            else{
                var ArrayDC = ['You know this is just a website right? a student project website.',
                'Ever heard of Lynks disease? That might be the cause of your death',
                'never like any front end work...sadly',
                'I suppose to do a good website for better score.What on earth am i doing here?',
                'lifes toughest problems do not have simple answers. You should not kill yourself',
                'Hope this will has any fun? HAH!!!',
                'It is her idea to change this part of this website.I hope this has any meaning to her.',
                'It is her idea to change this part of this website.I hope this has any meaning to her.'
                ]
                var rdmDC = Math.floor(Math.random() * ArrayDC.length);
                $('#dc').text(ArrayDC[rdmDC]);
            }


        } else if(integer>currentYear&&integer<2500){

            alert("ใจเย็นๆนะคุณยังไม่ได้เกิด")
        } else if(integer>=2500){

            alert("ใช้ปีคริสต์ศักราช!!!!!!")
        }

        
    });

});
