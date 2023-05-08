import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-file3',
  templateUrl: './patient-file3.component.html',
  styleUrls: ['./patient-file3.component.css']
})
export class PatientFile3Component {
  showInput = false;
  notes: string[] = [
    'The patient has given informed consent for the proposed chemotherapy.',
    'The patient has been given instructions on medication administration and the side effects to monitor',
    'Recommendations have been given for supportive care, such as using emollients for dry skin and dietary advice to improve appetite.',
    'The patient has been informed of possible interactions between chemotherapy medication and other medications they are taking for other health conditions.',
    'The patient has been referred to a specialist oncologist for further evaluation of their condition and possible bone marrow transplantation if needed.'
  ];
  newNote: string = '';
  
  addNote() {
    if (this.newNote.trim() !== '') {
      this.notes.push(this.newNote);
      this.newNote = '';
      this.showInput = false;
    }
  }
}
