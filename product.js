$("#get").click(function(){
    console.log('Get data ...');
    $.get("products.json", function(data, status){
        // console.log(data);
        // console.log(status);
        if(status == 'success'){
            $("#name").text(data.name);
            var products = data.data;
            var tableHead = '<tr><th>ID</th><th>Name</th><th>Price</th></tr>'
            $('#datalist').append(tableHead);
            for(var index in products){
                var product = products[index];
                var tableRow = '<tr><td>'+product.product_id+'</td><td>'+product.product_name+'</td><td>'+product.unit_price+'</td></tr>'
             $('#datalist').append(tableRow);
                console.log(products);
            }
        }else{console.log("BAD");}
    });
});