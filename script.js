$(".viewPro").on({
    mouseenter: function()
    {
        $(this).css("font-weight","bolder");
    },
    mouseleave: function()
    {
        $(this).css("font-weight","normal");
    },
    click: function()
    {
        $(".gotoPView").attr("href", "productView.html");


        // THIS WILL SHOW THE PRODUCT IMAGE:

        let picLink = $(".image").attr("src");
        //alert(picLink);
        //let pic = $("<img>").attr("src", picLink);
        //$("#pro_image").append(pic);
        $("#productViewImage").attr("src", picLink);


        // THIS WILL SHOW THE PRODUCT NAME:
        let proName = $(".gotoPview").text();
        $("#productViewName").text(proName);


        // THIS WILL SHOW THE PRODUCT PRICE:
        let proPrice = $(".priceView").text();
        $("#productViewPrice").text(proPrice);


        // THIS WILL SHOW THE CART OPTION:
        let Cartlogo = $(".addCart").attr("src");
        $("#productViewLogo").attr("src", Cartlogo);
    }
})


$(".addCart").on({
    mouseenter: function(){
        $(this).css("width", "40px");
        $(this).css("height", "25px");
    },
    mouseleave: function(){
        $(this).css("width","25px");
        $(this).css("height", "20px");
    },
    click: function(){
        alert("Added to cart!");
    }
})



$(".form_button").on({
    click: function()
    {
        let formPicUrl = $("#furl").attr("src");
        let formPic = $("<img>").attr("src", formPicUrl);
        $("#appendPro").append(formPic);

        let formProName = $("#fname").val();
        let formName = $("<h3>").text(formProName);
        $("#appendPro").append(formName);

        let formProDes = $("#fdesc").val();
        let formDesc = $("<p>").text(formProDes);
        $("#appendPro").append(formDesc);

        let formProPrice = $("#fprice").val();
        let formPrice = $("<p>").text(formProPrice);
        $("#appendPro").append(formPrice);
    }
})