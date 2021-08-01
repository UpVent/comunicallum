from django.contrib import admin

# Register your models here.
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'email')
    list_filter = ('full_name', 'email')
    search_fields = ['full_name', 'phone', 'email']

admin.site.register(Contact, ContactAdmin)
