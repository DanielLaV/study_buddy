from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, EqualTo

class DeckForm(FlaskForm):
    title = StringField("Title: ", validators=[DataRequired(), Length(min=2, max=64, message="Please limit the title to be between 2 and 64 characters!")])
    description = StringField("Description: ", validators=[Length(max=256, message="Please limit the text in the description to be less than 256 characters!")])
    user_id = IntegerField("", validators={DataRequired()})
    submit = SubmitField("Submit")


class DeleteDeckForm(FlaskForm):
    deck_id = IntegerField("", validators=[DataRequired()])
    curr_user_id = IntegerField("", validators=[DataRequired(), EqualTo('deck_user_id', message='Error! You are not authorized to delete this card')])
    deck_user_id = IntegerField("", validators=[DataRequired(), EqualTo('curr_user_id', message='Error! You are not authorized to delete this card')])
    submit = SubmitField("Submit")
