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

def index(request):
    return render(request, "core/index.html", {})
