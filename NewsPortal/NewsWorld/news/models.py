from django.utils import timezone
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

STATUS_CHOICES = (
    ('draft', 'Draft'),
    ('published', 'Published')
)


class Category(models.Model):
    """ Categories """

    title = models.CharField('Name Category', max_length=50)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title


class New(models.Model):
    """ News """

    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Main Category', related_name='main')
    additional_category = models.ManyToManyField(Category, blank=True,
                                                 related_name='additional', verbose_name='Additional Categories')
    title = models.CharField('Title', max_length=150)
    slug = models.SlugField(unique=True)
    content = RichTextUploadingField('News Content')
    status = models.CharField('Status', choices=STATUS_CHOICES, default='published', max_length=10)
    author = models.CharField('Author', default='One Planet', max_length=30)
    date = models.DateTimeField('Date', default=timezone.now)
    picture = models.ImageField('Picture default breaking.jpg', upload_to='news', default='news/breaking.jpg')

    class Meta:
        verbose_name = 'New'
        verbose_name_plural = 'News'

    def __str__(self):
        return self.title
