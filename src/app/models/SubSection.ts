export class SubSection {
    title:String;
    subtitle:String;
    paragraphs:Array<String>;
    list:Array<String>;

    constructor(title:String, subtitle:String, paragraphs:Array<String>, list?:Array<String>) {
        this.title = title;
        this.subtitle = subtitle;
        this.paragraphs = paragraphs;
        this.list = list;
    }
}