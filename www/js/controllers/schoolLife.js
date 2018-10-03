app.controller('SchoolLifeCtrl', ['$scope', function ($scope) {
    $scope.quantity = 10
    $scope.posts = [
        {
            id: '1041642558177325057',
            account: 'EPSI Nantes',
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
    //     $scope.quantity = $scope.quantity + 4
    // }

    // $scope.getTwitterPosts()
}])
