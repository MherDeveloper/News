# News task
# Arnak Gevorgyan

 #############################################################

# Project on a cloud server  AWS --  http://18.217.112.85

    Admin login-             news
    Admin passowrd--         news2020
        
 #############################################################
 
# Setup

    In this project I use Django==3.1.3
    The first thing to do is to clone the repository:


1.   $ git clone https://github.com/Arno-Gevorgyan/News-Task.git
2.   $ cd Newstask/NewsPortal/NewsWorld


    Create a virtual environment to install dependencies in and activate it:


3. $ python3 -m venv venv      #  or python -m venv venv
4. $ source env/bin/activate
5. $ python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
    
    
    For example:
    
        a1$%jr29f2(u^l=r1q1a2$sztg%x7%g8s@!ne#_(^5$woi#wi$    # add in SECRET_KEY
   
   
6.  add Debug and Secret key in settings.py
    
        DEBUG = True
        SECRET_KEY =''


7. add Datebases and Static in settings.py
    
    
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
            }
        }
        
        STATIC_DIR = os.path.join(BASE_DIR, "static")
        STATICFILES_DIRS = [STATIC_DIR]



8.    (venv)$ pip install -r requirements.txt


Once pip has finished downloading the dependencies:


9.    (venv)$ python manage.py makemigrations
10.  (venv)$ python manage.py migrate
11. (venv)$ python manage.py runserver



#############################################################


# About

# This is a news portal, which consists of the three next pages. The first main page is a home page, where you can see the list of the news categories and list of all news from all categories paginate by 10. By selecting any category, you will go the second page, the category page. There are posted all news filtered selected category. The third is a news detail page where you will see the title of the news, news content and all related categories.


1.  News Page -               list of all news from all categories and all categories. paginate by 10
2.  Category Page -         list of all news filtered selected category. paginate by 10
3.  News detail Page -     the title of the news, news content and all related categories.


