from django.contrib import admin
from .models import User, Projekt, Predmet, College, Tag, Predlog
# Register your models here.

admin.site.register(User)
admin.site.register(Projekt)
admin.site.register(Predmet)
admin.site.register(College)
admin.site.register(Tag)
admin.site.register(Predlog)