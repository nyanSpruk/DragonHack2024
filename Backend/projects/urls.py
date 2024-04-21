from django.urls import path
from . import views

urlpatterns = [

    # Add user (username, name, role, teaches_subjects, attends_subjects)
    path('user_add/', views.UserListCreateView.as_view(), name='user-list-create'),

    # Add project (user, college, subject, tags, company, title, description)
    path('challenge_add/', views.ProjektCreateView.as_view(), name='project-add'),

    # Add subject (title, description, tags, college)
    path('subject_add/', views.PredmetCreateView.as_view(), name='predmet-add'),

    # Which subjects does a professor teach?
    path('users/<int:pk>/teaches/', views.ProfessorSubjectsListView.as_view(), name='professor-subjects-list'),

    # Which subjects does a student attend?
    path('users/<int:pk>/attends/', views.StudentSubjectsListView.as_view(), name='student-subjects-list'),

    # Add college (name, location)
    path('colleges/', views.CollegeListView.as_view(), name='college-list'),

    # Show college details
    path('colleges/<int:pk>/', views.CollegeDetailView.as_view(), name='college-detail'),

    # Add tag (name)
    path('tags/', views.TagListCreateView.as_view(), name='tag-list-create'),

    # Get tag details
    path('tags/<int:pk>/', views.TagDetailView.as_view(), name='tag-detail'),

    # Get project details
    path('projects/<int:pk>/', views.ProjektDetailView.as_view(), name='project-detail'),

    # Get projects by subject
    path('projects-by-subject/<int:predmet_id>/', views.ProjectsBySubjectListView.as_view(), name='projects-by-subject'),

    # Get user details based on username
    path('users/<str:username>/', views.UserDetailUpdateView.as_view(), name='user-detail'),

    path('students/<int:pk>/subjects/', views.StudentSubjectsListView.as_view(), name='student-subjects'),

    path('get_colleges/', views.CollegeListView.as_view(), name='college-list'),

    path('challenges/', views.ProjektListView.as_view(), name='challenge-list'),

    path('challenges/<int:pk>/', views.ChallengeDetailView.as_view(), name='challenge-detail'),

    path('predlogs/', views.PredlogListView.as_view(), name='predlog-list'),

    path('subjects_get/', views.PredmetListView.as_view(), name='subject-list'),

    path('tags_get/', views.TagListView.as_view(), name='tag-list'),

    path('users/<int:pk>/update-attends-subjects/', views.UserAttendsSubjectUpdateView.as_view(), name='user-update-attends-subjects'),

    path('predlogs/add/', views.PredlogCreateView.as_view(), name='predlog-create'),

    path('predlogs/<int:pk>/', views.PredlogRetrieveView.as_view(), name='predlog-retrieve'),


]
