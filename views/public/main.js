$(function () {

    $("#datasetGet").click(function (e) {
            e.preventDefault();
            console.log("testing");

            var id = $("#datasetId").val();
            console.log(id);

            if (id == "movies"){

                $.ajax({
                  dataType: "json",
                  url: "http://localhost:3000/posts",
                  success: function(data){

                    console.log("testing inside success");
                    console.log(data);

                    var data_string = JSON.stringify(data);

                     $("#dataDisplay").html(data_string);

                  }

                });
             }else if (id == "actors"){

                 $.ajax({
                  dataType: "json",
                  url: "http://localhost:3000/comments",
                  success: function(data){

                    console.log("testing inside success");
                    console.log(data);

                    var data_string = JSON.stringify(data);

                     $("#dataDisplay").html(data_string);

                  }

                });


             }else {
                alert("Please select one.")
             }

        });

});

