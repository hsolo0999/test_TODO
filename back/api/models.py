from django.db import models


class Task(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Описание дела')
    created_at = models.DateField('Дата создания', auto_now_add=True)
    status = models.CharField('Статус', max_length=50)
    deadline = models.DateField('Дедлайн')
    done_at = models.DateField('Дата выполнения', auto_now=True)

    def __str__(self):
        return self.title
