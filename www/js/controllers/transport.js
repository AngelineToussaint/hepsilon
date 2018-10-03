app.controller('PublicTransportCtrl', ['$scope', function ($scope) {



}])
    .controller('ParkingCtrl', ['$scope', function ($scope) {
        $scope.parkings = [
            {
                name : 'Beaulieu',
                time : '4 min',
                address : 'Parking Beaulieu, Rue Gaëtan Rondeau, 44200 Nantes',
                picture : 'beaulieu',
                link: 'https://www.google.com/maps/dir/47.2050593,-1.5373747/EPSI+Nantes,+16+Boulevard+G%C3%A9n%C3%A9ral+de+Gaulle,+44200+Nantes/@47.2046374,-1.5392952,17.3z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4805eea43e011adb:0xdf27f344999f53ea!2m2!1d-1.5394009!2d47.2060207!3e2'
            },
            {
                name : 'Les Fonderies',
                time : '7 min',
                address : 'Parking Les Fonderies, Rue des Boires, 44200 Nantes',
                picture : 'les-fonderies',
                link: 'https://www.google.com/maps/dir/Parking+Les+Fonderies,+Rue+des+Boires,+44200+Nantes/EPSI+Nantes,+16+Boulevard+G%C3%A9n%C3%A9ral+de+Gaulle,+44200+Nantes/@47.2054199,-1.5432901,17.62z/data=!4m14!4m13!1m5!1m1!1s0x4805eeb35dd5ecf7:0x118a4c8838aefff!2m2!1d-1.5440877!2d47.2049359!1m5!1m1!1s0x4805eea43e011adb:0xdf27f344999f53ea!2m2!1d-1.5394009!2d47.2060207!3e2'
            },
            {
                name : 'Zenpark Ouest',
                time : '11 min',
                address : 'Parking Zenpark, 23 Boulevard Gaston Doumergue, 44200 Nantes',
                picture : 'zenpark-ouest',
                link: 'https://www.google.com/maps/dir/Parking+Zenpark,+23+Boulevard+Gaston+Doumergue,+44200+Nantes/EPSI+Nantes,+16+Boulevard+G%C3%A9n%C3%A9ral+de+Gaulle,+44200+Nantes/@47.2058864,-1.5453286,17z/data=!4m14!4m13!1m5!1m1!1s0x4805eeb268d8e761:0x492884fb228f1033!2m2!1d-1.5481764!2d47.2069521!1m5!1m1!1s0x4805eea43e011adb:0xdf27f344999f53ea!2m2!1d-1.5394009!2d47.2060207!3e2'
            },
            {
                name : 'Yespark',
                time : '15 min',
                address : 'Parking Yespark, 3 Rue du Cherche Midi, 44200 Nantes',
                picture : 'yespark',
                link: 'https://www.google.com/maps/dir/Parking+mensuel+Yespark+Place+de+la+Guirou%C3%A9,+3+Rue+du+Cherche+Midi,+44200+Nantes/EPSI+Nantes,+16+Boulevard+G%C3%A9n%C3%A9ral+de+Gaulle,+44200+Nantes/@47.2067595,-1.5362734,16.55z/data=!4m14!4m13!1m5!1m1!1s0x4805eed21e87ca6f:0x5abcc04ef2e56525!2m2!1d-1.5274503!2d47.2088102!1m5!1m1!1s0x4805eea43e011adb:0xdf27f344999f53ea!2m2!1d-1.5394009!2d47.2060207!3e2'
            },
            {
                name : 'Nomad',
                time : '15 min',
                address : 'Parking NOMAD, Boulevard Victor Hugo, 44200 Nantes',
                picture : 'nomad',
                link: 'https://www.google.com/maps/dir/Parking+NOMAD,+Boulevard+Victor+Hugo,+44200+Nantes/EPSI+Nantes,+16+Boulevard+G%C3%A9n%C3%A9ral+de+Gaulle,+44200+Nantes/@47.2032891,-1.5457318,16.59z/data=!4m14!4m13!1m5!1m1!1s0x4805e94d659913d1:0x662a3d2c92c25f5d!2m2!1d-1.5484118!2d47.2021579!1m5!1m1!1s0x4805eea43e011adb:0xdf27f344999f53ea!2m2!1d-1.5394009!2d47.2060207!3e2'
            },
            {
                name : 'Zenpark Est',
                time : '16 min',
                address : 'Parking Zenpark, 13 Rue du Cherche Midi, 44200 Nantes',
                picture : 'zenpark-est',
                link: 'https://www.google.com/maps/dir/Parking+Zenpark,+13+Rue+du+Cherche+Midi,+44200+Nantes/EPSI+Nantes,+16+Boulevard+G%C3%A9n%C3%A9ral+de+Gaulle,+44200+Nantes/@47.2058349,-1.5357993,16.12z/data=!4m14!4m13!1m5!1m1!1s0x4805eed24f449629:0xe1758dfcd2f84f50!2m2!1d-1.5263862!2d47.2074062!1m5!1m1!1s0x4805eea43e011adb:0xdf27f344999f53ea!2m2!1d-1.5394009!2d47.2060207!3e2'
            }
        ]
    }])