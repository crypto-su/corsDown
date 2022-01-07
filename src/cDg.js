"use strict";
class cDg {
    constructor(id) {
        this.id = id;
    }
    view() {
        var url = document.getElementById(this.id).src;
        const p = url.split("/");
        var t = '';
        for (let i = 0; i < p.length; i++) {
            if(i==2){
                t += p[i].replaceAll('-', '--').replaceAll('.','-')+atob('LnRyYW5zbGF0ZS5nb29n')+'/';
            } else { if(i != p.length-1){ t += p[i]+'/'; } else { t += p[i]; } }
        }
        document.getElementById(this.id).src = encodeURI(t);
        return encodeURI(t);
    }
}