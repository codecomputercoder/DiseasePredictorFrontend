import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Symptom } from '../symptom';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apitest',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './apitest.component.html',
  styleUrl: './apitest.component.css'
})
export class ApitestComponent {
resultData: string="Click to View";

  constructor(private httpClient: HttpClient){}
  private url = 'http://localhost:8080/em';




  symptoms: Symptom[] =  [
    { id: 0, name: 'Itching' },
    { id: 1, name: 'Skin Rash' },
    { id: 2, name: 'Nodal Skin Eruptions' },
    { id: 3, name: 'Continuous Sneezing' },
    { id: 4, name: 'Shivering' },
    { id: 5, name: 'Chills' },
    { id: 6, name: 'Joint Pain' },
    { id: 7, name: 'Stomach Pain' },
    { id: 8, name: 'Acidity' },
    { id: 9, name: 'Ulcers On Tongue' },
    { id: 10, name: 'Muscle Wasting' },
    { id: 11, name: 'Vomiting' },
    { id: 12, name: 'Burning Micturition' },
    { id: 13, name: 'Spotting Urination' },
    { id: 14, name: 'Fatigue' },
    { id: 15, name: 'Weight Gain' },
    { id: 16, name: 'Anxiety' },
    { id: 17, name: 'Cold Hands And Feets' },
    { id: 18, name: 'Mood Swings' },
    { id: 19, name: 'Weight Loss' },
    { id: 20, name: 'Restlessness' },
    { id: 21, name: 'Lethargy' },
    { id: 22, name: 'Patches In Throat' },
    { id: 23, name: 'Irregular Sugar Level' },
    { id: 24, name: 'Cough' },
    { id: 25, name: 'High Fever' },
    { id: 26, name: 'Sunken Eyes' },
    { id: 27, name: 'Breathlessness' },
    { id: 28, name: 'Sweating' },
    { id: 29, name: 'Dehydration' },
    { id: 30, name: 'Indigestion' },
    { id: 31, name: 'Headache' },
    { id: 32, name: 'Yellowish Skin' },
    { id: 33, name: 'Dark Urine' },
    { id: 34, name: 'Nausea' },
    { id: 35, name: 'Loss Of Appetite' },
    { id: 36, name: 'Pain Behind The Eyes' },
    { id: 37, name: 'Back Pain' },
    { id: 38, name: 'Constipation' },
    { id: 39, name: 'Abdominal Pain' },
    { id: 40, name: 'Diarrhoea' },
    { id: 41, name: 'Mild Fever' },
    { id: 42, name: 'Yellow Urine' },
    { id: 43, name: 'Yellowing Of Eyes' },
    { id: 44, name: 'Acute Liver Failure' },
    { id: 45, name: 'Fluid Overload' },
    { id: 46, name: 'Swelling Of Stomach' },
    { id: 47, name: 'Swelled Lymph Nodes' },
    { id: 48, name: 'Malaise' },
    { id: 49, name: 'Blurred And Distorted Vision' },
    { id: 50, name: 'Phlegm' },
    { id: 51, name: 'Throat Irritation' },
    { id: 52, name: 'Redness Of Eyes' },
    { id: 53, name: 'Sinus Pressure' },
    { id: 54, name: 'Runny Nose' },
    { id: 55, name: 'Congestion' },
    { id: 56, name: 'Chest Pain' },
    { id: 57, name: 'Weakness In Limbs' },
    { id: 58, name: 'Fast Heart Rate' },
    { id: 59, name: 'Pain During Bowel Movements' },
    { id: 60, name: 'Pain In Anal Region' },
    { id: 61, name: 'Bloody Stool' },
    { id: 62, name: 'Irritation In Anus' },
    { id: 63, name: 'Neck Pain' },
    { id: 64, name: 'Dizziness' },
    { id: 65, name: 'Cramps' },
    { id: 66, name: 'Bruising' },
    { id: 67, name: 'Obesity' },
    { id: 68, name: 'Swollen Legs' },
    { id: 69, name: 'Swollen Blood Vessels' },
    { id: 70, name: 'Puffy Face And Eyes' },
    { id: 71, name: 'Enlarged Thyroid' },
    { id: 72, name: 'Brittle Nails' },
    { id: 73, name: 'Swollen Extremities' },
    { id: 74, name: 'Excessive Hunger' },
    { id: 75, name: 'Extra Marital Contacts' },
    { id: 76, name: 'Drying And Tingling Lips' },
    { id: 77, name: 'Slurred Speech' },
    { id: 78, name: 'Knee Pain' },
    { id: 79, name: 'Hip Joint Pain' },
    { id: 80, name: 'Muscle Weakness' },
    { id: 81, name: 'Stiff Neck' },
    { id: 82, name: 'Swelling Joints' },
    { id: 83, name: 'Movement Stiffness' },
    { id: 84, name: 'Spinning Movements' },
    { id: 85, name: 'Loss Of Balance' },
    { id: 86, name: 'Unsteadiness' },
    { id: 87, name: 'Weakness Of One Body Side' },
    { id: 88, name: 'Loss Of Smell' },
    { id: 89, name: 'Bladder Discomfort' },
    { id: 90, name: 'Foul Smell Of Urine' },
    { id: 91, name: 'Continuous Feel Of Urine' },
    { id: 92, name: 'Passage Of Gases' },
    { id: 93, name: 'Internal Itching' },
    { id: 94, name: 'Toxic Look (Typhos)' },
    { id: 95, name: 'Depression' },
    { id: 96, name: 'Irritability' },
    { id: 97, name: 'Muscle Pain' },
    { id: 98, name: 'Altered Sensorium' },
    { id: 99, name: 'Red Spots Over Body' },
    { id: 100, name: 'Belly Pain' },
    { id: 101, name: 'Abnormal Menstruation' },
    { id: 102, name: 'Dischromic Patches' },
    { id: 103, name: 'Watering From Eyes' },
    { id: 104, name: 'Increased Appetite' },
    { id: 105, name: 'Polyuria' },
    { id: 106, name: 'Family History' },
    { id: 107, name: 'Mucoid Sputum' },
    { id: 108, name: 'Rusty Sputum' },
    { id: 109, name: 'Lack Of Concentration' },
    { id: 110, name: 'Visual Disturbances' },
    { id: 111, name: 'Receiving Blood Transfusion' },
    { id: 112, name: 'Receiving Unsterile Injections' },
    { id: 113, name: 'Coma' },
    { id: 114, name: 'Stomach Bleeding' },
    { id: 115, name: 'Distention Of Abdomen' },
    { id: 116, name: 'History Of Alcohol Consumption' },
    { id: 117, name: 'Fluid Overload.1' },
    { id: 118, name: 'Blood In Sputum' },
    { id: 119, name: 'Prominent Veins On Calf' },
    { id: 120, name: 'Palpitations' },
    { id: 121, name: 'Painful Walking' },
    { id: 122, name: 'Pus Filled Pimples' },
    { id: 123, name: 'Blackheads' },
    { id: 124, name: 'Scurring' },
    { id: 125, name: 'Skin Peeling' },
    { id: 126, name: 'Silver Like Dusting' },
    { id: 127, name: 'Small Dents In Nails' },
    { id: 128, name: 'Inflammatory Nails' },
    { id: 129, name: 'Blister' },
    { id: 130, name: 'Red Sore Around Nose' },
    { id: 131, name: 'Yellow Crust Ooze' }
  ];

  selectedSymptoms: string[] = [];
  selectedSymptomsString: string = '';

  updateSelectedSymptoms(symptom: Symptom) {
    if (this.isSelected(symptom)) {
      this.selectedSymptoms = this.selectedSymptoms.filter(s => s !== symptom.name);
    } else {
      this.selectedSymptoms.push(symptom.name);
    }

    this.generateString();
  }

  isSelected(symptom: Symptom): boolean {
    return this.selectedSymptoms.includes(symptom.name);
  }

  generateString() {
    this.selectedSymptomsString = this.selectedSymptoms.join(',');
  }
  


function() {
 
this.httpClient.get(this.url).subscribe((data: any) => {
  console.log(data); // Print the response to the console
}) ;

}

testResult() {
 
  this.httpClient.post(this.url,{"symList":this.selectedSymptomsString}).subscribe((data: any) => {
    console.log(data.symList); // Print the response to the console
    this.resultData=data.symList;
  }) ;
  
  }

}
