BEM.DOM.decl('dashboard',
{
    onSetMod: {
        'js': function() {
            this.bindTo('item', 'click', function() {
                this
                    .toggleMod('item', 'state', 'pressed');
                    //.findBlockInside('dropdown').toggleMod('visibility', 'visible');

                this.trigger('pressed');
            });
        }
    }
});