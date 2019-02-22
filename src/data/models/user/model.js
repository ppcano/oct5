import DS from 'ember-data';

//const { attr, Model } = DS;

export default class User extends DS.Model {
  @DS.attr('string') name;
  @DS.attr('string') last
}
/*
export default Model.extend({
  name: attr('string')
});
*/
