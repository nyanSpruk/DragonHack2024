# Generated by Django 5.0.2 on 2024-04-20 23:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projekt',
            name='faks',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.college'),
        ),
    ]