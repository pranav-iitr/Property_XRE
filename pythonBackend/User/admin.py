from django.contrib import admin
from .models import User,user_analytics
from QBank.models import user_chapter
from datetime import datetime
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.views.generic.detail import DetailView
from django.urls import path, reverse
from django.utils.html import format_html
import matplotlib.pyplot as plt

from io import BytesIO
import base64

class UserDetailView(PermissionRequiredMixin, DetailView):
    permission_required = "user_chapter.view_order"
    template_name = "admin/User/User/graph.html"
    model = User

    def display_graph(self):
        obj=self.get_object()
        user_chapters = obj.chapter.all()
        arr_imgs = []
        for u_chapter in user_chapters:
            sessions = obj.session.filter(chapter=u_chapter.chapter)
            qr =[]
            for session in sessions:
                for sub in session.submissions.all():
                    qr.append(sub.question.level)
            
            fig, ax = plt.subplots()
            print(qr,list(range(1,len(qr)+1)))
            ax.plot(list(range(1,len(qr)+1)), qr)
            ax.set_title(u_chapter.chapter)
            ax.set_xlabel('X-axis')
            ax.set_ylabel('Y-axis')
            buffer = BytesIO()
            # plt.savefig(buffer, format='png')
            # buffer = BytesIO()
            plt.savefig(buffer, format='png')
            buffer.seek(0)
            image_base64 = base64.b64encode(buffer.getvalue()).decode()
            arr_imgs.append(f'<img src="data:image/png;base64,{image_base64}" width="400px" />')
        
        # plt.imshow(buffer.getvalue(), aspect='auto')

        plt.close()
        return arr_imgs
        

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Add your custom objects to the context
        context["opts"] = self.model._meta
        # Add any other custom objects as needed
        context["display_graph"] = self.display_graph()
        return context



class userAnalyticsInline(admin.TabularInline):
    model = user_analytics
    extra = 0
    readonly_fields = ('total_questions','rating_change','time_spent','updated_at')

    
class userChapterInline(admin.TabularInline):
    model = user_chapter
    extra = 0
    readonly_fields = ('chapter','rating','total_questions','correct_questions','total_time','question_per_minute','sensitivity')
    # def display_graph(self,obj):
    #     fig, ax = plt.subplots()
    #     ax.plot([1, 2, 3, 4], [1, 4, 2, 3])
    #     ax.set_title('Simple plot')
    #     ax.set_xlabel('X-axis')
    #     ax.set_ylabel('Y-axis')
    #     buffer = BytesIO()
    #     # plt.savefig(buffer, format='png')
    #     # buffer = BytesIO()
    #     plt.savefig(buffer, format='png')
    #     buffer.seek(0)
    #     image_base64 = base64.b64encode(buffer.getvalue()).decode()
        
    #     # plt.imshow(buffer.getvalue(), aspect='auto')

    #     plt.close()
    #     return f'<img src="data:image/png;base64,{image_base64}" width="400px" />'
        # return graph

@admin.register(User)
class userAdmin( admin.ModelAdmin):
    list_display = ['email','first_name','last_name','group','phone_no','detail']
    search_fields = ('email','first_name','last_name')
    ordering = ('first_name','last_name')
    readonly_fields = ('total_questions','correct_total_questions','total_time','question_per_minute')

    inlines = [userAnalyticsInline,userChapterInline]
    total_sub = -1
    total_times = -1

    def get_urls(self):
        return [
            path(
                "<pk>/detail",
                self.admin_site.admin_view(UserDetailView.as_view()),
                name=f"user_detail",
            ),
            *super().get_urls(),
        ]

    def detail(self, obj: User) :
        url = reverse("admin:user_detail", args=[obj.pk])
        return format_html(f'<a href="{url}">📝</a>')

    def total_questions(self,obj):
        total_sub = obj.submission.count()
        return total_sub
    def correct_total_questions(self,obj):

        total_correct = obj.submission.filter(correct=True).count()
        total_sub = obj.submission.count()
        print(total_sub)
        accuracy = 0
        if total_sub > 0:
            accuracy = (total_correct / total_sub)*100
        
        return accuracy
    
    def total_time(self,obj):
        total_time = 0
     
        for sub in obj.session.all():

            try :
                if sub.end_time and sub.start_time:
                    total_time += (datetime.combine(datetime.today(),sub.end_time) - datetime.combine(datetime.today(),sub.start_time)).seconds
            except:
                pass
        total_times = total_time/60
        
        
        return total_times
    def question_per_minute(self,obj):
        
        total_sub = obj.submission.count()
        total_time = 0
     
        for sub in obj.session.all():
          
            try :
                if sub.end_time and sub.start_time:
                    total_time += (datetime.combine(datetime.today(),sub.end_time) - datetime.combine(datetime.today(),sub.start_time)).seconds
            except:
                pass
        total_times = total_time/60
        if total_times == 0:
            return 0
        
        return total_sub/total_times
    
    total_questions.short_description = 'Total Questions'   
    correct_total_questions.short_description = 'Accuracy'  
    total_time.short_description = 'Total Time'
    question_per_minute.short_description = 'Question Per Minute'
    

class userAnalyticsAdmin(admin.ModelAdmin):
    list_display = ['user','total_questions','rating_change','time_spent','created_at']
    search_fields = ('user','total_questions','rating_change','time_spent')
    list_display = ('user','total_questions','rating_change','time_spent','created_at')
    # readonly_fields = ('updated_at',)
   

        

# admin.site.register(User,userAdmin)
admin.site.register(user_analytics,userAnalyticsAdmin)