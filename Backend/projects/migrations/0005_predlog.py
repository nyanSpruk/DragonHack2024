# Generated by Django 5.0.2 on 2024-04-21 08:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_projekt_overview'),
    ]

    operations = [
        migrations.CreateModel(
            name='Predlog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.user')),
                ('faks', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.college')),
                ('predmet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.predmet')),
                ('tags', models.ManyToManyField(to='projects.tag')),
            ],
        ),
    ]
