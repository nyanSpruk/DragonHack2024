from rest_framework import generics
from .models import User, Projekt, Predmet, College, Tag
from .serializers import UserSerializer, ProjektSerializer, PredmetSerializer, CollegeSerializer, TagSerializer, ProjektSerializer2
from django.db.models import Prefetch
from django.shortcuts import get_object_or_404

# Define a view for listing and creating Users.
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all() 
    serializer_class = UserSerializer  

# Define a view for creating a Projekt.
class ProjektCreateView(generics.CreateAPIView):
    queryset = Projekt.objects.all() 
    serializer_class = ProjektSerializer

# Define a view for creating a Predmet.
class PredmetCreateView(generics.CreateAPIView):
    queryset = Predmet.objects.all()
    serializer_class = PredmetSerializer 

# Define a view for retrieving and updating a specific User by primary key.
class UserDetailUpdateView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all() 
    serializer_class = UserSerializer 

    def get_object(self):
        # Returns the specific User instance using the primary key provided in the URL.
        return User.objects.get(pk=self.kwargs['pk'])
    
# Define a view for listing subjects taught by a professor.
class ProfessorSubjectsListView(generics.ListAPIView):
    serializer_class = PredmetSerializer  

    def get_queryset(self):
        # Fetches subjects based on the professor's user ID provided in the URL.
        user_id = self.kwargs['pk']
        user = User.objects.get(pk=user_id)
        if user.role != 'professor':
            raise ValueError("This user is not a professor.")
        return user.teaches_subjects.all()  

# Define a view for listing subjects attended by a student.
class StudentSubjectsListView(generics.ListAPIView):
    serializer_class = PredmetSerializer  

    def get_queryset(self):
        # Fetches subjects based on the student's user ID provided in the URL.
        user_id = self.kwargs['pk']
        user = User.objects.get(pk=user_id)
        if user.role != 'student':
            raise ValueError("This user is not a student.")
        return user.attends_subjects.all() 
    
# Define a view for listing and creating Colleges.
class CollegeListView(generics.ListCreateAPIView):
    queryset = College.objects.all()  
    serializer_class = CollegeSerializer  

# Define a view for retrieving, updating, and deleting a specific College by primary key.
class CollegeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all() 
    serializer_class = CollegeSerializer 

# Define a view for listing and creating Tags.
class TagListCreateView(generics.ListCreateAPIView):
    queryset = Tag.objects.all() 
    serializer_class = TagSerializer 

# Define a view for retrieving, updating, and deleting a specific Tag by primary key.
class TagDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all() 
    serializer_class = TagSerializer  

# Define a view for retrieving a specific Projekt by primary key.
class ProjektDetailView(generics.RetrieveAPIView):
    queryset = Projekt.objects.all() 
    serializer_class = ProjektSerializer 

# Define a view for listing projects associated with a specific subject.
class ProjectsBySubjectListView(generics.ListAPIView):
    serializer_class = ProjektSerializer2  

    def get_queryset(self):
        # Fetches projects based on the subject ID provided in the URL.
        predmet_id = self.kwargs['predmet_id']
        return Projekt.objects.filter(predmet__id=predmet_id).prefetch_related(
            Prefetch('tags', queryset=Tag.objects.all()),
        ).select_related('created_by', 'predmet', 'predmet__college')

class UserDetailUpdateView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()  # This queryset is the base for looking up the user.
    serializer_class = UserSerializer  # Use UserSerializer to serialize the user data.

    def get_object(self):
        """
        Retrieve a User instance based on the username passed in the URL.
        If the user with the given username does not exist, a 404 error will be raised.
        """
        username = self.kwargs['username']  # Extract the 'username' from the URL parameters.
        return get_object_or_404(User, username=username)  # Return the user instance or raise Http404.