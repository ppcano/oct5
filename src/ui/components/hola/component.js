//import Component from '@ember/component';
import Component from '@glimmer/component';
//import { tracked } from '@glimmer/tracking';

// needed until we add a public module for this in ember-rfc176-data
//import Ember from 'ember';
//const tracked = Ember._tracked;

export default class TesterooComponent extends Component {

  //@tracked count = 3;

  increment() {
    //console.log('incrementing...');
    this.count++;
  }
}
