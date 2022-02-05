from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class UserStudyCard(db.Model, UserMixin):
    __tablename__ = 'user_study_cards'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey("cards.id"), nullable=False)
    isCorrect = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'card_id': self.card_id,
            'isCorrect': self.isCorrect
        }


    user = db.relationship("User", back_populates="user_study_card")
    card = db.relationship("Card", back_populates="user_study_card")
