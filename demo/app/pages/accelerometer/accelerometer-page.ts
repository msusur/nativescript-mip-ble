import { EventData } from "data/observable";
import { Page } from "ui/page";
import { AccelerometerViewModel } from "./accelerometer-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new AccelerometerViewModel();
}