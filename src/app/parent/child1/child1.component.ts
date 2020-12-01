import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormService } from 'src/app/service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  constructor(private postService: FormService, private route: Router) {
    this.filteredCategories = this.categorieCtrl.valueChanges.pipe(
      startWith(null),
      map((categorie: string | null) => categorie ? this._filter(categorie) : this.allcategories.slice()));
  }
  public form = [];
  submited: boolean = false;
public post
  ngOnInit(): void {
    this.post = new FormGroup({
      titre: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl(''),
      categorie: new FormArray([],  [Validators.required]),
    })

  } 

  onSubmit() {
    console.log(this.post.date);
    
    if (this.post.invalid) {
      console.log("post failed");
      
      return ;
    }
    this.post.patchValue({
      date: new Date()

    })
    this.postService.addPosts(this.post.value);
  //  localStorage.setItem('loggeduser', JSON.stringify(this.post.value));
    this.route.navigateByUrl("/child2");

  }



  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categorieCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = ['Sports'];
  allcategories: string[] = ['culture', 'music', 'economy'];

  @ViewChild('categorieInput') categorieInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our categorie
    if ((value || '').trim()) {
      (this.post.get('categorie') as FormArray).push(new FormControl(value, [Validators.required]));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.categorieCtrl.setValue(null);
  }

  remove(index): void {
    (this.post.get('categorie') as FormArray).removeAt(index);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    (this.post.get('categorie') as FormArray).push(new FormControl(event.option.viewValue));
    this.categorieInput.nativeElement.value = '';
    this.categorieCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allcategories.filter(categorie => categorie.toLowerCase().indexOf(filterValue) === 0);
  }
}
