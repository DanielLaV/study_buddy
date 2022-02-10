from flask_wtf import FlaskForm
from wtforms import SubmitField, IntegerField, TextAreaField, StringField, BooleanField
from wtforms.validators import DataRequired, Length, EqualTo, ValidationError

def validate_query(form, field):
    query = field.data
    if len(query) < 2 or len(query) > 16:
        raise ValidationError("Oops! Your query is not the right length! It must be between 2 and 16 characters long.")

def validate_user(form, field):
    is_logged_in = field.data
    if not is_logged_in:
        raise ValidationError(f"Please log in!")

class SearchForm(FlaskForm):
    query = StringField("Query", validators=[DataRequired(), validate_query])
    is_logged_in = BooleanField("", validators=[validate_user])
