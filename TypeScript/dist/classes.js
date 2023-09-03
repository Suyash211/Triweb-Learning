"use strict";
const classCheck = () => {
    class Student {
        constructor() {
            this._tag_name = "";
            this._standard = 0;
        }
        get tagName() {
            return this._tag_name;
        }
        set tagName(value) {
            this._tag_name = "@" + value;
        }
        get standard() {
            return this._standard;
        }
        set standard(value) {
            this._standard = value;
        }
    }
    let Suyash = new Student();
    Suyash.tagName = "Suyash";
    Suyash.standard = 12;
    console.log("Details", Suyash);
};
classCheck();
