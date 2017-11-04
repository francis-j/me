import { SubSection } from "./SubSection";

export class Section {
    title:String;
    paragraphs:Array<String>;
    subsections:Array<SubSection>;

    constructor(title:String, paragraphs:Array<String>, subsections?:Array<SubSection>) {
        this.title = title;
        this.paragraphs = paragraphs;
        this.subsections = subsections;
    }
}