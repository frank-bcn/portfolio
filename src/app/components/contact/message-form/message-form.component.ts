import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss',
})
export class MessageFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  loading: boolean = false;
  showSentMessage: boolean = false;

  constructor(public dm: DarkModeService) {}

  /*
   * sendMail: Handles sending an email by submitting a form.
   * This method is triggered when the form is submitted. It creates the form data, sends it, and handles the response.
   *
   * @param form - The NgForm instance representing the form being submitted.
   */
  sendMail(form: NgForm) {
    this.loading = true;
    let formData = this.createFormData(this.name, this.email, this.message);

    this.sendFormData(formData)
      .then(() => {
        this.sendAnimation();
        setTimeout(() => form.resetForm(), 2000);
      })
      .catch(() => {
        this.loading = false;
      });
  }

  /*
   * sendAnimation: Handles the animation and feedback after a successful form submission.
   * This method provides visual feedback by showing a sent message and resetting the form after a delay.
   */
  sendAnimation() {
    setTimeout(() => {
      this.loading = false;
      this.showSentMessage = true;

      setTimeout(() => {
        this.showSentMessage = false;
        this.clearForm();
      }, 3000);
    }, 1000);
  }

  /*
   * clearForm: Clears the form data and hides the sent message.
   * This method resets the form fields (name, email, message) to empty values and hides the success message.
   */
  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.showSentMessage = false;
  }

  /*
   * createFormData: Creates a FormData object and appends the form fields.
   * This method is used to package the form data (name, email, message) into a FormData object
   * which can be sent in an HTTP request, typically used for form submissions.
   *
   * @param name - The name entered by the user.
   * @param email - The email entered by the user.
   * @param message - The message entered by the user.
   * @returns A FormData object containing the form data.
   */
  createFormData(name: string, email: string, message: string) {
    let fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('message', message);
    return fd;
  }

  /*
   * sendFormData: Sends the form data to the server using a POST request.
   * This method uses the `fetch` API to send the form data to a server-side script (e.g., a PHP script) for processing.
   * It sends the form data as the request body to the specified URL.
   *
   * @param formData - The FormData object containing the form fields (name, email, message).
   */
  async sendFormData(formData: FormData) {
    await fetch('https://frank-sinnigen.de/assets/send_mail.php', {
      method: 'POST',
      body: formData,
    });
  }

  /*
   * nameValid: Validates the name input.
   * This method checks if the name is not empty and contains only alphabetic characters and spaces.
   *
   * @returns {boolean} - Returns true if the name is valid, otherwise false.
   */
  nameValid(): boolean {
    return this.name.trim() !== '' && /^[A-Za-z\s]+$/.test(this.name.trim());
  }

  /*
   * emailValid: Validates the email input.
   * This method checks if the email is not empty and matches a standard email format.
   *
   * @returns {boolean} - Returns true if the email is valid, otherwise false.
   */
  emailValid(): boolean {
    return (
      this.email.trim() !== '' &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email.trim())
    );
  }

  /*
   * messageValid: Validates the message input.
   * This method checks if the message is not empty and contains at least one non-whitespace character.
   *
   * @returns {boolean} - Returns true if the message is valid, otherwise false.
   */
  messageValid(): boolean {
    return this.message.trim() !== '' && /\S+/.test(this.message.trim());
  }

  /*
   * formValid: Validates the entire form.
   * This method checks if the name, email, and message fields are all valid.
   *
   * @returns {boolean} - Returns true if all fields are valid, otherwise false.
   */
  formValid(): boolean {
    return this.nameValid() && this.emailValid() && this.messageValid();
  }
}