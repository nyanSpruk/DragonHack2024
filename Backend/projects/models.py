from django.db import models

# User model with role-based access control
class User(models.Model):
    ROLE_CHOICES = (
        ('professor', 'Professor'),
        ('student', 'Student'),
        ('company', 'Company'),
    )
    
    username = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    teaches_subjects = models.ManyToManyField('Predmet', related_name='taught_by', blank=True)
    attends_subjects = models.ManyToManyField('Predmet', related_name='attended_by', blank=True)

    def __str__(self):
        return self.username

# College model with name and location
class College(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name} - {self.location}"

# Tag model with name
class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

# Predmet model with title, description, tags, and college
class Predmet(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tags = models.ManyToManyField(Tag)
    college = models.ForeignKey(College, on_delete=models.CASCADE, related_name="subjects")

    def __str__(self):
        return self.title

# Projekt model with title, description, company, tags, college, created_by, and predmet
class Projekt(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    podjetje = models.CharField(max_length=200)
    tags = models.ManyToManyField(Tag)
    faks = models.ForeignKey(College, on_delete=models.CASCADE) 
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    predmet = models.ForeignKey(Predmet, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
