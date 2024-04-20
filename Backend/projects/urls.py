from django.urls import path
from . import views

urlpatterns = [
    path('user_add/', views.UserListCreateView.as_view(), name='user-list-create'),
    path('project_add/', views.ProjektCreateView.as_view(), name='project-add'),
    path('subject_add/', views.PredmetCreateView.as_view(), name='predmet-add'),
    path('users/<int:pk>/teaches/', views.ProfessorSubjectsListView.as_view(), name='professor-subjects-list'),
    path('users/<int:pk>/attends/', views.StudentSubjectsListView.as_view(), name='student-subjects-list'),
    path('colleges/', views.CollegeListView.as_view(), name='college-list'),
    path('colleges/<int:pk>/', views.CollegeDetailView.as_view(), name='college-detail'),
    path('tags/', views.TagListCreateView.as_view(), name='tag-list-create'),
    path('tags/<int:pk>/', views.TagDetailView.as_view(), name='tag-detail'),
    path('projects/<int:pk>/', views.ProjektDetailView.as_view(), name='project-detail'),
    path('projects-by-subject/<int:predmet_id>/', views.ProjectsBySubjectListView.as_view(), name='projects-by-subject'),
    # Include other URLs as needed
]


