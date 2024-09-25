import Headingtag from "../Tags/headingtag";
import Paragraphtag from "../Tags/paragraphtag";
import Listtag from "../Tags/listtag";
import Table from "../Other/table";
import Forms from "../Other/forms";
import Textbox from "../Other/textbox";
import Button from "../Other/button";
import Fileupload from "../Other/fileupload";
import Radiobutton from "../Other/radiobutton";
import Checkboxes from "../Other/checkboxes";
import Dropdowns from "../Other/dropdowns";
import Otherfields from "../Other/otherfields";
import Fieldtypes from "../Other/fieldtypes";
import Anchors from "../anchors/anchors";
import Toc from "../anchors/toc";
import Images from "../Images/images";

export default function lab1() {
    return (
        <div>
            <Headingtag/>
            <Paragraphtag/>
            <Listtag/>
            <Table/>
            <Images/>
            <Forms/>
            <Textbox/>
            <Button/>
            <Fileupload/>
            <Radiobutton/>
            <Checkboxes/>
            <Dropdowns/>
            <Otherfields/>
            <Fieldtypes/>
            <Anchors/>
            <Toc/>
        </div>        
    );
}