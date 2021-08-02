from django.db import models

class Project(models.Model):

    image = models.ImageField(
        verbose_name="Foto del proyecto",
        upload_to="projects"
    )

    name = models.CharField(
        verbose_name="Nombre del proyecto",
        max_length=50,
        unique=True,
        help_text="Ingrese el nombre del proyecto",
        default="",
        blank=False
    )

    description = models.TextField(
        verbose_name="Descripción corta del proyecto",
        help_text="Ingrese una descripción corta del proyecto.",
        default="",
        blank=False
    )

    created_on = models.DateTimeField(
        verbose_name="Creado el: ",
        auto_now_add=True
    )

    updated_on = models.DateTimeField(
        verbose_name="Actualizado el: ",
        auto_now_add=True
    )

    class Meta:
        ordering = ['created_on']
        verbose_name = "Proyecto de portafolio"
        verbose_name_plural = "Proyectos del portafolio"

    def __str__(self):
        return self.name
