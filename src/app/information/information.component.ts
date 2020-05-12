import { Information } from './information-dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public basciInformation:FormGroup
  informationDetailsForm: FormGroup;
   tempArray:Information[]=[];

  constructor(   public formBuilder: FormBuilder,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.buildBasicInformationForm()
    this.createinformationDetailsFrom()
    
   
}
  buildBasicInformationForm(){
    this.basciInformation = this.formBuilder.group({
      firstName: ['', [Validators.required]],
lastName: ['', [Validators.required]],
birthDate: ['', [Validators.required]],
gender: ['', [Validators.required]],
knownLanguage: ['', [Validators.required]],
aboutYourSelf: ['', [Validators.required]],
    });
  }

 
  validateForm() {
    const valid = this.basciInformation.valid;
    console.log('asasdasdsadasdfassadsa',valid)
    if (valid) {
      this.submitForm();
    }
  }
  submitForm(){
    console.log('this.basciInformation',this.basciInformation)
    let sendJson={} as Information
    sendJson.firstName=this.basciInformation.get('firstName').value;
    sendJson.lastName=this.basciInformation.get('lastName').value;
    sendJson.birthDate=this.basciInformation.get('birthDate').value;
    sendJson.gender=this.basciInformation.get('gender').value;
    sendJson.knownLanguage=this.basciInformation.get('knownLanguage').value;
    sendJson.aboutYourSelf=this.basciInformation.get('aboutYourSelf').value;
    console.log('sendJson',sendJson)
if (sendJson) {
  // sendJson as FormArray
  
  this.tempArray.push(sendJson);
  console.log('this.informationDetailsForm',this.informationDetailsForm);
((this.informationDetailsForm.controls.informationDetails)as FormArray).patchValue(this.tempArray)
console.log('this.informationDetailsForm15454665454',this.informationDetailsForm);

}
  }

  resetForm(){
    this.basciInformation.reset()
    this.addRow()
  }
 

createinformationDetailsFrom() {
  this.informationDetailsForm = this.formBuilder.group({
    informationDetails: this.formBuilder.array([
      this.itemDetailsRow()
    ])
    
  });
}

 itemDetailsRow() {
  return this.formBuilder.group({
    firstName:[null],
    lastName:[null],
    birthDate:[null],
    gender:[null],
    knownLanguage:[null],
    aboutYourSelf:[null],
    isSelected: this.formBuilder.control(false)
  })
}
addRow() {
  let informationDetails = this.informationDetailsForm.controls.informationDetails as FormArray
  console.log("addRow informationDetails ", informationDetails);
  informationDetails.push(this.itemDetailsRow())
}

deleteRow() {
  let informationDetails = this.informationDetailsForm.controls.informationDetails as FormArray;
  let nonSelected = informationDetails.controls.filter( informationData => !informationData.value.isSelected )
  informationDetails.clear()
  nonSelected.forEach(el => informationDetails.push(el) )
}
edit(){
  let informationDetails = this.informationDetailsForm.controls.informationDetails as FormArray;
  let nonSelected = informationDetails.controls.filter( informationData => informationData.value.isSelected );
  console.log('nonSelected',nonSelected);
  console.log('informationDetails',informationDetails);
  this.basciInformation.patchValue(nonSelected[0].value)
  console.log('nonSelected',nonSelected[0]['controls'])
}
}
