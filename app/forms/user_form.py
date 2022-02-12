from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length

class UserForm(FlaskForm):
    bio = StringField("Description: ", validators=[Length(max=512, message="Please limit the text in the description to be less than 512 characters!")])
    id = IntegerField("", validators={DataRequired()})
    submit = SubmitField("Submit")
