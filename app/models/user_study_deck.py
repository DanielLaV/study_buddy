from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class UserStudyDeck(db.Model, UserMixin):
    __tablename__ = 'user_study_decks'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    toStudy = db.Column(db.Boolean, nullable=False, default=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'deck_id': self.deck_id,
            'toStudy': self.toStudy,
            'decks': self.deck.to_dict()
        }


    user = db.relationship("User", back_populates="user_study_deck")
    deck = db.relationship("Deck", back_populates="user_study_deck")
