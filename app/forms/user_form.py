from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, EqualTo

class UserForm(FlaskForm):
    bio = StringField("Description: ", validators=[Length(max=256, message="Please limit the text in the description to be less than 256 characters!")])
    user_id = IntegerField("", validators={DataRequired()})
    submit = SubmitField("Submit")

    # username = StringField("Display Name: ", validators=[DataRequired(), Length(min=2, max=64, message="Please limit the title to be between 2 and 64 characters!")])
