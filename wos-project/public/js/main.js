/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary WOS project || created: 2/2/20
 *  @todo
 */
 
 import EventHandler from './EventHandler.js';
 
export default class Main {

	constructor(){
		new HandleOrder();
	}

}

window.addEventListener('load', () => {
    new Main();
});