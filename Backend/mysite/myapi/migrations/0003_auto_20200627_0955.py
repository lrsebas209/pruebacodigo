# Generated by Django 3.0.7 on 2020-06-27 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0002_remember'),
    ]

    operations = [
        migrations.CreateModel(
            name='Remimder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=35)),
                ('date', models.CharField(max_length=35)),
                ('text', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Remember',
        ),
    ]
