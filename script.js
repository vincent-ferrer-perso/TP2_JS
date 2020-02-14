(function() {
    $(() => {
        //https://sokoban.doonoo.fr/

        $.ajax({
            url: 'https://sokoban.doonoo.fr/',
            method: 'get',
            // quand on renvoie donnée data:
            /*
            success: function (data) {},
            error: function() {} // appeler quand retour serveur different de 200 ex:404
             */
        }).done(function (data) { // remplace success  parametre data est la valeur de retour de l'appel
            for (let key in data) {
                $('body').append(
                    $('<div />').append(
                        $('<div />').html(data[key].description),
                        $('<div />').html(data[key].copyright)
                    ).css({
                        'margin': '2px',
                        'padding': '2px',
                        'border': '1px solid blue'
                    })
                )
            };
            console.log(key);
            console.log(data[key].description);
            console.log(data[key].copyright);
        }).fail(function () { // remplace error
            $('body').html("Une erreur critique est arrivée ...");
        });
    });
}) ();