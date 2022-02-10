from flask_wtf import FlaskForm
from wtforms import SubmitField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Length, EqualTo

class CardForm(FlaskForm):
    front = TextAreaField("Front: ", validators=[DataRequired(), Length(min=2, max=512, message="Please limit the text on the front of your card to be between 2 and 512 characters!")])
    back = TextAreaField("Back: ", validators=[DataRequired(), Length(min=2, max=512, message="Please limit the text on the back of your card to be between 2 and 512 characters!")])
    deck_id = IntegerField("", validators=[DataRequired()])
    submit = SubmitField("Submit")

class DeleteCardForm(FlaskForm):
    card_id = IntegerField("", validators=[DataRequired()])
    deck_id = IntegerField("", validators=[DataRequired()])
    curr_user_id = IntegerField("", validators=[DataRequired(), EqualTo('deck_user_id', message='Error! You are not authorized to delete this card')])
    deck_user_id = IntegerField("", validators=[DataRequired(), EqualTo('curr_user_id', message='Error! You are not authorized to delete this card')])
    submit = SubmitField("Submit")
