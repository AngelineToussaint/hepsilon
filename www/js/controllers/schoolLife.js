app.controller('SchoolLifeCtrl', ['$scope', function ($scope) {
    $scope.quantity = 5
    $scope.posts = [
        {
            id: '1041642558177325057',
            account: 'Nantes Digital Week',
            network: 'twitter',
            date_formatted: '17/10/2018 03:58:00',
            content: ".@Brunoteboul de @gfiinformatique refait l'histoire de l'intelligence artificielle qui est très récente puisque datant de 60 ans pour aboutir au #deeplearning afin de montrer aux étudiants de l'@EPSI_Nantes le cheminement scientifique et technologique de l'#IA",
            link: 'https://twitter.com/NantesDigitalW/status/1041642558177325057',
            other: {
                likes: 4,
                shares: 1,
                img: 'https://pbs.twimg.com/media/DnSoYLOXsAI5cnU.jpg'
            }
        },
        {
            id: '1011553829345775616',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '26/06/2018 03:16:00',
            content: "#inauguration #campushep Johanna Rolland, Maire @nantesfr, et Stéphanie Houët, vice-présidente @paysdelaloire dévoilent l’œuvre inaugurale et animent une table ronde avec les étudiants dont Clément Lusson (4ème année EPSI) !",
            link: 'https://twitter.com/EPSI_Nantes/status/1011553829345775616',
            other: {
                likes: 17,
                shares: 4,
                img: 'https://pbs.twimg.com/media/DgnCxRIXcAEwcP8.jpg'
            }
        },
        {
            id: '1011547290237046784',
            account: 'HEP Education',
            network: 'twitter',
            date_formatted: '26/06/2018 02:50:00',
            content: "Découverte de l’incubateur Ifagtory #openinghep #Nantes #campushep #generationhep",
            link: 'https://twitter.com/EPSI_Nantes/status/1011547290237046784',
            other: {
                likes: 3,
                shares: 3,
                img: 'https://pbs.twimg.com/media/Dgm84_BWAAAkqut.jpg'
            }
        },
        {
            id: '1011538975776038913',
            account: 'HEP Education',
            network: 'twitter',
            date_formatted: '26/06/2018 02:17:00',
            content: "Au CAMPUS HEP Nantes, entre les cours, on peut jouer au ping-pong, au baby-foot et aux jeux vidéos ! #openinghep #campushep #nantes",
            link: 'https://twitter.com/EPSI_Nantes/status/1011538975776038913',
            other: {
                likes: 2,
                shares: 1,
                img: 'https://pbs.twimg.com/media/Dgm1EagXUAEhSX9.jpg'
            }
        },
        {
            id: '1011545215071596544',
            account: 'HEP Education',
            network: 'twitter',
            date_formatted: '26/06/2018 02:42:00',
            content: "Démarrage de la visite inaugurale avec @Johanna_Rolland @shouel et Gérard Le Goff, architecte #openinghep #campushep #hepeducation #Nantes",
            link: 'https://twitter.com/EPSI_Nantes/status/1011545215071596544',
            other: {
                likes: 7,
                shares: 5,
                img: 'https://pbs.twimg.com/media/Dgm6_9KXkAAI032.jpg'
            }
        },
        {
            id: '1007314593725730816',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '14/06/2018 10:31:00',
            content: "#Web2day en mode sucrée pour nos cousins de l’école WIS ;-)",
            link: 'https://twitter.com/EPSI_Nantes/status/1007314593725730816',
            other: {
                likes: 2,
                shares: 2,
                img: 'https://pbs.twimg.com/media/DfqzRzqWkAIOmKc.jpg'
            }
        },
        {
            id: '1006594706602708993',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '12/06/2018 10:50:00',
            content: "#Web2day c’est parti !!!! EPSI et l’école WIS vous donne rdv jeudi soir sous les Nefs ;-)",
            link: 'https://twitter.com/EPSI_Nantes/status/1006594706602708993',
            other: {
                likes: 6,
                shares: 0,
                img: 'https://pbs.twimg.com/media/Dfgkip_W0AAnZa0.jpg'
            }
        },
        {
            id: '1006095627816767488',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '11/06/2018 01:47:00',
            content: "",
            link: 'https://twitter.com/EPSI_Nantes/status/1006095627816767488',
            other: {
                likes: 0,
                shares: 0,
                img: 'https://pbs.twimg.com/media/DfZeolVXkAEh4Sm.jpg'
            }
        },
        {
            id: '1006094785223036929',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '11/06/2018 01:44:00',
            content: "Nous accueillons pour 2 jours 15 femmes en reconversion dans le numérique !! Dispositif #DJA merci @Iventy_ pour le coup de 👍🏻",
            link: 'https://twitter.com/EPSI_Nantes/status/1006094785223036929',
            other: {
                likes: 5,
                shares: 3,
                img: ''
            }
        },
        {
            id: '999550322493313024',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '24/05/2018 00:19:00',
            content: "Merci @AccentureJobsFR pour cet accueil ce matin ! La visite de nos étudiants démarre de la meilleure manière ;-) Place à l’échange 😀🏻",
            link: 'https://twitter.com/EPSI_Nantes/status/999550322493313024',
            other: {
                likes: 7,
                shares: 3,
                img: 'https://pbs.twimg.com/media/Dd8dtV5VwAABSjG.jpg'
            }
        },
        {
            id: '935198174045704192',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '27/11/2017 09:26:00',
            content: "Go Go Go nos étudiants de 5ème année planchent sur la banque de demain !",
            link: 'https://twitter.com/EPSI_Nantes/status/935198174045704192',
            other: {
                likes: 1,
                shares: 0,
                img: ''
            }
        },
        {
            id: '934066800777662464',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '24/11/2017 06:30:00',
            content: "#SalonEtudiant France3 sur le stand EPSI NANTES !! :-)",
            link: 'https://twitter.com/EPSI_Nantes/status/934066800777662464',
            other: {
                likes: 3,
                shares: 3,
                img: 'https://pbs.twimg.com/media/DPZ4zEpXkAEnxfE.jpg'
            }
        },
        {
            id: '927988869596942336',
            account: 'EPSI Nantes',
            network: 'twitter',
            date_formatted: '07/11/2017 11:59:00',
            content: "#battledev #GfiDevFight @EPSI_Nantes  sur tous les fronts ce soir !!!",
            link: 'https://twitter.com/EPSI_Nantes/status/927988869596942336',
            other: {
                likes: 4,
                shares: 0,
                img: 'https://pbs.twimg.com/media/DODg83MW0AIQMd2.jpg'
            }
        }
    ]

    // $scope.twitterKey = 'bEaSHXMVHprULUyytGErgxtsx'
    // $scope.twitterSecret = 'LFUoZV3ompdlDY9lYy4tX0KOGBArLH2f3dxklueSWuxEHZhI0A'

    // var cb = new Codebird
    // cb.setConsumerKey($scope.twitterKey, $scope.twitterSecret)

    // timeConverter = function(oldDate) {
    //     var a     = (oldDate != null) ? new Date(oldDate * 1000) : new Date();
    //     var year  = a.getFullYear();
    //     var month = ("0" + (a.getMonth() + 1)).slice(-2);
    //     var date  = ("0" + (a.getDate())).slice(-2);
    //     var hour  = ("0" + (a.getHours())).slice(-2);
    //     var min   = ("0" + (a.getMinutes())).slice(-2);
    //     var sec   = ("0" + (a.getSeconds())).slice(-2);
    //     var time  = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec;
    //     return time;
    // }

    // $scope.getTwitterPosts = function() {
    //     cb.__call(
    //         "statuses_userTimeline",
    //         {
    //             screen_name: "EPSI_Nantes",
    //             count: 10
    //         },
    //
    //         res => {
    //             res.forEach(function(post) {
    //                 var date = new Date(post.created_at)
    //                 var newPost = {
    //                     id: post.id,
    //                     account: account,
    //                     network: 'twitter',
    //                     date_formatted: timeConverter(date.getTime() / 1000),
    //                     date: date,
    //                     content: strToHtmLink(post.text),
    //                     link: 'https://twitter.com/%27'+ account +'/status/'+ post.id_str,
    //                     other: {
    //                         likes: post.favorite_count,
    //                         shares: post.retweet_count,
    //                         img: (post.extended_entities != undefined) ? post.extended_entities.media[0].media_url : null
    //                     }
    //               }
    //               $scope.posts.push(newPost)
    //               setTimeout(function() {
    //                   $scope.checkLoadMore()
    //               }, 500)
    //           })
    //         }
    //     );
    // }

    // $scope.loadMore = function() {
    //     $scope.quantity = $scope.quantity + 5
    // }

    angular.element(".carousel-item.active").scroll(function() {
        console.log("coucou");
        if(angular.element(".carousel-item.active").scrollTop() + angular.element(".carousel-item.active").height() > angular.element(".carousel-item.active div").height() - 10) {
            $scope.$apply(function () {
              $scope.quantity = $scope.quantity + 5
            })
        }
    });

    // $scope.getTwitterPosts()
}])
