/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
dojo.declare("Button_Button", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},
    // Called by onClick event for basicButton
    basicButtonClick: function(inSender) {
	  try {
		  this.buttonPushVar.setValue('dataValue',this.buttonPushVar.getValue('dataValue')+1);
		  
	  } catch(e) {
		  console.error('ERROR IN basicButtonClick: ' + e); 
	  } 
  },
  _end: 0
});