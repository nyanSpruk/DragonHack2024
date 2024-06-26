# Generated by Django 5.0.2 on 2024-04-20 20:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Predmet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subjects', to='projects.college')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('role', models.CharField(choices=[('professor', 'Professor'), ('student', 'Student'), ('company', 'Company')], max_length=50)),
                ('attends_subjects', models.ManyToManyField(blank=True, related_name='attended_by', to='projects.predmet')),
                ('teaches_subjects', models.ManyToManyField(blank=True, related_name='taught_by', to='projects.predmet')),
            ],
        ),
        migrations.CreateModel(
            name='Projekt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('podjetje', models.CharField(max_length=200)),
                ('faks', models.CharField(max_length=200)),
                ('predmet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.predmet')),
                ('tags', models.ManyToManyField(to='projects.tag')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.user')),
            ],
        ),
    ]
