from django import forms
from captcha.fields import CaptchaField

from .models import Contact
class ContactForm(forms.ModelForm):
    captcha = CaptchaField()
    class Meta:
        model = Contact

        fields = [
            'full_name',
            'email',
            'phone',
            'message',
        ]

        widgets = {
            'full_name': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Nombre Completo',
                    'required': True,
                    'id': 'full_name'
                }
            ),

            'email': forms.EmailInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Correo Electrónico',
                    'required': True,
                    'id': 'email'
                }
            ),

            'phone': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Teléfono',
                    'required': True,
                    'id': 'phone'
                }
            ),

            'message': forms.Textarea(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Escriba aquí su mensaje...',
                    'required': True,
                    'id': 'message'
                }
            ),
        }
