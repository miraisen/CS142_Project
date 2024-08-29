"use strict";

class Cs142TemplateProcessor{
    constructor(template){
        this.template = template;
    }
    fillIn(dictionary){
        return this.template.replace(/\{\{(.*?)\}\}/g, (match, key) => dictionary[key] || '');
    }
}
window.Cs142TemplateProcessor = Cs142TemplateProcessor;