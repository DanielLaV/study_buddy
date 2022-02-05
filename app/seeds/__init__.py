from flask.cli import AppGroup
from .users import seed_users, undo_users
from .cards import seed_cards, undo_cards
from .decks import seed_decks, undo_decks
from .tags import seed_tags, undo_tags
from .user_study_cards import seed_user_study_cards, undo_user_study_cards
from .user_study_decks import seed_user_study_decks, undo_user_study_decks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_cards()
    seed_decks()
    seed_tags()
    seed_user_study_cards()
    seed_user_study_decks()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_cards()
    undo_decks()
    undo_tags()
    undo_user_study_cards()
    undo_user_study_decks()
    # Add other undo functions here
