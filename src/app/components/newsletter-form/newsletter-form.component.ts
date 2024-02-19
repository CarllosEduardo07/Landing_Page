import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
    selector: 'app-newsletter-form',
    standalone: true,
    imports: [BtnPrimaryComponent, ReactiveFormsModule],
    providers: [NewsletterService],
    templateUrl: './newsletter-form.component.html',
    styleUrl: './newsletter-form.component.css',
})
export class NewsletterFormComponent {
    newsletterForm!: FormGroup;
    loading = signal(false);

    constructor(private service: NewsletterService) {
        this.newsletterForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    onSubmit() {
        this.loading.set(true)
        console.log(this.newsletterForm.value); // consultado os valores colocados no input
        if (this.newsletterForm.valid) {
            this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
                next: () => {
                    this.newsletterForm.reset()
                    this.loading.set(false)
                } 
            });
        }
    }
}
