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
           
         
            

            return $http.get('http://localhost/WebService/ws.php')
                      .then(function(result) {
                          //resolve the promise as the data
                          chats=result.data;
                          return result;
                      });
        
        
            
          
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
