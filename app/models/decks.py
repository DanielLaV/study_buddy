from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class Deck(db.Model, UserMixin):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(256))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'user_id': self.user_id
        }


    user = db.relationship("User", back_populates="deck")
    tag = db.relationship("Tag", back_populates="deck", cascade='all, delete')
    card = db.relationship("Card", back_populates="deck", cascade="all, delete")
    user_study_deck = db.relationship("UserStudyDeck", back_populates="deck", cascade="all, delete")
    comment = db.relationship("Comment", back_populates="deck", cascade="all, delete")
