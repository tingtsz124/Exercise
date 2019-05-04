 var pictures=[
        "0.jpg","1.jpg","2.jpg"
    ]
$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem=$("#choices li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
       $("H1").text($("#choices  li").eq(randomChildNumber).text());//eq(數字)由0開始
        $("img").attr("src",pictures[randomChildNumber]);
    });
});