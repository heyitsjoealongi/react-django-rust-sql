from django.http import HttpResponse

def index(request):
    try:
        return HttpResponse('')
    except Exception as e:
        return HttpResponse('Error: %s' % e)