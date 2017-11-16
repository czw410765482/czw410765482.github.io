    var t1;
    var yy;
    var yynum = 1;
    var listItem1 = new Array(
        ["<ul><li><a href='javascript:void(0)'><img src='images/listItem1pic1.jpg'><p>小米5s</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic2.jpg'><p>小米5s Plus</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic3.jpg'><p>小米手机5</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic4.jpg'><p>小米MAX</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic5.jpg'><p>红米note</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic6.jpg'><p>红米note 3</p></a><div class='xuan'>选购</div></li>" +
        "</ul>"]
        ,["<ul><li><a href='javascript:void(0)'><img src='images/listItem1pic8.jpg'><p>红米手机3S</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic9.jpg'><p>红米pro</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic10.jpg'><p>红米手机 3</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic11.jpg'><p>红米手机3X</p></a><div class='xuan'>选购</div></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic12.jpg'><p>合约机</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem1pic12.jpg'><p>对比手机</p></a></li>" +
        "</ul>"],["<ul><li><a href='javascript:void(0)'><img src='images/listItem1pic13.jpg'><p>小米移动 电话卡</p></a></li></ul>"]
    );

    var listItem2 = new Array(
        ["<ul><li><a href='javascript:void(0)'><img src='images/listItem2pic1.jpg'><p>小米笔记本Air</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem2pic2.jpg'><p>小米平板2</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem2pic3.jpg'><p>USB-C转接口</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem2pic4.jpg'><p>小米笔记本内胆包</p></a></li>" +
        "</ul>"]);

    var listItem3 = new Array(
        ["<ul><li><a href='javascript:void(0)'><img src='images/listItem3pic1.jpg'><p>小米电视3s 43英寸</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem3pic2.jpg'><p>小米电视3s 48英寸</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem3pic3.jpg'><p>小米手机5</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem3pic4.jpg'><p>小米MAX</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem3pic5.jpg'><p>红米note</p></a></li>" +
        "<li><a href='javascript:void(0)'><img src='images/listItem3pic6.jpg'><p>红米note 3</p></a></li>" +
        "</ul>"],
        ["<ul><li><a href='javascript:void(0)'><img src='images/listItem1pic7.jpg'><p>小米5s</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic8.jpg'><p>小米5s Plus</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic9.jpg'><p>小米手机5</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic10.jpg'><p>小米MAX</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic11.jpg'><p>红米note</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic12.jpg'><p>红米note 3</p></a></li>" +
                "</ul>"],
        ["<ul><li><a href='javascript:void(0)'><img src='images/listItem3pic13.jpg'><p>小米笔记本Air</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic14.jpg'><p>小米平板2</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic15.jpg'><p>USB-C转接口</p></a></li>" +
                "<li><a href='javascript:void(0)'><img src='images/listItem3pic16.jpg'><p>小米笔记本内胆包</p></a></li>" +
                "</ul>"]);
    var listnum = 1;
    $(document).ready(function(){
        var z = 1;
        var i = 1;

        var nt = (($(window).width()-1226)/2-80) +"px";
        t1 = window.setInterval(intervar1,5000);
        if(z==1){
            $(".nav-btn").hover(function(){
                $(".nav-btn").css({"border":"1px solid #ff6700","background-color":"#ff6700"})
                $(".nav-text").css({"border":"1px solid #b0b0b0"})
                z=0;
            },function(){
                $(".nav-btn").css({"border":"1px solid #e0e0e0","background-color":"white"})
                $(".nav-text").css({"border":"1px solid #e0e0e0"})
                z=1;
            })
        }

        if(z==1){
            $(".nav-text").hover(function(){
                $(".nav-btn").css({"border":"1px solid #b0b0b0"})
                $(".nav-text").css({"border":"1px solid #b0b0b0"})
                z=0;
            },function(){
                $(".nav-btn").css({"border":"1px solid #e0e0e0"})
                $(".nav-text").css({"border":"1px solid #e0e0e0"})
                z=1;
            })
        }
            $(".nav-text").focusin(function(){
                i=0;
            })
            setInterval(p,50);
            function p(){
                if(i==0){
                    $(".nav-btn").css({"border":"1px solid #ff6700"})
                    $(".nav-text").css({"border":"1px solid #ff6700"})
                }
            }

            $(".nav-text").focusout(function(){
                $(".nav-btn").css({"border":"1px solid #b0b0b0"})
                $(".nav-text").css({"border":"1px solid #b0b0b0"})
                i=1;
            })
            $(".navCar").hover(function(){
                var nr = ($(window).width()-1226)/2+"px";
                $(".null1").css("right",nr);
                $(".null1").slideToggle(200);
            })
            $(".btnTure").hover(function(){
                $(".btnTure").css("color","#fc6700")
            },function(){
                $(".btnTure").css("color","#b0b0b0")
            })
            $(".t2b2").click(function(){
                $(".turn2-pic").animate({left:'-1240px'},"slow");
                $(".t2b2").removeClass("btnTrue").addClass("btnFalse").attr("disabled","Enabled");
                $(".t2b1").removeClass("btnFalse").addClass("btnTrue").removeAttr("disabled");
            })
            $(".t2b1").click(function(){
                $(".turn2-pic").animate({left:'0px'},"slow");
                $(".t2b1").removeClass("btnTrue").addClass("btnFalse").attr("disabled","Enabled");
                $(".t2b2").removeClass("btnFalse").addClass("btnTrue").removeAttr("disabled");
            })


            $(".turn-item a").click(function(){
                clearInterval(t1);
                var itemIndex = $(".turn-item a").index(this)+1;
                if(itemIndex!=inum){
                    $(".img"+inum).addClass("opc");
                    $(".item"+inum).attr("id","");
                    inum = itemIndex;

                    $(".img"+itemIndex).removeClass("opc");
                    $(".item"+itemIndex).attr("id","iac");
                }
                t1 = setInterval(intervar1,5000);
            })



    });
function intervar1(){
    $(".img"+inum).addClass("opc");
    $(".item"+inum).attr("id","");
    if(inum!=5){
        inum++;
    }else{
        inum=1;
    }

    $(".img"+inum).removeClass("opc");
    $(".item"+inum).attr("id","iac");
}
var inum = 1;
function clickTbtnUp(){
    clearInterval(t1);
    $(".img"+inum).addClass("opc");
    $(".item"+inum).attr("id","");
    if(inum==1){
        inum=5;
    }else{
        inum--;
    }
    $(".img"+inum).removeClass("opc");
    $(".item"+inum).attr("id","iac");
    t1 = setInterval(intervar1,5000);
}

function clickTbtnDown(){
    clearInterval(t1);
    $(".img"+inum).addClass("opc");
    $(".item"+inum).attr("id","");
    if(inum==5){
        inum=1;
    }else{
        inum++;
    }
    $(".img"+inum).removeClass("opc");
    $(".item"+inum).attr("id","iac");
    t1 = setInterval(intervar1,5000);
}
