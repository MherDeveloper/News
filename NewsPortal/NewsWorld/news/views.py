from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import New, Category


def error_404_view(request, exception):
    """ Page not found 404 Error """
    return render(request, '404.html')


def error_500_view(request):
    """ Page not found 500 Error """
    return render(request, '404.html')


class Categories:
    """ Get Categories """

    def get_categories(self):
        return Category.objects.all()


class NewsView(Categories, ListView):
    """ News """

    model = New
    queryset = New.objects.filter(status='published').order_by('-date')
    template_name = 'news_list.html'
    paginate_by = 10


class NewsDetailView(Categories, DetailView):
    """ News new page """

    model = New
    template_name = 'news_detail.html'
    context_object_name = 'New'

    def get_context_data(self, **kwargs):
        context = super(NewsDetailView, self).get_context_data(**kwargs)
        context['additional'] = New.objects.filter(status='published').order_by('-date')
        return context


class CategoryDetail(Categories, ListView):
    """ News by category """

    template_name = 'category_detail.html'
    paginate_by = 10

    def get_queryset(self, **kwargs):
        queryset = New.objects.filter(category__slug=self.kwargs['slug'], status='published').order_by('-date')
        return queryset




