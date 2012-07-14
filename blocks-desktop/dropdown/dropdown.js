BEM.DOM.decl('dropdown',
{
    onSetMod: {
        'js': function() {
            this.bindTo('switcher', 'click', function() {
                this
                    .toggleMod('state', 'shown')
                    .findBlockInside('dropdown').toggleMod('visibility', 'visible');

                this.trigger('click');
            });
        }
    }
});