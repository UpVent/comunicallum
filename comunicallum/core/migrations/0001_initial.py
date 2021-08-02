# Generated by Django 3.2.5 on 2021-08-02 22:20

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(default='', help_text='Ingrese el nombre de la persona que nos contactó', max_length=60, verbose_name='Nombre(s)')),
                ('email', models.EmailField(default='', help_text='Ingrese el correo de la persona que nos contactó', max_length=254, verbose_name='Correo Electrónico')),
                ('phone', models.CharField(default='', help_text='Ingrese el número de teléfono de la persona que nos        contactó', max_length=12, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format:        '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')], verbose_name='Número de Teléfono')),
                ('message', models.TextField(default='', help_text='Ingrese el mensaje de contacto', verbose_name='Mensaje de Contacto')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Contacto',
                'verbose_name_plural': 'Contactos',
                'ordering': ['created_on'],
            },
        ),
    ]