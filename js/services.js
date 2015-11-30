angular.module('starter.services', [])

.factory('Chats', function ($http) {

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Bitio Sistemas',
        lastText: 'Un paso al futuro',
        face: 'http://www.bitio.com.ar/CommingSoon/favicon.png'
    },
    {
        id: 1,
        name: 'Elias Morelli',
        lastText: 'Owner',
        face: 'http://www.bitio.com.ar/CommingSoon/favicon.png'
    }];

    return {
        all: function () {
            return chats;
         /*
            $http({
                method: 'GET',
                url: 'http://localhost/WebService/ws.php'
               
                
           
            }).
         success(function (data, status, headers, config) {
             // any required additional processing here 
            
             return data;
         }).
         catch(function (data, status) {
             deferred.reject(data, status, headers, config);
         });*/
        
        
          
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
