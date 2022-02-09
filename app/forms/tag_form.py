from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, EqualTo, ValidationError
import re

def validate_each_tag_name(form, field):
    names = field.data.split(", ")
    for name in names:
        if len(name) < 2 or len(name) > 16:
            raise ValidationError(f"{name} is not the right length! Tags must be at least 2 characters long and at most 16 characters long.")
        if re.search("\W", name):
            raise ValidationError(f"{name} can only contain letters and numbers. No special characters, please!")


class TagForm(FlaskForm):
    names = StringField("Tag", validators=[DataRequired(), validate_each_tag_name])
    deck_id = IntegerField("", validators=[DataRequired()])

class DeleteTagForm(FlaskForm):
    tag_id = IntegerField("", validators=[DataRequired()])
