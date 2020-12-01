import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormService } from 'src/app/service/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdateComponent implements OnInit {
  posts: any;

  constructor(private postService: FormService, private router: ActivatedRoute, private route: Router) {
    this.filteredCategories = this.categorieCtrl.valueChanges.pipe(
      startWith(null),
      map((categorie: string | null) => categorie ? this._filter(categorie) : this.allcategories.slice()));
   }
  
  id = this.router.snapshot.paramMap.get('index');
  post = new FormGroup({
    titre: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', ),
    categorie: new FormArray([],  [Validators.required]),
  })
  ngOnInit(): void {
    // this.user = this.myService.getUsers()
    console.log(this.post);


    this.posts = this.postService.getPosts()
    
  
    // this.user = this.posts[this.id]
    console.log(this.id);
    console.log(this.post);
    this.post.patchValue({
      titre: this.posts[this.id].titre,
      description: this.posts[this.id].description,
      date: new Date(),
      categorie: this.posts[this.id].categorie,
    })
  
  }

 

  update(post) {
    var i = this.id
    this.postService.updatePost(i, post)
    this.route.navigateByUrl("/list-post");
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
