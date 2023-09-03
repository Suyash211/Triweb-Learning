const classCheck = () => {
  
    class Student {
      private _tag_name: String = "";
      private _standard: Number = 0;
  
      get tagName(): String {
        return this._tag_name;
      }
      set tagName(value: String) {
        this._tag_name = "@"+value;
      }
      get standard(): Number {
        return this._standard;
      }
      set standard(value: Number) {
        this._standard = value;
      }
    }
    let Suyash = new Student();
    Suyash.tagName = "Suyash";
    Suyash.standard = 12;
    console.log("Details", Suyash);
}
  
classCheck();