from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, EqualTo, ValidationError
import re

def validate_each_tag_name(form, field):
    names = field.data.split(", ")
    for name in names:
        if len(name) < 2 or len(name) > 16:
            raise ValidationError(f"{name} is not the right length! Tags must be beteen 2 and 16 characters long.")


class TagForm(FlaskForm):
    names = StringField("Tag", validators=[DataRequired(), validate_each_tag_name])
    deck_id = IntegerField("", validators=[DataRequired()])

class DeleteTagForm(FlaskForm):
    tag_id = IntegerField("", validators=[DataRequired()])
    deck_id = IntegerField("", validators=[DataRequired()])
    curr_user_id = IntegerField("", validators=[DataRequired(), EqualTo('deck_user_id', message='Error! You are not authorized to delete this card')])
    deck_user_id = IntegerField("", validators=[DataRequired(), EqualTo('curr_user_id', message='Error! You are not authorized to delete this card')])
