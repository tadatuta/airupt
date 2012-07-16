BEM.DOM.decl('app-categories',
{
    onSetMod: {
        'js': function() {
            var _this = this;

            BEM.blocks['appcurl-api'].getCategories(function(categories){
                var bemjson = [];

                categories.result.forEach(function(category){
                    var name = category.name,
                        spaceIdx = name.indexOf(' ');

                    bemjson.push(
                        {
                            block: 'app-category',
                            mods: { cat: spaceIdx > -1 ? name.substring(0, spaceIdx).toLowerCase() : name.toLowerCase() },
                            url: '//apps.airomo.com/#category=' + category.id,
                            content: name
                        }
                    );
                });

                BEM.DOM.prepend(_this.domElem, BEM.HTML.build(bemjson));

            });
        }
    }
});