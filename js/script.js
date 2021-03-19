$(document).ready(function () {

    $('#pobierz-dane').click(function () {

        //$.get
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pId = $('<p></p>').text(`ID: ${data.id}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');

                $('body').append(pUserId);
                $('body').append(pId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);

            })
            .fail(function (error) {
                console.error(error);
            })


        //$.getJSON
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pId = $('<p></p>').text(`ID: ${data.id}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');

                $('body').append(pUserId);
                $('body').append(pId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);
            })
            .fail(function (error) {
                console.error(error);
            })

    });
})