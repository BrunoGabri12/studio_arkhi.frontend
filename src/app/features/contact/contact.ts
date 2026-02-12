import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../shared/components/button/button';
import { CommonModule } from '@angular/common';
import { Label } from "../../shared/components/label/label";

@Component({
  selector: 'app-contact',
  imports: [Button, CommonModule, ReactiveFormsModule, Label],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    message: new FormControl('', { validators: [Validators.required] }),
  });

  private whatsappNumber = '16992197925';

  onSubmit() {
    const values = this.form.getRawValue();

    let whatsappMessage =
      `*Contato pelo Site*\n\n` + `Nome: ${values.name}\n` + `Mensagem: ${values.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    this.form.reset();
  }
}
