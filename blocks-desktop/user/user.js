BEM.DOM.decl('user',
{
    onSetMod: {
        'js': function() {
            this.bindTo('click', function() {
                this.findBlockInside('dropdown').toggleMod('visibility', 'visible');
                this.trigger('click');
            });
        }
    }
});