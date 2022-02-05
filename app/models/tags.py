from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class Tag(db.Model, UserMixin):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(16), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'deck_id': self.deck_id
        }


    deck = db.relationship("Deck", back_populates="tag")
