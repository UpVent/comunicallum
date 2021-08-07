from django.db import models
from django.core.validators import RegexValidator

# Contact model

class Contact(models.Model):

    # Phone regex validator for "phone" field
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message="Phone number must be entered in the format:\
        '+999999999'. Up to 15 digits allowed."
    )

    # Model fields
    full_name = models.CharField(
        verbose_name="Nombre(s)",
        max_length=60,
        default="",
        help_text="Ingrese el nombre de la persona que nos contactó"
    )

    email = models.EmailField(
        verbose_name="Correo Electrónico",
        default="",
        help_text="Ingrese el correo de la persona que nos contactó"
    )

    phone = models.CharField(
        verbose_name="Número de Teléfono",
        validators=[phone_regex],
        max_length=12,
        default="",
        help_text="Ingrese el número de teléfono de la persona que nos\
        contactó"
    )

    message = models.TextField(
        verbose_name="Mensaje de Contacto",
        default="",
        help_text="Ingrese el mensaje de contacto"
    )

    created_on = models.DateTimeField(
        auto_now_add=True
    )

    updated_on = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ['created_on']
        verbose_name = "Contacto"
        verbose_name_plural = "Contactos"

    def __str__(self):
        return f'{self.email} | {self.reason}'

# Image model
class Image(models.Model):
    name = models.CharField(
        verbose_name="Nombre de la imagen",
        max_length=60,
        default="",
        help_text="Nombre de la fotografia a mostrar. (Solo es informativo para el administrador)"
    )

    image = models.ImageField(
        upload_to = "gallery",
        height_field=202,
        width_field=360,
    )

    created_on = models.DateTimeField(
        verbose_name="Fecha de registro",
        help_text="Fecha en la que se registró la imágen en el sistema",
        auto_now_add=True
    )

    updated_on = models.DateTimeField(
        verbose_name="Fecha de actualización",
        help_text="Fecha en la que la imágen se actualizó por última vez",
        auto_now_add=True
    )
