from django import forms
from .models import Check


class CheckForm(forms.ModelForm):
    text = forms.CharField(label='',
                           widget=forms.Textarea(
                               attrs={
                                   "placeholder": "Type here..."
                               }
                           )
                           )

    class Meta:
        model = Check
        fields = [
            'text',
        ]

