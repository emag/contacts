define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["pc/_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form class="form-horizontal">\n<div class="alert alert-error alert-block" style="display: none;">\n<ul>\n</ul>\n</div>\n<div class="control-group">\n<label class="control-label" for="name">Name</label><div class="controls">\n<input type="text" id="name" name="name"\nvalue="' +
((__t = ( source.name || '' )) == null ? '' : __t) +
'" placeholder="Name" required/>\n</div>\n</div>\n<div class="control-group">\n<label class="control-label" for="email">Email</label><div class="controls">\n<input type="text" id="email" name="email"\nvalue="' +
((__t = ( source.email || '' )) == null ? '' : __t) +
'" placeholder="Email"\npattern="[^\\s@]+@\\S+\\.\\S+"/>\n</div>\n</div>\n<div class="control-group">\n<label class="control-label" for="phone">Phone</label><div class="controls">\n<input type="text" id="phone" name="phone"\nvalue="' +
((__t = ( source.phone || '' )) == null ? '' : __t) +
'" placeholder="Phone"/>\n</div>\n</div>\n<div class="control-group">\n<label class="control-label" for="facebook">Facebook</label><div class="controls">\n<input type="text" id="facebook" name="facebook"\nvalue="' +
((__t = ( source.facebook || '' )) == null ? '' : __t) +
'" placeholder="Facebook"/>\n</div>\n</div>\n<div class="control-group">\n<label class="control-label" for="twitter">Twitter</label><div class="controls">\n<input type="text" id="twitter" name="twitter"\nvalue="' +
((__t = ( source.twitter || '' )) == null ? '' : __t) +
'" placeholder="Twitter"/>\n</div>\n</div>\n<div class="control-group">\n<label class="control-label" for="github">GitHub</label><div class="controls">\n<input type="text" id="github" name="github"\nvalue="' +
((__t = ( source.github || '' )) == null ? '' : __t) +
'" placeholder="GitHub"/>\n</div>\n</div>\n<div class="form-actions">\n<button class="btn btn-primary submit">Submit</button>\n<a href="#' +
((__t = ( source.id )) == null ? '' : __t) +
'" class="btn cancel">Cancel</a>\n';
 if (source.id) { ;
__p += '\n<span class="btn btn-danger delete">Delete</span>\n';
 } ;
__p += '\n</div>\n</form>';

}
return __p
};

this["JST"]["pc/app"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="header">\n<h1><a href="#">Contact</a></h1>\n</div>\n<div id="content">\n<div id="sidebar" style="float: left;">\n<div id="sidebar-header">\n<a href="#new" class="new">New Contact</a>\n</div>\n<div id="sidebar-content">\n<div id="contactlist">\n</div>\n</div>\n</div>\n<div id="main" style="margin-left: 200px;">\n</div>\n</div>';

}
return __p
};

this["JST"]["pc/item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#' +
((__t = ( source.id )) == null ? '' : __t) +
'">\n<h3>' +
((__t = ( source.name )) == null ? '' : __t) +
'</h3>\n';

if(source.email) {
;
__p += '\n<p>' +
((__t = ( source.email )) == null ? '' : __t) +
'</p>\n';

}
;
__p += '\n';

if(source.phone) {
;
__p += '\n<p>' +
((__t = ( source.phone )) == null ? '' : __t) +
'</p>\n';

}
;
__p += '\n</a>';

}
return __p
};

this["JST"]["pc/new"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( JST['pc/_form']({source: source}) )) == null ? '' : __t);

}
return __p
};

  return this["JST"];

});