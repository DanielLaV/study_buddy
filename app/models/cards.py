from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class Card(db.Model, UserMixin):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    front = db.Column(db.String(512), nullable=False)
    back = db.Column(db.String(512), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'front': self.front,
            'back': self.back,
            'deck_id': self.deck_id
        }


    deck = db.relationship("Deck", back_populates="card")
    user_study_card = db.relationship("UserStudyCard", back_populates="card", cascade="all, delete")
