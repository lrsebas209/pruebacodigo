# Generated by Django 3.0.7 on 2020-06-27 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0004_auto_20200627_1000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reminder',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=10),
        ),
    ]
