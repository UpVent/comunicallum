from django.contrib import admin

from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_on', 'updated_on')
    list_filter = ("name", "created_on", "updated_on",)
    search_fields = ['name', 'description', 'created_on', 'updated_on']

admin.site.register(Project, ProjectAdmin)
