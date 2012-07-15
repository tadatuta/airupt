BEM.DOM.decl('dashboard',
{
    onSetMod: {
        'js': function() {
            this.bindTo('item', 'click', function(e) {
                this.toggleMod(e.data.domElem, 'state', 'pressed');
                //.findBlockInside('dropdown').toggleMod('visibility', 'visible');

                this.trigger('pressed');
            });
        }
    }
});