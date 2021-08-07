from django.contrib import admin

# Register your models here.
from .models import Contact
from .models import Image

class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'email')
    list_filter = ('full_name', 'email')
    search_fields = ['full_name', 'phone', 'email']

class ImageAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)
    search_fields = ['name', ]

admin.site.register(Contact, ContactAdmin)
admin.site.register(Image, ImageAdmin)
