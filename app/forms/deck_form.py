from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length

class DeckForm(FlaskForm):
    title = StringField("Title: ", validators=[DataRequired(), Length(min=2, max=64, message="Please limit the title to be between 2 and 64 characters!")])
    description = StringField("Description: ", validators=[Length(max=256, message="Please limit the text in the description to be less than 256 characters!")])
    submit = SubmitField("Submit")
