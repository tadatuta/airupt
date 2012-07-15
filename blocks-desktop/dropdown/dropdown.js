(function($) {
    BEM.DOM.decl('dropdown',
    {
        onSetMod: {
            'js': function() {
                this.bindTo('switcher', 'click', function() {
                    this.toggleMod('state', 'shown')
                });
            },
            'state' : {
                'shown': function() {
                    this.trigger('shown');

                    var keyDownEvent = $.browser.opera ? 'keypress' : 'keydown';
                    this.afterCurrentEvent(function() {
                        this
                            .bindToDoc('leftclick', function(e) {
                                this.containsDomElem($(e.target)) || this._onOutClick(e);
                            })
                            .bindToDoc(keyDownEvent, function(e) {
                                // close if Escape pressed
                                e.keyCode == 27 && this.hide();
                            });
                    });
                },
                '': function() {
                    this.trigger('hide');

                    return this.unbindFromDoc('leftclick keypress')
                }
            }
        },
        show: function() {
            this.setMod('state', 'shown');
        },
        hide: function() {
            this.delMod('state');
        },
        _onOutClick : function(domEvent) {
            var e = $.Event('outside-click');
            this.trigger(e, { domEvent : domEvent });
            e.isDefaultPrevented() || this.hide();
        }

    });
})(jQuery);