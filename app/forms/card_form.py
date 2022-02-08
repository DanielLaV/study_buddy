from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length

class CardForm(FlaskForm):
    front = StringField("Front: ", validators=[DataRequired(), Length(min=2, max=512, message="Please limit the text on the front of your card to be between 2 and 512 characters!")])
    back = StringField("Back: ", validators=[DataRequired(), Length(min=2, max=512, message="Please limit the text on the back of your card to be between 2 and 512 characters!")])
    deck_id = IntegerField("", validators=[DataRequired()])
    submit = SubmitField("Submit")
