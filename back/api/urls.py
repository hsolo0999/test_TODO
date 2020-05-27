from rest_framework import routers
from .views import TaskView


router = routers.DefaultRouter()
router.register(r'tasks', TaskView)

urlpatterns = router.urls
