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
                console.log(data[key]);
            }
        }).fail(function () { // remplace error
            $('body').html("Une erreur critique est arrivée ...");
        });
    });
}) ();