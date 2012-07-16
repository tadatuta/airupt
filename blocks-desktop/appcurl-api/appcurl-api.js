//TODO: add cache

(function($) {
    BEM.decl('appcurl-api', {}, {
        search: function(query, data, onSuccess) {
            if (!onSuccess) {
                onSuccess = data;
                data = {};
            }

            data.q = query;

            this._sendRequest('search', data, onSuccess);
        },

        quickSearch: function(query, data, onSuccess) {
            if (!onSuccess) {
                onSuccess = data;
                data = {};
            }

            data.q = query;

            this._sendRequest('qs', data, onSuccess);
        },

        getCategories: function(onSuccess) {
            this._sendRequest('categories', {}, onSuccess);
        },

        _sendRequest: function(handle, data, onSuccess) {
            $.ajax({
                url: 'https://api.airomo.com/0/appcurl/' + handle,
                data: data,
                dataType: 'json',
                success: onSuccess,
                error: function() {
                    console.log('API request error');
                    console.log(arguments);
                }
            });
        }
    });
})(jQuery);