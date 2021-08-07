# For stderr logging
import traceback
import sys

from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib import messages
from django.http import HttpResponse

from django.conf import settings

from .forms import ContactForm
from .models import Contact
from .models import Image

# Import exceptions from smtp lib
from smtplib import (
    SMTPAuthenticationError,
    SMTPResponseException,
    SMTPServerDisconnected,
    )

def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Captcha Settings
            human = True

            # Email settings
            subject = "Contacto via Sitio Web"
            body = {
                'full_name': form.cleaned_data['full_name'],
                'email': form.cleaned_data['email'],
                'phone': form.cleaned_data['phone'],
                'message': form.cleaned_data['message']
            }

            message = "\n".join(body.values())

            try:
                send_mail(
                    subject,
                    message,
                    settings.EMAIL_HOST_USER,
                    [form.cleaned_data['email']],
                )
                messages.success(request, 'Gracias por ponerse en contacto con\
                nosotros. Responderemos a su mensaje en un máximo de 24 horas.')

                # Return view
                form.save()
                form = ContactForm
                return render(request, "core/index.html", {'form': form})
            except SMTPAuthenticationError as ex:
                # Error de autenticación por SMTP
                t_b = traceback.format_exc()
                print(t_b, file=sys.stderr)
                print(ex, file=sys.stderr)
                messages.error(request, 'Algo salió mal,\
                usuario y contraseña del correo incorrectos\
                contacta con el adminstrador del sistema y\
                muéstrale el siguiente error. Error: ' + str(ex))
                return render(request, "core/index.html", {'form': form})

            except SMTPServerDisconnected as ex:
                # Error de desconexión del servidor SMTP
                t_b = traceback.format_exc()
                print(t_b, file=sys.stderr)
                print(ex, file=sys.stderr)
                messages.error(request, 'La conexión al servidor de correos se\
                interrumpió. Su mensaje no fue enviado. Error: ' + str(ex))
                return render(request, 'contact/contact.html', {'form': form})

            except SMTPResponseException as ex:
                # Error de respuestas generales del servidor SMTP
                t_b = traceback.format_exc()
                print(t_b, file=sys.stderr)
                print(ex, file=sys.stderr)
                messages.error(request, 'Algo salió mal,\
                tu mensaje no fué enviado. Error: ' + str(ex))
                return render(request, "core/index.html", {'form': form})


        else:
            form = ContactForm(request.POST)
            for field in form.errors:
                form.fields[field].widget.attrs['class'] = 'form-control error'
            return render(request, "core/index.html", {'form': form})

    else:
        form = ContactForm
        return render(request, "core/index.html", {'form': form})

def gallery(request):
    images = Image.objects.all()
    return render(request, "core/gallery.html", {'images': images})
