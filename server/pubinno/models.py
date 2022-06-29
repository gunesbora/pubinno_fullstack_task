from contextlib import closing
from django.db import models

class Pubinno(models.Model):
    name = models.CharField(max_length=150)
    adress = models.TextField()
    openning_time = models.TimeField()
    closing_time = models.TimeField()

    def __str__(self):
        return  self.name

        
