from django.db import models
from django.contrib import auth

# Create your models here.
class User(auth.models.User):
    """docstring for User"""
    creatime = models.DateTimeField(auto_now_add = True)
    comments = models.ManyToManyField('Comment')
    discounts = models.ManyToManyField('Discount')
    followBusiness = models.ManyToManyField('Business', related_name='followers')

class Comment(models.Model):
    """docstring for Comment"""
    content = models.TextField();
    creatime = models.DateTimeField(auto_now_add = True)
    modifytime = models.DateTimeField(auto_now = True)
    owner = models.ForeignKey('User')
    business = models.ForeignKey('Business', related_name='comments')

class Discount(models.Model):
    """docstring for Discount"""
    content = models.TextField()
    enable = models.BooleanField()
    creatime = models.DateTimeField(auto_now_add = True)
    modifytime = models.DateTimeField(auto_now = True)
    owner = models.ForeignKey('Business', related_name='discounts')

class Business(models.Model):
    """docstring for Business"""
    name = models.TextField(unique = True)
    address = models.TextField()
    info = models.TextField()
    types = models.IntegerField(null = True)
    owner = models.ForeignKey('User', null = True)
    logo = models.URLField()

class Types(models.Model):
    """docstring for Types"""
    typeName = models.TextField(unique = True)
