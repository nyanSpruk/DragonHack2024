from rest_framework import serializers
from .models import User, Projekt, Predmet, College, Tag, Predlog


class PredmetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Predmet
        fields = ['id', 'title', 'description', 'tags','college']

class CollegeSerializer(serializers.ModelSerializer):
    subjects = PredmetSerializer(many=True, read_only=True)

    class Meta:
        model = College
        fields = ['id', 'name', 'location', 'subjects']

class UserSerializer(serializers.ModelSerializer):
    teaches_subjects = serializers.PrimaryKeyRelatedField(many=True, queryset=Predmet.objects.all())
    attends_subjects = serializers.PrimaryKeyRelatedField(many=True, queryset=Predmet.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'role', 'teaches_subjects', 'attends_subjects']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']
    
class ProjektSerializer2(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    created_by = UserSerializer(read_only=True)
    predmet = PredmetSerializer(read_only=True)
    faks = serializers.StringRelatedField()  # This assumes that College has a __str__ method defined

    class Meta:
        model = Projekt
        fields = ['id', 'title', 'description', 'email' 'overview', 'podjetje', 'tags', 'faks', 'created_by', 'predmet']

class ProjektSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projekt
        fields = ['id', 'title', 'description', 'email', 'overview', 'podjetje', 'tags', 'faks', 'created_by', 'predmet']
    

class PredlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Predlog
        fields = '__all__'  # Serialize all fields of the Predlog model

