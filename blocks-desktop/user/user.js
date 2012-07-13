BEM.DOM.decl('user',
{
    onSetMod: {
        'js': function() {
            this.bindTo('click', function() {
                this.domElem.toggleClass('dropdown__switcher_state_on');
                this.findBlockInside('dropdown').toggleMod('visibility', 'visible');
                this.trigger('click');
            });
        }
    }
});