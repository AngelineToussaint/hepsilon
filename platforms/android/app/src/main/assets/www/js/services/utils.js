app.service('Utils', ['$q', '$localForage', '$rootScope', 'Request', function ($q, $localForage, $rootScope, Request) {
    return {
        keepNumberChars: (text, number) => {
            return (text.length > number) ? text.substr(0, number) + '...' : text
        },
        timestampToFrenchDate: oldDate => {
            var a     = (oldDate != null) ? new Date(oldDate * 1000) : new Date();
            var year  = a.getFullYear();
            var month = ("0" + (a.getMonth() + 1)).slice(-2);
            var date  = ("0" + (a.getDate())).slice(-2);
            var hour  = ("0" + (a.getHours())).slice(-2);
            var min   = ("0" + (a.getMinutes())).slice(-2);
            var sec   = ("0" + (a.getSeconds())).slice(-2);
            var time  = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec;
            return time;
        },
        frenchDateToTimestamp: oldDate => {
            oldDate = oldDate.split("/");

            var newDate = oldDate[1]+"/"+oldDate[0]+"/"+oldDate[2];

            return new Date(newDate).getTime() / 1000;
        },
        loadLink: link => {
            window.location.href = link
        }
    }
}])