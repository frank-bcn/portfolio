import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  loading: boolean = false;
  showSentMessage: boolean = false;

  constructor(public ls: LanguageService, public ss: ScreenService) {}

  /**
   * Asynchronously sends an email by preparing form data and using the sendFormData function.
   * Handles loading state, form data creation, and error handling.
   */
  async sendMail() {
    this.loading = true;
    let formData = this.createFormData(this.name, this.email, this.message);
    try {
      await this.sendFormData(formData);
      this.sendAnimation();
    } catch (error) {
      this.loading = false;
    }
  }

  /**
   * Triggers an animation to simulate the sending of an email.
   * Updates loading and showSentMessage properties to provide visual feedback.
   * Clears the form after a brief delay.
   */
  sendAnimation() {
    setTimeout(() => {
      this.loading = false;
      this.showSentMessage = true;

      setTimeout(() => {
        this.showSentMessage = false;
        this.clearForm();
      }, 1000);
    }, 1000);
  }

  /**
   * Clears the form fields and hides the sent message.
   * Resets the values of name, email, and message to empty strings.
   */
  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.showSentMessage = false;
  }

  /**
   * Creates and returns a FormData object by appending the user's name, email, and message to it.
   * This function is responsible for constructing a FormData object that contains the form data to be sent to the server.
   *
   * @param name - The user's full name as a string.
   * @param email - The user's email address as a string.
   * @param message - The user's message as a string.
   * @returns A FormData object with the appended form data.
   */
  createFormData(name: string, email: string, message: string) {
    let fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('message', message);
    return fd;
  }

  /**
   * Sends the FormData object to a specified server endpoint using a POST request.
   * This function is responsible for sending the form data to the server using the fetch API.
   *
   * @param formData - The FormData object containing the form data to be sent.
   * @returns A promise that resolves when the POST request is completed.
   */
  async sendFormData(formData: FormData) {
    await fetch('https://frank-sinnigen.de/assets/send_mail/send_mail.php', {
      method: 'POST',
      body: formData,
    });
  }

  /**
   * Checks if the name field is valid.
   * Returns a boolean indicating whether the name is not empty and contains only letters and spaces.
   * @returns {boolean} True if the name is valid, false otherwise.
   */
  nameValid(): boolean {
    return this.name.trim() !== '' && /^[A-Za-z\s]+$/.test(this.name.trim());
  }

  emailValid(): boolean {
    return (
      this.email.trim() !== '' &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email.trim())
    );
  }

  /**
   * Checks if the email field is valid.
   * Returns a boolean indicating whether the email is not empty and follows a valid email format.
   * @returns {boolean} True if the email is valid, false otherwise.
   */
  messageValid(): boolean {
    return this.message.trim() !== '' && /\S+/.test(this.message.trim());
  }

  /**
   * Checks if the entire form is valid.
   * Returns a boolean indicating whether the name, email, and message fields are valid.
   * @returns {boolean} True if the entire form is valid, false otherwise.
   */
  formValid(): boolean {
    return this.nameValid() && this.emailValid() && this.messageValid();
  }

}