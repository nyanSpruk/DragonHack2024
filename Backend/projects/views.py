from rest_framework import generics
from .models import User, Projekt, Predmet, College, Tag
from .serializers import UserSerializer, ProjektSerializer, PredmetSerializer, CollegeSerializer, TagSerializer, ProjektSerializer2
from django.db.models import Prefetch
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

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
    
class StudentSubjectsListView(generics.ListAPIView):
    serializer_class = PredmetSerializer

    def get_queryset(self):
        # Fetch the student based on the user ID provided in the URL
        user_id = self.kwargs['pk']
        student = User.objects.get(pk=user_id)

        # Ensure the user is a student
        if student.role != 'student':
            raise ValueError("This user is not a student.")

        # Return the subjects attended by the student
        return student.attends_subjects.all()

class AddSubjectToUserView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def update(self, request, *args, **kwargs):
        user = self.get_object()  # Get the user object

        # Check if 'subject_ids' are provided in the request data
        if 'subject_ids' not in request.data:
            return Response({'message': 'subject_ids must be provided'}, status=status.HTTP_400_BAD_REQUEST)

        subject_ids = request.data.get('subject_ids')

        try:
            # Add the provided subjects to the user's attended subjects
            user.attends_subjects.add(*subject_ids)
            user.save()
            return Response({'message': 'Subjects added successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ProjektListView(generics.ListAPIView):
    queryset = Projekt.objects.all()  # Fetch all projects from the database
    serializer_class = ProjektSerializer  # Use the serializer to serialize the projects

class ChallengeDetailView(generics.RetrieveAPIView):
    queryset = Projekt.objects.all()
    serializer_class = ProjektSerializer

    def get_object(self):
        """
        Retrieve a challenge instance based on the ID provided in the URL.
        If the challenge with the given ID does not exist, raise a NotFound exception.
        """
        challenge_id = self.kwargs.get('pk')
        try:
            return Projekt.objects.get(pk=challenge_id)
        except Projekt.DoesNotExist:
            raise NotFound("Challenge does not exist")

class PredmetListView(generics.ListAPIView):
    queryset = Predmet.objects.all()  # Fetch all subjects from the database
    serializer_class = PredmetSerializer  # Use the serializer to serialize the subjects

class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()  # Fetch all tags from the database
    serializer_class = TagSerializer  # Use the serializer to serialize the tags

class UserAttendsSubjectUpdateView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def update(self, request, *args, **kwargs):
        user = self.get_object()  # Get the user object

        # Check if 'attends_subjects' are provided in the request data
        if 'attends_subjects' not in request.data:
            return Response({'message': 'attends_subjects must be provided'}, status=status.HTTP_400_BAD_REQUEST)

        attends_subject_ids = request.data.get('attends_subjects')

        # Validate subject IDs
        subjects = Predmet.objects.filter(pk__in=attends_subject_ids)
        if len(subjects) != len(attends_subject_ids):
            return Response({'message': 'Invalid subject ID(s) provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Set the attended subjects for the user
        user.attends_subjects.set(subjects)
        user.save()

        return Response({'message': 'Attended subjects updated successfully'}, status=status.HTTP_200_OK)

from rest_framework import generics
from .models import Predlog
from .serializers import PredlogSerializer

class PredlogListView(generics.ListAPIView):
    queryset = Predlog.objects.all()  # Fetch all Predlog objects from the database
    serializer_class = PredlogSerializer  # Use the serializer to serialize the Predlog objects

class PredlogCreateView(generics.CreateAPIView):
    queryset = Predlog.objects.all()
    serializer_class = PredlogSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class PredlogRetrieveView(generics.RetrieveAPIView):
    queryset = Predlog.objects.all()
    serializer_class = PredlogSerializer