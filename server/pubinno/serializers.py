from dataclasses import field
from rest_framework import serializers
from .models import Pubinno


class PubinnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pubinno
        fields = '__all__'