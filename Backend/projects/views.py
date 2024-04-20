from rest_framework import generics
from .models import User, Projekt, Predmet, College, Tag
from .serializers import UserSerializer, ProjektSerializer, PredmetSerializer, CollegeSerializer, TagSerializer, ProjektSerializer2
from django.db.models import Prefetch

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProjektCreateView(generics.CreateAPIView):
    queryset = Projekt.objects.all()
    serializer_class = ProjektSerializer


class PredmetCreateView(generics.CreateAPIView):
    queryset = Predmet.objects.all()
    serializer_class = PredmetSerializer

class UserDetailUpdateView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return User.objects.get(pk=self.kwargs['pk'])
    
class ProfessorSubjectsListView(generics.ListAPIView):
    serializer_class = PredmetSerializer

    def get_queryset(self):
        user_id = self.kwargs['pk']
        user = User.objects.get(pk=user_id)
        if user.role != 'professor':
            raise ValueError("This user is not a professor.")
        return user.teaches_subjects.all()

class StudentSubjectsListView(generics.ListAPIView):
    serializer_class = PredmetSerializer

    def get_queryset(self):
        user_id = self.kwargs['pk']
        user = User.objects.get(pk=user_id)
        if user.role != 'student':
            raise ValueError("This user is not a student.")
        return user.attends_subjects.all()
    
class CollegeListView(generics.ListCreateAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

class CollegeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

class TagListCreateView(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class ProjektDetailView(generics.RetrieveAPIView):
    queryset = Projekt.objects.all()
    serializer_class = ProjektSerializer

class ProjectsBySubjectListView(generics.ListAPIView):
    serializer_class = ProjektSerializer2

    def get_queryset(self):
        """
        This view returns a list of all projects for a particular subject
        identified by the 'predmet_id' in the URL.
        """
        predmet_id = self.kwargs['predmet_id']
        return Projekt.objects.filter(predmet__id=predmet_id).prefetch_related(
            Prefetch('tags', queryset=Tag.objects.all()),
        ).select_related('created_by', 'predmet', 'predmet__college')