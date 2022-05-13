import { Component ,EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'Header-Component',
    templateUrl: './header.component.html'

})
export class HeaderComponent {

    @Output() dataselected  = new EventEmitter<string>();
    //to toggle between shopping composnent and recipe component 
    //useing onselect function to toggle (we had to emit the event to the header component)
    onselect(data: string) {
        this.dataselected.emit(data);

        // console.log(data)
    }

}